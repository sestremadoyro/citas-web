(function (trackadmin, $, global) {
    let maintenance = function (options) {
        let _settings = {
            list: [],
            pathVehiclesImageAws: null,
            vehicles: [],

        },
            _resources = {
                reorderVehicles: [],
                data: [],
                statusMant: 1,
                version: [],
                delivery: [],
                mileage: [],
            },
            _controls = {
                $tableSearch: null
            },
            _private = {
                initializeControls: () => {

                    setTimeout(() => {
                        _private.initMap();
                    }, 800);

                    console.info(_settings.list,'list');
                    _private.generateSelectDinamic();
                    _private.reorder(_settings.vehicles);
                },
                fillModel: (data) => {
                    $("#ddlModel").empty().html('<option></option>');
                    $("#ddlModel").select2({
                        data: data.map(item => {
                            return {
                                id: item.id,
                                text: item.model
                            };
                        }),
                        minimumResultsForSearch: Infinity,
                        theme: "bootstrap4",
                        placeholder: "Seleccione Modelo",
                        allowClear: false,
                        width: '100%',
                    });
                },
                fillVersion: (data) => {
                    $("#ddlVersion").empty().html('<option></option>');
                    $("#ddlVersion").select2({
                        data: data.map(item => {
                            return {
                                id: item.detail_id,
                                text: item.version
                            };
                        }),
                        minimumResultsForSearch: Infinity,
                        theme: "bootstrap4",
                        placeholder: "Seleccione Versión",
                        allowClear: false,
                        width: '100%',
                    });
                },
                fillDelivery: (data) => {
                    $("#ddlDeliveryYear").empty().html('<option></option>');
                    $("#ddlDeliveryYear").select2({
                        data: data.map(item => {
                            return {
                                id: item.delivery_year,
                                text: item.delivery_year
                            };
                        }),
                        minimumResultsForSearch: Infinity,
                        theme: "bootstrap4",
                        placeholder: "Seleccione año de entrega",
                        allowClear: false,
                        width: '100%',
                    });
                },
                fillMileage: (data) => {
                    $("#ddlMileage").empty().html('<option></option>');
                    $("#ddlMileage").select2({

                        data: data.map(item => {
                            return {
                                id: item.id,
                                text: item.mileage
                            };
                        }),
                        width: '100%',
                        minimumResultsForSearch: Infinity,
                        theme: "bootstrap4",
                        placeholder: "Seleccione Kilometraje",
                        allowClear: false
                    });
                },

                reorder: (data) => {
                    let model = trackadmin.public.utils.getduplicatesElementsInJson(data, "model");

                    model.filter(i => {

                        let items = data.filter(p => p.model == i.model);


                        let version = trackadmin.public.utils.getduplicatesElementsInJson(items, "version");

                        version.filter(p=> {
                            //let mileage = trackadmin.public.utils.getduplicatesElementsInJson(items, "mileage"); //kilometraje
                            let item1 = items.filter(n => n.version == p.version);
                            let delivery = trackadmin.public.utils.getduplicatesElementsInJson(item1, "delivery_year");
                            //console.info();
                            delivery.filter(n=>{
                                let item2 = item1.filter(x => x.delivery_year == n.delivery_year);
                                //console.info(item2,n.mileage,'**');
                                n.mileage =  trackadmin.public.utils.getduplicatesElementsInJson(item2,'mileage');
                            });
                            p.delivery = delivery;
                        });

                        i.version = version;
                    });

                    _private.fillModel(model);

                    _resources.reorderVehicles = model;
                   console.info(model, 'GROUP');
                },
                generateSelectDinamic: () => {
                    //Capturar valores de la caja de selección y mostrarlos
                    $("#ddlModel").on("select2:select", function (e) {
                        let valorModel = $("#ddlModel option:selected").text();
                        $("#showModel").html(valorModel);

                        $("#ddlVersion").val(null).trigger("change").prop("disabled", false);
                        $("#ddlMileage").val(null).trigger("change").prop("disabled", true);
                        $("#ddlDeliveryYear").val(null).trigger("change").prop("disabled", true);

                        let model = _resources.reorderVehicles.filter(i => i.id == $(this).val())[0];
                        console.info(model, 'model');
                        _resources.version = model.version;
                        _private.fillVersion(model.version);
                    });

                    $("#ddlVersion").on("select2:select", function (e) {

                        let valorVersion = $("#ddlVersion option:selected").text();
                        $("#showVersion").html(valorVersion);

                        $("#ddlDeliveryYear").val(null).trigger("change").prop("disabled", false);
                        $("#ddlMileage").val(null).trigger("change").prop("disabled", true);

                        let version = _resources.version.filter(i => i.detail_id == $(this).val())[0];

                        _resources.delivery = version.delivery;

                         console.info(_resources.delivery,'VERSION');
                        _private.fillDelivery(version.delivery);
                    });

                    $("#ddlDeliveryYear").on("select2:select", function (e) {
                        let valorDeliveryYear = $("#ddlDeliveryYear option:selected").text();
                        $("#showDeliveryYear").html(valorDeliveryYear);

                        $("#ddlMileage").val(null).trigger("change").prop("disabled", false);
                        let delivery = _resources.delivery.filter(i => i.delivery_year == $(this).val())[0];
                        _private.fillMileage(delivery.mileage);

                    });

                    $("#ddlMileage").on("select2:select", function (e) {
                        let valorMileage = $("#ddlMileage option:selected").text();
                        $("#showMileage").html(valorMileage);

                        //$("#ddlDeliveryYear").val(null).trigger("change").prop("disabled", false);

                        //let mileage = _resources.mileage.filter(i => i.id == $(this).val())[0];

                        //_resources.mileage = mileage.delivery;
                        //_private.fillDelivery(mileage.delivery);
                        _private.validChange();
                        
                        _private.loadDataApi();

                    });

                    
                },
                changeStageNext: () => {

                    if (_resources.statusMant == 1) {
                        $("#two").show();
                        $("#btn-before").show();
                        $("#one").hide();
                    }
                    if (_resources.statusMant == 2) {
                        $("#tree").show();
                        $("#btn-before").hide();
                        $("#two").hide();
                        $("#figure").hide();
                        $("#btn-next").hide();
                    }
                    if (_resources.statusMant == 3) {
                        $("#two").show();
                        $("#tree").hide();
                        $("#btn-before").show();
                        $("#btn-next").show();
                    }
                },

                changeStageBefore: () => {

                    if (_resources.statusMant == 2) {
                        $("#one").show();
                        $("#btn-before").hide();
                        $("#two").hide();
                        $("#figure").show();
                        $("#btn-next").show();
                    }
                    if (_resources.statusMant == 3) {
                        $("#two").show();
                        $("#tree").hide();
                        $("#figure").show();
                        $("#btn-before").show();
                        $("#btn-next").show();
                    }
                },

                changeStageOne: () => {

                    if (_resources.statusMant == 1) {
                        $("#two").show();
                        $("#btn-before").show();
                        $("#one").hide();
                    }
                    if (_resources.statusMant == 2) {
                        $("#tree").show();
                        $("#btn-before").hide();
                        $("#two").hide();
                        $("#figure").hide();
                        $("#btn-next").hide();
                    }

                    if (_resources.statusMant == 3) {
                        $("#one").show();
                        $("#btn-next").show();
                        $("#tree").hide();
                    }
                },

                fillFormMaintenance: data => {

                    let html = "";

                    data.filter(function (item, key) {
                        html += `
                        <div class="row">
                                <div class="col-12 col-7 mt-4 d-flex flex-row" id="heading-${item.id}">
                                    <div class="col-11">
                                        <h4 class="margin-name" data-toggle="collapse" data-target="#collapse-${item.id}" aria-expanded="${key == 0 ? 'true' : 'false'}" aria-controls="collapse-${item.id}"><i class="fas fa-map-marker-alt"></i>   ${item.name}</h4>
                                    </div>
                                    <div class="col-1 custom-control custom-radio p-0">
                                        <label class="control control--checkbox"><span>.</span>
                                            <input type="radio"  id="exampleRadios-${item.id}" name="exampleRadios" link=${item.link_cita} value="${item.id}" ${key == 0 ? 'checked' : ''}/>
                                            <div class="control__indicator"></div>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12 collapse preline ${key == 0 ? 'show' : ''}" id="collapse-${item.id}">
                                    <div class="row"> 
                                        <div class="col-12 col-md-6">
                                            ${item.description}
                                        </div>
                                        <div class="col-12 col-md-5">
                                        ${item.map_link}
                                        </div>
                                    </div>
                                </div>
                        </div>
                        `
                    });

                    $("#form_maintenance").html(html);
                },

                fillFormMaintenance_Replacement: item => {

                    let html = "";

                    item.repuestos.filter(data => {
                        html += `

                        <div class="col mb-4">
                                    <div class="card  h-100">
                                     
                                      <div class="card-body">
                                        <div class="row">
                                            <div class="col-3 pr-0">
                                            <img class="img-fluid" data-src-error="" width="100%" src="${data.enlaceImagen}" alt=""
                                            onerror="this.onerror=null; this.src='/images/image_not_found.png'; this.setAttribute('data-src-error','/images/image_not_found.png')"/>
                                            </div>
                                            <div class="col-9 ">
                                                <b class="card-title">${data.nombre}</b>
                                                <ul class="list-group list-unstyled mt-2">
                                                    <li>Cantidad : ${data.cantidad}</li>
                                                    <li>Precio : ${data.precio.toFixed(2)}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <p class="card-text mt-4">${data.descripcion}</p>
                                      </div>
                                    </div>
                                  </div>`;
                    });

                    $("#content_replacement").html(html);

                    $("#showCost").text(item.precioTotal);
                    $("#showTime").text(item.tiempoTotal);
                },

                fillFormMaintenance_ContentImage: data => {

                    let html = `

                    <div class="container pt-3">
                        <h4 class="">¿Éste es tu auto?</h4>
                    </div>`;

                    data.filter(item => {

                        html += `
                        
                        <div class="col-lg-6 pt-4">
                            <img class="img-fluid" src='${item.image}' width="100%"
                                 style="border:0;" allowfullscreen="" loading="lazy">
                        </div>
                        `
                    })

                    $("#content-image").html(html);
                },

                /* loadDataItem: departament => {
                    trackadmin.public.api.maintenance.getWorkshopsByDepartament(departament).then(item => {
                        _private.fillFormMaintenance(item);
                        _resources.data = item;
                        global.utils.hideLoader();
                    });
                }, */

                loadDataApi: data => {

                    let model = $("#ddlModel option:selected").text();
                    let version = $("#ddlVersion option:selected").text();
                    let mileage = $("#ddlMileage option:selected").text();
                    let deliveryYear = $("#ddlDeliveryYear option:selected").text();
                    let workshop = $("#showNameWorkshop").text();

                    $("#content_information").hide();
                    $('#preloader').show();
                    //global.utils.showLoader();
                    
                    trackadmin.public.api.maintenance.getMaintenance(model, version, mileage, deliveryYear, workshop).then(item => {
                        //console.info(item,"aa!!");
                        $('#preloader').hide();
                        $("#message-info").hide();

                        if (item != null) {
                            $("#content_information").show('fast');
                            _private.fillFormMaintenance_Replacement(item);

                        } else {
                            $("#message-info").show();
                            $("#message-info").html("<h5>No hay repuestos disponibles.</h5>");
                        }

                        //global.utils.hideLoader();
                    });
                },

                validChange: () => {

                    let model = $("#ddlModel option:selected").text();
                    let mileage = $("#ddlMileage option:selected").text();
                    let version = $("#ddlVersion option:selected").text();
                    let deliveryYear = $("#ddlDeliveryYear option:selected").text();

                    if (model != "" && mileage != "" && version != "" && deliveryYear != "") {
                        $('#preloader').show();
                        trackadmin.public.api.maintenance.showVehiclesImage(model, version, mileage, deliveryYear).then(item => {
                            $('#preloader').hide();
                            if (item.length != 0) {
                                $("#content-image").show('fast');
                                //$("#content-checkbox").show();
                                _private.fillFormMaintenance_ContentImage(item);
                            } else {
                                //$("#content-image").hide();
                                //$("#content-image").html("<h5 class='mt-4'>No hay elementos disponibles. Intentelo de nuevo.<h5>");
                                //$("#content-checkbox").hide();
                                $("#content-image").show('fast');
                            }
                            console.info("***");
                            $("#inputCheckbox").prop('checked', false);

                        });
                    }
                },
                initMap: () => {
                    // Create the map.


                    if (_settings.list.length != 0) {
                        //const pyrmont = { lat: list.lng, lng: list.lat };
                        let list = _settings.list[0];
                        let latLng = new google.maps.LatLng(list.lat, list.lng);
                        console.info(latLng,list,'***');
                        //console.info(list,list.lat,list.lng,latLng,"data");
                        const map = new google.maps.Map(document.getElementById("map"), {
                            center: latLng,
                            zoom: 16,
                            mapId: "8d193001f940fde3",
                        });
                        // Create the places service.
                        const service = new google.maps.places.PlacesService(map);

                        // Perform a nearby search.
                        service.nearbySearch({
                            location: latLng,
                            radius: 500,
                            type: "store"
                        },
                            (results, status, pagination) => {
                                if (status !== "OK" || !results) return;
                                _private.addPlaces(results, map);
                            }
                        );
                    }
                    //_resources.map = map;
                },
                addPlaces: (places, map) => {
                    //console.info(places);
                    const placesList = document.getElementById("places");

                    _settings.list.filter(function (i, key) {
                        const infoWindow = new google.maps.InfoWindow();
                        const image = {
                            //Estilos para el icono
                            url: '/images/favicon.ico',
                            //size: new google.maps.Size(71, 71),
                            origin: new google.maps.Point(0, 0),
                            anchor: new google.maps.Point(17, 34),
                            scaledSize: new google.maps.Size(30, 30),
                        };

                        let latLng = new google.maps.LatLng(i.lat, i.lng);
                        console.info(i.lat, i.lng,i.name);
                        let marker = new google.maps.Marker({
                            //latLng,
                            position: latLng,
                            map,
                            title: i.name,
                            icon: image,
                            id: i.id
                            //label: "<h2>a</h2>",
                            //optimized: false,
                        });

                        marker.addListener("click", () => {
                            //infoWindow.close();
                            infoWindow.setContent(marker.getTitle());
                            infoWindow.open(marker.getMap(), marker);
                            $("#places").scrollTop(0);
                            //console.info(`#content-radio-${marker.id}`, '**5665');
                            var afterTop = $(`#content-radio-${marker.id}`).position().top;
                            console.info(afterTop, $("#places").height(), "*");
                            $("#places").scrollTop(afterTop);

                            $(`.input-checked`).prop("checked", false);
                            $(`#exampleRadios-${marker.id}`).prop("checked", true);

                            $(`.card`).removeClass("active");
                            $(`#content-radio-${marker.id}`).addClass("active");
                        });

                        // if (key == 0) {
                        //==
                        //infoWindow.close();

                        infoWindow.setContent(marker.getTitle());
                        infoWindow.open(marker.getMap(), marker);
                        //==    
                        //}

                        const li = document.createElement("div");
                        //                        li.classList.add("content-wrs");
                        li.classList.add("card", "mt-2");
                        li.setAttribute("input", `exampleRadios-${i.id}`);
                        //li.setAttribute("content", `content-radio-${i.id}`);
                        li.setAttribute("id", `content-radio-${i.id}`);
                        li.setAttribute("departament", `${i.departament.replace(" ", "_")}`);
                        //li.textContent = i.title;
                        //li.textContent = i.title;
                        let check = (id, text, departament, link, key, phone) => `
                          <div class="card-body">
                            <div class="custom-control custom-radio custom-control-inline mb-2">
                            <input type="radio" id="exampleRadios-${id}"  name="exampleRadios" ${key == 0 ? 'checked' : ''} class="custom-control-input input-checked" link="${link}" value="${id}">
                            <label class="custom-control-label" for="exampleRadios-${id}">${text}</label>
                            </div>
                            <br>
                            <small>${departament}</small>
                            <br>
                             <a href="${link}" target="_blank" class=""><i class="fas fa-external-link-alt"></i> Agendar cita</a>
                            <br>
                            <span><a href="https://wa.me/${phone.replace(" ", "")}/" target="_blank" class=""><i class="fab fa-whatsapp text-success"></i> ${phone}</a> </span>
                        </div>
                        `;

                        li.innerHTML = `${check(i.id, i.name, i.departament, i.link_cita, key, i.phone)}`;
                        placesList.appendChild(li);
                        li.addEventListener("click", () => {
                            map.setCenter(latLng);
                            //============
                            //infoWindow.close();
                            infoWindow.setContent(marker.getTitle());
                            infoWindow.open(marker.getMap(), marker);
                            //============
                            $(`.card`).removeClass("active");
                            map.setCenter(latLng);
                            let input = li.getAttribute("input");
                            let content = li.getAttribute("id");
                            //console.info($(this),"content",content);
                            console.info(latLng, 'input');
                            $(`.input-checked`).prop("checked", false);
                            $(`#${input}`).prop("checked", true);
                            $(`#${content}`).addClass("active");
                        });

                        //console.info(i.lat,i.lng);    
                    });
                    setTimeout(() => {
                        $(`#places .card`).each(function (key, item) {
                            if(key == 0){
                                $(this).click();
                            }
                        });    
                    }, 650);
                    /**/
                },

                bindEvents: function () {

                    //Botón Siguiente
                    $("#btn-next").on("click", () => {

                        let model = $("#ddlModel").val();
                        let mileage = $("#ddlMileage").val();
                        let version = $("#ddlVersion").val();
                        let deliveryYear = $("#ddlDeliveryYear").val();
                        let selected = false;

                        if (model != "" && mileage != "" && version != "" && deliveryYear != "") {
                            selected = true;
                        } else {
                            selected = false;
                        }

                        if (_resources.statusMant == 2) {
                            if ($("input[name='exampleRadios']").is(':checked')) {

                                let value = $("input[name='exampleRadios']:checked").val();

                                let data = _settings.list.filter(item => item.id == value)[0];

                                let link = $("input[name='exampleRadios']:checked").attr('link');

                                console.info(data, _settings.list, value);

                                $("#showNameWorkshop").text(data.name)
                                $("#showDescription").text(data.description);

                                _private.changeStageNext();

                                _resources.statusMant = _resources.statusMant + 1;

                                _private.loadDataApi();

                                $("#link_cita").attr("href", link);

                            }

                            $("#formRequiredInput").valid()
                        }

                        if (_resources.statusMant == 1) {

                            selected = $("#formRequired").valid();

                            if (selected) {

                                _private.changeStageNext();

                                _resources.statusMant = _resources.statusMant + 1;

                            }

                            
                        }

                    });

                    //Botón Atrás
                    $("#btn-before").on("click", () => {

                        _private.changeStageBefore();

                        _resources.statusMant = _resources.statusMant - 1;

                        console.info(_resources.statusMant)

                    });

                    //Editar en la primera fila
                    $("#link-one").on("click", () => {

                        _private.changeStageOne();

                        _resources.statusMant = 1;

                    });
                    //Editar en la segunda fila
                    $("#link-two").on("click", () => {

                        _private.changeStageBefore();

                        _resources.statusMant = _resources.statusMant - 1;

                    });

                    //Mostrar los datos en la caja de selección por departamento
                    $("#ddlDepartament").on("change", function (e) {
                        let value = $(this).val();
                        $("#places .card").each(function (key, item) {
                            let departament = $(this).attr('departament');
                            if (departament == value) {
                                $(this).show();
                            } else {
                                $(this).hide();
                            }
                        });

                        $(`#places .card[departament=${value}]`).each(function (key, item) {
                            if (key == 0) {
                                $(this).find('input').prop('checked', true);
                                $(this).click();
                            }
                        });
                    });
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
    trackadmin.public.maintenance = maintenance;
})((window.trackadmin = window.trackadmin || {}), $, (window.global = window.global || {}));