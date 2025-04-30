(function (global, $, undefined) {
    const utils = (function (global, $) {
        const dataTableSpanish = function () {
            return {
                sProcessing: "Procesando...",
                sLengthMenu: "Mostrar _MENU_ registros",
                sZeroRecords: "No se encontraron resultados",
                sEmptyTable: "Ningún dato disponible en esta tabla",
                //"sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                sInfo:
                    "Se encontraron _END_ coincidencias de un total de _TOTAL_ registros",
                //"sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                sInfoEmpty: "No se encontraron coincidencias",
                sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
                sInfoPostFix: "",
                sSearch: "Buscar",
                sUrl: "",
                sInfoThousands: ",",
                sLoadingRecords: "Cargando...",
                oPaginate: {
                    sFirst: "<i class='fa fa-lg fa-step-backward'></i>",
                    sLast: "<i class='fa fa-lg fa-step-forward'></i>",
                    sNext: "<i class='fa fa-lg fa-caret-right'></i>",
                    sPrevious: "<i class='fa fa-lg fa-caret-left'></i>"
                },
                oAria: {
                    sSortAscending:
                        ": Activar para ordenar la columna de manera ascendente",
                    sSortDescending:
                        ": Activar para ordenar la columna de manera descendente"
                }
            };
        };
        let showWebLoader = function () {
            $('#ftco-loader').addClass('show');
        };
        let hideWebLoader = function () {
            $('#ftco-loader').removeClass('show');
        };
        let showLoader = function () {
            $(".loading-custom").show();
        };
        let hideLoader = function () {
            $(".loading-custom").hide();
        };
        let confirm = function (options) {
            let settings = {
                title: "",
                message: "",
                funcYes: null,
                funcNo: () => { }
            };
            $.extend(settings, options || {});
            $.confirm({
                title: settings.title,
                icon: "fa fa-question-circle",
                content: settings.message,
                theme: "bootstrap",
                type: "blue",
                scrollToPreviousElement: false,
                scrollToPreviousElementAnimate: false,
                buttons: {
                    Sí: settings.funcYes,
                    No: settings.funcNo
                }
            });
        };
        let showAlertError = options => {
            let settings = {
                title: "",
                message: ""
            };

            $.extend(settings, options || {});

            $.alert({
                title: settings.title,
                icon: "fa fa-exclamation-circle",
                content: settings.message,
                //theme: 'modern',
                theme: "bootstrap",
                type: "red"
            });
        };

        let showAlertWarning = options => {
            let settings = {
                title: "",
                message: ""
            };

            $.extend(settings, options || {});

            $.alert({
                title: settings.title,
                icon: "fa fa-exclamation-circle",
                content: settings.message,
                theme: "modern",
                type: "orange"
            });
        };

        let showAlertInfo = options => {
            let settings = {
                title: "",
                message: ""
            };

            $.extend(settings, options || {});

            $.alert({
                title: settings.title,
                icon: "fa fa-check",
                content: settings.message,
                theme: "modern",
                type: "green"
            });
        };
        let showAlertSystemError = message =>
            showAlertError({
                title: `<span class="text-danger">ERROR INESPERADO</span>`,
                message: message
            });
        let manageNoSuccess = msg => {
            console.error(msg, "NO SUCCESS");
            showAlertSystemError(msg);
        };
        let manageError = (error, func) => {
            if (error.response) {
                console.group("CALL SERVICE");
                console.error(
                    error.response.request.responseURL,
                    "RESPONSE URL"
                );
                console.error(error.response.data, "RESPONSE DATA");
                console.error(
                    error.response.status + "-" + error.response.statusText,
                    "RESPONSE STATUS"
                );
                console.error(error.response.headers, "RESPONSE HEADERS");
                console.groupEnd();
                const msg = `<div>The request was made and the server responded with a status code tha fails out of the range of 2xx.</div>
                                    <hr class="m-t-5 m-b-5"/>
                                    <div><span class="font-bold">Status:&nbsp;</span><span>${error.response.status} - ${error.response.statusText}</span></div>
                                    <div><span class="font-bold">URL:&nbsp;</span><span>${error.response.request.responseURL}</span></div>`;
                showAlertSystemError(msg);
                func && func(msg);
            } else if (error.request) {
                console.error(error.request, "ERROR REQUEST");
                const msg =
                    "The request was made but no response was received [error.request] is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js";
                showAlertSystemError(msg);
                func && func(msg);
            } else {
                console.error(error.message, "ERROR MESSAGE");
                const msg = `Something happened in setting up the request that triggered an Error. ${error.message}`;
                func && func(msg);
                showAlertSystemError(msg);
            }
        };
        let showNotySuccess = (message, title) =>
            toastr.success(message, title);
        let showNotyError = (message, title) =>
            toastr.error(message, title);
        let showNotyWarning = (message, title) =>
            toastr.warning(message, title);
        let showNotyInfo = (message, title) => toastr.info(message, title);
        let showNotyInLineSuccess = (container, message) => {
            if (container.is(":hidden")) {
                container.show();
                //$(window).scrollTop(0);
            }
            container.html(`
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                ${message}
                </div>
              `);
            setTimeout(function () {
                container.hide("fast");
                //container.hide("slow");
            }, 4500);
        };

        let showNotyInLineWarning = (container, message) => {
            if (container.is(":hidden")) {
                container.show();
                //$(window).scrollTop(0);
            }
            container.html(`<div class="alert alert-warning alert-white alert-dismissible" role="alert">
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                    </button>
                                    ${message}
                            </div>`);

            setTimeout(function () {
                container.hide("fast");
                //container.hide("slow");
            }, 4500);
        };

        let showNotyInLineError = (container, message) => {
            if (container.is(":hidden")) {
                container.show();
                //$(window).scrollTop(0);
            }
            container.html(`<div class="alert alert-icon alert-danger alert-dismissible show" role="alert">
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                    </button>
                                    ${message}
                            </div>`);

            setTimeout(function () {
                container.hide("fast");
                //container.hide("slow");
            }, 4500);
        };
        return {
            confirm: confirm,
            dataTableSpanish: dataTableSpanish,
            showAlertError: showAlertError,
            showAlertInfo: showAlertInfo,
            showAlertSystemError: showAlertSystemError,
            showAlertWarning: showAlertWarning,
            manageError: manageError,
            showNotySuccess: showNotySuccess,
            showNotyError: showNotyError,
            showNotyWarning: showNotyWarning,
            showNotyInfo: showNotyInfo,
            manageNoSuccess: manageNoSuccess,
            showNotyInLineSuccess: showNotyInLineSuccess,
            showNotyInLineWarning: showNotyInLineWarning,
            showNotyInLineError: showNotyInLineError,
            showLoader: showLoader,
            hideLoader: hideLoader,
            showWebLoader: showWebLoader,
            hideWebLoader: hideWebLoader,
        };
    })(window.global || {}, $),
        constanst = (function (global, $) {
            return {
                status: {
                    maintenance: {
                        adding: "A",
                        editing: "E",
                        deleting: "R",
                        deactivating: "D",
                        viewing: "V"
                    }
                }
            };
        })(window.global || {}, $),
        ajax = (function (global, $) {
            const debugMode = true;
            return {
                get: url => {
                    return new Promise((resolve, reject) => {
                        axios
                            .get(url)
                            .then(response => {
                                if (response.data.success) {
                                    if (debugMode) {
                                        console.info(url, "URL GET");
                                        console.group("CALL SERVICE");
                                        console.info(
                                            response.data.data,
                                            "DATA GET"
                                        );
                                        console.groupEnd();
                                    }

                                    resolve(response.data.data);
                                } else {
                                    console.info(response);
                                    global.utils.manageNoSuccess(
                                        response.data.message
                                    );
                                    reject(response.data.message);
                                }
                            })
                            .catch(error =>
                                global.utils.manageError(error, m => reject(m))
                            );
                    });
                },
                post: (url, params) => {
                    return new Promise((resolve, reject) => {
                        axios.post(url, params)
                            .then(response => {
                                if (response.data.success) {
                                    if (debugMode) {
                                        console.group('CALL SERVICE');
                                        console.info(url, "URL POST");
                                        console.info(params, "PARAMS POST");
                                        console.info(response.data.data, "DATA POST");
                                        console.groupEnd();
                                    }

                                    resolve(response.data.data);
                                } else {
                                    global.utils.manageNoSuccess(response.data.message);
                                    reject(response.data.message);
                                }
                            })
                            .catch(error => {
                                //console.info(error.response, "ERRORCITO!!!");
                                global.utils.manageError(error, m => reject(m))
                            });
                    });
                },
                put: (url, params) => {
                    return new Promise((resolve, reject) => {
                        axios
                            .put(url, params)
                            .then(response => {
                                if (response.data.success) {
                                    if (debugMode) {
                                        console.group("CALL SERVICE");
                                        console.info(url, "URL PUT");
                                        console.info(params, "PARAMS PUT");
                                        console.info(
                                            response.data.data,
                                            "DATA PUT"
                                        );
                                        console.groupEnd();
                                    }

                                    resolve(response.data.data);
                                } else {
                                    console.info(response);
                                    global.utils.manageNoSuccess(
                                        response.data.message
                                    );
                                    reject(response.data.message);
                                }
                            })
                            .catch(error =>
                                global.utils.manageError(error, m => reject(m))
                            );
                    });
                },
                delete: (url, params) => {
                    return new Promise((resolve, reject) => {
                        axios
                            .delete(url, params)
                            .then(response => {
                                if (response.data.success) {
                                    if (debugMode) {
                                        console.group("CALL SERVICE");
                                        console.info(url, "URL DELETE");
                                        console.info(params, "PARAMS DELETE");
                                        console.info(
                                            response.data.data,
                                            "DATA DELETE"
                                        );
                                        console.groupEnd();
                                    }

                                    resolve(response.data.data);
                                } else {
                                    console.info(response);
                                    global.utils.manageNoSuccess(
                                        response.data.message
                                    );
                                    reject(response.data.message);
                                }
                            })
                            .catch(error =>
                                global.utils.manageError(error, m => reject(m))
                            );
                    });
                }
            };
        })(window.global || {}, $);

    global.utils = utils;
    global.constants = constanst;
    global.ajax = ajax;
})((window.global = window.global || {}), $);
