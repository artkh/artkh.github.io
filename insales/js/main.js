$(function() {

    $('.slider').slick({
        infinite: true,
        fade: true,
        swipe: false,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="../img/arrow-circle-left.png" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="../img/arrow-circle-right.png" alt="">',
        responsive: [{
            breakpoint: 481,
            settings: {
                swipe: true,
                touchMove: true,
            }
        }]
        
    });

    $('.catalog__items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        swipe: false,
        touchMove: false,
        zIndex: 0,
        prevArrow: '<img class="catalog-arrows catalog-arrows__left" src="../img/arrow-left.png" alt="">',
        nextArrow: '<img class="catalog-arrows catalog-arrows__right" src="../img/arrow-right.png" alt="">',
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



let tabItem = document.querySelector('.catalog__title').querySelectorAll('a');
for (let i = 0; i < tabItem.length; i++) {
    tabItem[i].addEventListener('click', function () {
        for (let j = 0; j < tabItem.length; j++) {
            tabItem[j].classList.remove('active');
        }
        this.classList.add('active');

        let features = document.querySelector('.wrapper__features');
        let rating = document.querySelector('.wrapper__rating');
        let recomend = document.querySelector('.wrapper__recomend');

        if (this.classList.contains('catalog__title-features')) {
            features.style.transform = 'translate(0, -100%)';
            rating.style.transform = 'translateX(-10000px)';
            recomend.style.transform = 'translateX(-10000px)';
        } else if (this.classList.contains('catalog__title-rating')) {
            features.style.transform = 'translateX(-10000px)';
            rating.style.transform = 'translate(0, 0)';
            recomend.style.transform = 'translateX(-10000px)';
        } else if (this.classList.contains('catalog__title-recomend')) {
            features.style.transform = 'translateX(-10000px)';
            rating.style.transform = 'translateX(-10000px)';
            recomend.style.transform = 'translate(0, -200%)';
        }
    });
}


