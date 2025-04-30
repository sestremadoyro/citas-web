<?php

namespace App\Http\Controllers\Platform;
use App\Http\Controllers\Controller;
use App\Helpers\SystemConfiguration;
use App\Models\Detail;
use App\Models\Vehicle;
use App\Models\Contents;

class DshConfigController extends Controller
{
  
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function detail()
    {
        $detail = Detail::find(1);
        return view('pages/platform/config/detail',compact('detail'));
    }

    public function vehicle()
    {
        // $vehicle = Vehicle::find(1);
        #$pathImagesVehiclesAws = SystemConfiguration::getImageURL() . "/" . $this->getPathForAWS(SystemConfiguration::PATH_AWS_FOLDER_VEHICLES, '');
        return view('pages/platform/config/vehicle');
    }
    
}