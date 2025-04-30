<?php

namespace App\Http\Controllers\Web;

use App\Helpers\SystemConfiguration;

use App\Http\Controllers\Controller;

use App\Models\Workshops;
use App\Models\Detail;

use App\Models\Vehicle;

class MaintenanceController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        #$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $page_title = 'Consultas Mantenimiento';
        $workshopList = Workshops::getWorkShop();
        $vehiclesList = Vehicle::getVehicles();
        $departamentList = Workshops::getDepartament();
        /* $model = Vehicle::getModels();
        $version = Vehicle::getVersions();
        $mileage = Vehicle::getMileages();
        $delivery_year = Vehicle::getDeliveryYears(); */
        $detail = Detail::find('1');
        // dd(SystemConfiguration::PATH_AWS_FOLDER_VEHICLES);
        //dd($departamentList);
        $pathVehiclesImageAws = SystemConfiguration::getImageURL() . "/" . $this->getPathForAWS(SystemConfiguration::PATH_AWS_FOLDER_VEHICLES, '');
        return view('pages/maintenance',compact('page_title','workshopList','vehiclesList','pathVehiclesImageAws','detail','departamentList'));
    }
}