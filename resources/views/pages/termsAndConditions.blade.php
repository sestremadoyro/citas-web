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
    "page_title"=>'',
    "title"=>$content->text_secondary,
    'sub_title' => $content->text_primary,
    'message' => "",
    'banner' => $content->image,
])

<section class="background-11 ">
    <div class="container">
        <div class="row">
            {!! nl2br($content->description) !!}
        </div>
    </div>
</section>
@endsection