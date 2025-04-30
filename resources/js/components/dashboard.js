(function (trackadmin, $, global) {
    let dashboard = function (options) {
        let _settings = {

        },
            _resources = {
                statusMant: "VIEW",
            },
            _controls = {
                $tableSearch: null
            },
            _private = {
                initializeControls: () => {
                    _private.searchData();
                    _private.clearFormMaintenance();
                    _private.setDisableInLoadPage();
                },
                clearFormMaintenance: () => {
                    $("#form_maintenance input").val("");
                    $("#form_maintenance textarea").val("");
                },
                disabledFormMaintenance: function (isEnable) {
                    $("#form_maintenance input").prop("readonly", isEnable);
                    $("#form_maintenance textarea").prop("readonly", isEnable);
                    $("#form_maintenance button").prop("disabled", isEnable);
                    $("#form_maintenance select").prop("disabled", isEnable);
                },
                showActionButtons: () => {
                    if (_resources.statusMant == "NEW") {
                        $("#btn-new").show().prop("disabled", false);
                        $("#btn-edit").hide().prop("disabled", true);
                        $("#btn-cancel").show().prop("disabled", false);
                        $("#btn-save").show().prop("disabled", false);
                        $("#btn-delete").hide().prop("disabled", true);
                    }
                    if (_resources.statusMant == "VIEW") {
                        $("#btn-new").show().prop("disabled", false);
                        $("#btn-edit").show().prop("disabled", true);
                        $("#btn-cancel").hide().prop("disabled", true);
                        $("#btn-save").hide().prop("disabled", true);
                        $("#btn-delete").show().prop("disabled", true);
                    }
                    if (_resources.statusMant == "EDIT") {
                        $("#btn-new").hide().prop("disabled", true);
                        $("#btn-edit").hide().prop("disabled", true);
                        $("#btn-cancel").show().prop("disabled", false);
                        $("#btn-save").show().prop("disabled", false);
                        $("#btn-delete").show().prop("disabled", false);
                    }
                },
                setDisableInLoadPage: () => {
                    if (_resources.statusMant == "NEW") {
                        _private.clearFormMaintenance();
                        _private.disabledFormMaintenance(false);
                    }
                    if (_resources.statusMant == "VIEW") {
                        _private.disabledFormMaintenance(true);
                    }
                    if (_resources.statusMant == "EDIT") {
                        _private.disabledFormMaintenance(false);
                    }
                    _private.showActionButtons();
                },
                loadDataToSave: () => {
                    var formData = $("#form_maintenance").serializeArray();
                    var generateData = {};
                    formData.filter(i => {
                        generateData[i.name] = i.value;
                    });
                    console.info(generateData, 'generateData');
                    return generateData;
                },
                searchData: () => {
                    /* let code = "";
                    let name = "";
                    global.utils.showLoader();
                    trackadmin.public.api.examResults.searchExamResults(code,name).then(data => {
                        global.utils.hideLoader();
                    });

                    trackadmin.public.api.dashboardUsers.searchdashboardUser(name).then(data => {
                        global.utils.hideLoader();
                    }); */
                    //console.info("mensaje");
                },
                fillFormMaintenance: data => {
                    $("#input_current_id").val(data.id);
                    
                    trackadmin.public.utils.showDatesInformation(data.created_at, data.updated_at)
                },
                loadDataItem: item_id => {
                    global.utils.showLoader();
                    /* trackadmin.public.api.accessCode.getAccessCodeById(item_id).then(item => {
                        _private.fillFormMaintenance(item);
                        global.utils.hideLoader();
                    }); */
                },
                bindEvents: function () {
                    $("#table-result-search").on("click", "tr", function (e) {
                        if (_resources.statusMant == "NEW" || _resources.statusMant == "EDIT") {
                            global.utils.hideLoader();
                            global.utils.showAlertError({
                                title: trackadmin.public.messages.general.TITLE_CANCEL,
                                message: trackadmin.public.messages.general.ALERT_CREATING_EDITING
                            });
                            return;
                        }
                        let item_id = $(this).find("span").attr("item_id");
                        if (item_id != undefined || item_id != null) {
                            _private.loadDataItem(item_id);
                            $("#btn-edit").prop("disabled", false);
                            $("#btn-delete").prop("disabled", false);
                        }
                    });
                    $("#btn-search").on("click", () => {
                        _private.executeSearch();
                    });
                    $("#btn-new").on("click", () => {
                        _resources.statusMant = "NEW";
                        _private.setDisableInLoadPage();
                        $("#input_current_id").val(-1);
                    });
                    $("#btn-delete").on("click", () => {
                        global.utils.confirm({
                            title: trackadmin.public.messages.general.TITLE_DELETE,
                            message: trackadmin.public.messages.general.CONFIRM_TO_DELETE,
                            funcYes: () => {
                                const itemId = $("#input_current_id").val();
                                /* trackadmin.public.api.accessCode.deleteAccessCode(itemId).then(item => {
                                    _private.clearFormMaintenance();
                                    _resources.statusMant = "VIEW";
                                    _private.setDisableInLoadPage();
                                    global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin.public.messages.general.CONFIRM_INFO_DELETED);
                                    _private.executeSearch();
                                }); */
                            }
                        });
                    });
                    $("#btn-cancel").on("click", () => {
                        global.utils.confirm({
                            title: trackadmin.public.messages.general.TITLE_CANCEL,
                            message: trackadmin.public.messages.general.CONFIRM_TO_CANCEL,
                            funcYes: () => {
                                if (_resources.statusMant == "EDIT") {
                                    let currentItem = $("#input_current_id").val();
                                    _resources.statusMant = "VIEW";
                                    _private.setDisableInLoadPage();
                                    _private.loadDataItem(currentItem);
                                    $("#btn-edit").prop("disabled", false);
                                    $("#btn-delete").prop("disabled", false);
                                } else {
                                    _resources.statusMant = "VIEW";
                                    _private.setDisableInLoadPage();
                                }
                            }
                        });
                    });
                    $("#btn-edit").on("click", () => {
                        _resources.statusMant = "EDIT";
                        _private.setDisableInLoadPage();
                    });
                    $("#btn-clear-search").on("click", () => {
                        $("#input_search_name").val("").focus();
                    });
                    $("#btn-save").on("click", () => {
                        let dataSave = _private.loadDataToSave();
                        let validate = $("#form_maintenance").valid();
                        if (validate) {
                            global.utils.confirm({
                                title: trackadmin.public.messages.general.TITLE_SAVE,
                                message: trackadmin.public.messages.general.CONFIRM_TO_SAVE,
                                funcYes: () => {
                                    global.utils.showLoader();
                                    /* trackadmin.public.api.accessCode.saveAccessCode(dataSave).then(item => {
                                    }); */
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
    trackadmin.public.dashboard = dashboard;
})((window.trackadmin = window.trackadmin || {}), $, (window.global = window.global || {}));
