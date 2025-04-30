<?php

namespace App\Http\Controllers\Platform;
use App\Http\Controllers\Controller;
use App\Helpers\SystemConfiguration;
use App\Models\Contents;
use App\Models\Workshops;
use App\Models\Detail;

class DshWorkshopsController extends Controller
{
  
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function banner_primary()
    {
        $pathWorkShopBannerImageAws = SystemConfiguration::getImageURL() . "/" . $this->getPathForAWS(SystemConfiguration::PATH_AWS_FOLDER_CONTENT, '');
        $content = Contents::where("group","workshops")->where("page","banner_primary")->get()[0];
        return view('pages/platform/workshops/banner_primary',compact('content','pathWorkShopBannerImageAws'));
    } 

    public function main_text()
    {
        $content = Contents::where("group","workshops")->where("page","main_text")->get()[0];
        return view('pages/platform/workshops/main_text',compact('content'));
    }

    public function workshop()
    {
        $pathWorkShopImageAws = SystemConfiguration::getImageURL() . "/" . $this->getPathForAWS(SystemConfiguration::PATH_AWS_FOLDER_WORKSHOP, '');
        $workshop = Workshops::where("is_deleted","0")->get();
        $detail = Detail::find('1');
        return view('pages/platform/workshops/workshop',compact('workshop','pathWorkShopImageAws','detail'));
    }
    
}