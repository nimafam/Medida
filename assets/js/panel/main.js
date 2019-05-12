// Pre loader
$(window).on("load", function() {
    setTimeout(function() {
        $(".preloader-backdrop").fadeOut(200)
    }, 0);
}); 

// Header nav
$(document).ready(function () {
    var headerNavToggler = $("#header-nav-toggler");

    headerNavToggler.on('click', function () {
        $('body').toggleClass('header-nav-hidden');
    });
});



var nav_menu_width = $(".header-menu").outerWidth();
$(window).on("load resize scroll", function() {
    $(this).width() <= nav_menu_width ? $("body").hasClass("drawer-menu") || $("body").addClass("drawer-menu") : ($("body").removeClass("drawer-menu"),
    $("#header-nav").hasClass("shined") && closeShined())
});
$(function (){
    $("#header-nav-toggler").click(function() {
        $("body").hasClass("drawer-menu") ? $("#header-nav").backdrop() : $("body").toggleClass("header-nav-hidden")
    })
});

// functions

$.fn.backdrop = function() {
    return $(this).toggleClass("shined"),
    $("body").toggleClass("has-backdrop"),
    $(this);
}

function closeShined() {
    $("body").removeClass("has-backdrop"),
    $(".shined").removeClass("shined")
}