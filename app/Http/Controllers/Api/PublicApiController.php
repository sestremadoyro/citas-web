<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Workshops;
use App\Models\Vehicle;
use App\Models\VehicleImages;
// Consultas a otros servicios fuera de la plataforma
use Illuminate\Support\Facades\Http;

class PublicApiController extends Controller
{
    public function __construct(Request $request)
    {
        $this->request = $request;
        #$this->middleware('auth');
    }

    //===============================================================================================

    public function getWorkshopsByDepartament($departament)
    {
        try {
            $data = Workshops::getWorkshopsByDepartament($departament);
            $json = response()->json($this->getDataResponseSuccess($data));
        } catch (\Exception $e) {
            $json = response()->json($this->getDataResponseFail(Controller::MESSAGE_GENERIC_FAIL));
        }
        return $json;
    }

    public function getMaintenance(Request $request)
    {
        try {

            $model = ($request->has('modelo')) ? $request->input('modelo') : null;
            $version = ($request->has('version')) ? $request->input('version') : null;
            $mileage = ($request->has('kilometraje')) ? $request->input('kilometraje') : null;
            $deliveryYear = ($request->has('anioVehiculo')) ? $request->input('anioVehiculo') : null;
            $workshop = ($request->has('taller')) ? $request->input('taller') : null;

            $response = Http::withHeaders([
                'Authorization' => config('app.access_key'),
            ])->post('https://webapi.euromotors.com.pe:14443/solucionesdf/api/WebTransparencySeat', [
                'modelo' => $model,
                'version' => $version,
                'kilometraje' => $mileage,
                'anioVehiculo' => $deliveryYear,
                'taller' => $workshop,
            ]);
            
            $data = json_decode($response->getBody()->getContents());
            #dd($json,config('app.sima_access_key'));
            $json = response()->json($this->getDataResponseSuccess($data));

            #dd(json_decode($response->getBody()->getContents()));
        } catch (\Exception $e) {
            $json = response()->json($this->getDataResponseFail($e->getMessage()));
        }

        return $json;
    }

    public function showVehiclesImage(Request $request)
    {
        $model = ($request->has('model')) ? $request->input('model') : null;
        $version = ($request->has('version')) ? $request->input('version') : null;
        $mileage = ($request->has('mileage')) ? $request->input('mileage') : null;
        $deliveryYear = ($request->has('deliveryYear')) ? $request->input('deliveryYear') : null;

        try {
            $data = VehicleImages::showVehiclesImage($model,$version,$mileage,$deliveryYear);
            $json = response()->json($this->getDataResponseSuccess($data));
        } catch (\Exception $e) {
            $json = response()->json($this->getDataResponseFail( $e->getMessage()));
        }

        return $json;
    }

}
