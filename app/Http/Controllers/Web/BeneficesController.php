<?php

namespace App\Http\Controllers\Web;
use App\Http\Controllers\Controller;
use App\Helpers\SystemConfiguration;
use App\Models\Contents;

class BeneficesController extends Controller
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
        $page_title = 'Beneficios';
        $content = Contents::where("group","benefices")->where("page","banner_primary")->first();
        $pathContentImageAws = SystemConfiguration::getImageURL() . "/" . $this->getPathForAWS(SystemConfiguration::PATH_AWS_FOLDER_CONTENT, '');
        $first_benefice = Contents::where("group","benefices")->where("page","first_benefice")->first();
        $second_benefice = Contents::where("group","benefices")->where("page","second_benefice")->first();
        $third_benefice = Contents::where("group","benefices")->where("page","third_benefice")->first();
        
        return view('pages/benefices',compact('page_title','content','first_benefice','second_benefice','third_benefice','pathContentImageAws'));

    }

        #dd($content);
        // return view('pages/benefices',compact('content'));

        // return view('pages/benefices');

}
