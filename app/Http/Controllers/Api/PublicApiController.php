<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contents;
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

    public function callWebTransparencySeat($data)
    {
        $curl = curl_init();
        $json = json_encode($data);

        curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://webapi.euromotors.com.pe:14443/solucionesdf/api/WebTransparencySeat',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
        CURLOPT_POSTFIELDS => $json,
        CURLOPT_HTTPHEADER => array(
            'Authorization: ' . config('app.access_key'),
            'Content-Type: application/json'
        ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        return json_decode($response);
    }

    public function getMaintenance(Request $request)
    {
        try {

            $model = ($request->has('modelo')) ? $request->input('modelo') : null;
            $version = ($request->has('version')) ? $request->input('version') : null;
            $mileage = ($request->has('kilometraje')) ? $request->input('kilometraje') : null;
            $deliveryYear = ($request->has('anioVehiculo')) ? $request->input('anioVehiculo') : null;
            $workshop = ($request->has('taller')) ? $request->input('taller') : null;

            $data = $this->callWebTransparencySeat([
                'modelo' => $model,
                'version' => $version,
                'kilometraje' => $mileage,
                'anioVehiculo' => $deliveryYear,
                'taller' => $workshop,
            ]);

            $maintenance = Contents::findByPage("home", "maintenance");
            $section1 = $maintenance->sections->first();
            $section2 = $maintenance->sections->skip(1)->first();

            if ($data) {
                if ($data && $data->precioTotal && $section1 && $section1->description) {
                    preg_match('/\d+(\.\d+)?/', $data->precioTotal, $matches);
                    $monto = round($matches[0] ?? 0, 2);
                    $data->precioTotal = str_replace('{costo}', $monto, $section1->description);                    
                }

                if ($data && $data->tiempoTotal && $section2 && $section2->description) {
                    preg_match('/\d+(\.\d+)?/', $data->tiempoTotal, $matches);
                    $monto = round($matches[0] ?? 0, 2);
                    $data->tiempoTotal = str_replace('{horas}', $monto, $section2->description);     
                }
            }

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
