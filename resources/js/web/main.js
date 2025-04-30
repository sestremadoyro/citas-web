

// Preloader
$.holdReady( true );

$('body').imagesLoaded({ background: ".background-holder" }, function(){
    //$('#preloader').removeClass("loading");
    $.holdReady( false );
    setTimeout(function() {
        $('#preloader').hide();
    }, 800);
});

// Zanimation
$(window).on('load', function(){
    $('*[data-inertia]').each(function(){
        $(this).inertia();
    });

});

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