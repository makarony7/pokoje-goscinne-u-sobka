function animateMenu() {
    var menu = $('.menuBg');
    var nav = $('.mobileNav');

    if (menu.hasClass('showMenu')) {
        menu.removeClass('showMenu').addClass('hideMenu');
        nav.removeClass('fadeIn');
    } else if (menu.hasClass('hideMenu')) {
        menu.removeClass('hideMenu').addClass('showMenu');
        nav.addClass('fadeIn')
    } else {
        menu.addClass('showMenu');
        nav.addClass('fadeIn');
    }
};

$(document).ready(function () {
    $('.hamburger').on('click', function () {
        $(this).toggleClass('open');
        animateMenu();
    });
    $('.mobileNav a').on('click', function () {
        $('.hamburger').toggleClass('open');
        animateMenu();
    });
});

$(document).ready(function () {
    var $navbar = $(".nav-fixed");
    AdjustHeader();
    $(window).scroll(function () {
        AdjustHeader();
    });
    function AdjustHeader() {
        if ($(window).scrollTop() > 1) {
            if (!$navbar.hasClass("nav-fixed-scroll")) {
                $navbar.addClass("nav-fixed-scroll");
            }
        } else {
            $navbar.removeClass("nav-fixed-scroll");
        }
    }
});

$(document).ready(function () {
    var $navbar = $(".back-to-top");
    AdjustHeader();
    $(window).scroll(function () {
        AdjustHeader();
    });
    function AdjustHeader() {
        if ($(window).scrollTop() > 200) {
            if (!$navbar.hasClass("back-to-top-show")) {
                $navbar.addClass("back-to-top-show");
            }
        } else {
            $navbar.removeClass("back-to-top-show");
        }
    }
});

// Active link switching
var scrollLink = $('.scroll-p');
$(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function () {
        var sectionOffset = $(this.hash).offset().top - 73;
        if (sectionOffset <= scrollbarLocation) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
        }
    });
});

$(function() {
    $('a.scroll-p[href*="#"]:not([href="#"])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top -70)
                }, 1200, "easeInOutExpo");
                return false;
            }
        }
    });
});