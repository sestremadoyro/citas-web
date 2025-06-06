<?php

namespace App\Http\Controllers\Platform;
use App\Http\Controllers\Controller;
use App\Helpers\SystemConfiguration;
use App\Models\Contents;
use App\Models\Sections;

class DshHomeController extends Controller
{
  
    public function __construct()
    {
        $this->middleware('auth');
    }
  
    public function banner_primary()
    {
        $pathContentImageAws = SystemConfiguration::getImageURL() . "/" . $this->getPathForAWS(SystemConfiguration::PATH_AWS_FOLDER_CONTENT, '');
        $content = Contents::where("group","home")->where("page","banner_primary")->get()[0];
        return view('pages/platform/home/banner_primary',compact('content','pathContentImageAws'));
        // return view('pages/platform/banner_primary');
    }

    public function fast_guide()
    {
        $pathSectionImageAws = SystemConfiguration::getImageURL() . "/" . $this->getPathForAWS(SystemConfiguration::PATH_AWS_FOLDER_SECTION, '');
        $fastGuide=  Contents::where("group","home")->where("page","fast_guide")->get()[0];
        $section1=  Sections::where("id","1")->get()[0];
        $section2=  Sections::where("id","2")->get()[0];
        $section3=  Sections::where("id","3")->get()[0];
        return view('pages/platform/home/fast_guide',compact('fastGuide','section1','section2','section3','pathSectionImageAws'));
        // return view('pages/platform/fast_guide');
    }

    public function banner_parts()
    {
        $pathContentImageAws = SystemConfiguration::getImageURL() . "/" . $this->getPathForAWS(SystemConfiguration::PATH_AWS_FOLDER_CONTENT, '');
        $bannerParts = Contents::where("group","home")->where("page","banner_parts")->get()[0];
        #dd($bannerPrimary);
        return view('pages/platform/home/banner_parts',compact('bannerParts','pathContentImageAws'));
        // return view('pages/platform/banner_parts');
    }

    public function transparency()
    {
        $pathSectionImageAws = SystemConfiguration::getImageURL() . "/" . $this->getPathForAWS(SystemConfiguration::PATH_AWS_FOLDER_SECTION, '');
        $transparency = Contents::where("group","home")->where("page","transparency")->get()[0];
        $section4=  Sections::where("id","4")->get()[0];
        $section5=  Sections::where("id","5")->get()[0];
        $section6=  Sections::where("id","6")->get()[0];
        #dd($bannerPrimary);
        return view('pages/platform/home/transparency',compact('transparency','section4','section5','section6','pathSectionImageAws'));
        // return view('pages/platform/transparency');

    }

    public function maintenance()
    {
        $maintenance = Contents::findByPage("home", "maintenance");
        $section1 = $maintenance->sections->first();
        $section2 = $maintenance->sections->skip(1)->first();  

        if ($maintenance->sections->isEmpty() || $maintenance->sections->count() < 2) {
            if ($maintenance->sections->count() == 0 && $section1 == null) {
                $section1 = $maintenance->sections()->create(['content_id' => $maintenance->id, 'title' => '¿Cuánto Costaría?', 'description' => 'Los repuestos más el costo de mantenimiento te estaría costando S/{costo} soles']);
            }
            if ($maintenance->sections->count() == 1 && $section2 == null) {
                $section2 = $maintenance->sections()->create(['content_id' => $maintenance->id, 'title' => '¿Cuánto tiempo demora?', 'description' => 'El tiempo aproximado para el mantenimiento en el taller es de {horas} horas laborales.']);
            }            
        }

        return view('pages/platform/home/maintenance',compact('maintenance','section1','section2'));

    }

    public function perfil()
    {
        $perfil = Contents::all();
        #dd($bannerPrimary);
        return view('pages/platform/perfil',compact('perfil'));
        // return view('pages/platform/transparency');

    }
}
