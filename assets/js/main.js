// $(document).ready(function() {
//  var $window = $(window);

//  $('section[data-type="background"]').each(function() {
//    var $bgobj = $(this);
//    $(window).scroll(function() {
//      var yPos = -($window.scrollTop() / $bgobj.data('speed'));
//      var coords = '50% '+ yPos + 'px';
//      $bgobj.css({ backgroundPosition: coords });
//    });
//  });

$(window).scroll(function() {
  var scroll_position = $(window).scrollTop()/5;
  $('section[data-type="background"]').css({
    'background-position-y' : - scroll_position + 'px',
  });
});

// $(document).ready(function() {
//      $('section[data-type="background"]').each(function() {
//        var $bgobj = $(this); //assigning the object
     
//        $(window).scroll(function() {
//      var yPos = -($window.scrollTop() / $bgobj.data('speed'));

//      var coords = '50% '+ yPos + 'px';
//      $bgobj.css({backgroundPosition: coords });
//     });
//   });
// });
