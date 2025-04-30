(function (trackadmin, ajax) {
    const uriBase = window.location.protocol + "//" + window.location.host;
    var api = (function (ajax) {
        let general = {
            verifiquedAccessCode: (code) => ajax.get(`${uriBase}/verificateaccesscode/${code}`),
        }
        let contents = {
            save: (data) => ajax.put(`${uriBase}/general/api/content/save`, {
                data: data
            }),
            save_image: (data) => ajax.post(`${uriBase}/general/api/content/image/save`, data),
        };

        let workshops = {
            save: (data) => ajax.put(`${uriBase}/general/api/workshops/save`, {
                data: data
            }),
            save_image: (data) => ajax.post(`${uriBase}/general/api/workshop/save/image`, data),

            deleteWorkshop: (itemId) => ajax.delete(`${uriBase}/talleres/api/delete/${itemId}`),
        }

        let sections = {
            save: (data) => ajax.put(`${uriBase}/general/api/section/save`, {
                data: data
            }),
            save_image: (data) => ajax.post(`${uriBase}/general/api/section/save/image`, data),
        };

        let maintenance = {
            getWorkshopsByDepartament: (departament) => ajax.get(`${uriBase}/workshop/api/departament/${departament}`),
            getMaintenance: (model, version, mileage, deliveryYear, workshop) => ajax.post(`${uriBase}/api/WebTransparencySeat`, {
                modelo: model,
                version: version,
                kilometraje: mileage,
                anioVehiculo: deliveryYear,
                taller: workshop,
            }),
            showVehiclesImage: (model, version, mileage, deliveryYear) => ajax.post(`${uriBase}/api/vehicle/image/show`, {
                model: model,
                version: version,
                mileage: mileage,
                deliveryYear: deliveryYear,
            })

        };

        let details = {
            save: (data) => ajax.put(`${uriBase}/general/api/detail/save`, {
                data: data
            })
        };

        let vehicles = {
            getVehicles: () => ajax.get(`${uriBase}/vehicle/api/list`),

            getImageVehicles: (vehicle_id) => ajax.get(`${uriBase}/vehicle/api/images/${vehicle_id}`),

            deleteVehicle: (vehicleId) => ajax.delete(`${uriBase}/vehicle/api/delete/${vehicleId}`),

            saveVehicles: (data) => ajax.post(`${uriBase}/vehicle/api/save`, data),

            deleteVehiclesAll: () => ajax.delete(`${uriBase}/vehicle/api/all/delete`),
            // editVehicle: (data) => ajax.post(`${uriBase}/vehicle/api/edit`,{
            //     data:data
            // }),
        };

        return {
            contents: contents,
            workshops: workshops,
            sections: sections,
            maintenance: maintenance,
            details: details,
            vehicles: vehicles,
        };

    })(ajax);
    var utils = (function (ajax) {
        let common = {
            dateFormatAndHours: (showHours) => showHours == true ? "DD/MM/YYYY hh:mm a" : "DD/MM/YYYY",
            dateFormat: () => "dd/mm/yyyy",
            getUriBase: () => window.location.protocol + "//" + window.location.host,
            showDatesInformation: (created_at, updated_at) => {
                $("#created_at").html(moment(created_at).format("DD/MM/YYYY hh:mm"));
                $("#updated_at").html(moment(updated_at).format("DD/MM/YYYY hh:mm"));
                window.location.protocol + "//" + window.location.host
            },
            setOptionInDDL: (id, text, select, color, active) => {
                if (id != null && text != null) {
                    if (active == 1) {
                        color = "#444";
                    }
                    $("#" + select).prepend(new Option(text, `${id}|${color}`));
                    $("#" + select).val(id + "|" + color).trigger('change');
                }
            },
            getduplicatesElementsInJson: (data, name) => {
                var hash = {};
                let datajson = data.filter(function (current) {
                    var exists = !hash[current[name]] || false;
                    hash[current[name]] = true;
                    return exists;
                });
                return JSON.parse(JSON.stringify(datajson));
            },
            limitText: (data, limit) => {
                var array = data.split(" ", limit);
                var texts = array.join(" ");
                var puntos = '...';
                if (data.split(" ").length <= limit) {
                    puntos = '';
                }
                return `${texts} ${puntos}`;
            },
            fillSummerNoteDefault: (content, height) => {
                //console.info(content, 'content');
                $(`#${content}`).summernote('destroy');
                $(`#${content}`).summernote({
                    placeholder: '',
                    lang: 'es-ES',
                    tabsize: 1,
                    height: height,
                    focus: true,
                    toolbar: [
                        ['font', ['bold', 'underline', 'clear']],
                        ['fontsize', ['fontsize']],
                        ['color', ['color']],
                        ['para', ['ul', 'ol', 'paragraph']],
                        //['insert', ['picture']],
                        ['view', ['codeview']]
                    ],
                    callbacks: {
                        onPaste: function (e) {
                            var bufferText = ((e.originalEvent || e).clipboardData || window.clipboardData).getData('Text');
                            e.preventDefault();
                            document.execCommand('insertText', false, bufferText);
                        },
                        /* onImageUpload: function (image) {
                            //trackadmin.public.utils.summerNoteSaveFile(image[0], content);
                            common.summerNoteSaveFile(image[0], content);
                        } */
                    }
                });
            },
            formRulesValidate: (submit) => {
                let formRules = {
                    debug: false,
                    rules: {
                        /* email: {
                            required: true,
                            email: true
                        } */
                    },
                    messages: {
                        required: "Este campo es obligatorio",
                        email: {
                            required:
                                "Se necesita la dirección de correo electrónico",
                            email:
                                "La dirección de correo electrónico debe tener el formato dename@domain.com",
                        }
                    },
                    /* submitHandler : function (form) {
                        //$(form).ajaxSubmit();
                        console.info(form, "validation");
                    } */
                }
                if (submit) {
                    formRules.submitHandler = function (form) {
                        //$(form).ajaxSubmit();
                        //console.info(form, "validation");
                    }
                }
                return formRules;
            },

            //
        }
        return common;
    })(ajax);
    var messages = {
        common: {
            MANDATORY_FIELDS: "Los siguientes campos son mandatorios:",
            SERVICE_WITHOUT_NOTIFICATION: "El servicio seleccionado no tiene configurado notificaciones.",
            PASSWORD_UPDATED: "Contraseña actualizada satisfactoriamente.",
            TITLE_SAVE: "Guardar",
            CONFIRM_TO_SAVE: "Est&aacute; seguro de guardar la informaci&oacute;n?"
        },
        general: {
            PLACE_HOLDER_TAGS_FILTER: "Seleccione Tags",
            PLACE_HOLDER_TAGS: "Seleccione Tags",
            PLACE_HOLDER_MANAGED_BY_SUPPLIER: "Seleccione Proveedor",
            ALERT_CREATING_EDITING: "Usted se encuentra creando/editando un usuario. Concluya la operaci&oacute;n actual para poder consultar otro usuario.",
            TITLE_SAVE: "Guardar",
            TITLE_CANCEL: "Cancelar",
            TITLE_DELETE: "Eliminar",
            CONFIRM_TO_SAVE: "Est&aacute; seguro de guardar la informaci&oacute;n?",
            CONFIRM_TO_DELETE: "Est&aacute; seguro de eliminar?",
            CONFIRM_TO_CANCEL: "Est&aacute; seguro de cancelar?",
            CONFIRM_INFO_SAVED: "La informaci&oacute;n se registr&oacute; correctamente.",
            CONFIRM_INFO_CHECKED: "Hay información que falta complentar.",
            CONFIRM_INFO_DELETED: "El usuario se elimin&oacute; correctamente.",
            ALERT_LIMIT_USER_CREATION: "Ha alcanzado el límite de usuarios permitidos a crear. Comuníquese con el administrador.",
            VALIDATE_IMAGE_WEIGHT: "La imagen supera los 2mb"
        },
    };
    trackadmin.public = trackadmin.public || {};
    trackadmin.public.api = api;
    trackadmin.public.utils = utils;
    trackadmin.public.messages = messages;
}(window.trackadmin = window.trackadmin || {}, window.global.ajax));