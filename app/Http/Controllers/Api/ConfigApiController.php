<?php

namespace App\Http\Controllers\Api;

use App\Helpers\SystemConfiguration;
use App\Helpers\SystemMessages;
use App\Http\Controllers\Controller;
use App\Models\Detail;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ConfigApiController extends Controller
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
        $detail = Detail::find($object->id);
        $this->fillDetail($object, $detail);

        DB::beginTransaction();
        try {
            
            $detail->save();
            $success = true;
        } catch (\Exception $e) {
            DB::rollback();
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
            "data" => [
                'id' => $detail->id,
            ]
        ];

        return response()->json($data);
    }

    private function fillDetail($object, &$detail)
    {
        $detail->updated_by = Auth::User()->id;
        // $detail->number_wsp = isset($object->text_wsp) ? $object->text_wsp : null;
        $detail->google_maps_key = isset($object->text_google) ? $object->text_google : null;
        $detail->link_cita = isset($object->text_linkcita) ? $object->text_linkcita : null;
    }

}