<?php

namespace App\Http\Controllers\Platform;
use App\Http\Controllers\Controller;
use App\Helpers\SystemConfiguration;
use App\Models\Contents;

class DshBeneficesController extends Controller
{
  
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function banner_primary()
    {
        $pathContentImageAws = SystemConfiguration::getImageURL() . "/" . $this->getPathForAWS(SystemConfiguration::PATH_AWS_FOLDER_CONTENT, '');
        $content = Contents::where("group","benefices")->where("page","banner_primary")->first();
        return view('pages/platform/benefices/banner_primary',compact('content','pathContentImageAws'));
    } 

    public function first_benefice()
    {
        // $bannerPrimary = Contents::find(1);
        // return view('pages/platform/benefices/first_benefice',compact('bannerPrimary'));
        $content = Contents::where("group","benefices")->where("page","first_benefice")->first();
        return view('pages/platform/benefices/first_benefice',compact('content'));
    }

    public function second_benefice()
    {
        // $bannerPrimary = Contents::find(1);
        // return view('pages/platform/benefices/second_benefice');
        $pathContentImageAws = SystemConfiguration::getImageURL() . "/" . $this->getPathForAWS(SystemConfiguration::PATH_AWS_FOLDER_CONTENT, '');
        $content = Contents::where("group","benefices")->where("page","second_benefice")->first();
        return view('pages/platform/benefices/second_benefice',compact('content','pathContentImageAws'));
    }

    public function third_benefice()
    {
        // $bannerPrimary = Contents::find(1);
        // return view('pages/platform/benefices/third_benefice');
        $pathContentImageAws = SystemConfiguration::getImageURL() . "/" . $this->getPathForAWS(SystemConfiguration::PATH_AWS_FOLDER_CONTENT, '');
        $content = Contents::where("group","benefices")->where("page","third_benefice")->first();
        return view('pages/platform/benefices/third_benefice',compact('content','pathContentImageAws'));
    }
}
