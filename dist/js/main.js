$(function () {
    'use strict';

    var htmlBody = $('html, body');

    // links prevented Default
    $('.stop-this').on('click', function (e) {
        e.preventDefault();
    });

    // Add Active Link on Navbar Links
    $('.navbar .nav-item .nav-link').on('click', function () {
        $(this).addClass('active').parent().siblings().find('.nav-link').removeClass('active');
        htmlBody.animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
        }, 1000);
    });

    // button scroll advanced options
    $('.button-scroll').on('click', function () {
        htmlBody.animate({
            scrollTop: 0
        }, 1000);
    });

    // add active link on links when window scrollTop
    $(window).on('scroll', function () {
        // when window scroll top add active on links which the same with the block id
        $('.block').each(function () {
            var blockId = $(this).attr('id');
            if ($(window).scrollTop() > $(this).offset().top) {
                $('.navbar .nav-item .nav-link').removeClass('active');
                $('.navbar .nav-item .nav-link[data-scroll="' + blockId + '"]').addClass('active');
            }
        });
        // navbar fixed top
        if ($(window).scrollTop() > 37) {
            $('.navbar').addClass('navbar-fixed');
        } else {
            $('.navbar').removeClass('navbar-fixed');
        }
        // Show Button Scroll To Top
        if ($(window).scrollTop() >= 700) {
            if ($('.button-scroll').css('bottom') == '-40px') {
                $('.button-scroll').animate({
                    bottom: '10px'
                }, 400);
                $('.button-scroll').on('click', function () {
                    htmlBody.animate({
                        scrollTop: 0
                    }, 1000);
                });
            }
        } else if ($(window).scrollTop() <= 700) {
            if ($('.button-scroll').css('bottom') == '10px') {
                $('.button-scroll').animate({
                    bottom: '-40px'
                }, 400);
            }
        }
    });

    // input on dropdown on click go to the blocks
    $('.dropdown-menu .form-dropdown input:last-child').on('click',  function () {
        $('.block').each(function () {
            if ($('.dropdown-menu .form-dropdown input:first-child').val() == $(this).attr('id')) {
                htmlBody.animate({
                    scrollTop: $(this).offset().top + 5
                }, 1000);
            }
        });
    });

    // Start functions to popup Gallary
    // images on click add Class Active
    $('.gallary .gallary-img img').on('click', function () {
        $(this).parent().parent().addClass('selected').siblings().removeClass('selected');
        $('body').css('overflow-y', 'hidden');
        $('.popup-gallary').fadeIn();
        $('.popup-gallary .intro-popup .popup-img-container img').attr('src', $(this).attr('src'));
        $('.intro-popup').css('margin-top', -$('.intro-popup img').height() / 2);
        htmlBody.animate({
            scrollTop: $(this).parent().parent().offset().top
        }, 800);
    });

    // window on resize make image in center
    $(window).on('resize', function () {
        $('.intro-popup').css('margin-top', -$('.intro-popup img').height() / 2);
    });

    // popup on click FadeOut
    $('.intro-popup .fa-times').on('click', function () {
        $('body').css('overflow-y', 'auto');
        $('.popup-gallary').fadeOut();
    });

    // popup images on click right and left change images
    $('.popup-gallary .chevrones .fa-chevron-right').on('click', function () {
        if ($('.gallary .selected').is(":last-child")) {
            $('.gallary .gallary-parent:first-child img').click();
        } else {
            $('.gallary .selected').next().find('img').click();
        }
    });
    $('.popup-gallary .chevrones .fa-chevron-left').on('click', function () {
        if ($('.gallary .selected').is(":first-child")) {
            $('.gallary .gallary-parent:last-child img').click();
        } else {
            $('.gallary .selected').prev().find('img').click();
        }
    });
    // End Functions to Popup Gallary
    // some scroll on home page
    $('.intro .intro-info button:last-of-type').on('click', function () {
        htmlBody.animate({
            scrollTop: $('.services').offset().top + 1
        }, 1000);
    });
    $('.about-down .about-text button').on('click', function () {
        htmlBody.animate({
            scrollTop: $('.address').offset().top + 1
        }, 1000);
    });
    $('.team-down .team-down-info button:last-of-type').on('click', function () {
        htmlBody.animate({
            scrollTop: $('.blog').offset().top + 1
        }, 1000);
    });
});