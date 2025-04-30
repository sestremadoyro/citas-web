@section('custom-styles')

<style>

    .img-workshop{
        height: 500px;
        width: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .pdcus{
        margin-bottom: 3em;
        padding: 0em 5em;
    }

    @media(max-width: 1200px) {
        .pd-cero {
            padding: 1em !important;
        }
    }

</style>
@endsection

@extends('layouts.web')
 
@section('meta-data')
    <!-- Para el navegador -->
    <link href="{{ asset('images/SEAT_Master_Logo_Horizontal_Positivo_RGB (1).png') }}" rel="image_src" />
    <meta content="Seat - {{$content->text_primary}}" property="og:title" />
    <meta
        content="{{$content->text_secondary}}"
        property="og:description" />
    <meta content="{{ asset('images/SEAT_Master_Logo_Vertical_RGB (1).png') }}" property="og:image" />
    <meta content="{{ url('/') }}" property="og:url" />
    <meta property="og:site_name" content="{{ url('/') }}" />
@endsection

@section('content')

    {{-- @include('components.web.banner',[
    "page_title"=>'Talleres Contactos',
    "title"=>'',
    'sub_title' => '',
    'message' => '',
    'banner'=>$pathWorkShopBannerImageAws.$content->image,
    ]) --}}
    <section class="background-11 container-workshops">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 workshops-text">
                    <h5 class="text-encabezado" >Contactenos</h5>
                    <h2 class="text-dark">Agenda tu cita</h2>
                    <p class="pt-4 pb-7 col-md-7 col-xl-6 text-dark text-parrafo">{{$mainText->description}}
                    </p>
                </div>
            </div>
            <div class="row">
            @foreach ($workshop as $item)
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 pdcus pd-cero">
                <div class="card " >
                    <img src="{{ $item->image }}" class="card-img-top" alt="{{ $item->image }}">
                    <div class="card-body">
                      <h5 class="card-title">{{$item->name}}</h5>
                      <p class="card-text">{!! nl2br($item->description) !!}</p>
                      <a href="https://wa.me/{{str_replace(' ', '', $item->phone)}}/" target="_blank" class=""> <i class="text-success fab fa-whatsapp"></i> {{$item->phone}} </a>
                      <a href="{{ $item->link_cita }}" class="btn btn-outline-dark mt-1 btn-block">Agenda tu cita</a>
                    </div>
                  </div>
                @if ($item->image!=null)
                {{-- <div class="col-md-6 col-lg-6 col-xl-4 pl-xl-7"> --}}
                    {{-- <img class="img-fluid imagen" src=" {{ $pathWorkShopImageAws }}{{ $item->image }}" alt="" /> --}}
                    {{-- <div class="img-workshop" style="background-image: url('{{ $pathWorkShopImageAws }}{{ $item->image }}')">
                        
                    </div> --}}
                {{-- </div> --}}
                @endif
                
                {{-- <div class="col-md-6 col-lg-6 {{$item->image!=null ? 'col-xl-4' : 'col-xl-8 pl-xl-7'}} mt-5 mt-lg-5 information">
                    <div class="d-flex align-items-center p-0 h-100">
                        <div data-zanim-timeline="{}" data-zanim-trigger="scroll">
                            <div class="overflow-hidden">
                                <h2 class="text-dark" >{{$item->name}}</h2>
                            </div>
                            <div class="overflow-hidden list">
                                <p class="mt-3" >
                                    {!! nl2br($item->description) !!}
                                </p>
                                <p><a class="btn btn-outline-dark mt-1 btn-block" target="_blank"
                                    href=""><b>Agenda tu cita</b><span
                                        class=" ml-2"></span></a></p>
                            </div>
                        </div>
                    </div>
                </div> --}}
                {{-- <div class="col-md-12 col-xl-4 mt-lg-5 map-responsive">
                    {!! nl2br($item->map_link) !!}
                </div> --}}
            </div>
            @endforeach
            </div>
        </div>
    </section>
@endsection
