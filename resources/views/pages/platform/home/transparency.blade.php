@extends('layouts.platform')

@section('custom-scripts')
    <script>
        $(function() {
            trackadmin.public.transparency({

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
            <h5>Transparencia</h5>
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
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
                        aria-controls="pills-profile" aria-selected="false">Imágenes</a>
                </li>
            </ul>
        </div>
        <div class="col-12  tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div class="row">
                    <div class="col-12 col-md-7 mt-4 mt-md-0 ">

                        <form id="form_maintenance" class="needs-validation" novalidate>
                            <input type="hidden" value="{{ $transparency->id }}" name="id">
                            <input type="hidden" value="{{ $section4->id }}" id="section4_id" name="section4_id">
                            <input type="hidden" value="{{ $section5->id }}" id="section5_id" name="section5_id">
                            <input type="hidden" value="{{ $section6->id }}" id="section6_id" name="section6_id">
                            <div class="form-group">
                                <label for="txtPrincipal">Texto principal</label>
                                <input type="text" class="form-control" id="txtPrincipal" name="text_primary"
                                    value="{{ $transparency->text_primary }}">
                            </div>

                            <div class="form-group">
                                <label for="txtSecondary">Texto secundario</label>
                                <input type="text" class="form-control" id="txtSecondary" name="text_secondary"
                                    value="{{ $transparency->text_secondary }}">
                            </div>
                            <div class="col-12 mb-4 pl-0">
                                <h6>Seccion 1</h6>
                            </div>
                            <div class="form-group">
                                <label for="txtTitle1">Titulo</label>
                                <input type="text" class="form-control" id="txtTitle1" name="title_1"
                                    value="{{ $section4->title }}">
                            </div>
                            <div class="form-group">
                                <label for="txtDescription1">Descripcion</label>
                                <input type="text" class="form-control" id="txtDescription1" name="description_1"
                                    value="{{ $section4->description }}">
                            </div>
                            <div class="col-12 mb-4 pl-0">
                                <h6>Seccion 2</h6>
                            </div>
                            <div class="form-group">
                                <label for="txtTitle2">Titulo</label>
                                <input type="text" class="form-control" id="txtTitle2" name="title_2"
                                    value="{{ $section5->title }}">
                            </div>
                            <div class="form-group">
                                <label for="txtDescription2">Descripción</label>
                                <input type="text" class="form-control" id="txtDescription2" name="description_2"
                                    value="{{ $section5->description }}">
                            </div>
                            <div class="col-12 mb-4 pl-0">
                                <h6>Seccion 3</h6>
                            </div>
                            <div class="form-group">
                                <label for="txtTitle3">Titulo</label>
                                <input type="text" class="form-control" id="txtTitle3" name="title_3"
                                    value="{{ $section6->title }}">
                            </div>
                            <div class="form-group">
                                <label for="txtDescription3">Descripcion</label>
                                <input type="text" class="form-control" id="txtDescription3" name="description_3"
                                    value="{{ $section6->description }}">
                            </div>
                            <div class="col-12 mb-4 pl-0">
                                <h6>Boton general</h6>
                            </div>
                            <div class="form-group">
                                <label for="txtButtonGeneral">Boton </label>
                                <input type="text" class="form-control" id="txtButtonGeneral" name="btn_general"
                                    value="{{ $transparency->btn_general }}">
                            </div>
                            <div class="form-group">
                                <label for="txtLinkButtonGeneral">Link boton </label>
                                <input type="text" class="form-control" id="txtLinkButtonGeneral" name="link_btn_general"
                                    value="{{ $transparency->link_btn_general }}">
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
                                <li>Bienvenido a la administracion de Inicio, por favor ingresa los datos necesarios para su
                                    respectiva gestión.</li><br>
                                <li>Recuerda que los textos con (<span style="color:red" >*</span>) indican que los campos son obligatorios.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div class=" tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div class="row">

                    <div class="col-12 col-md-7 mt-4 mt-md-0 content-images">
                        <!--  -->
                        <div class="item-image mt-4">
                                <div class="content-file-img mb-4 d-flex justify-content-between align-items-center">
                                    <h5>Seccion 1</h5>
                                    <button class="btn btn-outline-secondary btn-file btn-sm" img-content="img-{{ $section4->id }}" input-file="fileInputImage_{{ $section4->id }}">
                                        <i class="fas fa-plus"></i> Cargar Imagen
                                    </button>
                                    <input type="file" class="d-none input-file" id="fileInputImage_{{ $section4->id }}" lang="es" item_id="{{ $section4->id }}" accept=".jpg,.png,.jpeg,.svg">
                                </div>
                                <div class=" pr-5">
                                    <img src="{{$section4->image}}" alt="" class="img-fluid shadow icon-size" id="img-{{ $section4->id }}">
                                </div>
                                
                            </div>
                        <!--  -->
                        <!--  -->
                        <div class="item-image mt-4">
                                <div class="content-file-img mb-4 d-flex justify-content-between align-items-center">
                                    <h5>Seccion 2</h5>
                                    <button class="btn btn-outline-secondary btn-file btn-sm" img-content="img-{{ $section5->id }}" input-file="fileInputImage_{{ $section5->id }}">
                                        <i class="fas fa-plus"></i> Cargar Imagen
                                    </button>
                                    <input type="file" class="d-none input-file" id="fileInputImage_{{ $section5->id }}" lang="es" item_id="{{ $section5->id }}" accept=".jpg,.png,.jpeg,.svg">
                                </div>
                                <div class=" pr-5">
                                    <img src="{{$section5->image}}" alt="" class="img-fluid shadow icon-size" id="img-{{ $section5->id }}">
                                </div>
                                
                            </div>
                        <!--  -->
                        <!--  -->
                        <div class="item-image mt-4">
                                <div class="content-file-img mb-4 d-flex justify-content-between align-items-center">
                                    <h5>Seccion 3</h5>
                                    <button class="btn btn-outline-secondary btn-file btn-sm" img-content="img-{{ $section6->id }}" input-file="fileInputImage_{{ $section6->id }}">
                                        <i class="fas fa-plus"></i> Cargar Imagen
                                    </button>
                                    <input type="file" class="d-none input-file" id="fileInputImage_{{ $section6->id }}" lang="es" item_id="{{ $section6->id }}" accept=".jpg,.png,.jpeg,.svg">
                                </div>
                                <div class=" pr-5">
                                    <img src="{{$section6->image}}" alt="" class="img-fluid shadow icon-size" id="img-{{ $section6->id }}">
                                </div>
                                
                            </div>
                        <!--  -->
                        <div class="form-group mt-4">
                            <button class="btn-lg btn btn-outline-secondary" id="btn-save-image"><i
                                    class="far fa-save"></i>
                                Guardar Cambios</button>
                        </div>
                    </div>
                    <div class="col-12 col-md-5">
                        <h5>Recomendaciones</h5>
                        <ul class="mt-4">
                            <li>El peso máximo permitido es de 2MB. Puedes usar herramientas de compresión para reducir
                                el peso de la imagen.</li><br>
                            <li>Medidas para iconos: de 60px de ancho y 60px de alto.</li><br>
                            <li>El formato de la imagen debe ser jpg, png, jpeg, svg.</li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    </div>
@endsection
