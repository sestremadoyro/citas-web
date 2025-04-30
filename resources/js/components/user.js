(function (trackadmin, $, global) {
    let user = function (options) {
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
                   // $(_resources.formPrimary).validate(trackadmin.public.utils.formRulesValidate(false));
                },
                bindEvents: function () {
                    $.validator.setDefaults({
                        submitHandler: function() {
                            //alert("submitted!");
                            $("#form_maintenance").ajaxSubmit();
                        }
                    });
                    
                    // validate signup form on keyup and submit
                    $("#form_maintenance").validate({
                        rules: {
                            new_password: {
                                //required: true,
                                minlength: 5
                            },
                            confirm_password: {
                                //required: true,
                                minlength: 5,
                                equalTo: "#txtNewPassword"
                            }
                        },
                        messages: {
                            new_password: {
                                required: "Proporcione una contraseña.",
                                minlength: "Tu contraseña debe tener al menos 5 caracteres."
                            },
                            confirm_password: {
                                required: "Proporcione una contraseña.",
                                minlength: "Tu contraseña debe tener al menos 5 caracteres.",
                                equalTo: "Por favor ingrese la misma contraseña que arriba."
                            }
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
    trackadmin.public.user= user;
})((window.trackadmin = window.trackadmin || {}), $, (window.global = window.global || {}));