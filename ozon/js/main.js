// Пробелы в стоимости
let price = document.querySelectorAll('.price');
function spacePrice() {
    for (let i = 0; i < price.length; i++) {
        let p = price[i].innerHTML.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '); //пробел после каждого третьего числа
        price[i].innerHTML = p;
    }
}
spacePrice();
// Конец пробелы

// Кнопка добавления в корзину
let buttonBasket = document.querySelectorAll('.basket-button');
let clearBasket = document.querySelector('.clear-basket'); //кнопка очистки корзины
for (let i = 0; i < buttonBasket.length; i++) {
    buttonBasket[i].addEventListener('click', function () {
        // localStorage.setItem(i, 'inBasket');
        localStorage.setItem(this.dataset.idBasket, 'inBasket');
        this.classList.add('in-basket');
        this.innerHTML = 'В корзине';
        let inBasket = document.querySelectorAll('.in-basket');
        basket.querySelector('span').innerHTML = inBasket.length; // Пополнение корзины в хидере
        clearBasket.style.display = 'block';
    });
}

window.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        for (let i = 0; i < buttonBasket.length; i++) {
            if (buttonBasket[i].dataset.idBasket == key) {
                buttonBasket[i].classList.add('in-basket');
                buttonBasket[i].innerHTML = 'В корзине';
                let inBasket = document.querySelectorAll('.in-basket');
                basket.querySelector('span').innerHTML = inBasket.length;
                clearBasket.style.display = 'block';
            }
        }
    }

    // for (let i = 0; i < localStorage.length; i++) {
    //     let key = localStorage.key(i);
    //     buttonBasket[key].classList.add('in-basket');
    //     buttonBasket[key].innerHTML = 'В корзине';
    //     let inBasket = document.querySelectorAll('.in-basket');
    //     basket.querySelector('span').innerHTML = inBasket.length;
    // }

    //очистка корзины
    clearBasket.addEventListener('click', function() {
        localStorage.clear();
        location.reload();
    });
    //конец очистки корзины
});
// Конец кнопки добавления

// хедер навигация
let navLink = document.querySelector('.header__nav').querySelectorAll('a');
for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', function () {
        for (let i = 0; i < navLink.length; i++) {
            navLink[i].className = '';
        }
        this.classList.add('active');
    });
}
// хедер навигация конец

// расчёт скидки
function calcDiscount() {
    let catalogItem = document.querySelectorAll('.catalog__item'),
        discountIn = document.querySelectorAll('.discount-price');
    for (let i = 0; i < catalogItem.length; i++) {
        if (catalogItem[i].querySelector('.discount')) {
            let standartPrice = parseInt(catalogItem[i].querySelector('.standart-price').innerHTML.replace(/\s/g, "")); // убираю пробелы и привожу к числу
            let percent = parseInt(catalogItem[i].querySelector('.discount').innerHTML); //нахожу процент скидки, привожу к числу
            percent = Math.abs(percent); // убираю минус с процента
            let calcPercent = standartPrice - (standartPrice / 100 * percent); //рассчитываю цену с учетом скидки
            let totalCalc = Math.floor((calcPercent * 100) / 100); //убираю знаки после запятой
            discountIn[i].innerHTML = totalCalc + '&thinsp;₽'; // сумма с учетом скидки вставлена
            // if(totalCalc > 9999) {
            //     let p = discountIn[i].innerHTML.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '); // возвращаю пробелы в цене после 9999
            //     discountIn[i].innerHTML = p;
            // }
            let p = discountIn[i].innerHTML.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '); // возвращаю пробелы в цене после каждого третьего числа
            discountIn[i].innerHTML = p;
        }
    }
}
calcDiscount();
// расчёт скидки конец

// Обрезка текста по кол-ву символов
function textCropping() {
    let elem = document.querySelectorAll('.catalog__item-title');
    let text = elem.innerHTML;
    let size = 72;
    let croppingTo = 67;

    for (let i = 0; i < elem.length; i++) {
        if (elem[i].innerHTML.length > size) {
            text = elem[i].innerHTML.substr(0, croppingTo);
            elem[i].innerHTML = text + '...';
        } else {
            text = elem[i].innerHTML;
        }
    }
}
textCropping();
// Обрезка конец
