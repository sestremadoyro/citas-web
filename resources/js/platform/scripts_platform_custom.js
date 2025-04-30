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
  errorPlacement: function (error, element) {
    error.addClass('invalid-feedback');
    element.closest('.form-group').append(error);
  },
  highlight: function (element, errorClass, validClass) {
    $(element).addClass('is-invalid');
  },
  unhighlight: function (element, errorClass, validClass) {
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
      closeOnSelect: !$(this).attr('multiple'),
    });
  });

  $(`.defaultDatepiker`).datepicker({
    todayBtn: "linked",
    language: "es",
    todayHighlight: true
  });
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });
});

$(".text-only").bind('keypress', function(event) {
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
  let inputFile = $(this).attr("input-file");
  let img = $(this).attr("img-content");

  $(this).on("click", function (e) {
    $(`#${inputFile}`).click();
    //console.info(inputFile);
  });

  $(`#${inputFile}`).on("change", function (e) {
    let input = $(`#${inputFile}`).prop("files");
    //console.info(input);
    if (input && input[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $(`#${img}`).attr("src", e.target.result);
      };
      reader.readAsDataURL(input[0]);
    }
  });
});