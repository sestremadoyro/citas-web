(function (trackadmin, $, global) {
    let benefices = function (options) {
        let _settings = {

        },
            _resources = {
                statusMant: "VIEW",
                formPrimary: '#form_maintenance',
            },
            _controls = {
                $tableSearch: null
            },
            _private = {
                initializeControls: () => {
                    $(_resources.formPrimary).validate(trackadmin.public.utils.formRulesValidate(true));
                },
                loadDataToSave: () => {
                    var formData = $(_resources.formPrimary).serializeArray();
                    var generateData = {};
                    formData.filter(i => {
                        generateData[i.name] = i.value.trim();
                    });

                    generateData.group = "benefices";
                    generateData.page = "banner_primary";

                    console.info(generateData, 'generateData');
                    return generateData;
                },
                saveImage: () => {
                    var dataFile = new FormData();
                    dataFile.append('file', $('#fileInputImage')[0].files[0]);
                    dataFile.append('content_id', $('#fileInputImage').attr("content-id"));

                    var imgsize = $("#fileInputImage")[0].files[0].size;

                    if(imgsize >= 2000000){
                        global.utils.showNotyInLineWarning($("#mant-message"), trackadmin.public.messages.general.VALIDATE_IMAGE_WEIGHT);
                        console.log('El archivo supera los 2Mb.');
                    }else{
                        global.utils.confirm({
                            title: trackadmin.public.messages.general.TITLE_SAVE,
                            message: trackadmin.public.messages.general.CONFIRM_TO_SAVE,
                            funcYes: () => {
                                global.utils.showLoader();
                                trackadmin.public.api.contents.save_image(dataFile).then(item => {
                                    global.utils.hideLoader();
                                    global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin.public.messages.general.CONFIRM_INFO_SAVED);
                                });
                            }
                        });
                    }
                    
                },
                bindEvents: function () {
                    $("#btn-save-image").on("click", () => {
                        _private.saveImage();
                    });
                    $("#btn-save").on("click", () => {
                        let dataSave = _private.loadDataToSave();
                        let validate = $(_resources.formPrimary).valid();
                        if (validate) {
                            global.utils.confirm({
                                title: trackadmin.public.messages.general.TITLE_SAVE,
                                message: trackadmin.public.messages.general.CONFIRM_TO_SAVE,
                                funcYes: () => {
                                    global.utils.showLoader();
                                    trackadmin.public.api.contents.save(dataSave).then(item => {
                                        global.utils.hideLoader();
                                        global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin.public.messages.general.CONFIRM_INFO_SAVED);
                                    });
                                }
                            });
                        }
                    });
                    $("#fileInputImage").on("change", () => {
                        var imagen = document.getElementById("fileInputImage").files;
                        for (var x = 0; x < imagen.length; x++) {
                            loadImage(imagen[x]);
                        }

                        function loadImage(imagen) {
                            var _URL = window.URL || window.webkitURL;
                            var img = new Image();
                            img.src = _URL.createObjectURL(imagen);
                            img.onload = function () {
                                var ancho = img.width;
                                var alto = img.height
                                console.log(ancho + ' ' + alto);
                            }
                        }          
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
    trackadmin.public.benefices= benefices;
})((window.trackadmin = window.trackadmin || {}), $, (window.global = window.global || {}));
