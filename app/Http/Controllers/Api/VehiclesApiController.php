<?php

namespace App\Http\Controllers\Api;

use App\Helpers\ExcelManager;
use App\Helpers\SystemConfiguration;
use App\Http\Controllers\Controller;
use App\Models\Vehicle;
use App\Models\VehicleDetails;
use App\Models\VehicleImages;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Image;

class VehiclesApiController extends Controller
{
    public function __construct(Request $request)
    {
        $this->request = $request;
        $this->middleware('auth');
    }

    public function getVehicles()
    {
        try {
            $data = Vehicle::getVehicles();
            $json = response()->json($this->getDataResponseSuccess($data));
        } catch (\Exception $e) {
            $json = response()->json($this->getDataResponseFail($e->getMessage()));
        }

        return $json;
    }

    public function getImagesVehicles($vehicle_id)
    {

        try {
            $data = VehicleImages::getVehiclesImage($vehicle_id);
            $json = response()->json($this->getDataResponseSuccess($data));
        } catch (\Exception $e) {
            $json = response()->json($this->getDataResponseFail($e->getMessage()));
        }
        return $json;
    }

    // public function saveVehicles(Request $request)
    // {
    //     $success = false;
    //     $message = "";

    //     $object = (object) $request->input('data');
    //     $vehicles = Vehicle::find($object->id);
    //     $this->fillDetail($object, $vehicles);

    //     DB::beginTransaction();
    //     try {

    //         $vehicles->save();
    //         $success = true;
    //     } catch (\Exception $e) {
    //         DB::rollback();
    //         $message = $e->getMessage();
    //     }

    //     if ($message == "") {
    //         $success = true;
    //         $message = SystemMessages::GENERAL_UPDATED_SUCCESSFULLY;
    //     }

    //     //========================
    //     $data = [
    //         "success" => $success,
    //         "message" => $message,
    //         "data" => [
    //             'id' => $vehicles->id,
    //         ]
    //     ];

    //     return response()->json($data);
    // }

    public function saveVehicles(Request $request)
    {
        $success = false;
        $message = "";

        $object = (object) json_decode($request->input('data'));
        #$deleteList = (object) json_decode($request->input('deleteList'));
        $files = $request->file("files");

        try {

            $vehicles = new Vehicle;
            $this->fillContent($object, $vehicles);
            $vehicles->save();

            foreach ($object->details as $item) {
                $detail = new VehicleDetails;
                $this->fillDetails((object) $item, $detail, $vehicles->id);
                $detail->save();
            }

            if ($files) {
                foreach ($files as $file) {
                    $contentImages = new VehicleImages;
                    //=======================
                    $path = $file->getRealPath();
                    $logo = file_get_contents($path);

                    $this->fillVehicleDetailImage($contentImages, $file->getClientOriginalName(), $vehicles->id);
                    $contentImages->image = "data:image/png;base64," . base64_encode($logo);
                    //=======================
                    #$this->saveImages($file, $contentImages, $vehicles);
                    $contentImages->save();
                }
            }
            #if ($deleteList) {
            foreach ($object->deleteImages as $delete) {
                $vehicleImage = VehicleImages::find($delete);
                if ($vehicleImage) {
                    #$filePath = $this->getPathForAWS(SystemConfiguration::PATH_AWS_FOLDER_VEHICLES, "") . $vehicleImage->image;
                    #Storage::disk('s3')->delete($filePath);
                    $vehicleImage->delete();
                }
            }

            foreach ($object->deleteDetails as $delete2) {
                $detail = VehicleDetails::find($delete2);
                if ($detail) {
                    $detail->delete();
                }
            }

            #}
            $success = true;
        } catch (\Exception $e) {
            $message = $e->getMessage();
        }
        //========================
        $data = [
            "success" => $success,
            "message" => $message,
            "data" => $vehicles->id,
        ];

        return response()->json($data);
    }

    public function deleteVehicleImage()
    {
        $success = true;
        $message = "";

        //========================
        $data = [
            "success" => $success,
            "message" => $message,
            "data" => true,
        ];

        return response()->json($data);
    }

    public function deleteVehiclesAll()
    {
        $success = false;
        $message = "";
        try {

            Vehicle::truncate();
            VehicleDetails::truncate();
            VehicleImages::truncate();

            $success = true;
        } catch (\Exception $e) {
            $message = $e->getMessage();
        }
        //========================
        $data = [
            "success" => $success,
            "message" => $message,
            "data" => [],
        ];

        return response()->json($data);
    }

    public function deleteVehicles($vehicleId)
    {
        $success = false;
        $message = "";
        try {
            $vehicles = Vehicle::find($vehicleId);
            $vehicles->is_deleted = 1;
            $vehicles->updated_by = Auth::User()->id;
            $vehicles->save();
            $success = true;
        } catch (\Exception $e) {
            $message = $e->getMessage();
        }
        //========================
        $data = [
            "success" => $success,
            "message" => $message,
            "data" => $vehicles->id,
        ];

        return response()->json($data);
    }

    public function saveImages($file, &$contentImages, $vehicle)
    {

        if ($file != null) {
            $exists = false;
            //$originalFileName = 'mt_'.$this->generateRandomCode().$file->extension();
            #$originalFileName = $this->stripAccents($file->getClientOriginalName());
            #$fileName = preg_replace('/\\.[^.\\s]{3,4}$/', '', $file->getClientOriginalName());
            $userId = Auth::User()->id;
            $fileName = $file->getClientOriginalName();
            // $originalFileName = $vehicle->id . '_' . $file->getClientOriginalName();
            $originalFileName = $vehicle->id . '_' . $this->generateRandomCode() . "." . $file->extension();
            $filePath = $this->getPathForAWS(SystemConfiguration::PATH_AWS_FOLDER_VEHICLES, "") . $originalFileName;

            $exists = Storage::disk('s3')->exists($filePath);

            if ($exists) {
                Storage::disk('s3')->delete($filePath);

            }
            $imagen = Image::make($file)->orientate()->heighten(800);
            Storage::disk('s3')->put($filePath, $imagen->stream()->detach());
            #Storage::disk('s3')->put($filePath, file_get_contents($file));
            $this->fillVehicleDetailImage($contentImages, $originalFileName, $vehicle->id);
        }
    }

    private function fillContent($object, &$vehicles)
    {
        if ($object->id <= 0) {
            $vehicles->created_by = Auth::User()->id;
            $vehicles->updated_by = Auth::User()->id;
        } else {
            $vehicles = Vehicle::find($object->id);
            $vehicles->updated_by = Auth::User()->id;
        }
        $vehicles->model = $object->model;
        $vehicles->is_deleted = 0;
    }

    private function fillDetails($object, &$detail, $contentId)
    {
        if ($object->id <= 0) {
            $detail->created_by = Auth::User()->id;
            $detail->updated_by = Auth::User()->id;
        } else {
            $detail = VehicleDetails::find($object->id);
            $detail->updated_by = Auth::User()->id;
        }

        $detail->version = $object->version;
        $detail->mileage = $object->mileage;
        $detail->delivery_year = $object->delivery_year;
        $detail->vehicle_id = $contentId;
        $detail->is_deleted = 0;
    }

    private function fillVehicleDetailImage(&$contentImages, $fileName, $vehicle_id)
    {
        $contentImages->name = $fileName;
        // $contentImages->is_deleted = 0;
        $contentImages->created_by = Auth::User()->id;
        $contentImages->updated_by = Auth::User()->id;
        $contentImages->vehicle_id = $vehicle_id;
    }

    public function template(Request $request)
    {

        $file = public_path() . "/templates/template_vehicles.xlsx";

        $headers = [
            'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        ];

        return Response()->download($file, 'template_vehicles.xlsx', $headers);
    }

    public function import()
    {
        ini_set('max_execution_time', SystemConfiguration::MAX_EXECUTION_TIME);

        //Recordar que nombres de archivos no pueden contener letras reservadas como :
        #$currentDatetime = $this->getCurrentDateTimeInUserTimezone($this->getUserConfigurationId(), '%Y-%m-%d %H-%i-%s');

        $importFile = $this->request->file('file');
        $newFileName = "vehiclesImport";
        $importFolder = storage_path() . SystemConfiguration::IMPORT_PRODUCT_FOLDER;
        $path = $importFile->move($importFolder, $newFileName);
        $fileExtension = $importFile->getClientOriginalExtension();

        $excelImport = null;
        if (strtoupper($fileExtension) == "XLSX") {
            $excelImport = new ExcelManager(ExcelManager::XLSX);
        }

        if (strtoupper($fileExtension) == "XLS") {
            $excelImport = new ExcelManager(ExcelManager::XLS);
        }

        $excelImport->loadFile($importFolder . $newFileName, function ($row) {
            $errorMessage = "";
            $isOk = false;
            $classTeacher = null;
            $exists = true;
            //dd($row,"aaa");
            $errorMessage = $this->validateMinimalInformationToInsert($row);

            if (trim($errorMessage) == "") {
                $errorMessage = $this->saveVehicleImport($row);

                //si la variable $errorMessage es vacio indica que se inserto correctamente, de lo contrario contendra el mensaje de error de xq no se pudo insertar/actualizar
                if ($errorMessage != "") {
                    $row->{'mensaje de error'} = $errorMessage;
                } else {
                    $isOk = true;
                }
            } else {
                $row->{'mensaje de error'} = $errorMessage;
            }

            return $isOk;
        });
        //esta lista contiene las series que no pudieron ingresarse e indica el motivo del error
        if (count($excelImport->getRowListMarked()) >= 1) {
            $this->exportImportListWithErrors($excelImport, 'Importación de Vehículos');
        }

        return redirect()->route('vehicle.config');
    }

    private function validateDataFromFileBeforeToInsert($row)
    {
        $errorMessage = "";

        // $vehicles = new Vehicle;

        // $this->fillVehicles($row, $vehicles);

        #$import_vehicles= Vehicle::where('model', trim($row->Modelo))->where('version',trim($row->Version))->where('mileage',trim($row->Kilometraje))->where('delivery_year',trim($row->Año_de_Entrega))->first();

        if (trim($row->Modelo) == "") {
            $errorMessage = $errorMessage . " Modelo es mandatorio";
        }
        /* if ($import_vehicles){
        $errorMessage = $errorMessage . " Campos repetidos";
        } */
        if (trim($row->Version) == "") {
            $errorMessage = $errorMessage . " Version es mandatorio";
        }
        // if ($version){
        //     $errorMessage = $errorMessage . " Campo Version repetido";
        // }
        if (trim($row->Kilometraje) == "") {
            $errorMessage = $errorMessage . " Kilometraje es mandatorio";
        }
        // if ($mileage){
        //     $errorMessage = $errorMessage . " Campo Kilometraje repetido";
        // }
        if (trim($row->Año_de_Entrega) == "") {
            $errorMessage = $errorMessage . " Año_de_Entrega es mandatorio";
        }
        // if ($delivery_year){
        //     $errorMessage = $errorMessage . " Campo Año_de_Entrega repetido";
        // }

        return $errorMessage;
    }

    private function validateMinimalInformationToInsert($row)
    {

        $errorMessage = $this->validateDataFromFileBeforeToInsert($row);

        return trim($errorMessage);
    }

    private function saveVehicleImport($row)
    {
        $errorMessage = "";
        //dd($errorMessage);
        DB::beginTransaction();
        try {
            $vehicle = Vehicle::where('model', $row->Modelo)->where('is_deleted', 0)->first();

            if ($vehicle != null) {
                $detail = new VehicleDetails;
                $this->fillVehicleDetailImport($row, $vehicle->id);
            } else {
                $vehicle = new Vehicle;
                $this->fillVehicleImport($row, $vehicle);
                $vehicle->save();
                $this->fillVehicleDetailImport($row, $vehicle->id);

            }

            DB::commit();

        } catch (\Exception $e) {
            DB::rollback();
            $errorMessage = $e->getMessage();
        }

        return $errorMessage;
    }

    private function fillVehicleImport($row, &$vehicles)
    {
        $vehicles->model = trim($row->Modelo);
        $vehicles->created_by = Auth::User()->id;
        $vehicles->updated_by = Auth::User()->id;
        $vehicles->is_deleted = 0;
    }

    private function fillVehicleDetailImport($row, $vehicleId)
    {

        $detail = VehicleDetails::where('version', $row->Version)
        ->where('mileage', $row->Kilometraje)
        ->where('delivery_year', $row->Año_de_Entrega)
        ->where('vehicle_id', $vehicleId)
        ->where('is_deleted', 0)
        ->first();

        if ($detail == null) {
            $detail = new VehicleDetails;
            $detail->version = trim($row->Version);
            $detail->mileage = trim($row->Kilometraje);
            $detail->delivery_year = trim($row->Año_de_Entrega);
            $detail->created_by = Auth::User()->id;
            $detail->updated_by = Auth::User()->id;
            $detail->is_deleted = 0;
            $detail->vehicle_id = $vehicleId;

            $detail->save();
        }
    }

}
