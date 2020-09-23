var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), //navigator.userAgent.toLowerCase().indexOf('safari'),
    winWidth = !isSafari ? window.screen.width : window.innerWidth;

$(document).ready(function () {
    $('.menu__btn').on('click', function () {
        $('body').toggleClass('open');
        return false;
    });

    $('.user').on('click', function () {
        $('.user__menu').fadeToggle();
        $(document).on('click', function (e) {
            if (!($(e.target).closest('.user__menu').length)) {
                $('.user__menu').fadeOut();
            }
        });
        return false;
    });

    $(window).on('scroll', function () {
        document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000 ? $('.toTop').fadeIn() : $('.toTop').fadeOut();
    });
    $('.toTop').on('click', function () {
        //document.body.scrollTop = 0; // For Safari
        //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    if (winWidth < 1025) {
        if ($(document).find('.reviews__slider').length) {
            $('.reviews__slider').slick({
                arrows: true,
                dots: true,
                appendArrows: '.reviews__slider__arrows',
                appendDots: '.dots',
                centerMode: true,
                centerPadding: '80px',
                responsive: [{
                    breakpoint: 600,
                    settings: {
                        centerMode: false,
                        arrows: true,
                        dots: true,
                        fade: true,
                        adaptiveHeight: true,
                        slidesToShow: 1
                    }
                }]
            });
        }
    }

    if (winWidth > 1000) {
        if ($(document).find('.specs__slider>ul').length) {
            $('.specs__slider>ul').slick({
                arrows: true,
                dots: true,
                appendDots: '.spec-dots',
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '.specs__slider .arrow-prev',
                nextArrow: '.specs__slider .arrow-next'
            });
        }
    }

    // FAQ slider реализация тут
    if (winWidth > 600) {
        if ($(document).find('.faq__slider').length) {
            $('.faq__slider').slick({
                vertical: true,
                appendArrows: '.faq__arrows',
                verticalSwiping: true,
                slidesToShow: 3,
            });
        }
    }

    if ($(document).find('.faq__slider')) {

        $('.more').on('click', function () {
            var $faqLi = $(this).parent().parent();
            if (window.screen.width > 600) {
                $faqLi.toggleClass('expanded')
                    .parent().parent()
                    .siblings().find('.li')
                    .removeClass('expanded');
            } else {
                $faqLi.toggleClass('expanded')
                    .siblings()
                    .removeClass('expanded');
            }

        });

    }

});



