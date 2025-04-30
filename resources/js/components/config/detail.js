(function(trackadmin, $, global) {
    let detail = function(options) {
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

                    console.info(generateData, 'generateData');
                    return generateData;
                },
                save:() =>{
                    let dataSave = _private.loadDataToSave();
                    let validate = $(_resources.formPrimary).valid();
                    if (validate) {
                        global.utils.confirm({
                            title: trackadmin.public.messages.general.TITLE_SAVE,
                            message: trackadmin.public.messages.general.CONFIRM_TO_SAVE,
                            funcYes: () => {
                                global.utils.showLoader();
                                trackadmin.public.api.details.save(dataSave).then(item => {
                                    global.utils.hideLoader();
                                    global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin.public.messages.general.CONFIRM_INFO_SAVED);
                                });
                            }
                        });
                    }
                },
                bindEvents: function() {
                    $("#btn-save").on("click", () => {
                        _private.save();
                    });
                },
                init: async function() {
                    $.extend(_settings, options || {});
                    //global.utils.showLoader();
                    _private.initializeControls();
                    _private.bindEvents();
                }
            };
        _private.init();
    };
    trackadmin.public = trackadmin.public || {};
    trackadmin.public.detail = detail;
})((window.trackadmin = window.trackadmin || {}), $, (window.global = window.global || {}));