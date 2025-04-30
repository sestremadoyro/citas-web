<?php

namespace App\Http\Controllers\Web;
use App\Http\Controllers\Controller;
use App\Helpers\SystemConfiguration;
use App\Models\Contents;

class TermsAndConditionsController extends Controller
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
        $page_title = 'Términos y condiciones';
        $content = Contents::where("group","config")->where('page','termsAndConditions')->first();
        
        return view('pages/termsAndConditions',compact('page_title','content'));

    }

}
