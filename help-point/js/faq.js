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
});