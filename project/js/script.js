$(function () {
    'use strict';
    
    $(window).on('scroll', function () {
        // navbar fixed top
        if ($(window).scrollTop() > 37) {
            $('.navbar').addClass('navbar-fixed');
            if ($('.navbar').hasClass('navbar-fixed')) {
                $('.navbar').removeClass('navbar-contact');
            }
        } else {
            $('.navbar').removeClass('navbar-fixed').addClass('navbar-contact');
        }
    });
});