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

document.addEventListener('DOMContentLoaded', function () {

    //переключение часто задаваемых вопросов
    let sliderTab = document.querySelectorAll('.faq__slidertabs_item');

    if (sliderTab) {
        for (let i = 0; i < sliderTab.length; i++) {

            //выбор активного таба
            sliderTab[i].addEventListener('click', function () {

                //очистка подсветки невыбранных иконок
                let sliderTabSvg = document.querySelector('.faq__slidertabs').querySelectorAll('svg');

                for (let k = 0; k < sliderTabSvg.length; k++) {
                    let sliderTabSvgPath = sliderTabSvg[k].querySelectorAll('path');
                    for (let h = 0; h < sliderTabSvgPath.length; h++) {
                        sliderTabSvgPath[h].setAttribute('fill', '#484848')
                    }
                }
                //подсветка выбранной иконки
                let sliderTabSvgSelectedPath = this.querySelectorAll('path');
                for (let k = 0; k < sliderTabSvgSelectedPath.length; k++) {
                    sliderTabSvgSelectedPath[k].setAttribute('fill', '#EA9662');
                }

                //отоброжение вопросов для выбранного таба
                let faqSliderContent = document.querySelectorAll('.faq__slidercontent');
                for (let j = 0; j < faqSliderContent.length; j++) {
                    faqSliderContent[j].classList.remove('active');
                    sliderTab[j].classList.remove('active');
                }
                faqSliderContent[i].classList.add('active');
                sliderTab[i].classList.add('active');

            })
        }
    }

    //таб с детальной информацией
    let faqMore = document.querySelectorAll('.faq__more');

    if (faqMore) {
        for (let i = 0; i < faqMore.length; i++) {
            faqMore[i].addEventListener('click', function () {
                this.classList.toggle('current');
                if (this.classList.contains('current')) {
                    this.parentNode.parentNode.querySelector('.faq__slidercontent_item_description').classList.add('active');
                } else {
                    this.parentNode.parentNode.querySelector('.faq__slidercontent_item_description').classList.remove('active');
                }
            })
        }
    }

    //этапы подбора психолога
    let stagesBlock = document.querySelector('.search_psichologist__stages');
    let stageSearch = document.querySelectorAll('.search_psichologist__stages_item');
    let stageSearchInfo = document.querySelectorAll('.search_psichologist__stage_info');

    if (stageSearch) {
        for (let i = 0; i < stageSearch.length; i++) {
            stageSearch[i].addEventListener('click', function() {

                //анимация сьезжания этапов в один
                for (let j = 0; j < stageSearch.length; j++) {
                    stageSearch[j].classList.add('anim');
                }
                this.classList.add('current');

                //скрытие этапов и открытие описания выбранного этапа
                setTimeout(() => {
                    stagesBlock.classList.add('hide');
                    stageSearchInfo[i].classList.add('active');
                }, 1500);
                
                //закрытие описания этапа
                let stageSearchInfoClose = stageSearchInfo[i].querySelector('.search_psichologist__stage_info_close');
                stageSearchInfoClose.addEventListener('click', function() {
                    
                    setTimeout(() => {
                        
                        stageSearch[i].classList.remove('current');
                        stageSearchInfo[i].classList.remove('active', 'deactive');
                        stagesBlock.classList.remove('hide');
                        for (let j = 0; j < stageSearch.length; j++) {
                            stageSearch[j].classList.remove('anim');
                        }
                    }, 500);
                    stageSearchInfo[i].classList.add('deactive');

                });

            });
        }
    }
});

