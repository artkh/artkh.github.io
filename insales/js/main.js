$(function() {

//верхний слайдер новостей
    $('.slider').slick({
        infinite: true,
        fade: true,
        swipe: false,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        lazyLoad: 'ondemand',
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-circle-left.png" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-circle-right.png" alt="">',
        responsive: [{
            breakpoint: 481,
            settings: {
                swipe: true,
                touchMove: true,
            }
        }]
        
    });

//сладер каталога
    $('.catalog__items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        swipe: false,
        touchMove: false,
        zIndex: 0,
        lazyLoad: 'ondemand',
        prevArrow: '<img class="catalog-arrows catalog-arrows__left" src="img/arrow-left.png" alt="">',
        nextArrow: '<img class="catalog-arrows catalog-arrows__right" src="img/arrow-right.png" alt="">',
        responsive: [{
            breakpoint: 481,
            settings: {
                slidesToShow: 2,
                swipe: true,
                touchMove: true,
            }
        }]
    });
});


window.addEventListener('DOMContentLoaded', function () {

    //табы для переключения каталогов
    let tabItem = document.querySelector('.catalog__title').querySelectorAll('a');
    let tabCatalog = document.querySelectorAll('.catalog__items');

    for (let i = 0; i < tabItem.length; i++) {

        if (tabItem[i].classList.contains('active')) {
            tabCatalog[i].classList.add('active');
        }

        tabItem[i].addEventListener('click', function () {

            for (let j = 0; j < tabItem.length; j++) {
                tabItem[j].classList.remove('active');
                tabCatalog[j].classList.remove('active');
            }

            this.classList.add('active');

            if (tabItem[i].classList.contains('active')) {
                tabCatalog[i].classList.add('active');
            }
            
        });
    }
})



//выпадающее меню в навигации
// let dropDownButton = document.querySelector('.header__nav-catalog');
// let dropDownMenu = document.querySelector('.dropdown-menu');
// dropDownButton.addEventListener('click', function() {
//     dropDownMenu.classList.toggle('active');
// });
// window.addEventListener('scroll', function() {
//     dropDownMenu.classList.remove('active');
// });

//кнопка поиска
let searchButton = document.querySelector('.header__nav-search');
let searchForm = document.querySelector('.form__search');
let searchFormClose = document.querySelector('.form__search').querySelector('button');
searchButton.addEventListener('click', function() {
    searchForm.classList.toggle('active');
})
searchFormClose.addEventListener('click', function () {
    searchForm.classList.remove('active');
})



