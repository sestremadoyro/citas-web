@extends('layouts.web')

@section('title')
    <title>Error</title>
@endsection

@section('content')
{{-- <main>
    <section class="text-center py-0">
        <div class="background-holder overlay overlay-elixir" style="background-image:url(assets/images/background-14.jpg);">
        </div>
        <!--/.background-holder-->
        <div class="container">
            <div class="row h-full align-items-center color-white">
                <div class="col" data-zanim-timeline="{}" data-zanim-trigger="scroll"><a href="{{ route('home') }}" ><img src="assets/images/logo-light.png" alt=""  /></a>
                    <h5 class="text-uppercase mt-5 ls color-white fs-0 fs-md-1" data-zanim='{"delay":0.2}'>{{$message}}</h5>
                    <h1 class="fs-4 fs-sm-6 fs-md-8 color-white" data-zanim='{"delay":0.3}'>{{$errorCode}}</h1>
                    <div data-zanim='{"delay":0.4}'><a class="btn btn-lg btn-warning btn-capsule mt-4" href="{{ route('home') }}">Inicio</a></div>
                </div>
            </div>
            <!--/.row-->
        </div>
        <!--/.container-->
    </section>
</main> --}}
<div class="container px-1 px-md-4 py-5 mx-auto ">
    <div class="row page-error jumbotron bg-white mt-5 ">
        <div class="col-12 text-dark text-center ">
        <i class="far fa-frown icon-sad"></i>
            <h1>{{$errorCode}}</h1>
            <p>{{$message}}</p>
            <a class="btn btn-primary btn-lg" href="{{ url('/') }}">Inicio</a>
        </div>
    </div>
</div>
@endsection
