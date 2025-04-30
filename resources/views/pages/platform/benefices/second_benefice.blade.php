@extends('layouts.platform')

@section('custom-scripts')
    <script>
        $(function() {
            trackadmin.public.second_benefice({

            })
        })
    </script>
@endsection

@section('content')

    <div class="row mt-5 mt-md-0 d-flex justify-content-between">
        <div class="col-12 mb-4">
            <h5>Segundo Beneficio</h5>
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
                            <input type="hidden" value="{{ $content->id }}" name="id">
                            <div class="form-group">
                                <label for="txtPrincipal">Texto principal</label>
                                <input type="text" class="form-control" id="txtPrincipal" name="text_primary"
                                    value="{{ $content->text_primary }}" required>
                            </div>

                            <div class="form-group">
                                <label for="txtSecondary">Texto secundario</label>
                                <input type="text" class="form-control" id="txtSecondary" name="text_secondary"
                                    value="{{ $content->text_secondary }}" required>
                            </div>
                            <div class="form-group">
                                <label for="description">Descripción</label>
                                <textarea class="form-control" id="txtDescription" name="description" rows="3" required>{{ $content->description }}</textarea>
                            </div>
                            <div class="form-group">
                                <label for="txtButton1">Boton</label>
                                <input type="text" class="form-control" id="txtButton1" name="btn_1"
                                    value="{{ $content->btn_1 }}">
                            </div>
                            <div class="form-group">
                                <label for="txtLinkButton1">Link boton</label>
                                <input type="text" class="form-control" id="txtLinkButton1" name="link_btn_1"
                                    value="{{ $content->link_btn_1 }}">
                            </div>
                            <div class="form-group mt-4">
                                <button class="btn-lg btn btn-outline-secondary" id="btn-save"><i
                                        class="far fa-save"></i> Guardar Cambios</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-12 col-md-5">
                        <div class="custom-card">
                            <h5>Reconocimientos:</h5>
                            <ul class="mt-4">
                                <li>Bienvenido a la administración de beneficios , por favor ingresa los datos respectivos para su respectiva gestión.</li><br>
                                <li>Recuerda que los textos con (<span style="color:red">*</span>) indican que los campos son obligatorios. </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class=" tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div class="row">

                    <div class="col-12 col-md-7 mt-4 mt-md-0 ">
                        <div class="content-file-img mb-4 d-flex justify-content-end">
                            <button class="btn btn-outline-secondary btn-file btn-sm" img-content="img-1"
                                input-file="fileInputImage"><i class="fas fa-plus"></i> Cargar Imagen</button>
                            <input type="file" class="d-none" id="fileInputImage" lang="es"
                                content-id="{{ $content->id }}" accept=".jpg,.png,.jpeg,.svg">
                        </div>
                        <img src="{{ $content->image }}" alt="" class="img-fluid shadow "
                            id="img-1">

                        <div class="form-group mt-4">
                            <button class="btn-lg btn btn-outline-secondary" id="btn-save-image"><i
                                    class="far fa-save"></i>
                                Guardar Cambios</button>
                        </div>
                    </div>
                    <div class="col-12 col-md-5">
                        <h5>Reconocimientos:</h5>
                        <ul class="mt-4">
                            <li>El peso máximo permitido es de 2MB. Puedes usar herramientas de compresión para reducir el peso de la imagen.</li><br>
                            <li>Medidas para desktop y tablet : de 810px de ancho y 600pz de alto. </li><br>
                             
                            <li>El formato de la imagen debe ser jpg, png, jpeg, svg.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
