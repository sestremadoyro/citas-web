@section('custom-styles')
    <style>
        .img-workshop {
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
    <link href="{{ asset('images/logo_vertical_dark.jpg') }}" rel="image_src" />
    <meta content="Seat - {{ $content->text_primary }}" property="og:title" />
    <meta content="{{ $content->text_secondary }}" property="og:description" />
    <meta content="{{ asset('images/logo_vertical_dark.jpg') }}" property="og:image" />
    <meta content="{{ url('/') }}" property="og:url" />
    <meta property="og:site_name" content="{{ url('/') }}" />
@endsection

@section('content')
    @include('components.web.banner', [
        'page_title' => 'Talleres',
        'title' => '',
        'sub_title' => '',
        'message' => '',
        'banner' => $content->image,
    ])
    <section class="background-11 container-workshops">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 workshops-text">
                    <h5 class="text-encabezado" >{{ $mainText->text_secondary }}</h5>
                    <h2 class="text-dark">{{ $mainText->text_primary }}</h2>
                    <p class="pt-4 pb-7 col-md-7 col-xl-6 text-dark text-parrafo">{{ $mainText->description }}
                    </p>
                </div>
            </div>
            @foreach ($workshop as $item)
                <div class="row mb-6">
                    @if ($item->image != null)
                        <div class="col-md-12 col-lg-6 col-xl-8 pl-xl-7">
                            {{-- <img class="img-fluid imagen" src=" {{ $pathWorkShopImageAws }}{{ $item->image }}" alt="" /> --}}
                            <div class="img-workshop" style="background-image: url('{{ $item->image }}')">

                            </div>
                        </div>
                    @endif

                    <div
                        class="col-md-12 col-lg-6 {{ $item->image != null ? 'col-xl-4' : 'col-xl-8 pl-xl-7' }} mt-5 mt-lg-5 information">
                        <div class="d-flex align-items-center p-0 h-100">
                            <div>
                                <div class="overflow-hidden">
                                    <h2 class="text-dark font-title">{{ $item->name }}</h2>
                                </div>
                                <div class="overflow-hidden list">
                                    <p class="mt-3" >
                                        {!! nl2br($item->description) !!}
                                    </p>
                                    <div>
                                        <a href="https://wa.me/{{str_replace(' ', '', $item->phone)}}/" target="_blank" class=""> <i class="text-success fab fa-whatsapp"></i> {{$item->phone}} </a>
                                    </div>
                                    <span style="color:red" class="mt-3 fas fa-chevron-right"></span><a href="{{ $item->link_cita }}"
                                        class=""> Ir a {{ $item->name }} </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {{-- <div class="col-md-12 col-xl-4 mt-lg-5 map-responsive">
                    {!! nl2br($item->map_link) !!}
                </div> --}}
                </div>
            @endforeach

        </div>
    </section>
@endsection
