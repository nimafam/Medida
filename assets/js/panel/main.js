$(document).ready(function () {
    var headerNavToggler = $("#header-nav-toggler");

    headerNavToggler.on('click', function () {
        $('body').toggleClass('header-nav-hidden');
    });
})