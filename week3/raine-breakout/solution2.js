$(document).on('ready', function() {

  // var className = 'active'
  // className = 'inactive'
  // $('.' + className)

  // $( 'SELECTOR' )
  // $( myString )
  // $( strA + strB )

  for(var i=1; i<=5; i++) {
    // $('input[type="text"]')
    // $('a[href^="https"]')
    // $('a[href$=".pdf"]')
    var $button = $('button[data-id="' + i + '"]');

    // a "jQuery object" represents a set of DOM elements
    // selectors return jQuery objects
    // 1. jQuery objects are "array-like objects" (has a length property and numeric indices)

    var attachClickHandler = function(j) {
      $button.on('click', function(e) {

        // select the drink's price
        var $price = $('.price[data-id="' + j + '"]');
        var price = parseFloat($price.text().slice(1));

        // add the price to the total and update the DOM
        var $total = $('#total');
        var total = parseFloat($total.text().slice(1));
        total += price;
        $total.text('$' + total);

      });
    };

    attachClickHandler(i);

  }

});