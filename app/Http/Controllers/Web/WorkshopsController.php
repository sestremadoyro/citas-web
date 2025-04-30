<?php

namespace App\Http\Controllers\Web;
use App\Http\Controllers\Controller;
use App\Helpers\SystemConfiguration;
use App\Models\Contents;
use App\Models\Detail;
use App\Models\Workshops;
#use App\Models\Entity;

class WorkshopsController extends Controller
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
        // return view('pages/workshops');
        $page_title = 'Talleres';
        $pathWorkShopImageAws = SystemConfiguration::getImageURL() . "/" . $this->getPathForAWS(SystemConfiguration::PATH_AWS_FOLDER_WORKSHOP, '');
        $pathWorkShopBannerImageAws = SystemConfiguration::getImageURL() . "/" . $this->getPathForAWS(SystemConfiguration::PATH_AWS_FOLDER_CONTENT, '');
        $workshop = Workshops::where("is_deleted","0")->get();
        $content = Contents::where("group","workshops")->where("page","banner_primary")->get()[0];
        $mainText = Contents::where("group","workshops")->where("page","main_text")->get()[0];
        $detail = Detail::find('1');
       
        #dd($content);
        return view('pages/workshops',compact('page_title','workshop','content','mainText','pathWorkShopImageAws','pathWorkShopBannerImageAws','detail'));
    }

    public function indexContact()
    {
        // return view('pages/workshops');
        $page_title = 'Talleres Contactos';
        $pathWorkShopImageAws = SystemConfiguration::getImageURL() . "/" . $this->getPathForAWS(SystemConfiguration::PATH_AWS_FOLDER_WORKSHOP, '');
        $pathWorkShopBannerImageAws = SystemConfiguration::getImageURL() . "/" . $this->getPathForAWS(SystemConfiguration::PATH_AWS_FOLDER_CONTENT, '');
        $workshop = Workshops::where("is_deleted","0")->get();
        $content = Contents::where("group","workshops")->where("page","banner_primary")->get()[0];
        $mainText = Contents::where("group","workshops")->where("page","main_text")->get()[0];
       
        #dd($content);
        return view('pages/workshopContact',compact('page_title','workshop','content','mainText','pathWorkShopImageAws','pathWorkShopBannerImageAws'));
    }
}