@extends('layouts.platform')

@section('custom-scripts')
    <script>
        $(function() {
            trackadmin.public.detail({

            })
        })
    </script>
@endsection

@section('content')

    <div class="row mt-5 mt-md-0 d-flex justify-content-between">
        <div class="col-12 mb-4">
            <h5>Detalles</h5>
        </div>
        <div class="col-12">
            <div id="mant-message"></div>
        </div>
        <div class="col-12  tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div class="row">
                    <div class="col-12 col-md-7 mt-4 mt-md-0 ">
                        <form id="form_maintenance" class="needs-validation" novalidate>
                            <input type="hidden" value="{{$detail->id}}" name="id">
                            {{-- <div class="form-group">
                                <label for="txtWhatsApp">WhatsApp</label>
                                <input type="text" class="form-control" id="txtWhatsApp" name="text_wsp"
                                    value="{{$detail->number_wsp}}">
                            </div> --}}
                            <div class="form-group">
                                <label for="txtGoogleMapsKey">Google Maps Key</label>
                                <input type="text" class="form-control" id="txtGoogleMapsKey" name="text_google"
                                    value="{{$detail->google_maps_key}}">
                            </div>
                            <div class="form-group">
                                <label for="txtLinkCita">Link Citas</label>
                                <input type="text" class="form-control" id="txtLinkCita" name="text_linkcita"
                                    value="{{$detail->link_cita}}">
                            </div>
                            <div class="form-group mt-4">
                                <button class="btn-lg btn btn-outline-secondary" id="btn-save"><i
                                        class="far fa-save"></i>
                                    Guardar Cambios</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-12 col-md-5">
                        <div class="custom-card">

                            <h5>Recomendaciones</h5>
                            <ul class="mt-4">
                                <li>Bienvenido a la administracion de Configuracion, por favor ingresa los datos necesarios para su
                                    respectiva gestión.</li><br>
                                <li>Recuerda que los textos con (<span style="color:red" >*</span>) indican que los campos son obligatorios.</li><br>
                                {{-- <li>Recuerda colocar el prefijo numerico antes del numero telefonico.</li> --}}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
