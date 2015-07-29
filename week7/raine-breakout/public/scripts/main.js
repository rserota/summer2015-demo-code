$(document).on('ready', function () {

  $('#voterbox button').on('click', function () {
    var value = $(this).attr('data-value');

    $.ajax({
      method: 'GET',
      url: '/vote',
      // Request Data (client)
      data: {
        value: value
      },
      // Response Data (client)
      success: function (data) {
        $('#winner').text(data);
      }
    });

  });

});