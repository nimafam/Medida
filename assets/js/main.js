// Side-nav Overlay



// Main Menu shrink
$(function () {
   var shrinkHeader = 300;

   $(window).scroll(function () {
       var scroll = getCurrentScroll();
       if( scroll >= shrinkHeader ) {
           $('.nav-header').addClass('shrink');
       } else {
           $('.nav-header').removeClass('shrink');
       }
   });

   function getCurrentScroll() {
       return window.pageYOffset ||
               document.documentElement.scrollTop;
   }

});


// Main footer Animation
var logoElement = $('footer .logo');

$(window).scroll(function() {

    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {

        $(logoElement).addClass('show');

    } else if($(logoElement).hasClass('show') && $(window).scrollTop() + $(window).height() > $(document).height() - 150) {

        $(logoElement).removeClass('show');

    }
});