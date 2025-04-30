<?php

namespace App\Http\Controllers\Api;

use App\Helpers\SystemConfiguration;
use App\Helpers\SystemMessages;
use App\Http\Controllers\Controller;
use App\Models\Contents;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Image;

class ContentApiController extends Controller
{
    public function __construct(Request $request)
    {
        $this->request = $request;
        $this->middleware('auth');
    }

    //================================================
    public function save(Request $request)
    {
        $success = false;
        $message = "";
        $object = (object) $request->input('data');
        try {
            $content = Contents::find($object->id);
            $this->fillContent($object, $content);
            $content->save();
            $success = true;
        } catch (\Exception $e) {
            $message = $e->getMessage();
        }

        if ($message == "") {
            $success = true;
            $message = SystemMessages::GENERAL_UPDATED_SUCCESSFULLY;
        }

        //========================
        $data = [
            "success" => $success,
            "message" => $message,
            "data" => $content->id,
        ];

        return response()->json($data);
    }

    private function fillContent($object, &$content)
    {

        $content->updated_by = Auth::User()->id;
        $content->group = isset($object->group) ? $object->group : null;
        $content->page = isset($object->page) ? $object->page : null;
        $content->text_primary = isset($object->text_primary) ? $object->text_primary : null;
        $content->text_secondary = isset($object->text_secondary) ? $object->text_secondary : null;
        $content->description = isset($object->description) ? $object->description : null;
        $content->btn_1 = isset($object->btn_1) ? $object->btn_1 : null;
        $content->link_btn_1 = isset($object->link_btn_1) ? $object->link_btn_1 : null;
        $content->btn_2 = isset($object->btn_2) ? $object->btn_2 : null;
        $content->link_btn_2 = isset($object->link_btn_2) ? $object->link_btn_2 : null;

        // $content->image = isset($object->image) ? $object->image : null;
        $content->image_mobile = isset($object->image_mobile) ? $object->image_mobile : null;
        $content->btn_general = isset($object->btn_general) ? $object->btn_general : null;
        $content->link_btn_general = isset($object->link_btn_general) ? $object->link_btn_general : null;
    }

    //===============================================================================================

    public function saveImage(request $request)
    {
        #dd($request->all());
        $message = "";
        $success = false;
        //dd($request->all());
        $file = $request->file('file');
        $contentId = $request->input('content_id');

        DB::beginTransaction();
        try {
            #$course->user_id = $userAccount->id;
            if ($file != null) {
                $content = Contents::find($contentId);
                #$content->image = $this->fillPhotoToSave($file, $content->image);
                $path = $file->getRealPath();
                $logo = file_get_contents($path);
                $content->image = "data:image/png;base64,".base64_encode($logo);
                #$content->image_mobile = $base64;
                $content->updated_by = Auth::User()->id;
                $content->save();
            }
            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            $message = $e->getMessage();
        }
        #return $message;

        if ($message == "") {
            $success = true;
            $message = SystemMessages::PHOTO_SAVE_SUCCESSFULLY;
        }

        $data = [
            "success" => $success,
            "message" => $message,
            "data" => [
                'id' => $message,
            ],
        ];

        return response()->json($data);
    }

    public function fillPhotoToSave($file, $afterImage)
    {
        $originalFileName = '';

        
            $exists = false;
            $originalFileName = $this->generateRandomCode() . "." . $file->getClientOriginalExtension();
            $path = $this->getPathForAWS(SystemConfiguration::PATH_AWS_FOLDER_CONTENT, "");
            $newPath = $path . $originalFileName;

            $afterPath = $path . $afterImage;
            $exists = Storage::disk('s3')->exists($afterPath);
            if ($exists) {
                Storage::disk('s3')->delete($afterPath);
            }

            $imagen = Image::make($file)->orientate()->heighten(900);
            Storage::disk('s3')->put($newPath, $imagen->stream()->detach());

            return $originalFileName;
            
    }

}
