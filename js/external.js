$(document).ready(function () {
    
    // menu
    $('.nav-phone').click(function() {
        $('.menu-phone').addClass('show');
    });

    $('.close').click(function() {
        $('.menu-phone').removeClass('show');
    });

    $('.bla').click(function() {
        $('.menu-phone').removeClass('show');
    });

    // scroll body
    $('.introduce-click').click(function() {
        $('html, body').animate({scrollTop: $('.introduce').offset().top}, 1000, "easeInOutExpo");
    });

    $('.news-click').click(function() {
        $('html, body').animate({scrollTop: $('.new').offset().top}, 1000, "easeInOutExpo");
    });


    $('.lvhd-click').click(function() {
        $('html, body').animate({scrollTop: $('.service').offset().top}, 1000, "easeInOutExpo");
    });

    $('.lvhd-mobile').click(function() {
        $('html, body').animate({scrollTop: $('.service-mobile').offset().top}, 1000, "easeInOutExpo");
    });

    $('.backtotop').click(function()  {
        $('html, body').animate({scrollTop: 0}, 1200, "easeInOutExpo");
    });
});