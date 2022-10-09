document.addEventListener('DOMContentLoaded', function () {

  // поисковая строка в хидере
  let searchFilter = document.querySelector('.search').querySelector('.filter');
  let searchFilterList = document.querySelector('.search').querySelector('.filter__list');
  let searchString = document.querySelector('.search').querySelector('.search_string');

  if (searchString) {

    searchFilter.addEventListener('click', function () {
      searchFilterList.classList.toggle('active');

      if (searchFilterList.classList.contains('active')) {
        document.addEventListener('scroll', function () {
          searchFilterList.classList.remove('active');
        });
      }
    })

    searchString.addEventListener('focus', function () {
      searchFilterList.classList.remove('active');
    })
  }
  //end

  // поиск авто
  let searchCars = document.querySelector('.search_cars');

  if (searchCars) {

    let searchCarsSwap = document.querySelector('.search_cars').querySelector('.swap');
    searchCarsSwap.addEventListener('click', function () {
      searchCars.querySelectorAll('.search_cars__wrapper_item')[0].classList.toggle('swap_active');
    });

    // настройка лимитов выбора времени

    let searchCarsDate = searchCars.querySelectorAll('input[type="date"]');
    let searchCarsTime = searchCars.querySelectorAll('input[type="time"]');
    let nowDate = new Date();
    let nowDateYear = nowDate.getFullYear();
    let nowDateMonth = nowDate.getMonth();

    ++nowDateMonth;

    if (nowDateMonth < 10) {
      nowDateMonth = `0${nowDateMonth}`;
    }

    let nowDateNum = nowDate.getDate();

    if (nowDateNum < 10) {
      nowDateNum = `0${nowDateNum}`;
    }

    let nowDateTimeHours = nowDate.getHours();
    let nowDateTimeMinutes = nowDate.getMinutes();

    if (nowDateTimeHours < 10) {
      nowDateTimeHours = `0${nowDateTimeHours}`;
    }

    if (nowDateTimeMinutes < 10) {
      nowDateTimeMinutes = `0${nowDateTimeMinutes}`;
    }

    for (let i = 0; i < searchCarsDate.length; i++) {
      searchCarsDate[i].min = `${nowDateYear}-${nowDateMonth}-${nowDateNum}`;
      searchCarsDate[i].value = `${nowDateYear}-${nowDateMonth}-${nowDateNum}`;

      searchCarsTime[i].value = `${nowDateTimeHours}:${nowDateTimeMinutes}`;
    }
  }

  // end

  // вставка информации о авто из json
  function openCarsInform(url, section) {
    fetch(url).then(response => response.json())
      .then(result => setInformCars(result, section));
  }

  function setInformCars(result, section) {
    let listCars = result.listCars;

    if (section == mostPopular) {
      for (let i = 0; i <= 3; i++) {
        createCarItemHTML(section, listCars[i].name, listCars[i].class, listCars[i].inFavorites, listCars[i].image, listCars[i].fuel, listCars[i].gearbox, listCars[i].people, listCars[i].priceFinal, listCars[i].rentTime, listCars[i].priceDiscount, listCars[i].link);
      }
      
      allInFavoritesButton(section, 0);
    }

    if (section == recomendedCars) {
      for (let i = 0; i <= 7; i++) {
        createCarItemHTML(section, listCars[i].name, listCars[i].class, listCars[i].inFavorites, listCars[i].image, listCars[i].fuel, listCars[i].gearbox, listCars[i].people, listCars[i].priceFinal, listCars[i].rentTime, listCars[i].priceDiscount, listCars[i].link);
      }

      allInFavoritesButton(section, 0);

      //открытие остальных авто
      const showMoreButton = section.querySelector('.more-car').querySelector('.primary_button');
      const amountCars = section.querySelector('.more-car').querySelector('.amount-cars__num');
      amountCars.innerHTML = listCars.length;

      let elemAmount = section.querySelector('.category__items').querySelectorAll('.item').length;
      elemAmount >= listCars.length ? showMoreButton.style.display = 'none' : null;

      showMoreButton.addEventListener('click', function () {
        let notLoadCarsNum = listCars.length - elemAmount;
        let maxOpen = elemAmount + 8;
        let currentlengthItems = section.querySelector('.category__items').querySelectorAll('.item').length;

        if (notLoadCarsNum >= 1) {
          for (let i = elemAmount; i < maxOpen; i++) {
            createCarItemHTML(section, listCars[i].name, listCars[i].class, listCars[i].inFavorites, listCars[i].image, listCars[i].fuel, listCars[i].gearbox, listCars[i].people, listCars[i].priceFinal, listCars[i].rentTime, listCars[i].priceDiscount, listCars[i].link);
            elemAmount++;
            if (elemAmount == listCars.length) {
              showMoreButton.style.display = 'none';
              break;
            }
          }
          allInFavoritesButton(section, currentlengthItems);
        }
      })

    }

  }

  function createCarItemHTML(section, name, classCar, inFavorites, image, fuel, gearbox, people, priceFinal, rentTime, priceDiscount, link) {
    let item = document.createElement('div');

    item.classList.add('item');
    item.insertAdjacentHTML('afterbegin', `
            <div class="inner">

              <div class="top_info">
                <a href="${link}" class="top_info__name">${name}</a>
                <div class="top_info__class">${classCar}</div>
                <div class="top_info__favorites ${inFavorites ? 'in_favorites' : ''}"></div>
              </div>

              <a href="${link}" class="image">
                <img src="${image}" alt="">
              </a>

              <div class="spec">
                <div class="spec__item fuel">${fuel}l</div>
                <div class="spec__item gearbox__manual">${gearbox}</div>
                <div class="spec__item people">${people} People</div>
              </div>

              <div class="rent">
                <div class="rent__price">
                  <span class="rent__price_finalcost">$${priceFinal}.00/</span>
                  <span class="rent__price_time">${rentTime}</span>
                  <span class="rent__price_discount">${priceDiscount ? `$${priceDiscount}.00` : ''}</span>
                </div>

                <a href="${link}" class="rent__link primary_button primary_button__l">Rent Now</a>
              </div>

            </div>`)

    let categoryItems = section.querySelector('.category__items');
    categoryItems.append(item);
  }

  if (mostPopular) {
    openCarsInform('https://artkh.github.io/car-rent/json/popular-cars.json', mostPopular);
  }

  if (recomendedCars) {
    openCarsInform('https://artkh.github.io/car-rent/json/all-cars.json', recomendedCars);
  }
  //end

  // избранное
  function allInFavoritesButton(section, start) {
    let inFavoritesButton = section.querySelectorAll('.top_info__favorites');

    for (let i = start; i < inFavoritesButton.length; i++) {
      inFavoritesButton[i].addEventListener('click', function () {
        this.classList.toggle('in_favorites');
      })
    }
  }
  //end
})