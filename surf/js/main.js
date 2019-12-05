$(function(){

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">',
        asNavFor: '.slider-dots'
    });

    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        focusOnSelect: true
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">',
        asNavFor: '.surf__map-slider'
    });
    
    $('.surf__map-slider').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.surf-slider',
        focusOnSelect: true,
        arrows: false
    });

    $('.travel__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="travel__slider-arrows travel__slider-arrows__left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="travel__slider-arrows travel__slider-arrows__right" src="img/arrows-right.svg" alt="">',
    });

    $('.sleep__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="travel__slider-arrows travel__slider-arrows__left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="travel__slider-arrows travel__slider-arrows__right" src="img/arrows-right.svg" alt="">',
    });

    $('.dots-product .dot').click(function(){
        $('.dots-product .dot').removeClass('minus');
        $(this).toggleClass('minus');
    });
    $('.item--1 .dot').click(function () {
        $('.item--1 .info').fadeIn('fast');
        $('.item--2 .info').fadeOut('fast');
        $('.item--3 .info').fadeOut('fast');
    });
    $('.item--2 .dot').click(function () {
        $('.item--1 .info').fadeOut('fast');
        $('.item--2 .info').fadeIn('fast');
        $('.item--3 .info').fadeOut('fast');
    });
    $('.item--3 .dot').click(function () {
        $('.item--1 .info').fadeOut('fast');
        $('.item--2 .info').fadeOut('fast');
        $('.item--3 .info').fadeIn('fast');
    });

});