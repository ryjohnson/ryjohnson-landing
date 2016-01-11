$(function() {
  var currentYear = new Date().getFullYear();
  $('.copyright').append(currentYear);

  $(window).on('load', function() {
    var user = 'hello',
        domain = 'ryjohnson.com';

    $('footer a').append(user + '@' + domain);

    $('footer a').on('click', function() {
      window.location.href = 'mailto:' + user + '@' + domain;
    });
  });
});