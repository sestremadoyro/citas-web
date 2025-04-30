<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" type="image/png" href="{{ asset('images/favicon.ico') }}" />

    <title>Seat: CMS</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- Styles -->
    <link href="{{ asset('css/app_platform.css') }}" rel="stylesheet">
    <link href="{{ asset('css/app_platform_custom.css') }}" rel="stylesheet">

    @yield('custom-styles')

</head>

<body>
    <div class="wrapper">
        <div class="loading-custom" style="display: none">
            <div class="spinner-border text-light m-auto" role="status">
            </div>
        </div>
        <!-- Page Content  -->
        <div id="content">
            @include('components.platform.header')
            <div class="container">
                <div class="row d-flex justify-content-between">
                    @include('components.platform.sidebar')
                    <div class="col-12 col-md-9">
                        @yield('content')
                    </div>
                    <div class="col-12 col-md-12">
                        @yield('profile')
                    </div>
                </div>
            </div>
        </div>
        <!-- Scripts -->
        <script src="{{ asset('js/scripts_platform.js') }}"></script>
        <script src="{{ asset('js/public.js') }}"></script>
        @yield('custom-scripts')

</body>
</html>
