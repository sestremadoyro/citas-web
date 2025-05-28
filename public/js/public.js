/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./resources/js/components/benefices/benefices.js":
/*!********************************************************!*\
  !*** ./resources/js/components/benefices/benefices.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(function (trackadmin, $, global) {
  var benefices = function benefices(options) {
    var _settings = {},
        _resources = {
      statusMant: "VIEW",
      formPrimary: '#form_maintenance'
    },
        _controls = {
      $tableSearch: null
    },
        _private = {
      initializeControls: function initializeControls() {
        $(_resources.formPrimary).validate(trackadmin["public"].utils.formRulesValidate(true));
      },
      loadDataToSave: function loadDataToSave() {
        var formData = $(_resources.formPrimary).serializeArray();
        var generateData = {};
        formData.filter(function (i) {
          generateData[i.name] = i.value.trim();
        });
        generateData.group = "benefices";
        generateData.page = "banner_primary";
        console.info(generateData, 'generateData');
        return generateData;
      },
      saveImage: function saveImage() {
        var dataFile = new FormData();
        dataFile.append('file', $('#fileInputImage')[0].files[0]);
        dataFile.append('content_id', $('#fileInputImage').attr("content-id"));
        var imgsize = $("#fileInputImage")[0].files[0].size;

        if (imgsize >= 2000000) {
          global.utils.showNotyInLineWarning($("#mant-message"), trackadmin["public"].messages.general.VALIDATE_IMAGE_WEIGHT);
          console.log('El archivo supera los 2Mb.');
        } else {
          global.utils.confirm({
            title: trackadmin["public"].messages.general.TITLE_SAVE,
            message: trackadmin["public"].messages.general.CONFIRM_TO_SAVE,
            funcYes: function funcYes() {
              global.utils.showLoader();
              trackadmin["public"].api.contents.save_image(dataFile).then(function (item) {
                global.utils.hideLoader();
                global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_SAVED);
              });
            }
          });
        }
      },
      bindEvents: function bindEvents() {
        $("#btn-save-image").on("click", function () {
          _private.saveImage();
        });
        $("#btn-save").on("click", function () {
          var dataSave = _private.loadDataToSave();

          var validate = $(_resources.formPrimary).valid();

          if (validate) {
            global.utils.confirm({
              title: trackadmin["public"].messages.general.TITLE_SAVE,
              message: trackadmin["public"].messages.general.CONFIRM_TO_SAVE,
              funcYes: function funcYes() {
                global.utils.showLoader();
                trackadmin["public"].api.contents.save(dataSave).then(function (item) {
                  global.utils.hideLoader();
                  global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_SAVED);
                });
              }
            });
          }
        });
        $("#fileInputImage").on("change", function () {
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
              var alto = img.height;
              console.log(ancho + ' ' + alto);
            };
          }
        });
      },
      init: function () {
        var _init = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  $.extend(_settings, options || {}); //global.utils.showLoader();

                  _private.initializeControls();

                  _private.bindEvents();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function init() {
          return _init.apply(this, arguments);
        }

        return init;
      }()
    };

    _private.init();
  };

  trackadmin["public"] = trackadmin["public"] || {};
  trackadmin["public"].benefices = benefices;
})(window.trackadmin = window.trackadmin || {}, $, window.global = window.global || {});

/***/ }),

/***/ "./resources/js/components/benefices/first_benefice.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/benefices/first_benefice.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(function (trackadmin, $, global) {
  var first_benefice = function first_benefice(options) {
    var _settings = {},
        _resources = {
      statusMant: "VIEW",
      formPrimary: '#form_maintenance'
    },
        _controls = {
      $tableSearch: null
    },
        _private = {
      initializeControls: function initializeControls() {
        $(_resources.formPrimary).validate(trackadmin["public"].utils.formRulesValidate(true));
      },
      loadDataToSave: function loadDataToSave() {
        var formData = $(_resources.formPrimary).serializeArray();
        var generateData = {};
        formData.filter(function (i) {
          generateData[i.name] = i.value.trim();
        });
        generateData.group = "benefices";
        generateData.page = "first_benefice";
        console.info(generateData, 'generateData');
        return generateData;
      },
      bindEvents: function bindEvents() {
        $("#btn-save").on("click", function () {
          var dataSave = _private.loadDataToSave();

          var validate = $(_resources.formPrimary).valid();

          if (validate) {
            global.utils.confirm({
              title: trackadmin["public"].messages.general.TITLE_SAVE,
              message: trackadmin["public"].messages.general.CONFIRM_TO_SAVE,
              funcYes: function funcYes() {
                global.utils.showLoader();
                trackadmin["public"].api.contents.save(dataSave).then(function (item) {
                  global.utils.hideLoader();
                  global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_SAVED);
                });
              }
            });
          }
        });
      },
      init: function () {
        var _init = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  $.extend(_settings, options || {}); //global.utils.showLoader();

                  _private.initializeControls();

                  _private.bindEvents();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function init() {
          return _init.apply(this, arguments);
        }

        return init;
      }()
    };

    _private.init();
  };

  trackadmin["public"] = trackadmin["public"] || {};
  trackadmin["public"].first_benefice = first_benefice;
})(window.trackadmin = window.trackadmin || {}, $, window.global = window.global || {});

/***/ }),

/***/ "./resources/js/components/benefices/second_benefice.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/benefices/second_benefice.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(function (trackadmin, $, global) {
  var second_benefice = function second_benefice(options) {
    var _settings = {},
        _resources = {
      statusMant: "VIEW",
      formPrimary: '#form_maintenance'
    },
        _controls = {
      $tableSearch: null
    },
        _private = {
      initializeControls: function initializeControls() {
        $(_resources.formPrimary).validate(trackadmin["public"].utils.formRulesValidate(true));
      },
      loadDataToSave: function loadDataToSave() {
        var formData = $(_resources.formPrimary).serializeArray();
        var generateData = {};
        formData.filter(function (i) {
          generateData[i.name] = i.value.trim();
        });
        generateData.group = "benefices";
        generateData.page = "second_benefice";
        console.info(generateData, 'generateData');
        return generateData;
      },
      saveImage: function saveImage() {
        var dataFile = new FormData();
        dataFile.append('file', $('#fileInputImage')[0].files[0]);
        dataFile.append('content_id', $('#fileInputImage').attr("content-id"));
        global.utils.confirm({
          title: trackadmin["public"].messages.general.TITLE_SAVE,
          message: trackadmin["public"].messages.general.CONFIRM_TO_SAVE,
          funcYes: function funcYes() {
            global.utils.showLoader();
            trackadmin["public"].api.contents.save_image(dataFile).then(function (item) {
              global.utils.hideLoader();
              global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_SAVED);
            });
          }
        });
      },
      bindEvents: function bindEvents() {
        $("#btn-save-image").on("click", function () {
          _private.saveImage();
        });
        $("#btn-save").on("click", function () {
          var dataSave = _private.loadDataToSave();

          var validate = $(_resources.formPrimary).valid();

          if (validate) {
            global.utils.confirm({
              title: trackadmin["public"].messages.general.TITLE_SAVE,
              message: trackadmin["public"].messages.general.CONFIRM_TO_SAVE,
              funcYes: function funcYes() {
                global.utils.showLoader();
                trackadmin["public"].api.contents.save(dataSave).then(function (item) {
                  global.utils.hideLoader();
                  global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_SAVED);
                });
              }
            });
          }
        });
      },
      init: function () {
        var _init = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  $.extend(_settings, options || {}); //global.utils.showLoader();

                  _private.initializeControls();

                  _private.bindEvents();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function init() {
          return _init.apply(this, arguments);
        }

        return init;
      }()
    };

    _private.init();
  };

  trackadmin["public"] = trackadmin["public"] || {};
  trackadmin["public"].second_benefice = second_benefice;
})(window.trackadmin = window.trackadmin || {}, $, window.global = window.global || {});

/***/ }),

/***/ "./resources/js/components/benefices/third_benefice.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/benefices/third_benefice.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(function (trackadmin, $, global) {
  var third_benefice = function third_benefice(options) {
    var _settings = {},
        _resources = {
      statusMant: "VIEW",
      formPrimary: '#form_maintenance'
    },
        _controls = {
      $tableSearch: null
    },
        _private = {
      initializeControls: function initializeControls() {
        $(_resources.formPrimary).validate(trackadmin["public"].utils.formRulesValidate(true));
      },
      loadDataToSave: function loadDataToSave() {
        var formData = $(_resources.formPrimary).serializeArray();
        var generateData = {};
        formData.filter(function (i) {
          generateData[i.name] = i.value.trim();
        });
        generateData.group = "benefices";
        generateData.page = "third_benefice";
        console.info(generateData, 'generateData');
        return generateData;
      },
      saveImage: function saveImage() {
        var dataFile = new FormData();
        dataFile.append('file', $('#fileInputImage')[0].files[0]);
        dataFile.append('content_id', $('#fileInputImage').attr("content-id"));
        global.utils.confirm({
          title: trackadmin["public"].messages.general.TITLE_SAVE,
          message: trackadmin["public"].messages.general.CONFIRM_TO_SAVE,
          funcYes: function funcYes() {
            global.utils.showLoader();
            trackadmin["public"].api.contents.save_image(dataFile).then(function (item) {
              global.utils.hideLoader();
              global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_SAVED);
            });
          }
        });
      },
      bindEvents: function bindEvents() {
        $("#btn-save-image").on("click", function () {
          _private.saveImage();
        });
        $("#btn-save").on("click", function () {
          var dataSave = _private.loadDataToSave();

          var validate = $(_resources.formPrimary).valid();

          if (validate) {
            global.utils.confirm({
              title: trackadmin["public"].messages.general.TITLE_SAVE,
              message: trackadmin["public"].messages.general.CONFIRM_TO_SAVE,
              funcYes: function funcYes() {
                global.utils.showLoader();
                trackadmin["public"].api.contents.save(dataSave).then(function (item) {
                  global.utils.hideLoader();
                  global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_SAVED);
                });
              }
            });
          }
        });
      },
      init: function () {
        var _init = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  $.extend(_settings, options || {}); //global.utils.showLoader();

                  _private.initializeControls();

                  _private.bindEvents();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function init() {
          return _init.apply(this, arguments);
        }

        return init;
      }()
    };

    _private.init();
  };

  trackadmin["public"] = trackadmin["public"] || {};
  trackadmin["public"].third_benefice = third_benefice;
})(window.trackadmin = window.trackadmin || {}, $, window.global = window.global || {});

/***/ }),

/***/ "./resources/js/components/common.js":
/*!*******************************************!*\
  !*** ./resources/js/components/common.js ***!
  \*******************************************/
/***/ (() => {

(function (trackadmin, ajax) {
  var uriBase = window.location.protocol + "//" + window.location.host;

  var api = function (ajax) {
    var general = {
      verifiquedAccessCode: function verifiquedAccessCode(code) {
        return ajax.get("".concat(uriBase, "/verificateaccesscode/").concat(code));
      }
    };
    var contents = {
      save: function save(data) {
        return ajax.put("".concat(uriBase, "/general/api/content/save"), {
          data: data
        });
      },
      save_image: function save_image(data) {
        return ajax.post("".concat(uriBase, "/general/api/content/image/save"), data);
      }
    };
    var workshops = {
      save: function save(data) {
        return ajax.put("".concat(uriBase, "/general/api/workshops/save"), {
          data: data
        });
      },
      save_image: function save_image(data) {
        return ajax.post("".concat(uriBase, "/general/api/workshop/save/image"), data);
      },
      deleteWorkshop: function deleteWorkshop(itemId) {
        return ajax["delete"]("".concat(uriBase, "/talleres/api/delete/").concat(itemId));
      }
    };
    var sections = {
      save: function save(data) {
        return ajax.put("".concat(uriBase, "/general/api/section/save"), {
          data: data
        });
      },
      save_image: function save_image(data) {
        return ajax.post("".concat(uriBase, "/general/api/section/save/image"), data);
      }
    };
    var maintenance = {
      getWorkshopsByDepartament: function getWorkshopsByDepartament(departament) {
        return ajax.get("".concat(uriBase, "/workshop/api/departament/").concat(departament));
      },
      getMaintenance: function getMaintenance(model, version, mileage, deliveryYear, workshop) {
        return ajax.post("".concat(uriBase, "/api/WebTransparencySeat"), {
          modelo: model,
          version: version,
          kilometraje: mileage,
          anioVehiculo: deliveryYear,
          taller: workshop
        });
      },
      showVehiclesImage: function showVehiclesImage(model, version, mileage, deliveryYear) {
        return ajax.post("".concat(uriBase, "/api/vehicle/image/show"), {
          model: model,
          version: version,
          mileage: mileage,
          deliveryYear: deliveryYear
        });
      }
    };
    var details = {
      save: function save(data) {
        return ajax.put("".concat(uriBase, "/general/api/detail/save"), {
          data: data
        });
      }
    };
    var vehicles = {
      getVehicles: function getVehicles() {
        return ajax.get("".concat(uriBase, "/vehicle/api/list"));
      },
      getImageVehicles: function getImageVehicles(vehicle_id) {
        return ajax.get("".concat(uriBase, "/vehicle/api/images/").concat(vehicle_id));
      },
      deleteVehicle: function deleteVehicle(vehicleId) {
        return ajax["delete"]("".concat(uriBase, "/vehicle/api/delete/").concat(vehicleId));
      },
      saveVehicles: function saveVehicles(data) {
        return ajax.post("".concat(uriBase, "/vehicle/api/save"), data);
      },
      deleteVehiclesAll: function deleteVehiclesAll() {
        return ajax["delete"]("".concat(uriBase, "/vehicle/api/all/delete"));
      } // editVehicle: (data) => ajax.post(`${uriBase}/vehicle/api/edit`,{
      //     data:data
      // }),

    };
    return {
      contents: contents,
      workshops: workshops,
      sections: sections,
      maintenance: maintenance,
      details: details,
      vehicles: vehicles
    };
  }(ajax);

  var utils = function (ajax) {
    var common = {
      dateFormatAndHours: function dateFormatAndHours(showHours) {
        return showHours == true ? "DD/MM/YYYY hh:mm a" : "DD/MM/YYYY";
      },
      dateFormat: function dateFormat() {
        return "dd/mm/yyyy";
      },
      getUriBase: function getUriBase() {
        return window.location.protocol + "//" + window.location.host;
      },
      showDatesInformation: function showDatesInformation(created_at, updated_at) {
        $("#created_at").html(moment(created_at).format("DD/MM/YYYY hh:mm"));
        $("#updated_at").html(moment(updated_at).format("DD/MM/YYYY hh:mm"));
        window.location.protocol + "//" + window.location.host;
      },
      setOptionInDDL: function setOptionInDDL(id, text, select, color, active) {
        if (id != null && text != null) {
          if (active == 1) {
            color = "#444";
          }

          $("#" + select).prepend(new Option(text, "".concat(id, "|").concat(color)));
          $("#" + select).val(id + "|" + color).trigger('change');
        }
      },
      getduplicatesElementsInJson: function getduplicatesElementsInJson(data, name) {
        var hash = {};
        var datajson = data.filter(function (current) {
          var exists = !hash[current[name]] || false;
          hash[current[name]] = true;
          return exists;
        });
        return JSON.parse(JSON.stringify(datajson));
      },
      limitText: function limitText(data, limit) {
        var array = data.split(" ", limit);
        var texts = array.join(" ");
        var puntos = '...';

        if (data.split(" ").length <= limit) {
          puntos = '';
        }

        return "".concat(texts, " ").concat(puntos);
      },
      fillSummerNoteDefault: function fillSummerNoteDefault(content, height) {
        //console.info(content, 'content');
        $("#".concat(content)).summernote('destroy');
        $("#".concat(content)).summernote({
          placeholder: '',
          lang: 'es-ES',
          tabsize: 1,
          height: height,
          focus: true,
          toolbar: [['font', ['bold', 'underline', 'clear']], ['fontsize', ['fontsize']], ['color', ['color']], ['para', ['ul', 'ol', 'paragraph']], //['insert', ['picture']],
          ['view', ['codeview']]],
          callbacks: {
            onPaste: function onPaste(e) {
              var bufferText = ((e.originalEvent || e).clipboardData || window.clipboardData).getData('Text');
              e.preventDefault();
              document.execCommand('insertText', false, bufferText);
            }
            /* onImageUpload: function (image) {
                //trackadmin.public.utils.summerNoteSaveFile(image[0], content);
                common.summerNoteSaveFile(image[0], content);
            } */

          }
        });
      },
      formRulesValidate: function formRulesValidate(submit) {
        var formRules = {
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
              required: "Se necesita la dirección de correo electrónico",
              email: "La dirección de correo electrónico debe tener el formato dename@domain.com"
            }
          }
          /* submitHandler : function (form) {
              //$(form).ajaxSubmit();
              console.info(form, "validation");
          } */

        };

        if (submit) {
          formRules.submitHandler = function (form) {//$(form).ajaxSubmit();
            //console.info(form, "validation");
          };
        }

        return formRules;
      } //

    };
    return common;
  }(ajax);

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
    }
  };
  trackadmin["public"] = trackadmin["public"] || {};
  trackadmin["public"].api = api;
  trackadmin["public"].utils = utils;
  trackadmin["public"].messages = messages;
})(window.trackadmin = window.trackadmin || {}, window.global.ajax);

/***/ }),

/***/ "./resources/js/components/config/detail.js":
/*!**************************************************!*\
  !*** ./resources/js/components/config/detail.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(function (trackadmin, $, global) {
  var detail = function detail(options) {
    var _settings = {},
        _resources = {
      statusMant: "VIEW",
      formPrimary: '#form_maintenance'
    },
        _controls = {
      $tableSearch: null
    },
        _private = {
      initializeControls: function initializeControls() {
        $(_resources.formPrimary).validate(trackadmin["public"].utils.formRulesValidate(true));
      },
      loadDataToSave: function loadDataToSave() {
        var formData = $(_resources.formPrimary).serializeArray();
        var generateData = {};
        formData.filter(function (i) {
          generateData[i.name] = i.value.trim();
        });
        console.info(generateData, 'generateData');
        return generateData;
      },
      save: function save() {
        var dataSave = _private.loadDataToSave();

        var validate = $(_resources.formPrimary).valid();

        if (validate) {
          global.utils.confirm({
            title: trackadmin["public"].messages.general.TITLE_SAVE,
            message: trackadmin["public"].messages.general.CONFIRM_TO_SAVE,
            funcYes: function funcYes() {
              global.utils.showLoader();
              trackadmin["public"].api.details.save(dataSave).then(function (item) {
                global.utils.hideLoader();
                global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_SAVED);
              });
            }
          });
        }
      },
      bindEvents: function bindEvents() {
        $("#btn-save").on("click", function () {
          _private.save();
        });
      },
      init: function () {
        var _init = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  $.extend(_settings, options || {}); //global.utils.showLoader();

                  _private.initializeControls();

                  _private.bindEvents();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function init() {
          return _init.apply(this, arguments);
        }

        return init;
      }()
    };

    _private.init();
  };

  trackadmin["public"] = trackadmin["public"] || {};
  trackadmin["public"].detail = detail;
})(window.trackadmin = window.trackadmin || {}, $, window.global = window.global || {});

/***/ }),

/***/ "./resources/js/components/config/termsAndConditions.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/config/termsAndConditions.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(function (trackadmin, $, global) {
  var termsAndConditions = function termsAndConditions(options) {
    var _settings = {},
        _resources = {
      statusMant: "VIEW",
      formPrimary: '#form_maintenance'
    },
        _controls = {
      $tableSearch: null
    },
        _private = {
      initializeControls: function initializeControls() {
        $(_resources.formPrimary).validate(trackadmin["public"].utils.formRulesValidate(true));
        trackadmin["public"].utils.fillSummerNoteDefault("txtDescription", 520);
      },
      loadDataToSave: function loadDataToSave() {
        var formData = $(_resources.formPrimary).serializeArray();
        var generateData = {};
        formData.filter(function (i) {
          generateData[i.name] = i.value.trim();
        });
        generateData.group = "config";
        generateData.page = "termsAndConditions";
        console.info(generateData, 'generateData');
        return generateData;
      },
      saveImage: function saveImage() {
        var dataFile = new FormData();
        dataFile.append('file', $('#fileInputImage')[0].files[0]);
        dataFile.append('content_id', $('#fileInputImage').attr("content-id"));
        global.utils.confirm({
          title: trackadmin["public"].messages.general.TITLE_SAVE,
          message: trackadmin["public"].messages.general.CONFIRM_TO_SAVE,
          funcYes: function funcYes() {
            global.utils.showLoader();
            trackadmin["public"].api.contents.save_image(dataFile).then(function (item) {
              global.utils.hideLoader();
              global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_SAVED);
            });
          }
        });
      },
      bindEvents: function bindEvents() {
        $("#btn-save-image").on("click", function () {
          _private.saveImage();
        });
        $("#btn-save").on("click", function () {
          var dataSave = _private.loadDataToSave();

          var validate = $(_resources.formPrimary).valid();

          if (validate) {
            global.utils.confirm({
              title: trackadmin["public"].messages.general.TITLE_SAVE,
              message: trackadmin["public"].messages.general.CONFIRM_TO_SAVE,
              funcYes: function funcYes() {
                global.utils.showLoader();
                trackadmin["public"].api.contents.save(dataSave).then(function (item) {
                  global.utils.hideLoader();
                  global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_SAVED);
                });
              }
            });
          }
        });
      },
      init: function () {
        var _init = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  $.extend(_settings, options || {}); //global.utils.showLoader();

                  _private.initializeControls();

                  _private.bindEvents();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function init() {
          return _init.apply(this, arguments);
        }

        return init;
      }()
    };

    _private.init();
  };

  trackadmin["public"] = trackadmin["public"] || {};
  trackadmin["public"].termsAndConditions = termsAndConditions;
})(window.trackadmin = window.trackadmin || {}, $, window.global = window.global || {});

/***/ }),

/***/ "./resources/js/components/config/vehicle.js":
/*!***************************************************!*\
  !*** ./resources/js/components/config/vehicle.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(function (trackadmin, $, global) {
  var vehicle = function vehicle(options) {
    var _settings = {
      pathImagesVehiclesAws: null
    },
        _resources = {
      statusMant: "VIEW",
      dateFormat: trackadmin["public"].utils.dateFormatAndHours(),
      $tableSearch: null,
      deleteList: [],
      deleteDetails: [],
      vehiclesList: []
    },
        _controls = {
      /*$tableSearch: null*/
    },
        _private = {
      initializeControls: function initializeControls() {
        _private.getVehicles();

        global.utils.hideLoader(); //_private.fillTableSearch();
      },
      getVehicles: function getVehicles() {
        trackadmin["public"].api.vehicles.getVehicles().then(function (item) {
          var model = trackadmin["public"].utils.getduplicatesElementsInJson(item, "model");
          model.filter(function (i) {
            var n = item.filter(function (p) {
              return p.id == i.id && p.version != null;
            });
            i.content = n, i.count_details = n.length;
          });
          _resources.vehiclesList = model;

          _private.reorder(item);

          _private.fillTableSearch(model);
        });
      },
      reorder: function reorder(data) {
        var model = trackadmin["public"].utils.getduplicatesElementsInJson(data, "model");
        var model1 = model;
        /* let version =  trackadmin.public.utils.getduplicatesElementsInJson(data, "version");
        let mileage =  trackadmin.public.utils.getduplicatesElementsInJson(data, "mileage"); //kilometraje
        let delivery =  trackadmin.public.utils.getduplicatesElementsInJson(data, "delivery_year"); //año de entrega */

        model.filter(function (i) {
          //let version = trackadmin.public.utils.getduplicatesElementsInJson(model1, "version");
          //let version1 = version;
          //let mileage =  trackadmin.public.utils.getduplicatesElementsInJson(version, "mileage"); //kilometraje

          /* version.filter(p=>{
              p.mileage = mileage.filter(o=> p.version == o.version);
          }); */
          var items = data.filter(function (p) {
            return p.model == i.model;
          }); //i.items = items;

          var version = trackadmin["public"].utils.getduplicatesElementsInJson(items, "version");
          version.filter(function (p) {
            //let mileage = trackadmin.public.utils.getduplicatesElementsInJson(items, "mileage"); //kilometraje
            var item1 = items.filter(function (n) {
              return n.version == p.version;
            });
            var delivery = trackadmin["public"].utils.getduplicatesElementsInJson(item1, "delivery_year"); //console.info();

            delivery.filter(function (n) {
              var item2 = item1.filter(function (x) {
                return x.delivery_year == n.delivery_year;
              }); //console.info(item2,n.mileage,'**');

              n.mileage = trackadmin["public"].utils.getduplicatesElementsInJson(item2, 'mileage');
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
      fillTableSearch: function fillTableSearch(data) {
        if (_resources.$tableSearch == null) {
          _resources.$tableSearch = $("#table-result-search").DataTable({
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
            columns: [{
              data: null,
              title: "Modelo",
              "class": "",
              render: function render(d, type, row, meta) {
                return "".concat(row.model);
              }
            }, {
              data: null,
              title: "Elementos",
              "class": "",
              render: function render(d, type, row, meta) {
                return "".concat(row.count_details);
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
              "class": "text-center",
              render: function render(d, type, row, meta) {
                return "\n                                        <button class=\"btn-edit-vehicle btn-option text-info btn btn-sm text-success\" vehicleId = \"".concat(row.id, "\"><i class=\"fas fa-edit\"></i></button>\n                                        <button class=\"btn-option btn-remove-vehicle text-info btn btn-sm text-danger\" vehicleId = \"").concat(row.id, "\" ><i class=\"fas fa-minus-square\"></i></button> ");
              }
            }]
          });
        } else {
          _resources.$tableSearch.clear();

          _resources.$tableSearch.rows.add(data);

          _resources.$tableSearch.draw();
        }
      },
      fillContentImage: function fillContentImage(data, content) {
        var nameFile = [];
        var imagesData = [];
        data.filter(function (item) {
          var url = "".concat(item.image);
          imagesData.push({
            caption: item.name,
            url: "".concat(trackadmin["public"].utils.getUriBase(), "/api/vehicle/image/delete"),
            key: item.id
          });
          nameFile.push(url);
        });
        /*$("#fileImageBanners").sortable({});*/

        console.info(imagesData, nameFile);
        $("#".concat(content)).fileinput({
          uploadUrl: "generateInput/test",
          language: "es",
          //Lenguaje
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
            borderless: 'd-none'
          },
          "pluginOptions": {
            "showUpload": false,
            'removeIcon': '<span class="icon">delete</span> '
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
          _resources.deleteList.push(key); //console.info(data,event);

        }).on("filesorted", function (e, params) {
          console.log("File sorted params", params);
          global.utils.showLoader();
          trackadmin["public"].api.vehicles.saveSequence(params.stack).then(function (item) {
            global.utils.hideLoader();
          });
        });

        if (data.length == 0) {
          setTimeout(function () {
            $("#".concat(content)).fileinput("clear");
          }, 300);
        }
      },
      fillFormMaintenance: function fillFormMaintenance(data) {
        $("#vehicle_id").val(data.id);
        $("#txtModel").val(data.model);

        var content = function content(item) {
          return "\n                        <tr id =\"tr".concat(item.detail_id, "\" itemId=\"").concat(item.detail_id, "\">\n                            <td><input type=\"text\" class=\"form-control dv\" required name=\"v-").concat(item.detail_id, "\" value=\"").concat(item.version, "\"></td>\n                            <td><input type=\"text\" class=\"form-control da\" required name=\"a-").concat(item.detail_id, "\" value=\"").concat(item.delivery_year, "\"></td>\n                            <td><input type=\"text\" class=\"form-control dk\" required name=\"k-").concat(item.detail_id, "\" value=\"").concat(item.mileage, "\"></td>\n                            <th>\n                                <button type=\"button\" class=\"btn-option btn-remove-detail text-info btn btn-sm text-danger\" detailId = \"").concat(item.detail_id, "\" >\n                                <i class=\"fas fa-minus-square\"></i>\n                                </button>\n                            </th>\n                        </tr>\n                        ");
        };

        data.content.filter(function (i) {
          $("#table-details tbody").append(content(i));
        }); //trackadmin.public.utils.showDatesInformation(data.created_at, data.updated_at)
      },
      clearFormMaintenance: function clearFormMaintenance() {
        $("#form-add-vehicle input").val("");
      },
      loadDataToSave: function loadDataToSave(content, option) {
        /* var formData = $(`#${content}`).serializeArray();
        var generateData = {};
        formData.filter(i => {
            generateData[i.name] = i.value;
        });
        console.info(generateData, "generateData");
        return generateData; */
        var details = [];
        $("#table-details tbody tr").each(function (key, i) {
          var v = $(this).find('.dv').val();
          var k = $(this).find('.dk').val();
          var a = $(this).find('.da').val();
          var id = $(this).attr("itemId");
          details.push({
            version: v,
            mileage: k,
            delivery_year: a,
            id: id
          });
        });
        var generateData = {
          model: $("#txtModel").val(),
          id: $("#vehicle_id").val(),
          details: details,
          deleteDetails: _resources.deleteDetails,
          deleteImages: _resources.deleteList
        };
        console.info(generateData, 'dataSave');
        return generateData;
      },
      saveVehicles: function saveVehicles() {
        var formInfo = new FormData();
        var files = $("#fileVehicle").fileinput('getFileList');

        var dataSave = _private.loadDataToSave();

        files.filter(function (file, key) {
          formInfo.append("files[".concat(key, "]"), file);
        });
        formInfo.append('data', JSON.stringify(dataSave)); //formInfo = Enviar a guardar

        var validate = $("#form-add-vehicle").valid();

        if (validate) {
          trackadmin["public"].api.vehicles.saveVehicles(formInfo).then(function (item) {
            _private.clearFormMaintenance();

            global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_SAVED);

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
      bindEvents: function bindEvents() {
        $("#btn-import-exams").on("click", function (e) {
          $("#file-import").click();
        });
        $("#file-import").on("change", function (e) {
          var input = $(this).prop("files");
          console.info(input);

          if (input && input[0]) {
            e.preventDefault();
            global.utils.confirm({
              title: "¿Importar vehículos?",
              message: "Se importará los datos colocados",
              funcYes: function funcYes() {
                $("#examsImport").submit();
                document.getElementById('file-import').value = null;
                setTimeout(function () {
                  _private.getVehicles();
                }, 1000);
              },
              funcNo: function funcNo() {
                document.getElementById('file-import').value = null;
              }
            });
          }
        });
        $("#btn-vehicle-save").on("click", function () {
          _private.saveVehicles();
        });
        $("#edit-vehicle").on("click", function () {
          _private.editVehicles();
        });
        $("#content-buttons .nav-link").on("click", function (e) {
          var content = $(this).attr("id");
          console.log(content);

          if (content == "config-vehicles-tab") {
            _resources.$tableSearch.columns.adjust().draw();
          }
        });
        $("#table-result-search").on("click", "tbody .btn-edit-vehicle", function (e) {
          e.preventDefault();
          _resources.statusMant = 'EDIT';
          _resources.deleteDetails = [];
          _resources.deleteList = [];
          $("#modal-vehicle").modal("show");
          $("#table-details tbody").html("");
          $("#modal-vehicle-label").html('Editar Vehículo');
          var vehicleId = $(this).attr("vehicleId");

          var vehicle = _resources.vehiclesList.filter(function (item) {
            return item.id == vehicleId;
          });

          trackadmin["public"].api.vehicles.getImageVehicles(vehicleId).then(function (item) {
            $('#fileVehicle').fileinput('clear');
            $('#fileVehicle').fileinput('destroy');

            _private.fillContentImage(item, 'fileVehicle');
          }), //console.info(vehicle, "vehicledata");
          $("#fileVehicle").removeAttr('required');

          _private.fillFormMaintenance(vehicle[0]);
        });
        $("#btn-modal-vehicle").on("click", function () {
          _resources.statusMant = 'NEW';
          $("#modal-vehicle").modal("show");

          _private.fillContentImage([], 'fileVehicle');

          $("#table-details tbody").html("");
          $("#vehicle_id").val(-1);
          $("#fileVehicle").attr('required', 'true');
        });
        $("#btn-delete-all").on("click", function (e) {
          console.info("aa");
          global.utils.confirm({
            title: trackadmin["public"].messages.general.TITLE_DELETE,
            message: trackadmin["public"].messages.general.CONFIRM_TO_DELETE + ' No habra manera de recuperar la información actual.',
            funcYes: function funcYes() {
              trackadmin["public"].api.vehicles.deleteVehiclesAll().then(function (item) {
                _private.getVehicles();
              });
            }
          });
        });
        $("#table-result-search").on("click", "tbody .btn-remove-vehicle", function (e) {
          var _this = this;

          e.preventDefault();
          global.utils.confirm({
            title: trackadmin["public"].messages.general.TITLE_DELETE,
            message: trackadmin["public"].messages.general.CONFIRM_TO_DELETE,
            funcYes: function funcYes() {
              var valueId = $(_this).attr("vehicleId"); //$("#status-message").empty();

              global.utils.showLoader();
              trackadmin["public"].api.vehicles.deleteVehicle(valueId).then(function (item) {
                _private.getVehicles();

                global.utils.hideLoader();
              });
            }
          });
        });
        $("#table-details").on("click", "tbody .btn-remove-detail", function (e) {
          var id = $(this).attr('detailId');
          console.info(id, "id");

          if (_resources.statusMant == 'EDIT') {
            _resources.deleteDetails.push(id);
          }

          $("#tr".concat(id)).remove();
        });
        $("#btn-modal-add-detail").on("click", function (e) {
          $("#modal-vehicle-label").html('Nuevo Vehículo');
          var count = $("#table-details tbody tr").length + 1;
          var content = "\n                        <tr id=\"tr-".concat(count, "\" itemId =\"-").concat(count, "\" >\n                            \n                            <td><input type=\"text\" class=\"form-control dv\" required name=\"v-").concat(count, "\"></td>\n                            <td><input type=\"text\" class=\"form-control da\" required name=\"a-").concat(count, "\"></td>\n                            <td><input type=\"text\" class=\"form-control dk\" required name=\"k-").concat(count, "\"></td>\n                            <th>\n                                <button type=\"button\" class=\"btn-option btn-remove-detail text-info btn btn-sm text-danger\" detailId = \"-").concat(count, "\" >\n                                <i class=\"fas fa-minus-square\"></i>\n                                </button>\n                            </th>\n                        </tr>\n                        ");
          $("#table-details tbody").append(content);
        });
      },
      init: function () {
        var _init = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  $.extend(_settings, options || {});
                  global.utils.showLoader();

                  _private.initializeControls();

                  _private.bindEvents();

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function init() {
          return _init.apply(this, arguments);
        }

        return init;
      }()
    };

    _private.init();
  };

  trackadmin["public"] = trackadmin["public"] || {};
  trackadmin["public"].vehicle = vehicle;
})(window.trackadmin = window.trackadmin || {}, $, window.global = window.global || {});

/***/ }),

/***/ "./resources/js/components/dashboard.js":
/*!**********************************************!*\
  !*** ./resources/js/components/dashboard.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(function (trackadmin, $, global) {
  var dashboard = function dashboard(options) {
    var _settings = {},
        _resources = {
      statusMant: "VIEW"
    },
        _controls = {
      $tableSearch: null
    },
        _private = {
      initializeControls: function initializeControls() {
        _private.searchData();

        _private.clearFormMaintenance();

        _private.setDisableInLoadPage();
      },
      clearFormMaintenance: function clearFormMaintenance() {
        $("#form_maintenance input").val("");
        $("#form_maintenance textarea").val("");
      },
      disabledFormMaintenance: function disabledFormMaintenance(isEnable) {
        $("#form_maintenance input").prop("readonly", isEnable);
        $("#form_maintenance textarea").prop("readonly", isEnable);
        $("#form_maintenance button").prop("disabled", isEnable);
        $("#form_maintenance select").prop("disabled", isEnable);
      },
      showActionButtons: function showActionButtons() {
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
      setDisableInLoadPage: function setDisableInLoadPage() {
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
      loadDataToSave: function loadDataToSave() {
        var formData = $("#form_maintenance").serializeArray();
        var generateData = {};
        formData.filter(function (i) {
          generateData[i.name] = i.value;
        });
        console.info(generateData, 'generateData');
        return generateData;
      },
      searchData: function searchData() {
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
      fillFormMaintenance: function fillFormMaintenance(data) {
        $("#input_current_id").val(data.id);
        trackadmin["public"].utils.showDatesInformation(data.created_at, data.updated_at);
      },
      loadDataItem: function loadDataItem(item_id) {
        global.utils.showLoader();
        /* trackadmin.public.api.accessCode.getAccessCodeById(item_id).then(item => {
            _private.fillFormMaintenance(item);
            global.utils.hideLoader();
        }); */
      },
      bindEvents: function bindEvents() {
        $("#table-result-search").on("click", "tr", function (e) {
          if (_resources.statusMant == "NEW" || _resources.statusMant == "EDIT") {
            global.utils.hideLoader();
            global.utils.showAlertError({
              title: trackadmin["public"].messages.general.TITLE_CANCEL,
              message: trackadmin["public"].messages.general.ALERT_CREATING_EDITING
            });
            return;
          }

          var item_id = $(this).find("span").attr("item_id");

          if (item_id != undefined || item_id != null) {
            _private.loadDataItem(item_id);

            $("#btn-edit").prop("disabled", false);
            $("#btn-delete").prop("disabled", false);
          }
        });
        $("#btn-search").on("click", function () {
          _private.executeSearch();
        });
        $("#btn-new").on("click", function () {
          _resources.statusMant = "NEW";

          _private.setDisableInLoadPage();

          $("#input_current_id").val(-1);
        });
        $("#btn-delete").on("click", function () {
          global.utils.confirm({
            title: trackadmin["public"].messages.general.TITLE_DELETE,
            message: trackadmin["public"].messages.general.CONFIRM_TO_DELETE,
            funcYes: function funcYes() {
              var itemId = $("#input_current_id").val();
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
        $("#btn-cancel").on("click", function () {
          global.utils.confirm({
            title: trackadmin["public"].messages.general.TITLE_CANCEL,
            message: trackadmin["public"].messages.general.CONFIRM_TO_CANCEL,
            funcYes: function funcYes() {
              if (_resources.statusMant == "EDIT") {
                var currentItem = $("#input_current_id").val();
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
        $("#btn-edit").on("click", function () {
          _resources.statusMant = "EDIT";

          _private.setDisableInLoadPage();
        });
        $("#btn-clear-search").on("click", function () {
          $("#input_search_name").val("").focus();
        });
        $("#btn-save").on("click", function () {
          var dataSave = _private.loadDataToSave();

          var validate = $("#form_maintenance").valid();

          if (validate) {
            global.utils.confirm({
              title: trackadmin["public"].messages.general.TITLE_SAVE,
              message: trackadmin["public"].messages.general.CONFIRM_TO_SAVE,
              funcYes: function funcYes() {
                global.utils.showLoader();
                /* trackadmin.public.api.accessCode.saveAccessCode(dataSave).then(item => {
                }); */
              }
            });
          }
        });
      },
      init: function () {
        var _init = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  $.extend(_settings, options || {}); //global.utils.showLoader();

                  _private.initializeControls();

                  _private.bindEvents();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function init() {
          return _init.apply(this, arguments);
        }

        return init;
      }()
    };

    _private.init();
  };

  trackadmin["public"] = trackadmin["public"] || {};
  trackadmin["public"].dashboard = dashboard;
})(window.trackadmin = window.trackadmin || {}, $, window.global = window.global || {});

/***/ }),

/***/ "./resources/js/components/global.js":
/*!*******************************************!*\
  !*** ./resources/js/components/global.js ***!
  \*******************************************/
/***/ (() => {

(function (global, $, undefined) {
  var utils = function (global, $) {
    var dataTableSpanish = function dataTableSpanish() {
      return {
        sProcessing: "Procesando...",
        sLengthMenu: "Mostrar _MENU_ registros",
        sZeroRecords: "No se encontraron resultados",
        sEmptyTable: "Ningún dato disponible en esta tabla",
        //"sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
        sInfo: "Se encontraron _END_ coincidencias de un total de _TOTAL_ registros",
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
          sSortAscending: ": Activar para ordenar la columna de manera ascendente",
          sSortDescending: ": Activar para ordenar la columna de manera descendente"
        }
      };
    };

    var showWebLoader = function showWebLoader() {
      $('#ftco-loader').addClass('show');
    };

    var hideWebLoader = function hideWebLoader() {
      $('#ftco-loader').removeClass('show');
    };

    var showLoader = function showLoader() {
      $(".loading-custom").show();
    };

    var hideLoader = function hideLoader() {
      $(".loading-custom").hide();
    };

    var confirm = function confirm(options) {
      var settings = {
        title: "",
        message: "",
        funcYes: null,
        funcNo: function funcNo() {}
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

    var showAlertError = function showAlertError(options) {
      var settings = {
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

    var showAlertWarning = function showAlertWarning(options) {
      var settings = {
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

    var showAlertInfo = function showAlertInfo(options) {
      var settings = {
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

    var showAlertSystemError = function showAlertSystemError(message) {
      return showAlertError({
        title: "<span class=\"text-danger\">ERROR INESPERADO</span>",
        message: message
      });
    };

    var manageNoSuccess = function manageNoSuccess(msg) {
      console.error(msg, "NO SUCCESS");
      showAlertSystemError(msg);
    };

    var manageError = function manageError(error, func) {
      if (error.response) {
        console.group("CALL SERVICE");
        console.error(error.response.request.responseURL, "RESPONSE URL");
        console.error(error.response.data, "RESPONSE DATA");
        console.error(error.response.status + "-" + error.response.statusText, "RESPONSE STATUS");
        console.error(error.response.headers, "RESPONSE HEADERS");
        console.groupEnd();
        var msg = "<div>The request was made and the server responded with a status code tha fails out of the range of 2xx.</div>\n                                    <hr class=\"m-t-5 m-b-5\"/>\n                                    <div><span class=\"font-bold\">Status:&nbsp;</span><span>".concat(error.response.status, " - ").concat(error.response.statusText, "</span></div>\n                                    <div><span class=\"font-bold\">URL:&nbsp;</span><span>").concat(error.response.request.responseURL, "</span></div>");
        showAlertSystemError(msg);
        func && func(msg);
      } else if (error.request) {
        console.error(error.request, "ERROR REQUEST");
        var _msg = "The request was made but no response was received [error.request] is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js";
        showAlertSystemError(_msg);
        func && func(_msg);
      } else {
        console.error(error.message, "ERROR MESSAGE");

        var _msg2 = "Something happened in setting up the request that triggered an Error. ".concat(error.message);

        func && func(_msg2);
        showAlertSystemError(_msg2);
      }
    };

    var showNotySuccess = function showNotySuccess(message, title) {
      return toastr.success(message, title);
    };

    var showNotyError = function showNotyError(message, title) {
      return toastr.error(message, title);
    };

    var showNotyWarning = function showNotyWarning(message, title) {
      return toastr.warning(message, title);
    };

    var showNotyInfo = function showNotyInfo(message, title) {
      return toastr.info(message, title);
    };

    var showNotyInLineSuccess = function showNotyInLineSuccess(container, message) {
      if (container.is(":hidden")) {
        container.show(); //$(window).scrollTop(0);
      }

      container.html("\n                <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n                ".concat(message, "\n                </div>\n              "));
      setTimeout(function () {
        container.hide("fast"); //container.hide("slow");
      }, 4500);
    };

    var showNotyInLineWarning = function showNotyInLineWarning(container, message) {
      if (container.is(":hidden")) {
        container.show(); //$(window).scrollTop(0);
      }

      container.html("<div class=\"alert alert-warning alert-white alert-dismissible\" role=\"alert\">\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                                    <span aria-hidden=\"true\">\xD7</span>\n                                    </button>\n                                    ".concat(message, "\n                            </div>"));
      setTimeout(function () {
        container.hide("fast"); //container.hide("slow");
      }, 4500);
    };

    var showNotyInLineError = function showNotyInLineError(container, message) {
      if (container.is(":hidden")) {
        container.show(); //$(window).scrollTop(0);
      }

      container.html("<div class=\"alert alert-icon alert-danger alert-dismissible show\" role=\"alert\">\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                                    <span aria-hidden=\"true\">\xD7</span>\n                                    </button>\n                                    ".concat(message, "\n                            </div>"));
      setTimeout(function () {
        container.hide("fast"); //container.hide("slow");
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
      hideWebLoader: hideWebLoader
    };
  }(window.global || {}, $),
      constanst = function (global, $) {
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
  }(window.global || {}, $),
      ajax = function (global, $) {
    var debugMode = true;
    return {
      get: function get(url) {
        return new Promise(function (resolve, reject) {
          axios.get(url).then(function (response) {
            if (response.data.success) {
              if (debugMode) {
                console.info(url, "URL GET");
                console.group("CALL SERVICE");
                console.info(response.data.data, "DATA GET");
                console.groupEnd();
              }

              resolve(response.data.data);
            } else {
              console.info(response);
              global.utils.manageNoSuccess(response.data.message);
              reject(response.data.message);
            }
          })["catch"](function (error) {
            return global.utils.manageError(error, function (m) {
              return reject(m);
            });
          });
        });
      },
      post: function post(url, params) {
        return new Promise(function (resolve, reject) {
          axios.post(url, params).then(function (response) {
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
          })["catch"](function (error) {
            //console.info(error.response, "ERRORCITO!!!");
            global.utils.manageError(error, function (m) {
              return reject(m);
            });
          });
        });
      },
      put: function put(url, params) {
        return new Promise(function (resolve, reject) {
          axios.put(url, params).then(function (response) {
            if (response.data.success) {
              if (debugMode) {
                console.group("CALL SERVICE");
                console.info(url, "URL PUT");
                console.info(params, "PARAMS PUT");
                console.info(response.data.data, "DATA PUT");
                console.groupEnd();
              }

              resolve(response.data.data);
            } else {
              console.info(response);
              global.utils.manageNoSuccess(response.data.message);
              reject(response.data.message);
            }
          })["catch"](function (error) {
            return global.utils.manageError(error, function (m) {
              return reject(m);
            });
          });
        });
      },
      "delete": function _delete(url, params) {
        return new Promise(function (resolve, reject) {
          axios["delete"](url, params).then(function (response) {
            if (response.data.success) {
              if (debugMode) {
                console.group("CALL SERVICE");
                console.info(url, "URL DELETE");
                console.info(params, "PARAMS DELETE");
                console.info(response.data.data, "DATA DELETE");
                console.groupEnd();
              }

              resolve(response.data.data);
            } else {
              console.info(response);
              global.utils.manageNoSuccess(response.data.message);
              reject(response.data.message);
            }
          })["catch"](function (error) {
            return global.utils.manageError(error, function (m) {
              return reject(m);
            });
          });
        });
      }
    };
  }(window.global || {}, $);

  global.utils = utils;
  global.constants = constanst;
  global.ajax = ajax;
})(window.global = window.global || {}, $);

/***/ }),

/***/ "./resources/js/components/home/banner_parts.js":
/*!******************************************************!*\
  !*** ./resources/js/components/home/banner_parts.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(function (trackadmin, $, global) {
  var banner_parts = function banner_parts(options) {
    var _settings = {},
        _resources = {
      statusMant: "VIEW",
      formPrimary: '#form_maintenance'
    },
        _controls = {
      $tableSearch: null
    },
        _private = {
      initializeControls: function initializeControls() {
        $(_resources.formPrimary).validate(trackadmin["public"].utils.formRulesValidate(true));
      },
      loadDataToSave: function loadDataToSave() {
        var formData = $(_resources.formPrimary).serializeArray();
        var generateData = {};
        formData.filter(function (i) {
          generateData[i.name] = i.value.trim();
        });
        generateData.group = "home";
        generateData.page = "banner_parts";
        console.info(generateData, 'generateData');
        return generateData;
      },
      saveImage: function saveImage() {
        var dataFile = new FormData();
        dataFile.append('file', $('#fileInputImage')[0].files[0]);
        dataFile.append('content_id', $('#fileInputImage').attr("content-id"));
        global.utils.confirm({
          title: trackadmin["public"].messages.general.TITLE_SAVE,
          message: trackadmin["public"].messages.general.CONFIRM_TO_SAVE,
          funcYes: function funcYes() {
            global.utils.showLoader();
            trackadmin["public"].api.contents.save_image(dataFile).then(function (item) {
              global.utils.hideLoader();
              global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_SAVED);
            });
          }
        });
      },
      bindEvents: function bindEvents() {
        $("#btn-save-image").on("click", function () {
          _private.saveImage();
        });
        $("#btn-save").on("click", function () {
          var dataSave = _private.loadDataToSave();

          var validate = $(_resources.formPrimary).valid();

          if (validate) {
            global.utils.confirm({
              title: trackadmin["public"].messages.general.TITLE_SAVE,
              message: trackadmin["public"].messages.general.CONFIRM_TO_SAVE,
              funcYes: function funcYes() {
                global.utils.showLoader();
                trackadmin["public"].api.contents.save(dataSave).then(function (item) {
                  global.utils.hideLoader();
                  global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_SAVED);
                });
              }
            });
          }
        });
      },
      init: function () {
        var _init = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  $.extend(_settings, options || {}); //global.utils.showLoader();

                  _private.initializeControls();

                  _private.bindEvents();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function init() {
          return _init.apply(this, arguments);
        }

        return init;
      }()
    };

    _private.init();
  };

  trackadmin["public"] = trackadmin["public"] || {};
  trackadmin["public"].banner_parts = banner_parts;
})(window.trackadmin = window.trackadmin || {}, $, window.global = window.global || {});

/***/ }),

/***/ "./resources/js/components/home/banner_primary.js":
/*!********************************************************!*\
  !*** ./resources/js/components/home/banner_primary.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(function (trackadmin, $, global) {
  var banner_primary = function banner_primary(options) {
    var _settings = {},
        _resources = {
      statusMant: "VIEW",
      formPrimary: '#form_maintenance'
    },
        _controls = {
      $tableSearch: null
    },
        _private = {
      initializeControls: function initializeControls() {
        $(_resources.formPrimary).validate(trackadmin["public"].utils.formRulesValidate(true));
      },
      loadDataToSave: function loadDataToSave() {
        var formData = $(_resources.formPrimary).serializeArray();
        var generateData = {};
        formData.filter(function (i) {
          generateData[i.name] = i.value.trim();
        });
        generateData.group = "home";
        generateData.page = "banner_primary";
        console.info(generateData, 'generateData');
        return generateData;
      },
      saveImage: function saveImage() {
        var dataFile = new FormData();
        dataFile.append('file', $('#fileInputImage')[0].files[0]);
        dataFile.append('content_id', $('#fileInputImage').attr("content-id"));
        var imgsize = $("#fileInputImage")[0].files[0].size;

        if (imgsize >= 2000000) {
          global.utils.showNotyInLineWarning($("#mant-message"), trackadmin["public"].messages.general.VALIDATE_IMAGE_WEIGHT);
          console.log('El archivo supera los 2Mb.');
        } else {
          global.utils.confirm({
            title: trackadmin["public"].messages.general.TITLE_SAVE,
            message: trackadmin["public"].messages.general.CONFIRM_TO_SAVE,
            funcYes: function funcYes() {
              global.utils.showLoader();
              trackadmin["public"].api.contents.save_image(dataFile).then(function (item) {
                global.utils.hideLoader();
                global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_SAVED);
              });
            }
          });
        }
      },
      bindEvents: function bindEvents() {
        $("#btn-save-image").on("click", function () {
          _private.saveImage();
        });
        $("#btn-save").on("click", function () {
          var dataSave = _private.loadDataToSave();

          var validate = $(_resources.formPrimary).valid();

          if (validate) {
            global.utils.confirm({
              title: trackadmin["public"].messages.general.TITLE_SAVE,
              message: trackadmin["public"].messages.general.CONFIRM_TO_SAVE,
              funcYes: function funcYes() {
                global.utils.showLoader();
                trackadmin["public"].api.contents.save(dataSave).then(function (item) {
                  global.utils.hideLoader();
                  global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_SAVED);
                });
              }
            });
          }
        });
      },
      init: function () {
        var _init = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  $.extend(_settings, options || {}); //global.utils.showLoader();

                  _private.initializeControls();

                  _private.bindEvents();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function init() {
          return _init.apply(this, arguments);
        }

        return init;
      }()
    };

    _private.init();
  };

  trackadmin["public"] = trackadmin["public"] || {};
  trackadmin["public"].banner_primary = banner_primary;
})(window.trackadmin = window.trackadmin || {}, $, window.global = window.global || {});

/***/ }),

/***/ "./resources/js/components/home/fast_guide.js":
/*!****************************************************!*\
  !*** ./resources/js/components/home/fast_guide.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(function (trackadmin, $, global) {
  var fast_guide = function fast_guide(options) {
    var _settings = {},
        _resources = {
      statusMant: "VIEW",
      formPrimary: '#form_maintenance'
    },
        _controls = {
      $tableSearch: null
    },
        _private = {
      initializeControls: function initializeControls() {
        $(_resources.formPrimary).validate(trackadmin["public"].utils.formRulesValidate(true));
      },
      loadDataToSave: function loadDataToSave() {
        var data1 = {
          id: $("#section1_id").val(),
          title: $("#txtTitle1").val(),
          description: $("#txtDescription1").val(),
          btn: $("#txtButton1").val(),
          link_btn: $("#txtLinkButton1").val()
        };
        var data2 = {
          id: $("#section2_id").val(),
          title: $("#txtTitle2").val(),
          description: $("#txtDescription2").val(),
          btn: $("#txtButton2").val(),
          link_btn: $("#txtLinkButton2").val()
        };
        var data3 = {
          id: $("#section3_id").val(),
          title: $("#txtTitle3").val(),
          description: $("#txtDescription3").val(),
          btn: $("#txtButton3").val(),
          link_btn: $("#txtLinkButton3").val()
        };
        var sections = [];
        sections.push(data1);
        sections.push(data2);
        sections.push(data3);
        var formData = $(_resources.formPrimary).serializeArray();
        var generateData = {};
        formData.filter(function (i) {
          generateData[i.name] = i.value.trim();
        });
        generateData.group = "home";
        generateData.page = "fast_guide";
        generateData.sections = sections;
        console.info(generateData, 'generateData');
        return generateData;
      },
      saveImage: function saveImage() {
        //==============
        var dataFiles = new FormData();
        var data = [];
        $(".content-images .item-image").each(function (key, item) {
          var input = $(this).find('input[type=file]');
          var file = input[0].files[0];
          var fileName = file != undefined ? file.name : null; //let mainId = ;

          dataFiles.append("files[".concat(key, "]"), file);
          data.push({
            mainId: input.attr("item_id"),
            imageName: fileName
          });
        });
        dataFiles.append('sections', JSON.stringify(data));
        console.info(dataFiles, data, "DATA"); //==============

        global.utils.confirm({
          title: trackadmin["public"].messages.general.TITLE_SAVE,
          message: trackadmin["public"].messages.general.CONFIRM_TO_SAVE,
          funcYes: function funcYes() {
            global.utils.showLoader();
            trackadmin["public"].api.sections.save_image(dataFiles).then(function (item) {
              global.utils.hideLoader();
              global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_SAVED);
            });
          }
        });
      },
      bindEvents: function bindEvents() {
        $("#btn-save-image").on("click", function () {
          _private.saveImage();
        });
        $("#btn-save").on("click", function () {
          var dataSave = _private.loadDataToSave();

          var validate = $(_resources.formPrimary).valid();

          if (validate) {
            global.utils.confirm({
              title: trackadmin["public"].messages.general.TITLE_SAVE,
              message: trackadmin["public"].messages.general.CONFIRM_TO_SAVE,
              funcYes: function funcYes() {
                global.utils.showLoader();
                trackadmin["public"].api.sections.save(dataSave).then(function (item) {
                  global.utils.hideLoader();
                  global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_SAVED);
                });
              }
            });
          }
        });
      },
      init: function () {
        var _init = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  $.extend(_settings, options || {}); //global.utils.showLoader();

                  _private.initializeControls();

                  _private.bindEvents();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function init() {
          return _init.apply(this, arguments);
        }

        return init;
      }()
    };

    _private.init();
  };

  trackadmin["public"] = trackadmin["public"] || {};
  trackadmin["public"].fast_guide = fast_guide;
})(window.trackadmin = window.trackadmin || {}, $, window.global = window.global || {});

/***/ }),

/***/ "./resources/js/components/home/maintenance.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/home/maintenance.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(function (trackadmin, $, global) {
  var maintenance = function maintenance(options) {
    var _settings = {},
        _resources = {
      statusMant: "VIEW",
      formPrimary: '#form_maintenance'
    },
        _controls = {
      $tableSearch: null
    },
        _private = {
      initializeControls: function initializeControls() {
        $(_resources.formPrimary).validate(trackadmin["public"].utils.formRulesValidate(true));
      },
      loadDataToSave: function loadDataToSave() {
        var data1 = {
          id: $("#section1_id").val(),
          title: $("#section1_title").val(),
          description: $("#txtDescription1").val()
        };
        var data2 = {
          id: $("#section2_id").val(),
          title: $("#section2_title").val(),
          description: $("#txtDescription2").val()
        };
        var sections = [];
        sections.push(data1);
        sections.push(data2);
        var formData = $(_resources.formPrimary).serializeArray();
        var generateData = {};
        formData.filter(function (i) {
          generateData[i.name] = i.value.trim();
        });
        generateData.group = "home";
        generateData.page = "maintenance";
        generateData.sections = sections;
        console.info(generateData, 'generateData');
        return generateData;
      },
      bindEvents: function bindEvents() {
        $("#btn-save").on("click", function () {
          var dataSave = _private.loadDataToSave();

          var validate = $(_resources.formPrimary).valid();

          if (validate) {
            global.utils.confirm({
              title: trackadmin["public"].messages.general.TITLE_SAVE,
              message: trackadmin["public"].messages.general.CONFIRM_TO_SAVE,
              funcYes: function funcYes() {
                global.utils.showLoader();
                trackadmin["public"].api.sections.save(dataSave).then(function (item) {
                  global.utils.hideLoader();
                  global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_SAVED);
                });
              }
            });
          }
        });
      },
      init: function () {
        var _init = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  $.extend(_settings, options || {}); //global.utils.showLoader();

                  _private.initializeControls();

                  _private.bindEvents();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function init() {
          return _init.apply(this, arguments);
        }

        return init;
      }()
    };

    _private.init();
  };

  trackadmin["public"] = trackadmin["public"] || {};
  trackadmin["public"].maintenance = maintenance;
})(window.trackadmin = window.trackadmin || {}, $, window.global = window.global || {});

/***/ }),

/***/ "./resources/js/components/home/transparency.js":
/*!******************************************************!*\
  !*** ./resources/js/components/home/transparency.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(function (trackadmin, $, global) {
  var transparency = function transparency(options) {
    var _settings = {},
        _resources = {
      statusMant: "VIEW",
      formPrimary: '#form_maintenance'
    },
        _controls = {
      $tableSearch: null
    },
        _private = {
      initializeControls: function initializeControls() {
        $(_resources.formPrimary).validate(trackadmin["public"].utils.formRulesValidate(true));
      },
      loadDataToSave: function loadDataToSave() {
        var data1 = {
          id: $("#section4_id").val(),
          title: $("#txtTitle1").val(),
          description: $("#txtDescription1").val()
        };
        var data2 = {
          id: $("#section5_id").val(),
          title: $("#txtTitle2").val(),
          description: $("#txtDescription2").val()
        };
        var data3 = {
          id: $("#section6_id").val(),
          title: $("#txtTitle3").val(),
          description: $("#txtDescription3").val()
        };
        var sections = [];
        sections.push(data1);
        sections.push(data2);
        sections.push(data3);
        var formData = $(_resources.formPrimary).serializeArray();
        var generateData = {};
        formData.filter(function (i) {
          generateData[i.name] = i.value.trim();
        });
        generateData.group = "home";
        generateData.page = "transparency";
        generateData.sections = sections;
        console.info(generateData, 'generateData');
        return generateData;
      },
      saveImage: function saveImage() {
        //==============
        var dataFiles = new FormData();
        var data = [];
        $(".content-images .item-image").each(function (key, item) {
          var input = $(this).find('input[type=file]');
          var file = input[0].files[0];
          var fileName = file != undefined ? file.name : null; //let mainId = ;

          dataFiles.append("files[".concat(key, "]"), file);
          data.push({
            mainId: input.attr("item_id"),
            imageName: fileName
          });
        });
        dataFiles.append('sections', JSON.stringify(data));
        console.info(dataFiles, data, "DATA"); //==============

        global.utils.confirm({
          title: trackadmin["public"].messages.general.TITLE_SAVE,
          message: trackadmin["public"].messages.general.CONFIRM_TO_SAVE,
          funcYes: function funcYes() {
            global.utils.showLoader();
            trackadmin["public"].api.sections.save_image(dataFiles).then(function (item) {
              global.utils.hideLoader();
              global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_SAVED);
            });
          }
        });
      },
      bindEvents: function bindEvents() {
        $("#btn-save-image").on("click", function () {
          _private.saveImage();
        });
        $("#btn-save").on("click", function () {
          var dataSave = _private.loadDataToSave();

          var validate = $(_resources.formPrimary).valid();

          if (validate) {
            global.utils.confirm({
              title: trackadmin["public"].messages.general.TITLE_SAVE,
              message: trackadmin["public"].messages.general.CONFIRM_TO_SAVE,
              funcYes: function funcYes() {
                global.utils.showLoader();
                trackadmin["public"].api.sections.save(dataSave).then(function (item) {
                  global.utils.hideLoader();
                  global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_SAVED);
                });
              }
            });
          }
        });
      },
      init: function () {
        var _init = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  $.extend(_settings, options || {}); //global.utils.showLoader();

                  _private.initializeControls();

                  _private.bindEvents();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function init() {
          return _init.apply(this, arguments);
        }

        return init;
      }()
    };

    _private.init();
  };

  trackadmin["public"] = trackadmin["public"] || {};
  trackadmin["public"].transparency = transparency;
})(window.trackadmin = window.trackadmin || {}, $, window.global = window.global || {});

/***/ }),

/***/ "./resources/js/components/user.js":
/*!*****************************************!*\
  !*** ./resources/js/components/user.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(function (trackadmin, $, global) {
  var user = function user(options) {
    var _settings = {},
        _resources = {
      statusMant: "VIEW",
      formPrimary: '#form_maintenance'
    },
        _controls = {
      $tableSearch: null
    },
        _private = {
      initializeControls: function initializeControls() {// $(_resources.formPrimary).validate(trackadmin.public.utils.formRulesValidate(false));
      },
      bindEvents: function bindEvents() {
        $.validator.setDefaults({
          submitHandler: function submitHandler() {
            //alert("submitted!");
            $("#form_maintenance").ajaxSubmit();
          }
        }); // validate signup form on keyup and submit

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
      init: function () {
        var _init = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  $.extend(_settings, options || {}); //global.utils.showLoader();

                  _private.initializeControls();

                  _private.bindEvents();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function init() {
          return _init.apply(this, arguments);
        }

        return init;
      }()
    };

    _private.init();
  };

  trackadmin["public"] = trackadmin["public"] || {};
  trackadmin["public"].user = user;
})(window.trackadmin = window.trackadmin || {}, $, window.global = window.global || {});

/***/ }),

/***/ "./resources/js/components/workshops/banner_primary.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/workshops/banner_primary.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(function (trackadmin, $, global) {
  var banner_primary = function banner_primary(options) {
    var _settings = {},
        _resources = {
      statusMant: "VIEW",
      formPrimary: '#form_maintenance'
    },
        _controls = {
      $tableSearch: null
    },
        _private = {
      initializeControls: function initializeControls() {
        $(_resources.formPrimary).validate(trackadmin["public"].utils.formRulesValidate(true));
      },
      loadDataToSave: function loadDataToSave() {
        var formData = $(_resources.formPrimary).serializeArray();
        var generateData = {};
        formData.filter(function (i) {
          generateData[i.name] = i.value.trim();
        });
        console.info(generateData, 'generateData');
        return generateData;
      },
      saveImage: function saveImage() {
        var dataFile = new FormData();
        dataFile.append('file', $('#fileInputImage')[0].files[0]);
        dataFile.append('content_id', $('#fileInputImage').attr("content-id"));
        var imgsize = $("#fileInputImage")[0].files[0].size;

        if (imgsize >= 2000000) {
          global.utils.showNotyInLineWarning($("#mant-message"), trackadmin["public"].messages.general.VALIDATE_IMAGE_WEIGHT);
          console.log('El archivo supera los 2Mb.');
        } else {
          global.utils.confirm({
            title: trackadmin["public"].messages.general.TITLE_SAVE,
            message: trackadmin["public"].messages.general.CONFIRM_TO_SAVE,
            funcYes: function funcYes() {
              global.utils.showLoader();
              trackadmin["public"].api.contents.save_image(dataFile).then(function (item) {
                global.utils.hideLoader();
                global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_SAVED);
              });
            }
          });
        }
      },
      bindEvents: function bindEvents() {
        $("#btn-save-image").on("click", function () {
          _private.saveImage();
        });
        $("#btn-save").on("click", function () {
          var dataSave = _private.loadDataToSave();

          var validate = $(_resources.formPrimary).valid();

          if (validate) {
            global.utils.confirm({
              title: trackadmin["public"].messages.general.TITLE_SAVE,
              message: trackadmin["public"].messages.general.CONFIRM_TO_SAVE,
              funcYes: function funcYes() {
                global.utils.showLoader();
                trackadmin["public"].api.contents.save(dataSave).then(function (item) {
                  global.utils.hideLoader();
                  global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_SAVED);
                });
              }
            });
          }
        });
      },
      init: function () {
        var _init = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  $.extend(_settings, options || {}); //global.utils.showLoader();

                  _private.initializeControls();

                  _private.bindEvents();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function init() {
          return _init.apply(this, arguments);
        }

        return init;
      }()
    };

    _private.init();
  };

  trackadmin["public"] = trackadmin["public"] || {};
  trackadmin["public"].banner_primary = banner_primary;
})(window.trackadmin = window.trackadmin || {}, $, window.global = window.global || {});

/***/ }),

/***/ "./resources/js/components/workshops/text_primary.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/workshops/text_primary.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(function (trackadmin, $, global) {
  var text_primary = function text_primary(options) {
    var _settings = {},
        _resources = {
      statusMant: "VIEW",
      formPrimary: '#form_maintenance'
    },
        _controls = {
      $tableSearch: null
    },
        _private = {
      initializeControls: function initializeControls() {
        $(_resources.formPrimary).validate(trackadmin["public"].utils.formRulesValidate(true));
      },
      loadDataToSave: function loadDataToSave() {
        var formData = $(_resources.formPrimary).serializeArray();
        var generateData = {};
        formData.filter(function (i) {
          generateData[i.name] = i.value.trim();
        });
        generateData.group = "workshops";
        generateData.page = "main_text";
        console.info(generateData, 'generateData');
        return generateData;
      },
      bindEvents: function bindEvents() {
        $("#btn-save").on("click", function () {
          var dataSave = _private.loadDataToSave();

          var validate = $(_resources.formPrimary).valid();

          if (validate) {
            global.utils.confirm({
              title: trackadmin["public"].messages.general.TITLE_SAVE,
              message: trackadmin["public"].messages.general.CONFIRM_TO_SAVE,
              funcYes: function funcYes() {
                global.utils.showLoader();
                trackadmin["public"].api.contents.save(dataSave).then(function (item) {
                  global.utils.hideLoader();
                  global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_SAVED);
                });
              }
            });
          }
        });
      },
      init: function () {
        var _init = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  $.extend(_settings, options || {}); //global.utils.showLoader();

                  _private.initializeControls();

                  _private.bindEvents();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function init() {
          return _init.apply(this, arguments);
        }

        return init;
      }()
    };

    _private.init();
  };

  trackadmin["public"] = trackadmin["public"] || {};
  trackadmin["public"].text_primary = text_primary;
})(window.trackadmin = window.trackadmin || {}, $, window.global = window.global || {});

/***/ }),

/***/ "./resources/js/components/workshops/workshop.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/workshops/workshop.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//const { inArray } = require("jquery");
//const { isArray } = require("lodash");
(function (trackadmin, $, global) {
  var workshops = function workshops(options) {
    var _settings = {},
        _resources = {
      statusMant: "VIEW",
      formPrimary: '#form_maintenance',
      workshopDelete: [],
      resourseMap: null,
      markers: [],
      ubication: null,
      currentId: null,
      haightAshbury: {
        lat: -11.9812584,
        lng: -76.9887876
      }
    },
        _controls = {
      $tableSearch: null
    },
        _private = {
      initializeControls: function initializeControls() {
        // $(_resources.formPrimary).validate(trackadmin.public.utils.formRulesValidate(true));
        _private.initMap();
      },
      saveImage: function saveImage() {
        var dataFiles = new FormData();
        var data = [];
        $(".content-images .item-image").each(function (key, item) {
          var input = $(this).find('input[type=file]');
          var file = input[0].files[0];
          var fileName = file != undefined ? file.name : null;
          dataFiles.append("files[".concat(key, "]"), file);
          data.push({
            mainId: input.attr("item_id"),
            imageName: fileName
          });
        });
        dataFiles.append('workshops', JSON.stringify(data)); //console.info(dataFiles, data, "DATA");

        global.utils.confirm({
          title: trackadmin["public"].messages.general.TITLE_SAVE,
          message: trackadmin["public"].messages.general.CONFIRM_TO_SAVE,
          funcYes: function funcYes() {
            global.utils.showLoader();
            trackadmin["public"].api.workshops.save_image(dataFiles).then(function (item) {
              global.utils.hideLoader();
              global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_SAVED);
            });
          }
        });
      },
      loadDataToSave: function loadDataToSave() {
        var generateData = [];
        $(".list .content").each(function () {
          var item = {
            id: $(this).find('.txtId').val(),
            name: $(this).find('.txtName').val(),
            description: $(this).find('.txtDescription').val(),
            departament: $(this).find('.txtDepartament').val(),
            phone: $(this).find('.txtPhone').val(),
            link_cita: $(this).find('.txtLink_cita').val(),
            direction: $(this).find('.txtMap_link').val(),
            lat: $(this).find('.txtLat').val(),
            lng: $(this).find('.txtLng').val()
          };
          generateData.push(item);
        });
        console.info(generateData, 'generateData');
        return generateData;
      },
      initMap: function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
          center: _resources.haightAshbury,
          zoom: 13
        });
        var input = document.getElementById("pac-input"); // Specify just the place data fields that you need.

        var autocomplete = new google.maps.places.Autocomplete(input, {
          fields: ["place_id", "geometry", "formatted_address", "name"]
        });
        autocomplete.bindTo("bounds", map); //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        var infowindow = new google.maps.InfoWindow();
        var infowindowContent = document.getElementById("infowindow-content");
        infowindow.setContent(infowindowContent);
        autocomplete.addListener("place_changed", function () {
          _private.removeMarkers();

          infowindow.close();
          var place = autocomplete.getPlace(); //console.log(place)

          console.info(place.geometry.location.lng(), place.geometry.location.lat()); //console.info(place.geometry.location.lat());

          var valueLongitud = place.geometry.location.lng();
          var valueLatitud = place.geometry.location.lat();
          var marker = new google.maps.Marker({
            position: place.geometry.location,
            map: map
          });
          _resources.ubication = {
            latitud: valueLatitud,
            longitud: valueLongitud
          };

          if (!place.geometry || !place.geometry.location) {
            return;
          }

          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
          }

          _resources.markers.push(marker);
        });
        _resources.resourseMap = map;
      },
      editMap: function editMap(direction, lng, lat) {
        _private.removeMarkers(); //console.info(lng,lat,'*');


        var latLng = new google.maps.LatLng(lng, lat);
        $("#pac-input").val(direction);

        _resources.resourseMap.setCenter(latLng);

        var marker = new google.maps.Marker({
          position: latLng,
          //label: labels[labelIndex++ % labels.length],
          map: _resources.resourseMap
        });

        _resources.markers.push(marker);
      },
      removeMarkers: function removeMarkers() {
        for (var i = 0; i < _resources.markers.length; i++) {
          _resources.markers[i].setMap(null);
        }

        _resources.markers = [];
      },
      functionOpenMap: function functionOpenMap(input) {
        var inputName = input.attr("content");
        var id = input.attr("item_id");
        var direction = $("#".concat(inputName)).val();
        _resources.currentId = id;

        if (direction != null && direction != '') {
          var lng = $("#content_".concat(id, " .txtLat")).val();
          var lat = $("#content_".concat(id, " .txtLng")).val(); //console.info(lng, lat, "");

          _private.editMap(direction, lng, lat);
        } else {
          var _location = _resources.haightAshbury;
          var latLng = new google.maps.LatLng(_location.lat, _location.lng);

          _resources.resourseMap.setCenter(latLng);

          _private.removeMarkers();

          $("#pac-input").val("");
        }

        $("#modalMap").modal('show');
      },
      bindEvents: function bindEvents() {
        $("#btn-save-image").on("click", function () {
          _private.saveImage();
        });
        $("#btn-map-save").on("click", function () {
          var direction = $("#pac-input").val();
          var inputLat = $("#content_".concat(_resources.currentId, " .txtLat"));
          var inputLng = $("#content_".concat(_resources.currentId, " .txtLng")); //let inputDirection = $(`#txtDirection_${_resources.currentId}`);

          $("#txtDirection_".concat(_resources.currentId)).val(direction);
          console.info(inputLat, inputLng, "#txtDirection_".concat(_resources.currentId), direction); //inputDirection.val(direction);

          if (direction == "") {
            //inputDirection.val(direction);
            global.utils.showNotyInLineWarning($("#mant-message-map"), "No se permite valores vacios");
            inputLat.val("");
            inputLng.val("");
          } else {
            //inputDirection.val(direction);
            inputLat.val(_resources.ubication.latitud);
            inputLng.val(_resources.ubication.longitud);
            $("#modalMap").modal("hide");
          }
        });
        $(".btn-open-map").on("click", function (e) {
          _private.functionOpenMap($(this));
        });
        $("#btn-save").on("click", function () {
          var dataSave = _private.loadDataToSave();

          var validate = $('#form_maintenance').valid();

          if (validate) {
            global.utils.confirm({
              title: trackadmin["public"].messages.general.TITLE_SAVE,
              message: trackadmin["public"].messages.general.CONFIRM_TO_SAVE,
              funcYes: function funcYes() {
                global.utils.showLoader();
                trackadmin["public"].api.workshops.save(dataSave).then(function (item) {
                  global.utils.hideLoader();
                  location.reload();
                  global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_SAVED);
                });
              }
            });
          }
        });
        $(".btn-delete").on("click", function (e) {
          var itemId = $(this).attr("itemId");
          console.info(itemId, 'itemId');
          global.utils.confirm({
            title: trackadmin["public"].messages.general.TITLE_DELETE,
            message: trackadmin["public"].messages.general.CONFIRM_TO_DELETE,
            funcYes: function funcYes() {
              global.utils.showLoader(); //Abre pantalla de carga

              trackadmin["public"].api.workshops.deleteWorkshop(itemId).then(function (item) {
                $("#content_".concat(itemId)).remove();
                global.utils.hideLoader(); //Elimina pantalla de carga

                global.utils.showNotyInLineSuccess($("#mant-message"), trackadmin["public"].messages.general.CONFIRM_INFO_DELETED);
              });
            }
          });
        });
        $("#add-workshop").on("click", function () {
          var count = $(".content").length + 1;
          var html = "\n                        <div class=\"content\" id=\"content_".concat(count, "\">\n                                <input type=\"hidden\" class=\"txtId\" value=\"-").concat(count, "\" name=\"id-").concat(count, "\">\n                                <input type=\"hidden\" class=\"txtLat\" value=\"").concat(count, "\" name=\"lat\">\n                                    <input type=\"hidden\" class=\"txtLng\" value=\"").concat(count, "\" name=\"lng\">\n\n                                <div class=\"form-group\">\n                                    <h5>Taller ").concat(count, "</h5>\n                                    <label for=\"name\">Nombre del Taller</label>\n                                    <input type=\"text\" class=\"form-control txtName\" name=\"name-").concat(count, "\"\n                                        value=\"\" required>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"description\">Descripci\xF3n</label>\n                                    <textarea class=\"form-control txtDescription\" name=\"description-").concat(count, "\" rows=\"3\" required></textarea>\n                                </div>\n                                <div class=\"form-group\">\n                                        <label for=\"departament\">Departamento</label>\n                                        <input type=\"text\" class=\"form-control txtDepartament\" name=\"departament-").concat(count, "\"\n                                            value=\"\" required>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"phone\">Telefono</label>\n                                    <input type=\"text\" class=\"form-control txtPhone\" name=\"phone-").concat(count, "\" name=\"phone\" required>\n                                </div>\n                                \n                                <div class=\"form-group\">\n                                    <label for=\"link_cita\">Enlace de Cita</label>\n                                    <input type=\"text\" class=\"form-control txtLink_cita\" name=\"link_cita-").concat(count, "\" required>\n                                </div>\n                                <div class=\"form-group\">\n                                   <label for=\"map_link\">Insertar Ubicaci\xF3n</label>\n                                   <div class=\"input-group mb-3\">\n                                       <input type=\"text\" class=\"form-control txtMap_link\" value=\"\"\n                                           id=\"txtDirection_").concat(count, "\" required\n                                           aria-describedby=\"btn-modal-map-").concat(count, "\" readonly name=\"direction").concat(count, "\">\n                                       <div class=\"input-group-append\">\n                                           <button class=\"btn btn-outline-secondary btn-open-map\"\n                                               item_id=\"").concat(count, "\" type=\"button\"\n                                               content=\"txtDirection_").concat(count, "\" lng=\"\"\n                                               lat=\"\" name=\"map_link\"\n                                               id=\"btn-modal-map-").concat(count, "\">\n                                               <i  class=\"fas fa-map-marker-alt\"></i>\n                                           </button>\n                                       </div>\n                                   </div>\n                                </div>\n                        </div>");
          $("#form_maintenance").append(html);
          $("#btn-modal-map-".concat(count)).on("click", function (e) {
            _private.functionOpenMap($(this));
          });
        });
      },
      init: function () {
        var _init = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  $.extend(_settings, options || {}); //global.utils.showLoader();

                  _private.initializeControls();

                  _private.bindEvents();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function init() {
          return _init.apply(this, arguments);
        }

        return init;
      }()
    };

    _private.init();
  };

  trackadmin["public"] = trackadmin["public"] || {};
  trackadmin["public"].workshops = workshops;
})(window.trackadmin = window.trackadmin || {}, $, window.global = window.global || {});

/***/ }),

/***/ "./resources/js/platform/scripts_platform_custom.js":
/*!**********************************************************!*\
  !*** ./resources/js/platform/scripts_platform_custom.js ***!
  \**********************************************************/
/***/ (() => {

$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});
jQuery.extend(jQuery.validator.messages, {
  required: "Este campo es requerido.",
  remote: "Por favor arregla este campo.",
  email: "Por favor, introduce una dirección de correo electrónico válida.",
  url: "Please enter a valid URL.",
  date: "Please enter a valid date.",
  dateISO: "Please enter a valid date (ISO).",
  number: "Please enter a valid number.",
  digits: "Please enter only digits.",
  creditcard: "Please enter a valid credit card number.",
  equalTo: "Please enter the same value again.",
  accept: "Please enter a value with a valid extension.",
  maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
  minlength: jQuery.validator.format("Please enter at least {0} characters."),
  rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
  range: jQuery.validator.format("Please enter a value between {0} and {1}."),
  max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
  min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});
jQuery.validator.setDefaults({
  errorElement: 'span',
  errorPlacement: function errorPlacement(error, element) {
    error.addClass('invalid-feedback');
    element.closest('.form-group').append(error);
  },
  highlight: function highlight(element, errorClass, validClass) {
    $(element).addClass('is-invalid');
  },
  unhighlight: function unhighlight(element, errorClass, validClass) {
    $(element).removeClass('is-invalid');
  }
});
$(document).ready(function () {
  $('script').each(function () {
    if (this.src === 'URL_HERE') {
      this.parentNode.removeChild(this);
    }
  });
  /*  $(".defaultSelect2").select2({
     theme: "bootstrap4",
     //containerCssClass: ":all:",
     //allowClear: true,
     //dropdownParent: $("#myModal"),
     minimumResultsForSearch: Infinity,
     placeholder: "Selecione una opción"
   });
  */

  $('.defaultSelect2').each(function () {
    $(this).select2({
      theme: 'bootstrap4',
      minimumResultsForSearch: Infinity,
      width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
      placeholder: $(this).attr('placeholder') ? $(this).attr('placeholder') : 'Seleccione una opción',
      allowClear: Boolean($(this).attr('allow-clear')),
      closeOnSelect: !$(this).attr('multiple')
    });
  });
  $(".defaultDatepiker").datepicker({
    todayBtn: "linked",
    language: "es",
    todayHighlight: true
  });
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });
});
$(".text-only").bind('keypress', function (event) {
  var regex = new RegExp("^[a-zA-Z ]+$");
  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);

  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
});
/* $(".content-file-img input[type=file]").on("change", function (e) {
  let input = $(this).prop("files");
  let img = $(this).attr("content");

  console.info(input);
  if (input && input[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $(`#${img}`).attr("src", e.target.result);
    };
    reader.readAsDataURL(input[0]);
  }
});
 */

$(".content-file-img .btn-file").each(function (e) {
  var inputFile = $(this).attr("input-file");
  var img = $(this).attr("img-content");
  $(this).on("click", function (e) {
    $("#".concat(inputFile)).click(); //console.info(inputFile);
  });
  $("#".concat(inputFile)).on("change", function (e) {
    var input = $("#".concat(inputFile)).prop("files"); //console.info(input);

    if (input && input[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $("#".concat(img)).attr("src", e.target.result);
      };

      reader.readAsDataURL(input[0]);
    }
  });
});

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************************!*\
  !*** ./resources/js/platform/public.js ***!
  \*****************************************/
__webpack_require__(/*! ../components/global */ "./resources/js/components/global.js");

__webpack_require__(/*! ../components/common */ "./resources/js/components/common.js");

__webpack_require__(/*! ../components/dashboard */ "./resources/js/components/dashboard.js");

__webpack_require__(/*! ../components/benefices/benefices.js */ "./resources/js/components/benefices/benefices.js");

__webpack_require__(/*! ../components/benefices/first_benefice.js */ "./resources/js/components/benefices/first_benefice.js");

__webpack_require__(/*! ../components/benefices/second_benefice.js */ "./resources/js/components/benefices/second_benefice.js");

__webpack_require__(/*! ../components/benefices/third_benefice.js */ "./resources/js/components/benefices/third_benefice.js");

__webpack_require__(/*! ../components/workshops/banner_primary.js */ "./resources/js/components/workshops/banner_primary.js");

__webpack_require__(/*! ../components/workshops/text_primary.js */ "./resources/js/components/workshops/text_primary.js");

__webpack_require__(/*! ../components/workshops/workshop.js */ "./resources/js/components/workshops/workshop.js");

__webpack_require__(/*! ../components/home/banner_primary.js */ "./resources/js/components/home/banner_primary.js");

__webpack_require__(/*! ../components/home/fast_guide.js */ "./resources/js/components/home/fast_guide.js");

__webpack_require__(/*! ../components/home/banner_parts.js */ "./resources/js/components/home/banner_parts.js");

__webpack_require__(/*! ../components/home/transparency.js */ "./resources/js/components/home/transparency.js");

__webpack_require__(/*! ../components/home/maintenance.js */ "./resources/js/components/home/maintenance.js");

__webpack_require__(/*! ../components/config/detail.js */ "./resources/js/components/config/detail.js");

__webpack_require__(/*! ../components/config/vehicle.js */ "./resources/js/components/config/vehicle.js");

__webpack_require__(/*! ../components/user.js */ "./resources/js/components/user.js");

__webpack_require__(/*! ../components/config/termsAndConditions.js */ "./resources/js/components/config/termsAndConditions.js");

__webpack_require__(/*! ./scripts_platform_custom.js */ "./resources/js/platform/scripts_platform_custom.js");
})();

/******/ })()
;