$(function() {                                                          // load async

  // 
  // SHIPPING INFO
  //
  
  function FillShippingInfo() {
    $('#shippingStreetAddress1').val($('#billingStreetAdr1').val());
    $('#shippingStreetAddress2').val($('#billingStreetAdr2').val());
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
      FillShippingInfo();
    } 
    if ($(this).val() == 'false') {
      $('#shipping-address').collapse('show');                                      // if they want to ship to a shipping destination, show shipping destination form
      $('#shipping-address input').val('');
    }
  });

});
