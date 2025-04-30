@extends('layouts.platform')

@section('custom-scripts')
    <script>
        $(function() {
            trackadmin.public.first_benefice({

            })
        })
    </script>
@endsection

@section('content')

    <div class="row mt-5 mt-md-0 d-flex justify-content-between">
        <div class="col-12 mb-4">
            <h5>Primer Beneficio</h5>
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
        </div>
    @endsection
