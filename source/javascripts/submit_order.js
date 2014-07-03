$(function() {                                                          // load async

  function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  function AssignValidationFeedback(element, state) {
    // add the 'has-feedback' class to the parent of the element you're validating
    // if it doesn't already have the class.
    // Also, inserts a span for the form-control-feedback icon.
    if (element.parent().hasClass('has-feedback') == false) { 
      element.parent().addClass('has-feedback'); 
      element.parent().append('<span class="glyphicon form-control-feedback"></span>');
    }
    // add success classes, remove any other validation classes
    if (state == 'success') {
      element.parent().removeClass('has-error has-warning').addClass('has-success');
      element.siblings('.form-control-feedback').removeClass('glyphicon-warning-sign glyphicon-remove').addClass('glyphicon-ok');
    };
    // add warning classes, remove any other validation classes
    if (state == 'warning') {
      element.parent().removeClass('has-success has-error').addClass('has-warning'); 
      element.siblings('.form-control-feedback').addClass('glyphicon-warning-sign').removeClass('glyphicon-ok glyphicon-remove');
    };
    // add error classes, remove any other validation classes
    if (state == 'error') {
      element.parent().removeClass('has-success has-warning').addClass('has-error'); 
      element.siblings('.form-control-feedback').addClass('glyphicon-remove').removeClass('glyphicon-ok glyphicon-warning-sign');
    };
  };

  //
  // BUYER INFO
  //

  var $buyerFN     = $('#buyerFirstName');
  var $buyerLN     = $('#buyerLastName');
  var $buyerEmail  = $('#buyerEmail');
  var $buyerEmail2 = $('#buyerEmailConfirmation');

  // Validate #buyerFirstName
  $buyerFN.change(function() {
    if ($buyerFN.val() != (null || '') ) { AssignValidationFeedback($buyerFN, 'success'); }
    if ($buyerFN.val() == (null || '') ) { AssignValidationFeedback($buyerFN, 'error'); }
  });

  // Validate #buyerLastName
  $buyerLN.change(function() {
    if ($buyerLN.val() != (null || '') ) { AssignValidationFeedback($buyerLN, 'success'); }
    if ($buyerLN.val() == (null || '') ) { AssignValidationFeedback($buyerLN, 'error'); }
  });

  // Validate #buyerEmail
  $buyerEmail.change(function() {
    if (IsEmail($buyerEmail.val()))           { AssignValidationFeedback($buyerEmail, 'success'); }
    if (IsEmail($buyerEmail.val()) == false ) { AssignValidationFeedback($buyerEmail, 'error'); }
  });

  // Validate #buyerEmailConfirmation
  $buyerEmail2.on('input', function() {
    if ($buyerEmail.val() == $buyerEmail2.val()) { 
      AssignValidationFeedback($buyerEmail2, 'success');
    } else if ($buyerEmail2.val() != (null || '')) {
      AssignValidationFeedback($buyerEmail2, 'warning');
    } else {
      AssignValidationFeedback($buyerEmail2, 'error');
    };
  });

  // 
  // BILLING INFO
  //
  
  var $billingStreet1  = $('#billingStreetAddress1');
  var $billingStreet2  = $('#billingStreetAddress2');
  var $billingLocality = $('#billingLocality');
  var $billingRegion   = $('#billingRegion');
  var $billingZip      = $('#billingPostalCode');
  var $billingCountry  = $('#billingCountry');

  // Validate #billingStreetAddress1
  $billingStreet1.change(function() {
    if ($billingStreet1.val() != (null || '') ) { AssignValidationFeedback($billingStreet1, 'success'); }
    if ($billingStreet1.val() == (null || '') ) { AssignValidationFeedback($billingStreet1, 'error'); }
  });

  // Validate #billingStreetAddress2
  $billingStreet2.change(function() {
    if ($billingStreet2.val() != (null || '') ) { AssignValidationFeedback($billingStreet2, 'success'); }
    if ($billingStreet2.val() == (null || '') ) { AssignValidationFeedback($billingStreet2, 'error'); }
  });

  // Validate #billingLocality
  $billingLocality.change(function() {
    if ($billingLocality.val() != (null || '') ) { AssignValidationFeedback($billingLocality, 'success'); }
    if ($billingLocality.val() == (null || '') ) { AssignValidationFeedback($billingLocality, 'error'); }
  });

  // Validate #billingRegion
  $billingRegion.change(function() {
    if ($billingRegion.val() != (null || '') ) { AssignValidationFeedback($billingRegion, 'success'); }
    if ($billingRegion.val() == (null || '') ) { AssignValidationFeedback($billingRegion, 'error'); }
  });

  // Validate #billingPostalCode
  $billingZip.change(function() {
    if ($billingZip.val() != (null || '') ) { AssignValidationFeedback($billingZip, 'success'); }
    if ($billingZip.val() == (null || '') ) { AssignValidationFeedback($billingZip, 'error'); }
  });

  // Validate #billingCountry
  $billingCountry.change(function() {
    if ($billingCountry.val() != (null || '') ) { AssignValidationFeedback($billingCountry, 'success'); }
    if ($billingCountry.val() == (null || '') ) { AssignValidationFeedback($billingCountry, 'error'); }
  });

  // 
  // SHIPPING INFO
  //
  
  var fillShippingInfo = function() {
    $('#shippingStreetAddress1').val($('#billingStreetAddress1').val());
    $('#shippingStreetAddress2').val($('#billingStreetAddress2').val());
    $('#shippingLocality').val($('#billingLocality').val());
    $('#shippingRegion').val($('#billingRegion').val());
    $('#shippingPostalCode').val($('#billingPostalCode').val());
    $('#shippingCountry').val($('#billingCountry').val());
  };
  
  // they have jquery loaded, hide the shipping address inputs
  $('#shipping-address').addClass('collapse');

  $('input#shippingMatchesBilling').click(function(){
    if ($(this).val() == 'true') {
      $('#shipping-address').collapse('hide');                                      // if they want to ship to billing address, hide shipping shipping destination form
    } 
    if ($(this).val() == 'false') {
      $('#shipping-address').collapse('show');                                      // if they want to ship to a shipping destination, show shipping destination form
    }
  });

  var checkShipping = 0;

  function beforeSubmit(form) {
    form.submit(function(event) {
      event.preventDefault();
      while (($('input#shippingMatchesBilling').val() == 'true') && (checkShipping == 0)) {
        fillShippingInfo.call();
        checkShipping = checkShipping + 1;
        form.submit(beforeSubmit(form));
      }
      this.submit();
    });
  };

  beforeSubmit($('.training.form'));
});

