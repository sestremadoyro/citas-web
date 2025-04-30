<?php

namespace App\Http\Controllers\Api;

use App\Helpers\SystemConfiguration;
use App\Helpers\SystemMessages;
use App\Http\Controllers\Controller;
use App\Models\Contents;
use App\Models\Sections;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Image;

class SectionApiController extends Controller
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

            if (isset($object->sections)) {
                foreach ($object->sections as $item) {
                    $item = (object) $item;
                    $section = Sections::find($item->id);
                    $this->fillSection($item, $section);
                    $section->content_id = $object->id;
                    $section->save();
                }
            }
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

    public function saveImage(request $request)
    {
        //dd($request->all());
        $message = "";
        $success = false;
        //dd($request->all());
        $files = $request->file('files');
        $sections = (object) json_decode($request->input('sections'));

        $contentImage = ($request->has('content_image')) ? $request->file('content_image') : null; 
        $contentId = ($request->has('content_id')) ? $request->input('content_id') : null;

        DB::beginTransaction();

        try {
            #$course->user_id = $userAccount->id;
            // if($content_image != null){
            //     $content = Contents::find($contentId);
            //     $content->image = $this->fillImageSave($file, $content->image,true);
            //     $content->updated_by = Auth::User()->id;
            //     $content->save();
            // }

            foreach ($sections as $item) {
                $item = (object) $item;
                if ($item->imageName != null) {
                    $wp = Sections::find($item->mainId);
                    foreach ($files as $file) {
                        $wp->image = $file->getClientOriginalName();
                        if ($file->getClientOriginalName() == $item->imageName) 
                        {
                            $path = $file->getRealPath();
                            $logo = file_get_contents($path);
                            $wp->image = "data:image/png;base64,".base64_encode($logo);
                            #$wp->image = $this->fillImageSave($file, $wp->image, false);
                            $wp->updated_by = Auth::User()->id;
                            $wp->save();
                        }
                    }
                }
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

    public function fillImageSave($file, $afterImage, $option)
    {
        $originalFileName = '';

        if ($file != null) {
            $exists = false;
            $originalFileName = $this->generateRandomCode() . "." . $file->getClientOriginalExtension();
            if ($option) {
                $path = $this->getPathForAWS(SystemConfiguration::PATH_AWS_FOLDER_CONTENT, "");
            } else {
                $path = $this->getPathForAWS(SystemConfiguration::PATH_AWS_FOLDER_SECTION, "");
            }

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

    private function fillSection($object, &$section)
    {
        $section->updated_by = Auth::User()->id;
        $section->title = isset($object->title) ? $object->title : null;
        $section->description = isset($object->description) ? $object->description : null;
        $section->btn = isset($object->btn) ? $object->btn : null;
        $section->link_btn = isset($object->link_btn) ? $object->link_btn : null;
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

        $content->image = isset($object->image) ? $object->image : null;
        $content->image_mobile = isset($object->image_mobile) ? $object->image_mobile : null;
        $content->btn_general = isset($object->btn_general) ? $object->btn_general : null;
        $content->link_btn_general = isset($object->link_btn_general) ? $object->link_btn_general : null;
    }
    //===============================================================================================

}
