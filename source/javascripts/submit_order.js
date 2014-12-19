$(function() {                                                          // load async

  // 
  // SHIPPING INFO
  //
  
  function FillShippingInfo() {
    $('#shippingStreetAddress1').val($('#ccStreetAdr1').val());
    $('#shippingStreetAddress2').val($('#ccStreetAdr2').val());
    $('#shippingLocality').val($('#ccLocality').val());
    $('#shippingRegion').val($('#ccRegion').val());
    $('#shippingPostalCode').val($('#ccPostalCode').val());
    $('#shippingCountry').val($('#ccCountry').val());
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

  //
  // FORM SUBMITTAL
  //

  $("#order").submit(function( event ) {
    event.preventDefault();

    var $form = $(this),
      ticket = $form.find('input[name="ticket"]').val(),
      b_fn =   $form.find('input[name="buyerFirstName"]').val(),
      b_ln =   $form.find('input[name="buyerLastName"]').val(),
      email =  $form.find('input[name="buyerEmail"]').val(),
      email_confirm =  $form.find('input[name="buyerEmail"]').val(),
      ccNum =  $form.find('input[name="ccNumber"]').val(),
      ccCvv =  $form.find('input[name="ccCvv"]').val(),
      url =    $form.attr('action');


    var posting = $.post ( url, { s: term } );

    posting.done(function( data ) {
      var content = $( data ).find( "#content" );
      $( "#result" ).empty().append( content );
    });
  });


});
