(function ($) {

    "use strict";

    // preloader js
    $(window).on('load', function () {
        $('.preeloader').delay(1000).fadeOut(1000);

    });
    // Search Form js
    $('.abc, .abc2').on('click', function (event) {
        event.preventDefault();
        $('#search, #search2').addClass('open');
        $('#search > form > input[type="search"], #search2 > form > input[type="search"]').focus();
    });
    $('#search, #search > button.close, #search2, #search2 > button.close').on('click keyup', function (event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    //animation scroll js
    var html_body = $('html, body');
    $('.backtotop a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 80
                }, 1500);
                return false;
            }
        }
    });
    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    //scorllspy js
    $('body').scrollspy({
        target: ".navbar",
        offset: 100,
    });
    //cancel perloader button active js
    $('.cancel-perloader').delay(2500).slideDown(800);
    //close loading js
    $('.loader-btn').on('click', function () {
        $('.preeloader').delay(0).fadeOut(1000);
    });
    //nav-ber show part js
    $('#m-ber').on('click', function () {
        $('.shows-nav').fadeIn(400);
        $('#m-ber').hide();
        $('#m-ber2').show();
    });
    $('#m-ber2').on('click', function () {
        $('.shows-nav').fadeOut(400);
        $('#m-ber').show();
        $('#m-ber2').hide();
    });
    //lightbox js
    $('.venobox').venobox();
    //smooth scroll js
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var sticky = $('.sticky-top');
        if (scrolling >= 100) {
            $(sticky).addClass("nav-bg");
        } else {
            $(sticky).removeClass("nav-bg");
        }
        if (scrolling >= 50) {
            $('.backtotop').fadeIn(500);
        } else {
            $('.backtotop').fadeOut(500);
        }
    });
    //banner part js
    $('.banner-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 400,
        fade: true,
        cssEase: 'linear',
    });
    // Brand slide js
    $('.brand-main').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
    },

  ]
    });
    // About slide js
    $('.about-img-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 2000,
        arrows: true,
        nextArrow: '.about-slider',
        prevArrow: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },

  ]
    });
    // Service slide js
    $('.service-slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },

  ]
    });
    // counter part js
    $('.counter').counterUp();
    // Protfolio slide js
    $('.protfolio-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },

  ]
    });
    //testimonial part js
    $('.testimonial-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        speed: 600,
        dots: false,
        arrows: true,
        nextArrow: '.quote2',
        prevArrow: '.quote1',
        asNavFor: '.testimonial-main-img',

    });

    $('.testimonial-main-img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: false,
        asNavFor: '.testimonial-main',
    });
    // Team slide js
    $('.tm-slider-main').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        arrows: true,
        nextArrow: '.t-right',
        prevArrow: '.t-left',
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },

  ]
    });
    // blog slide js
    $('.blog-main').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },

  ]
    });

}(jQuery));
