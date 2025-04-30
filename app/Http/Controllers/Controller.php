<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use App\Helpers\ExcelManager;
use Illuminate\Routing\Controller as BaseController;
use App\Helpers\SystemConfiguration;
use Illuminate\Support\Facades\Auth;
use App\Models\Detail;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    const MESSAGE_GENERIC_FAIL = "Ha ocurrido un error. Contáctese con el Administrador.";

    public function generateRandomCode()
    {
        $length = 12; #cantidad de caracteres
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    public function exportImportListWithErrors(ExcelManager $excelManager, $fileName)
    {
        $excelManager->fillExcel($excelManager->getRowListMarked(), "Errores", ExcelManager::XLS, SystemConfiguration::COMPANY_NAME);
        $excelManager->setFileName($fileName);
        $excelManager->setHeaders();
        $excelManager->save();
    }

    public function getPathForAWS($module, $option)
    {
        $path = "";

        if (strtoupper($module) == SystemConfiguration::PATH_AWS_FOLDER_CONTENT) {
            $path = "banners/";
        }
        if (strtoupper($module) == SystemConfiguration::PATH_AWS_FOLDER_SECTION) {
            $path = "sections/";
        }
        if (strtoupper($module) == SystemConfiguration::PATH_AWS_FOLDER_WORKSHOP) {
            $path = "workshop/";
        }
        if (strtoupper($module) == SystemConfiguration::PATH_AWS_FOLDER_VEHICLES) {
            $path = "vehicles/";
        }

        return $path;
    }

    public function getDetail(){
        $detail = Detail::find(1);
        return $detail;
    }

    public function getDataResponseSuccess($data)
    {
        return [
            "success" => true,
            "message" => null,
            "data" => $data,
        ];
    }

    public function getDataResponseFail($message)
    {
        return [
            "success" => false,
            "message" => $message,
            "data" => null,
        ];
    }

}