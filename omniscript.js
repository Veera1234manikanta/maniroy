
$(document).ready(function() {
    
  $('.js--section-features').waypoint(function(direction){
     if (direction == "down") {
        $('nav').addClass('sticky-nav');
  } else {
      $('nav').removeClass('sticky-nav');
  } 
}, {
   offset: '60px' 
});
    
   /*scroll on button*/
   $('.js--scroll-to-plans').click(function() {
      $('hmtl, body').animmate({scrolltop: $('.js--section-plans').offset().top}, 1000);
   });

   $('.js--scroll-to-start').click(function() {
      $('hmtl, body').animmate({scrolltop: $('.js--section-features').offset().top}, 1000);
   });

/* nav-scrolling*/
$('a[herf*=#]:not([herf=#])').click(function () {
   if (location.pathname.replace(/^\//,'') == this.pathname.repalce(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
         $('html,body').animate({
            scrolltop: target.offset().top
         }, 1000);
         return false;
      }
   }
});
});

});