<?php

namespace App\Http\Controllers\Api;

use App\Helpers\SystemConfiguration;
use App\Helpers\SystemMessages;
use App\Http\Controllers\Controller;
use App\Models\Workshops;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Image;

class WorkshopsApiController extends Controller
{
    public function __construct(Request $request)
    {
        $this->request = $request;
        $this->middleware('auth');
    }

    public function save(Request $request)
    {
        $success = false;
        $message = "";
        $object = (object) $request->input('data');
        try {

            foreach ($object as $item) {

                $workshop = new Workshops;

                $this->fillWorkshop((object) $item, $workshop);

                $workshop->save();

            }

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
            "data" => null,
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
        $workshops = (object) json_decode($request->input('workshops'));

        DB::beginTransaction();
        try {
            #$course->user_id = $userAccount->id;
            foreach ($workshops as $item) {
                $item = (object) $item;
                $wp = Workshops::find($item->mainId);
                if ($item->imageName != null) {
                    foreach ($files as $file) {
                        $wp->image = $file->getClientOriginalName();
                        if ($file->getClientOriginalName() == $item->imageName) {
                            $path = $file->getRealPath();
                            $logo = file_get_contents($path);
                            $wp->image = "data:image/png;base64," . base64_encode($logo);
                            #$wp->image = $this->fillImageSave($file, $wp->image);
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

    public function fillImageSave($file, $afterImage)
    {
        $originalFileName = '';

        if ($file != null) {
            $exists = false;
            $originalFileName = $this->generateRandomCode() . "." . $file->getClientOriginalExtension();
            $path = $this->getPathForAWS(SystemConfiguration::PATH_AWS_FOLDER_WORKSHOP, "");

            $newPath = $path . $originalFileName;

            $afterPath = $path . $afterImage;
            $exists = Storage::disk('s3')->exists($afterPath);
            if ($exists) {
                Storage::disk('s3')->delete($afterPath);
            }

            $imagen = Image::make($file)->orientate()->heighten(800);
            Storage::disk('s3')->put($newPath, $imagen->stream()->detach());

            return $originalFileName;

        }
    }

    private function fillWorkshop($object, &$workshop)
    {
        if ($object->id <= 0) {
            $workshop->created_by = Auth::User()->id;
            $workshop->updated_by = Auth::User()->id;
        } else {
            $workshop = Workshops::find($object->id);
            $workshop->updated_by = Auth::User()->id;
        }
        // $workshop->updated_by = Auth::User()->id;
        $workshop->name = isset($object->name) ? $object->name : null;
        $workshop->description = isset($object->description) ? $object->description : null;
        $workshop->departament = isset($object->departament) ? $object->departament : null;
        $workshop->link_cita = isset($object->link_cita) ? $object->link_cita : null;
        $workshop->map_link = isset($object->direction) ? $object->direction : null;

        $workshop->lat = $object->lat;
        $workshop->lng = $object->lng;
        $workshop->phone = $object->phone;

        $workshop->is_deleted = 0;
        // $workshop->image = isset($object->image) ? $object->image : null;
    }

    //===============================================================================================

    public function deleteWorkshop($itemId)
    {
        $success = false;
        $message = "";
        try {
            $workshop = Workshops::find($itemId);
            $workshop->is_deleted = 1;
            $workshop->updated_by = Auth::User()->id;
            $workshop->save();
            $success = true;
        } catch (\Exception $e) {
            $message = $e->getMessage();
        }
        //========================
        $data = [
            "success" => $success,
            "message" => $message,
            "data" => $workshop->id,
        ];

        return response()->json($data);
    }

}
