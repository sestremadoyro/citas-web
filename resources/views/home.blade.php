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

@section('custom-styles')
    <style>
        
        @media(max-width: 574px){
            .cf-plb{
                padding: 1em !important;
            }
        }

        @media(max-width: 760px){
            .cfb{
                padding-left: 2em !important;
            }
        }
        @media(max-width: 760px) {
            .img-banner {
                height: 50vh !important;
            }
        }

        @media(max-width: 1200px) {
            /* .text-title {
                font-size: 50px !important;
                letter-spacing: -0.05rem !important;

            } */
        }

        @media(max-width: 575px) {
            .text-dimension {
                padding-left: 70px !important;
            }
        }

        @media(max-width: 575px) {
            .text-position {
                margin-top: 0px !important;
            }
        }

        @media(max-width: 575px) {
            #icon-dimension {
                position: absolute;
                margin-top: -20px;
            }
        }

        @media(max-width: 575px) {
            #parrafo {
                padding-top: 20px !important;
            }
        }

        @media(max-width: 575px) {
            #cont {
                padding-top: 30px !important;
            }
        }

        .text-position {
            margin-top: 30px;
        }


        #container {
            width: 100%;
            height: 100%;
            margin: 0 auto;
            /* background-image: url("{{ asset('images/ATECA.jpg') }}"); */
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }

        .logo {
            width: 60px;
            height: 60px;
            /* margin: 0 auto; */
            /* background-image: url("{{ asset('images/IMAGE.PNG') }}"); */
            background-position: left;
            background-size: cover;
            background-repeat: no-repeat;
        }

        .text-subtitle {
            font-size: 0.99rem;
            font-weight: 900 !important;
        }

        .text-size {
            font-size: 7vw;
            letter-spacing: -0.20rem;
        }



        .btn-precise {
            padding: 0.8rem 1.2rem;
            width: 300px;
            height: 45px;
        }

        .img-bp {
            height: 500px;
            width: 100%;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }

        .pd-l{
            padding-left: 5em;
        }

        .bh{
            position: static;
        }
    </style>
@endsection
@section('content')
    <section class="py-0 pb-0">

        <!--/.background-holder-->
        <div class="container-fluid main-header" style="">
            <div class="row h-100">
                <div class="col-12 col-md-12 col-lg-5 order-2 order-md-1 pb-6 content-header">
                    {{-- <div class="col-12"> --}}
                    <div class="pt-5 pt-sm-8">
                        <h1 class="text-dark text-title">{{ $content->text_primary }}
                        </h1>
                    </div>
                    <div class="mt-4 mb-4">
                        <p class="text-dark lh-2"> {{ $content->text_secondary }}</p>
                    </div>
                    <div class="row">
                        <div class="col-10 col-md-7 col-lg-9">
                            <a class="btn btn-outline-dark btn-block"
                                href="{{ $content->link_btn_1 }}"><b>{{ $content->btn_1 }}</b><span
                                    class=" ml-2"></span></a><br>
                            <a class="btn btn-dark mt-0 btn-block" target="_blank"
                                href="{{ $content->link_btn_2 }}"><b>{{ $content->btn_2 }}</b><span
                                    class=" ml-2"></span></a>
                        </div>
                    </div>
                    {{-- </div> --}}
                </div>

                <div class="col-12 col-md-12 col-lg-7 order-1 order-md-2 p-0">
                    <div id="container" class="img-banner"
                        style="background-image: url('{{ $content->image }}');">
                        {{-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veniam atque! Nihil natus est
                        commodi id impedit et eos magnam reprehenderit blanditiis quos? Iure deleniti mollitia minima velit
                        earum voluptatum?</p> --}}
                        {{-- <img class="img-fluid" src="{{ asset('images/ATECA.jpg') }}"> --}}
                        {{-- <div class="background-holder" style="background-image:url({{ asset('images/ATECA.jpg') }});"> --}}
                    </div>
                </div>
            </div>
        </div>
        <!--/.row-->
        </div>
        <!--/.container-->
    </section>
    <section class="background-11 pt-5">
        <div class="container-fluid cf cf-pl">

            <div class="col-12 text-center">
                <h5 class="text-dark "><small class="text-subtitle">{{ $fastGuide->text_primary }}</small>
                </h5>
                <h3 class="text-dark "><b>{{ $fastGuide->text_secondary }}</b></h3>

            </div>

            {{-- <h5 class="text-center fs-2 fs-md-3"> <small>Nuevas experiencias</small> </h5>
            <h3 class="text-center fs-2 fs-md-3">Hazlo más rápido y seguro</h3>
            <hr class="short"
                data-zanim='{"from":{"opacity":0,"width":0},"to":{"opacity":1,"width":"4.20873rem"},"duration":0.8}'
                data-zanim-trigger="scroll" /> --}}
            <div class="row no-gutters pos-relative mt-6">
                <div class=" d-none d-lg-block"></div>
                <div class="col-lg-6 py-3 py-lg-0 mb-0" style="min-height:400px;">
                    <div class="background-holder bh radius-tr-lg-0"
                    style="background-image: url('{{ $section1->image }}');">
                    </div>
                    {{-- <img src="{{ asset('images/ARONA.jpg') }}"> --}}
                    {{-- <img src="{{ asset('images/ARONA.jpg') }}" /> --}}
                    <!--/.background-holder-->
                </div>
                <div
                    class="col-lg-6 px-lg-5 py-lg-6 p-4 my-lg-0 background-white radius-bl-secondary radius-bl-lg-0 radius-br-secondary radius-br-lg-0 radius-tr-lg-secondary">
                    <div class="d-flex align-items-center h-100">
                        <div data-zanim-timeline="{}" data-zanim-trigger="scroll">
                            <div class="overflow-hidden">
                                <h5 >{{ $section1->title }}</h5>
                            </div>
                            <div class="overflow-hidden">
                                <p class="mt-3">{{ $section1->description }}</p>
                            </div>
                            <div class="overflow-hidden">
                                <div data-zanim='{"delay":0.2}'><a class="d-flex align-items-center"
                                        href="{{ $section1->link_btn }}">{{ $section1->btn }}
                                        <div class="overflow-hidden ml-2"><span class="fas fa-chevron-right"></span>
                                        </div>
                                    </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row no-gutters pos-relative mt-4 mt-lg-0">
                <div class=" d-none d-lg-block"></div>
                <div class="col-lg-6 py-3 py-lg-0 mb-0 order-lg-2" style="min-height:400px;">
                    <div class="background-holder bh radius-tr-lg-0"
                    style="background-image: url('{{ $section2->image }}');">
                    </div>
                    {{-- <img src="{{ asset('images/ARONA1.jpg') }}" /> --}}
                    <!--/.background-holder-->
                </div>
                <div
                    class="col-lg-6 px-lg-5 py-lg-6 p-4 my-lg-0 background-white radius-bl-secondary radius-bl-lg-0 radius-br-secondary radius-br-lg-0">
                    <div class="d-flex align-items-center h-100">
                        <div data-zanim-timeline="{}" data-zanim-trigger="scroll">
                            <div class="overflow-hidden">
                                <h5 >{{ $section2->title }}</h5>
                            </div>
                            <div class="overflow-hidden">
                                <p class="mt-3" >{{ $section2->description }}</p>
                            </div>
                            <div class="overflow-hidden">
                                <div data-zanim='{"delay":0.2}'><a class="d-flex align-items-center"
                                        href="{{ $section2->link_btn }}">{{ $section2->btn }}
                                        <div class="overflow-hidden ml-2"><span class="fas fa-chevron-right"></span>
                                        </div>
                                    </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row no-gutters pos-relative mt-4 mt-lg-0">
                <div class="d-none d-lg-block"></div>
                <div class="col-lg-6 py-3 py-lg-0 mb-0" style="min-height:400px;">
                    <div class="background-holder bh radius-bl-0 "
                    style="background-image: url('{{ $section3->image }}');">
                    </div>
                    {{-- <img src="{{ asset('images/ARONA2.jpg') }}" /> --}}
                    <!--/.background-holder-->
                </div>
                <div
                    class="col-lg-6 px-lg-5 py-lg-6 p-4 my-lg-0 background-white radius-bl-secondary radius-bl-lg-0 radius-br-secondary">
                    <div class="d-flex align-items-center h-100">
                        <div data-zanim-timeline="{}" data-zanim-trigger="scroll">
                            <div class="overflow-hidden">
                                <h5 >{{ $section3->title }}</h5>
                            </div>
                            <div class="overflow-hidden">
                                <p class="mt-3" >{{ $section3->description }}?</p>
                            </div>
                            <div class="overflow-hidden">
                                <div data-zanim='{"delay":0.2}'><a class="d-flex align-items-center"
                                        href="{{ $section3->link_btn }}">{{ $section3->btn }}
                                        <div class="overflow-hidden ml-2">
                                            <span class="fas fa-chevron-right"></span>
                                        </div>
                                    </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="p-0 ml-0" style="background-color:#B0C4DE">
        <div class="container-fluid">
            <div class="row p-0">
                <div class="col-12 col-xl-7 p-0">
                    <img class="img-bp img-fluid"
                        style="background-image: url('{{ $bannerParts->image }}');" alt="">
                </div>
                <div class="col-12 col-xl-5 p-5 mt-7">
                    <h1 class="text-dark fs-md-4 text-size"><b>{{ $bannerParts->text_primary }}</b>
                    </h1>
                    <a class="mt-4 btn btn-outline-dark"
                        href="{{ $bannerParts->link_btn_1 }}"><b>{{ $bannerParts->btn_1 }}</b></a>
                </div>
            </div>
        </div>
        <!--/.container-->
    </section>

{{--     <section class="p-0 ml-0" style="background-color:#B0C4DE">
        <div class="container-fluid">
            <div class="row p-0">
                <div class="col-12 col-xl-3 p-0">
                    h
                </div>
                <div class="col-12 col-xl-6 p-5 mt-7 ml-0">
                    <h1 class="text-dark fs-md-4 text-size"><b>{{ $bannerParts->text_primary }}</b>
                    </h1>
                </div>
                <div class="col-12 col-xl-3 p-0">
                    h
                </div>
            </div>
        </div>
     
    </section> --}}
    <section class="background-11 pt-5">
        <div class="container-fluid cf cf-plb">
            <h5 class="text-center fs-2 fs-md-3"><small class="text-subtitle">{{ $transparency->text_primary }}</small>
            </h5>
            <h3 class="text-center fs-2 fs-md-3"><b>{{ $transparency->text_secondary }}</b></h3>
            <div class="row mt-7">
                <div class="col-sm-6 col-lg-4 px-4 px-sm-3 text-lg-x" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                    <div id="icon-dimension" class="logo" style="background-image: url('{{ $section4->image }}');" >
                    </div>
                    {{-- <i id="icon-dimension" class="far fa-square" style="font-size: 60px; color: #e78747;"></i> --}}
                    <h5 class="text-position" ><span
                            class="color-primary fs-2 icon-position-fix mr-0 text-dimension"></span>{{ $section4->title }}
                    </h5>
                    <p id="parrafo" class="mt-3 pr-3 pr-lg-5 mb-0 " >
                        {{ $section4->description }}</p>
                </div>
                <div id="cont" class="col-sm-6 col-lg-4 px-4 px-sm-3 mt-4 mt-sm-0 text-lg-x" data-zanim-timeline="{}"
                    data-zanim-trigger="scroll">
                    <div id="icon-dimension" class="logo" style="background-image: url('{{ $section5->image }}');" >
                    </div>
                    {{-- <i id="icon-dimension" class="far fa-square" style="font-size: 60px; color: #e78747;"></i> --}}
                    <h5 class="text-position" ><span
                            class=" color-primary mr-0 text-dimension"></span>{{ $section5->title }}
                    </h5>
                    <p id="parrafo" class="mt-3 pr-3 pr-lg-5 mb-0 " >
                        {{ $section5->description }}</p>
                </div>
                <div id="cont" class="col-sm-6 col-lg-4 px-4 px-sm-3 mt-4 mt-lg-0 text-lg-x" data-zanim-timeline="{}"
                    data-zanim-trigger="scroll">
                    <div id="icon-dimension" class="logo" style="background-image: url('{{ $section6->image }}');" >
                    </div>
                    {{-- <i id="icon-dimension" class="far fa-square" style="font-size: 60px; color: #e78747;"></i> --}}
                    <h5 class="text-position" ><span
                            class=" color-primary mr-0 text-dimension"></span>{{ $section6->title }}
                    </h5>
                    <p id="parrafo" class="mt-3 pr-3 pr-lg-5 mb-0 " >
                        {{ $section6->description }}</p>
                </div>
            </div>

            <div class="d-flex justify-content-center pt-5">
                <a href="{{ $transparency->link_btn_general }}" target="_blank" class="btn btn-outline-dark"
                    style='width:250px; height:45px'>{{ $transparency->btn_general }}</a>
            </div>

            <!--/.row-->
        </div>

        <!--/.container-->
    </section>
@endsection