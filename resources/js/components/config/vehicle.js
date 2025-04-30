(function (trackadmin, $, global) {
    let vehicle = function (options) {
        let _settings = {
            pathImagesVehiclesAws: null
        },
            _resources = {
                statusMant: "VIEW",
                dateFormat: trackadmin.public.utils.dateFormatAndHours(),
                $tableSearch: null,
                deleteList: [],
                deleteDetails: [],
                vehiclesList: []
            },
            _controls = {
                /*$tableSearch: null*/
            },
            _private = {
                initializeControls: () => {
                    _private.getVehicles();
                    global.utils.hideLoader();
                    //_private.fillTableSearch();
                },
                getVehicles: () => {
                    trackadmin.public.api.vehicles.getVehicles().then(item => {

                        let model = trackadmin.public.utils.getduplicatesElementsInJson(item, "model");

                        model.filter(i => {
                            let n = item.filter(p => p.id == i.id && p.version != null);
                            i.content = n,
                                i.count_details = n.length
                        });

                        _resources.vehiclesList = model;
                        _private.reorder(item);
                        _private.fillTableSearch(model);
                    });
                },
                reorder: (data) => {
                    let model = trackadmin.public.utils.getduplicatesElementsInJson(data, "model");
                    let model1 = model;
                    /* let version =  trackadmin.public.utils.getduplicatesElementsInJson(data, "version");
                    let mileage =  trackadmin.public.utils.getduplicatesElementsInJson(data, "mileage"); //kilometraje
                    let delivery =  trackadmin.public.utils.getduplicatesElementsInJson(data, "delivery_year"); //año de entrega */


                    model.filter(i => {
                        //let version = trackadmin.public.utils.getduplicatesElementsInJson(model1, "version");
                        //let version1 = version;
                        //let mileage =  trackadmin.public.utils.getduplicatesElementsInJson(version, "mileage"); //kilometraje

                        /* version.filter(p=>{
                            p.mileage = mileage.filter(o=> p.version == o.version);
                        }); */
                        let items = data.filter(p => p.model == i.model);
                        //i.items = items;

                        let version = trackadmin.public.utils.getduplicatesElementsInJson(items, "version");

                        version.filter(p => {
                            //let mileage = trackadmin.public.utils.getduplicatesElementsInJson(items, "mileage"); //kilometraje
                            let item1 = items.filter(n => n.version == p.version);
                            let delivery = trackadmin.public.utils.getduplicatesElementsInJson(item1, "delivery_year");
                            //console.info();
                            delivery.filter(n => {
                                let item2 = item1.filter(x => x.delivery_year == n.delivery_year);
                                //console.info(item2,n.mileage,'**');
                                n.mileage = trackadmin.public.utils.getduplicatesElementsInJson(item2, 'mileage');
                            });
                            p.delivery = delivery;
                        });

                        /* let mileage = trackadmin.public.utils.getduplicatesElementsInJson(items, "mileage"); //kilometraje

                        let delivery = trackadmin.public.utils.getduplicatesElementsInJson(items, "delivery_year"); //año de entrega 

                        console.info(items,version,i.model);

                        mileage.filter(p => {
                            p.delivery = delivery.filter(o => o.delivery_year == p.delivery_year);
                        });
                       
                        version.filter(p => {
                            p.mileage = mileage.filter(o => o.version == p.version);
                        }); */

                        i.version = version;
                    });

                    console.info(model, 'GROUP');
                },
                fillTableSearch: function (data) {
                    if (_resources.$tableSearch == null) {
                        _resources.$tableSearch = $(
                            "#table-result-search"
                        ).DataTable({
                            language: global.utils.dataTableSpanish(),
                            data: data,
                            // ordering: false,
                            searching: false,
                            // bSort: false,
                            scrollY: "50vh",
                            pageLength: 10,
                            "autoWidth": true,
                            "paging": true,
                            "scrollCollapse": true,
                            lengthChange: false,
                            info: false,
                            columns: [
                                {
                                    data: null,
                                    title: "Modelo",
                                    class: "",
                                    render: function (d, type, row, meta) {
                                        return `${row.model}`;
                                    }
                                },
                                {
                                    data: null,
                                    title: "Elementos",
                                    class: "",
                                    render: function (d, type, row, meta) {
                                        return `${row.count_details}`;
                                    }
                                },
                                /* {
                                    data: null,
                                    title: "Version",
                                    class: "",
                                    render: function (d, type, row, meta) {
                                        return `${row.version}`;
                                    }
                                },
                                {
                                    data: null,
                                    title: "Kilometraje",
                                    class: "",
                                    render: function (d, type, row, meta) {
                                        return `${row.mileage}`;
                                    }
                                },
                                { 
                                    data: null,
                                    title: "Año de entrega",
                                    class: "",
                                    render: function (d, type, row, meta) {
                                        return `${row.delivery_year}`;
                                    }
                                },*/
                                {
                                    data: null,
                                    title: "Opciones",
                                    width: 100,
                                    class: "text-center",
                                    render: function (d, type, row, meta) {
                                        return `
                                        <button class="btn-edit-vehicle btn-option text-info btn btn-sm text-success" vehicleId = "${row.id}"><i class="fas fa-edit"></i></button>
                                        <button class="btn-option btn-remove-vehicle text-info btn btn-sm text-danger" vehicleId = "${row.id}" ><i class="fas fa-minus-square"></i></button> `;
                                    }
                                }
                            ]
                        });
                    } else {
                        _resources.$tableSearch.clear();
                        _resources.$tableSearch.rows.add(data);
                        _resources.$tableSearch.draw();
                    }
                },
                fillContentImage: (data, content) => {

                    let nameFile = [];
                    let imagesData = [];

                    data.filter(item => {
                        let url = `${item.image}`;
                        imagesData.push(
                            {
                                caption: item.name,
                                url: `${trackadmin.public.utils.getUriBase()}/api/vehicle/image/delete`,
                                key: item.id
                            });
                        nameFile.push(url);
                    });
                    /*$("#fileImageBanners").sortable({});*/

                    console.info(imagesData, nameFile);

                    $(`#${content}`).fileinput({
                        uploadUrl: "generateInput/test",
                        language: "es", //Lenguaje
                        uploadAsync: false,
                        preferIconicPreview: false,
                        preferIconicZoomPreview: false,
                        maxFileCount: 3,
                        initialPreviewFileType: 'image',
                        maxFileSize: 2048,
                        browseOnZone: true,
                        overwriteInitial: false,
                        initialPreviewAsData: true,
                        showRemove: false,
                        showCancel: false,
                        showUpload: false,
                        fileActionSettings: {
                            //Opcion para cada imagen que se integra
                            showUpload: false,
                            showZoom: false,
                            showRemove: true,
                            showDownload: true,
                            downloadIcon: '<i class="fas fa-download"></i>',
                            removeIcon: '<i class="fa fa-trash"></i>',
                            removeClass: 'btn btn-danger btn-sm text-white',
                            showName: true,
                            zoomIcon: '<i class="fa fa-search-plus"></i>',
                            zoomClass: "btn btn-primary btn-sm text-white",
                            zoomIndicator: "",
                            indicatorNew: ""
                        },
                        previewZoomButtonIcons: {
                            prev: '<i class="fas fa-angle-left"></i>',
                            next: '<i class="fas fa-angle-right"></i>',
                            toggleheader: '<i class="fas fa-equals"></i>',
                            fullscreen: '<i class="bi-arrows-fullscreen"></i>',
                            borderless: '<i class="bi-arrows-angle-expand"></i>',
                            close: '<i class="fas fa-times"></i>'
                        },
                        previewZoomButtonClasses: {
                            fullscreen: 'd-none',
                            borderless: 'd-none',
                        },
                        "pluginOptions": {
                            "showUpload": false,
                            'removeIcon': '<span class="icon">delete</span> ',
                        },
                        initialPreviewConfig: imagesData,
                        initialPreview: nameFile
                        /*uploadExtraData: function () {  // callback example
                        return { 
                            course_code: _settings.course_code,type:position == 1 ? 'c':'s',course_id:_settings.course_id};
                    },
                    deleteExtraData: function () {
                        return { 
                            course_code: _settings.course_code 
                        };
                    }*/
                    }).on('filepredelete', function (event, key) {
                        _resources.deleteList.push(key);
                        //console.info(data,event);
                    }).on("filesorted", function (e, params) {
                        console.log("File sorted params", params);
                        global.utils.showLoader();
                        trackadmin.public.api.vehicles
                            .saveSequence(params.stack)
                            .then(item => {
                                global.utils.hideLoader();
                            });
                    });

                    if (data.length == 0) {
                        setTimeout(() => {
                            $(`#${content}`).fileinput("clear");
                        }, 300);
                    }
                },
                fillFormMaintenance: data => {
                    $("#vehicle_id").val(data.id);
                    $("#txtModel").val(data.model);

                    let content = (item) => `
                        <tr id ="tr${item.detail_id}" itemId="${item.detail_id}">
                            <td><input type="text" class="form-control dv" required name="v-${item.detail_id}" value="${item.version}"></td>
                            <td><input type="text" class="form-control da" required name="a-${item.detail_id}" value="${item.delivery_year}"></td>
                            <td><input type="text" class="form-control dk" required name="k-${item.detail_id}" value="${item.mileage}"></td>
                            <th>
                                <button type="button" class="btn-option btn-remove-detail text-info btn btn-sm text-danger" detailId = "${item.detail_id}" >
                                <i class="fas fa-minus-square"></i>
                                </button>
                            </th>
                        </tr>
                        `;

                    data.content.filter(i => {
                        $("#table-details tbody").append(content(i));
                    });

                    //trackadmin.public.utils.showDatesInformation(data.created_at, data.updated_at)
                },
                clearFormMaintenance: () => {
                    $("#form-add-vehicle input").val("");
                },
                loadDataToSave: (content, option) => {
                    /* var formData = $(`#${content}`).serializeArray();
                    var generateData = {};
                    formData.filter(i => {
                        generateData[i.name] = i.value;
                    });
                    console.info(generateData, "generateData");
                    return generateData; */

                    let details = [];

                    $("#table-details tbody tr").each(function (key, i) {
                        let v = $(this).find('.dv').val();
                        let k = $(this).find('.dk').val();
                        let a = $(this).find('.da').val();
                        let id = $(this).attr("itemId");
                        details.push({
                            version: v,
                            mileage: k,
                            delivery_year: a,
                            id: id
                        });
                    });

                    let generateData = {
                        model: $("#txtModel").val(),
                        id: $("#vehicle_id").val(),
                        details: details,
                        deleteDetails: _resources.deleteDetails,
                        deleteImages: _resources.deleteList
                    };
                    console.info(generateData, 'dataSave');

                    return generateData;
                },
                saveVehicles: () => {

                    let formInfo = new FormData();
                    let files = $(`#fileVehicle`).fileinput('getFileList');

                    let dataSave = _private.loadDataToSave();

                    files.filter(function (file, key) {
                        formInfo.append(`files[${key}]`, file);
                    });

                    formInfo.append('data', JSON.stringify(dataSave));
                    //formInfo = Enviar a guardar

                    let validate = $("#form-add-vehicle").valid();

                    if (validate) {
                        trackadmin.public.api.vehicles.saveVehicles(formInfo).then(item => {
                            _private.clearFormMaintenance();
                            global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin.public.messages.general.CONFIRM_INFO_SAVED);
                            _private.getVehicles();
                            $("#modal-vehicle").modal("hide");
                            global.utils.showLoader();
                            global.utils.hideLoader();
                        });
                    }
                },
                /*  editVehicles: () => {
                     let formInfo = new FormData();
                     let files = $(`#fileVehicle`).fileinput('getFileList');
                     let dataSave = _private.loadDataToSave("form-add-edit-vehicle");
                     files.filter(function (file, key) {
                         formInfo.append(`files[${key}]`, file);
                     });
                     formInfo.append('data', JSON.stringify(dataSave));
                     formInfo.append('deleteList', JSON.stringify(_resources.deleteList));
                     console.info(_resources.deleteList, "deleteList");
                     // var formData = new FormData();
                     let validate = $("#form-add-edit-vehicle").valid();
                     if (validate) {
 
 
                         trackadmin.public.api.vehicles.saveVehicles(formInfo).then(item => {
                             _private.clearFormMaintenance();
                             global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin.public.messages.general.CONFIRM_INFO_SAVED);
                             _private.getVehicles();
                             $("#modal-vehicle").modal("hide");
                             global.utils.showLoader();
                             global.utils.hideLoader();
 
                         });
 
                     }
                 }, */
                bindEvents: function () {
                    $("#btn-import-exams").on("click", function (e) {
                        $("#file-import").click();
                    });
                    $("#file-import").on("change", function (e) {
                        let input = $(this).prop("files");
                        console.info(input);
                        if (input && input[0]) {
                            e.preventDefault();
                            global.utils.confirm({
                                title: "¿Importar vehículos?",
                                message: "Se importará los datos colocados",
                                funcYes: () => {
                                    $("#examsImport").submit();
                                    document.getElementById('file-import').value = null;
                                    setTimeout(function () {
                                        _private.getVehicles();
                                    }, 1000);
                                },
                                funcNo: function () {
                                    document.getElementById('file-import').value = null;
                                }
                            });
                        }
                    });

                    $("#btn-vehicle-save").on("click", () => {
                        _private.saveVehicles();
                    });
                    $("#edit-vehicle").on("click", () => {
                        _private.editVehicles();
                    })
                    $("#content-buttons .nav-link").on("click", function (e) {
                        let content = $(this).attr("id");
                        console.log(content);
                        if (content == "config-vehicles-tab") {
                            _resources.$tableSearch.columns.adjust().draw();
                        }
                    });

                    $(`#table-result-search`).on("click", "tbody .btn-edit-vehicle", function (e) {
                        e.preventDefault();
                        _resources.statusMant = 'EDIT';
                        _resources.deleteDetails = [];
                        _resources.deleteList = [];

                        $("#modal-vehicle").modal("show");
                        $("#table-details tbody").html("");
                        $("#modal-vehicle-label").html('Editar Vehículo');
                        let vehicleId = $(this).attr("vehicleId");
                        let vehicle = _resources.vehiclesList.filter(item => item.id == vehicleId);
                        trackadmin.public.api.vehicles.getImageVehicles(vehicleId).then(item => {
                            $('#fileVehicle').fileinput('clear');
                            $('#fileVehicle').fileinput('destroy');
                            _private.fillContentImage(item, 'fileVehicle');
                        }),
                            //console.info(vehicle, "vehicledata");
                            $("#fileVehicle").removeAttr('required');
                        _private.fillFormMaintenance(vehicle[0]);
                    });

                    $("#btn-modal-vehicle").on("click", () => {
                        _resources.statusMant = 'NEW';
                        $("#modal-vehicle").modal("show");
                        _private.fillContentImage([], 'fileVehicle');
                        $("#table-details tbody").html("");
                        $("#vehicle_id").val(-1);
                        $("#fileVehicle").attr('required', 'true');
                    });

                    $("#btn-delete-all").on("click",function (e) {
                        console.info("aa");
                        global.utils.confirm({
                            title: trackadmin.public.messages.general.TITLE_DELETE,
                            message: trackadmin.public.messages.general.CONFIRM_TO_DELETE + ' No habra manera de recuperar la información actual.',
                            funcYes: () => {
                                trackadmin.public.api.vehicles.deleteVehiclesAll().then(item => {
                                    _private.getVehicles();
                                });
                            }
                        });
                    });


                    $(`#table-result-search`).on("click", "tbody .btn-remove-vehicle", function (e) {
                        e.preventDefault();
                        global.utils.confirm({
                            title: trackadmin.public.messages.general.TITLE_DELETE,
                            message: trackadmin.public.messages.general.CONFIRM_TO_DELETE,
                            funcYes: () => {
                                let valueId = $(this).attr("vehicleId");
                                //$("#status-message").empty();
                                global.utils.showLoader();
                                trackadmin.public.api.vehicles.deleteVehicle(valueId).then(item => {
                                    _private.getVehicles();
                                    global.utils.hideLoader();
                                });
                            }
                        });
                    });

                    $(`#table-details`).on("click", "tbody .btn-remove-detail", function (e) {
                        let id = $(this).attr('detailId');
                        console.info(id, "id");
                        if (_resources.statusMant == 'EDIT') {
                            _resources.deleteDetails.push(id);
                        }

                        $(`#tr${id}`).remove();
                    });

                    $(`#btn-modal-add-detail`).on("click", function (e) {
                        $("#modal-vehicle-label").html('Nuevo Vehículo');
                        let count = $("#table-details tbody tr").length + 1;
                        let content = `
                        <tr id="tr-${count}" itemId ="-${count}" >
                            
                            <td><input type="text" class="form-control dv" required name="v-${count}"></td>
                            <td><input type="text" class="form-control da" required name="a-${count}"></td>
                            <td><input type="text" class="form-control dk" required name="k-${count}"></td>
                            <th>
                                <button type="button" class="btn-option btn-remove-detail text-info btn btn-sm text-danger" detailId = "-${count}" >
                                <i class="fas fa-minus-square"></i>
                                </button>
                            </th>
                        </tr>
                        `;

                        $("#table-details tbody").append(content);

                    });

                },
                init: async function () {
                    $.extend(_settings, options || {});
                    global.utils.showLoader();
                    _private.initializeControls();
                    _private.bindEvents();
                }
            };
        _private.init();
    };
    trackadmin.public = trackadmin.public || {};
    trackadmin.public.vehicle = vehicle;
})((window.trackadmin = window.trackadmin || {}), $, (window.global = window.global || {}));
