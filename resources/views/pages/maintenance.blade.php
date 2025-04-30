@extends('layouts.web')
@section('meta-data')
    <!-- Para el navegador -->
    <link href="{{ asset('images/logo_vertical_dark.jpg') }}" rel="image_src" />
    <meta content="{{ config('app.name', 'Audi') }} - Mantenimiento" property="og:title" />
    <meta content="Aqui se realiza la compra de nuestros productos de forma sencilla " property="og:description" />
    <meta content="{{ asset('images/logo_vertical_dark.jpg') }}" property="og:image" />
    <meta content="{{ url('/') }}" property="og:url" />
    <meta property="og:site_name" content="{{ url('/') }}" />
@endsection

@section('custom-scripts')
    <script
        src="https://maps.googleapis.com/maps/api/js?key={{ $detail->google_maps_key }}&libraries=places&v=weekly&channel=2"
        async></script>

    <script>
        $(document).ready(function() {
            $(function() {
                trackadmin.public.maintenance({
                    list: @json($workshopList, JSON_PRETTY_PRINT),
                    vehicles: @json($vehiclesList, JSON_PRETTY_PRINT),
                })
            })
        });
    </script>
@endsection

@section('custom-styles')
@endsection

@section('content')
    <section class="background-11 container-maintenance">
        <div class="container-fluid">
            <div class="col-12">
                <h4 class="margin-consult">Consultas Mantenimiento</h4>
            </div>
            <div class="col-12">
                <hr>
            </div>
        </div>
        <div class="container ">

            <div class="col-12 pt-3 pb-2" id="figure">
                <div class="one-circle d-flex flex-row">
                    <h6 class="text-white text-center pt-2">1</h6>
                    <p class="ml-4 mt-1 text-dark fw-700">Modelo</p>
                </div>
                <div class="two-circle d-flex flex-row">
                    <h6 class="text-white text-center pt-2">2</h6>
                    <p class="ml-4 mt-1 text-dark fw-700">Taller</p>
                </div>
            </div>

        </div>

        <div class="container mt-6">

            <form id="formRequired" class="needs-validation" novalidate>
                <div class="row" id="one">
                    <div class="col-12 ">
                        <h5>Complete los filtros</h5>
                    </div>
                    <div class="col-12 pt-3">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <div class="col-sm-12 p-0">
                                        <label for="ddlModel" class="col-form-label">Modelo</label>
                                        <select id="ddlModel" name="model" class="form-control" required>
                                            {{-- <option value=""></option>
                                            @foreach ($model as $item)
                                                <option value="{{ $item->model }}">{{ $item->model }}</option>
                                            @endforeach --}}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <div class="col-sm-12 p-0">
                                        <label for="ddlVersion" class="col-form-label">Versión</label>
                                        <select id="ddlVersion" name="version" disabled class="form-control  defaultSelect2"
                                            required>
                                            {{-- <option value=""></option>
                                            @foreach ($version as $item)
                                                <option value="{{ $item->version }}">{{ $item->version }}</option>
                                            @endforeach --}}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <div class="col-sm-12 p-0">
                                        <label for="ddlDeliveryYear" class="col-form-label">Año de Entrega</label>
                                        <select id="ddlDeliveryYear" name="delivery_year"
                                            class="form-control defaultSelect2 " required disabled>
                                            {{-- <option value=""></option>
                                            @foreach ($delivery_year as $item)
                                                <option value="{{ $item->delivery_year }}">{{ $item->delivery_year }}
                                                </option>
                                            @endforeach --}}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <div class="col-sm-12 p-0">
                                        <label for="ddlMileage" class="col-form-label">Kilometraje</label>
                                        <select id="ddlMileage" name="mileage" disabled class="form-control defaultSelect2 "
                                            required>
                                            {{-- <option value=""></option>
                                            @foreach ($mileage as $item)
                                                <option value="{{ $item->mileage }}">{{ $item->mileage }}</option>
                                            @endforeach --}}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="row" id="content-image">

                        </div>
                    </div>

                    <div class="col-auto my-1 mt-4" id="content-checkbox" style="display: none">
                        {{-- <div class="custom-control custom-radio p-0">
                            <label class="control control--checkbox pt-1">Sí.Ese es el modelo de mi auto
                                <input type="radio" id="inputCheckbox" name="inputCheckbox" />
                                <div class="control__indicator"></div>
                            </label>
                        </div> --}}
                    </div>

                </div>
            </form>

            <form id="formRequiredInput" class="needs-validation" novalidate>
                <div class="row pt-3" id="two" style="display:none">
                    <div class="col-12 col-md-5 mb-3 ">
                        <select name="" id="ddlDepartament" class="defaultSelect2">
                            <option value=""></option>
                            @foreach ($departamentList as $item)
                                <option value="{{ str_replace(' ', '_', $item->departament) }}">{{ $item->departament }}
                                </option>
                            @endforeach
                        </select>
                    </div>
                    <div class="col-12 col-lg-9 ">
                        <div id="map">

                        </div>
                    </div>
                    <div class="col-12 col-md-3" id="sidebar">

                        <h2>Talleres</h2>
                        <div id="places" class="mt-2"></div>

                    </div>
                    {{-- <div class="col-12" id="form_maintenance">

                    </div> --}}
                </div>
            </form>

            <div class="row mt-3" id="tree" style="display: none;">

                <!--  -->
                <div class="col-9 col-lg-10">
                    <h4 class="text-dark mb-2">Tu Modelo</h4>

                    <p class="mt-3 col-lg-3 mb-0">Modelo : <span id="showModel"></span></p>
                    <p class="col-lg-3 mb-0">Versión: <span id="showVersion"></span></p>
                    <p class="col-lg-4 mb-0">Kilometraje : <span id="showMileage"></span></p>
                    <p class="col-lg-3">Año de Entrega :
                        <span id="showDeliveryYear"></span>
                    </p>
                </div>
                <div class="col-3 col-md-2 text-right mt-1">
                    <a class="link-before" id="link-one" style="text-decoration:none">Editar</a>
                </div>
                <!--  -->
                <div class="col-9 col-lg-10">
                    <h4 class="text-dark">Taller</h4>
                    <p class="mt-3 col-12 mb-0">Taller: <span id="showNameWorkshop"></span>
                    </p>
                    <p class="col-12 mb-0 preline">Dirección : <span id="showDescription"></span>
                    </p>
                </div>
                <div class="col-3 col-md-2 text-right mt-1">
                    <a class="link-before" id="link-two" style="text-decoration:none">Editar</a>
                </div>
                <!--  -->
                <div class="col-12">
                    <hr>
                </div>

                <div class="col-12">
                    <div class="" id="message-info"></div>
                    <div class="row" id="content_information">
                        <div class="col-lg-6 mt-4">
                            <h4>¿Cuánto Costaría?</h4>
                            <p class="mt-3 p-0" id="showCost">
                            </p>
                        </div>
                        <div class="col-lg-6 mt-4 mb-4">
                            <h4>¿Cuánto tiempo demora?</h4>
                            <p class="mt-3 p-0" id="showTime"></p>
                        </div>

                        <div class="col-12">
                            <h4>Repuestos a Cambiar</h4>
                        </div>

                        <div class="col-12">

                            <div class="row row-cols-1 row-cols-md-2" id="content_replacement">
                               
                            </div>
                        </div>

                        <div class="col-12 pt-4 d-flex justify-content-center" id="button-maintenance">
                            <a href="" target="_blank" id="link_cita" class="btn btn-lg btn-dark">Agenda tu Cita</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 pt-4 d-flex justify-content-between justify-content-lg-end">
                    <button type="button" class="btn btn-dark mr-4" id="btn-before" style="display: none">Atrás</button>
                    <button type="button" class="btn btn-dark" id="btn-next">Siguiente</button>
                </div>
            </div>
        </div>
    </section>
@endsection
