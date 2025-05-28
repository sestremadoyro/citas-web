@extends('layouts.platform')

@section('custom-scripts')
    <script>
        $(function() {
            trackadmin.public.maintenance({

            })
        })
    </script>
@endsection

@section('custom-styles')
    <style>
        .icon-size{
            width: 60px !important;
            height: 60px !important;
            box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 1%) !important;
        }
    </style>
@endsection    


@section('content')

    <div class="row mt-5 mt-md-0 d-flex justify-content-between">
        <div class="col-12 mb-4">
            <h5>Consulta de Mantenimiento</h5>
        </div>
        <div class="col-12">
            <div id="mant-message"></div>
        </div>
        <div class="col-12">
            <ul class="nav nav-pills mb-4 justify-content-center" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                        aria-controls="pills-home" aria-selected="true">Textos</a>
                </li>
            </ul>
        </div>
        <div class="col-12  tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div class="row">
                    <div class="col-12 col-md-7 mt-4 mt-md-0 ">

                        <form id="form_maintenance" class="needs-validation" novalidate>
                            <input type="hidden" value="{{ $maintenance->id }}" name="id">
                            <input type="hidden" value="{{ $section1->id }}" id="section1_id" name="section1_id">
                            <input type="hidden" value="{{ $section2->id }}" id="section2_id" name="section2_id">
                            <input type="hidden" value="{{ $section1->title }}" id="section1_title" name="section1_title">
                            <input type="hidden" value="{{ $section2->title }}" id="section2_title" name="section2_title">
                            <div class="col-12 mb-4 pl-0">
                                <h6>{{ $section1->title }}</h6>
                            </div>
                            <div class="form-group">
                                <label for="txtDescription1">Descripcion</label>
                                <input type="text" class="form-control" id="txtDescription1" name="description_1"
                                    value="{{ $section1->description }}">
                            </div>
                            <div class="col-12 mb-4 pl-0">
                                <h6>{{ $section2->title }}</h6>
                            </div>
                            <div class="form-group">
                                <label for="txtDescription2">Descripción</label>
                                <input type="text" class="form-control" id="txtDescription2" name="description_2"
                                    value="{{ $section2->description }}">
                            </div>
                            <div class="form-group mt-4">
                                <button class="btn-lg btn btn-outline-secondary" id="btn-save"><i
                                        class="far fa-save"></i> Guardar
                                    Cambios</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-12 col-md-5">
                        <div class="custom-card">
                            <h5>Recomendaciones</h5>
                            <ul class="mt-4">
                                <li>Bienvenido a la administracion de la pagina de Consulta de Mantenimiento, por favor ingresa los datos necesarios para su respectiva gestión.</li><br>
                                <li>Recuerda que los textos con (<span style="color:red" >*</span>) indican que los campos son obligatorios.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
@endsection
