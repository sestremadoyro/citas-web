@section('custom-styles')

<style>

    .img-workshop{
        height: 550px;
        width: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
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

@include('components.web.banner',[
    "page_title"=>'Beneficios',
    "title"=>$content->text_secondary,
    'sub_title' => $content->text_primary,
    'message' => $content->description,
    'banner' => $content->image,
])

<section class="background-11 pb-0 container-beneficies">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-xl-8 pl-7 box-beneficies">
                <h5 class="text-dark">{{$first_benefice->text_primary}}</h5>
                <h2 class="text-dark">{{$first_benefice->text_secondary}}</h2>
                <p class="pt-4 pb-7">{{$first_benefice->description}}</p>
            </div>
            <div class="col-12 col-xl-7 p-0">
                <div class="img-workshop" style="background-image: url('{{ $second_benefice->image }}')">
                </div>
            </div>
            <div class="col-12 col-xl-5" style="background-color: #dedad4">
                <div class="d-flex box-beneficies align-items-center p-0 h-100">
                    <div data-zanim-timeline="{}" data-zanim-trigger="scroll" class="pl-7 pr-7">
                        <div class="overflow-hidden pl-1 margin-beneficies-exp">
                            <h5 class="text-dark" >{{$second_benefice->text_primary}}</h5>
                        </div>
                        <div class="overflow-hidden">
                            <h2 class="text-dark font-title" >{{$second_benefice->text_secondary}}</h2>
                        </div>
                        <div class="overflow-hidden">
                            <p class="mt-3" >{{$third_benefice->description}}</p>
                        </div>
                        <div class="overflow-hidden margin-beneficies-cites mt-3">
                            <a href="{{$second_benefice->link_btn_1}}" target="_blank"><button type="button" class="btn btn-outline-dark btn-md">{{$second_benefice->btn_1}}
                            </button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-xl-5 order-2 order-xl-1">
                <div class="d-flex box-beneficies align-items-center p-0 h-100">
                    <div data-zanim-timeline="{}" data-zanim-trigger="scroll" class="pl-7 pr-7">
                        <div class="overflow-hidden pl-1 margin-beneficies-exp" >
                            <h5 class="text-dark" >{{$third_benefice->text_primary}}</h5>
                        </div>
                        <div class="overflow-hidden">
                            <h2 class="text-dark font-title" >{{$third_benefice->text_secondary}}</h2>
                        </div>
                        <div class="overflow-hidden">
                            <p class="mt-3" >{{$third_benefice->description}}</p>
                        </div>
                        <div class="overflow-hidden margin-beneficies-cites mt-3">
                            <a href="{{$third_benefice->link_btn_2}}" target="_blank"><button type="button" class="btn btn-outline-dark btn-md">{{$third_benefice->btn_2}}
                            </button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-xl-7 p-0 order-1 order-xl-2">
                {{-- <img  class="img-fluid" width="1200px" src="{{asset('images/SEAT_Ibiza_in_Ibiza007_HQ.jpg')}}" alt="" /> --}}
                <div class="img-workshop" style="background-image: url('{{ $third_benefice->image }}')">
                        
                </div>
            </div>
        </div>
    </div>
</section>
@endsection