(function (trackadmin, $, global) {
    let transparency = function (options) {
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
                    var data1 = {
                        id: $("#section4_id").val(),
                        title: $("#txtTitle1").val(),
                        description: $("#txtDescription1").val(),
                    }
                    var data2 = {
                        id: $("#section5_id").val(),
                        title: $("#txtTitle2").val(),
                        description: $("#txtDescription2").val(),
                    }

                    var data3 = {
                        id: $("#section6_id").val(),
                        title: $("#txtTitle3").val(),
                        description: $("#txtDescription3").val(),
                    }

                    var sections = [];

                    sections.push(data1);
                    sections.push(data2);
                    sections.push(data3);

                    var formData = $(_resources.formPrimary).serializeArray();
                    var generateData = {};

                    formData.filter(i => {
                        generateData[i.name] = i.value.trim();
                    });

                    generateData.group = "home";
                    generateData.page = "transparency";
                    generateData.sections = sections;

                    console.info(generateData, 'generateData');
                    return generateData;
                },
                saveImage: () => {
                    //==============
                    var dataFiles = new FormData();
                    let data = [];
                    $(`.content-images .item-image`).each(function (key, item) {
                        let input = $(this).find('input[type=file]');
                        let file = input[0].files[0];
                        let fileName = file != undefined ? file.name : null;
                        //let mainId = ;
                        dataFiles.append(`files[${key}]`, file);
                        data.push({
                            mainId:input.attr("item_id"),
                            imageName:fileName
                        });
                    });
                    dataFiles.append('sections', JSON.stringify(data));
                    console.info(dataFiles,data,"DATA");
                    //==============

                    global.utils.confirm({
                        title: trackadmin.public.messages.general.TITLE_SAVE,
                        message: trackadmin.public.messages.general.CONFIRM_TO_SAVE,
                        funcYes: () => {
                            global.utils.showLoader();
                            trackadmin.public.api.sections.save_image(dataFiles).then(item => {
                                global.utils.hideLoader();
                                global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin.public.messages.general.CONFIRM_INFO_SAVED);
                            });
                        }
                    });
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
                                    trackadmin.public.api.sections.save(dataSave).then(item => {
                                        global.utils.hideLoader();
                                        global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin.public.messages.general.CONFIRM_INFO_SAVED);
                                    });
                                }
                            });
                        }
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
    trackadmin.public.transparency = transparency;
})((window.trackadmin = window.trackadmin || {}), $, (window.global = window.global || {}));
