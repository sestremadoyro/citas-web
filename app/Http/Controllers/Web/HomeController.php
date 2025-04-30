<?php

namespace App\Http\Controllers\Web;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contents;
use App\Models\Sections;
use App\Helpers\SystemConfiguration;

class HomeController extends Controller
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
        $pathContentImageAws = SystemConfiguration::getImageURL() . "/" . $this->getPathForAWS(SystemConfiguration::PATH_AWS_FOLDER_CONTENT, '');
        $pathSectionImageAws = SystemConfiguration::getImageURL() . "/" . $this->getPathForAWS(SystemConfiguration::PATH_AWS_FOLDER_SECTION, '');
        $content = Contents::find(1);
        $fastGuide = Contents::find(2);
        $bannerParts = Contents::find(3);
        $transparency = Contents::find(4);
        $section1 = Sections::find(1);
        $section2 = Sections::find(2);
        $section3 = Sections::find(3);
        $section4 = Sections::find(4);
        $section5 = Sections::find(5);
        $section6 = Sections::find(6);
        #dd($content);
        return view('home',compact('content','fastGuide','bannerParts','transparency','section1','section2','section3','section4','section5','section6','pathContentImageAws','pathSectionImageAws'));
    }
}
