(function (trackadmin, $, global) {
    let maintenance = function (options) {
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
                        id: $("#section1_id").val(),
                        title: $("#section1_title").val(),
                        description: $("#txtDescription1").val(),
                    }
                    var data2 = {
                        id: $("#section2_id").val(),
                        title: $("#section2_title").val(),
                        description: $("#txtDescription2").val(),
                    }

                    var sections = [];

                    sections.push(data1);
                    sections.push(data2);

                    var formData = $(_resources.formPrimary).serializeArray();
                    var generateData = {};

                    formData.filter(i => {
                        generateData[i.name] = i.value.trim();
                    });

                    generateData.group = "home";
                    generateData.page = "maintenance";
                    generateData.sections = sections;

                    console.info(generateData, 'generateData');
                    return generateData;
                },
                bindEvents: function () {
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
    trackadmin.public.maintenance = maintenance;
})((window.trackadmin = window.trackadmin || {}), $, (window.global = window.global || {}));
