$(document).on('ready', function() {

  // var className = 'active'
  // className = 'inactive'
  // $('.' + className)

  // $( 'SELECTOR' )
  // $( myString )
  // $( strA + strB )

  [1,2,3,4,5].forEach(function(i) {

    // $('input[type="text"]')
    // $('a[href^="https"]')
    // $('a[href$=".pdf"]')
    var $button = $('button[data-id="' + i + '"]');

    // a "jQuery object" represents a set of DOM elements
    // selectors return jQuery objects
    // 1. jQuery objects are "array-like objects" (has a length property and numeric indices)

    $button.on('click', function(e) {

      // select the drink's price
      var $price = $('.price[data-id="' + i + '"]');
      var price = parseFloat($price.text().slice(1));

      // add the price to the total and update the DOM
      var $total = $('#total');
      var total = parseFloat($total.text().slice(1));
      console.log(total);
      total += price;
      $total.text('$' + total);

    });

  })

});