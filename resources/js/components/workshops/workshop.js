//const { inArray } = require("jquery");
//const { isArray } = require("lodash");
(function (trackadmin, $, global) {
    let workshops = function (options) {
        let _settings = {

        },
            _resources = {
                statusMant: "VIEW",
                formPrimary: '#form_maintenance',
                workshopDelete: [],
                resourseMap: null,
                markers: [],
                ubication: null,
                currentId: null,
                haightAshbury: { lat: -11.9812584, lng: -76.9887876 }
            },
            _controls = {
                $tableSearch: null
            },
            _private = {
                initializeControls: () => {
                    // $(_resources.formPrimary).validate(trackadmin.public.utils.formRulesValidate(true));
                    _private.initMap();
                },
                saveImage: () => {
                    var dataFiles = new FormData();
                    let data = [];
                    $(`.content-images .item-image`).each(function (key, item) {
                        let input = $(this).find('input[type=file]');
                        let file = input[0].files[0];
                        let fileName = file != undefined ? file.name : null;

                        dataFiles.append(`files[${key}]`, file);
                        data.push({
                            mainId: input.attr("item_id"),
                            imageName: fileName
                        });
                    });
                    dataFiles.append('workshops', JSON.stringify(data));
                    //console.info(dataFiles, data, "DATA");
                    global.utils.confirm({
                        title: trackadmin.public.messages.general.TITLE_SAVE,
                        message: trackadmin.public.messages.general.CONFIRM_TO_SAVE,
                        funcYes: () => {
                            global.utils.showLoader();
                            trackadmin.public.api.workshops.save_image(dataFiles).then(item => {
                                global.utils.hideLoader();
                                global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin.public.messages.general.CONFIRM_INFO_SAVED);
                            });
                        }
                    });
                },
                loadDataToSave: () => {
                    let generateData = [];
                    $(".list .content").each(function () {
                        let item = {
                            id: $(this).find('.txtId').val(),
                            name: $(this).find('.txtName').val(),
                            description: $(this).find('.txtDescription').val(),
                            departament: $(this).find('.txtDepartament').val(),
                            phone: $(this).find('.txtPhone').val(),
                            link_cita: $(this).find('.txtLink_cita').val(),
                            direction: $(this).find('.txtMap_link').val(),
                            lat: $(this).find('.txtLat').val(),
                            lng: $(this).find('.txtLng').val(),

                        }
                        generateData.push(item);

                    });
                    console.info(generateData, 'generateData');
                    return generateData;
                },
                initMap: () => {

                    const map = new google.maps.Map(document.getElementById("map"), {
                        center: _resources.haightAshbury,
                        zoom: 13,
                    });

                    const input = document.getElementById("pac-input");
                    // Specify just the place data fields that you need.
                    const autocomplete = new google.maps.places.Autocomplete(input, {
                        fields: ["place_id", "geometry", "formatted_address", "name"],
                    });

                    autocomplete.bindTo("bounds", map);
                    //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

                    const infowindow = new google.maps.InfoWindow();
                    const infowindowContent = document.getElementById("infowindow-content");

                    infowindow.setContent(infowindowContent);

                    autocomplete.addListener("place_changed", () => {
                        _private.removeMarkers();
                        infowindow.close();

                        const place = autocomplete.getPlace();

                        //console.log(place)
                        console.info(place.geometry.location.lng(), place.geometry.location.lat());
                        //console.info(place.geometry.location.lat());

                        let valueLongitud = place.geometry.location.lng();

                        let valueLatitud = place.geometry.location.lat();

                        const marker = new google.maps.Marker({
                            position: place.geometry.location,
                            map: map
                        });

                        _resources.ubication = {
                            latitud: valueLatitud,
                            longitud: valueLongitud,
                        }

                        if (!place.geometry || !place.geometry.location) {
                            return;
                        }

                        if (place.geometry.viewport) {
                            map.fitBounds(place.geometry.viewport);
                        } else {
                            map.setCenter(place.geometry.location);
                            map.setZoom(17);
                        }

                        _resources.markers.push(marker);
                    });

                    _resources.resourseMap = map;

                },
                editMap: (direction, lng, lat) => {

                    _private.removeMarkers();
                    //console.info(lng,lat,'*');
                    let latLng = new google.maps.LatLng(lng, lat);

                    $("#pac-input").val(direction);

                    _resources.resourseMap.setCenter(latLng);

                    const marker = new google.maps.Marker({
                        position: latLng,
                        //label: labels[labelIndex++ % labels.length],
                        map: _resources.resourseMap,
                    });

                    _resources.markers.push(marker);
                },
                removeMarkers: () => {
                    for (var i = 0; i < _resources.markers.length; i++) {
                        _resources.markers[i].setMap(null);
                    }
                    _resources.markers = [];
                },
                functionOpenMap: (input) => {
                    let inputName = input.attr("content");
                    let id = input.attr("item_id");
                    let direction = $(`#${inputName}`).val();
                    _resources.currentId = id;

                    if (direction != null && direction != '') {
                        let lng = $(`#content_${id} .txtLat`).val();
                        let lat = $(`#content_${id} .txtLng`).val();
                        //console.info(lng, lat, "");
                        _private.editMap(direction, lng, lat);
                    } else {
                        let location = _resources.haightAshbury;
                        let latLng = new google.maps.LatLng(location.lat, location.lng);
                        _resources.resourseMap.setCenter(latLng);
                        _private.removeMarkers();
                        $("#pac-input").val("");
                    }
                    $("#modalMap").modal('show');
                },
                bindEvents: function () {
                    $("#btn-save-image").on("click", () => {
                        _private.saveImage();
                    });

                    $("#btn-map-save").on("click", () => {
                        let direction = $("#pac-input").val();
                        let inputLat = $(`#content_${_resources.currentId} .txtLat`);
                        let inputLng = $(`#content_${_resources.currentId} .txtLng`);
                        //let inputDirection = $(`#txtDirection_${_resources.currentId}`);
                        $(`#txtDirection_${_resources.currentId}`).val(direction);
                        console.info(inputLat, inputLng, `#txtDirection_${_resources.currentId}`, direction);
                        //inputDirection.val(direction);

                        if (direction == "") {
                            //inputDirection.val(direction);
                            global.utils.showNotyInLineWarning($("#mant-message-map"), "No se permite valores vacios");
                            inputLat.val("");
                            inputLng.val("");

                        } else {
                            //inputDirection.val(direction);

                            inputLat.val(_resources.ubication.latitud);
                            inputLng.val(_resources.ubication.longitud);
                            $("#modalMap").modal("hide");
                        }

                        
                    });
                    $(".btn-open-map").on("click", function (e) {
                        _private.functionOpenMap($(this));
                    });
                    $("#btn-save").on("click", () => {
                        let dataSave = _private.loadDataToSave();
                        let validate = $('#form_maintenance').valid();

                        if (validate) {
                            global.utils.confirm({
                                title: trackadmin.public.messages.general.TITLE_SAVE,
                                message: trackadmin.public.messages.general.CONFIRM_TO_SAVE,
                                funcYes: () => {
                                    global.utils.showLoader();
                                    trackadmin.public.api.workshops.save(dataSave).then(item => {
                                        global.utils.hideLoader();
                                        location.reload();
                                        global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin.public.messages.general.CONFIRM_INFO_SAVED);
                                    });
                                }
                            });
                        }
                    });

                    $(".btn-delete").on("click", function (e) {
                        let itemId = $(this).attr("itemId");
                        console.info(itemId, 'itemId');
                        global.utils.confirm({
                            title: trackadmin.public.messages.general.TITLE_DELETE,
                            message: trackadmin.public.messages.general.CONFIRM_TO_DELETE,
                            funcYes: () => {

                                global.utils.showLoader();//Abre pantalla de carga
                                trackadmin.public.api.workshops.deleteWorkshop(itemId).then(item => {

                                    $(`#content_${itemId}`).remove();

                                    global.utils.hideLoader();//Elimina pantalla de carga
                                    global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin.public.messages.general.CONFIRM_INFO_DELETED);
                                });
                            }
                        });
                    });

                    $("#add-workshop").on("click", () => {
                        let count = $(".content").length + 1;
                        let html = `
                        <div class="content" id="content_${count}">
                                <input type="hidden" class="txtId" value="-${count}" name="id-${count}">
                                <input type="hidden" class="txtLat" value="${count}" name="lat">
                                    <input type="hidden" class="txtLng" value="${count}" name="lng">

                                <div class="form-group">
                                    <h5>Taller ${count}</h5>
                                    <label for="name">Nombre del Taller</label>
                                    <input type="text" class="form-control txtName" name="name-${count}"
                                        value="" required>
                                </div>
                                <div class="form-group">
                                    <label for="description">Descripción</label>
                                    <textarea class="form-control txtDescription" name="description-${count}" rows="3" required></textarea>
                                </div>
                                <div class="form-group">
                                        <label for="departament">Departamento</label>
                                        <input type="text" class="form-control txtDepartament" name="departament-${count}"
                                            value="" required>
                                </div>
                                <div class="form-group">
                                    <label for="phone">Telefono</label>
                                    <input type="text" class="form-control txtPhone" name="phone-${count}" name="phone" required>
                                </div>
                                
                                <div class="form-group">
                                    <label for="link_cita">Enlace de Cita</label>
                                    <input type="text" class="form-control txtLink_cita" name="link_cita-${count}" required>
                                </div>
                                <div class="form-group">
                                   <label for="map_link">Insertar Ubicación</label>
                                   <div class="input-group mb-3">
                                       <input type="text" class="form-control txtMap_link" value=""
                                           id="txtDirection_${count}" required
                                           aria-describedby="btn-modal-map-${count}" readonly name="direction${count}">
                                       <div class="input-group-append">
                                           <button class="btn btn-outline-secondary btn-open-map"
                                               item_id="${count}" type="button"
                                               content="txtDirection_${count}" lng=""
                                               lat="" name="map_link"
                                               id="btn-modal-map-${count}">
                                               <i  class="fas fa-map-marker-alt"></i>
                                           </button>
                                       </div>
                                   </div>
                                </div>
                        </div>`;

                        $("#form_maintenance").append(html);

                        $(`#btn-modal-map-${count}`).on("click", function (e) {
                            _private.functionOpenMap($(this));
                        });

                    })
                },
                init: async function () {
                    $.extend(_settings, options || {});
                    //global.utils.showLoader();
                    _private.initializeControls();
                    _private.bindEvents();
                }
            };
        _private.init();
    };
    trackadmin.public = trackadmin.public || {};
    trackadmin.public.workshops = workshops;
})((window.trackadmin = window.trackadmin || {}), $, (window.global = window.global || {}));