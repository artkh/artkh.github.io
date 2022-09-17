$(function () {

});


document.addEventListener('DOMContentLoaded', function () {

  // поисковая строка в хидере
  let searchFilter = document.querySelector('.search').querySelector('.filter');
  let searchFilterList = document.querySelector('.search').querySelector('.filter__list');
  let searchString = document.querySelector('.search').querySelector('.search_string');

  if (searchString) {

    searchFilter.addEventListener('click', function () {
      searchFilterList.classList.toggle('active');

      if(searchFilterList.classList.contains('active')) {
        document.addEventListener('scroll', function() {
          searchFilterList.classList.remove('active');
        });
      }
    })

    searchString.addEventListener('focus', function() {
      searchFilterList.classList.remove('active');
    })
  }
  //end

  // поиск авто
  let searchCars = document.querySelector('.search_cars');

  if(searchCars) {
    
    let searchCarsSwap = document.querySelector('.search_cars').querySelector('.swap');
    searchCarsSwap.addEventListener('click', function() {
      searchCars.querySelectorAll('.search_cars__wrapper_item')[0].classList.toggle('swap_active');
    });

    // настройка лимитов выбора времени

    let searchCarsDate = searchCars.querySelectorAll('input[type="date"]');
    let searchCarsTime = searchCars.querySelectorAll('input[type="time"]');
    let nowDate = new Date();
    let nowDateYear = nowDate.getFullYear();
    let nowDateMonth = nowDate.getMonth();

    ++nowDateMonth;

    if(nowDateMonth < 10) {
      nowDateMonth = `0${nowDateMonth}`;
    }

    let nowDateNum = nowDate.getDate();

    if(nowDateNum < 10) {
      nowDateNum = `0${nowDateNum}`;
    }
    
    let nowDateTimeHours = nowDate.getHours();
    let nowDateTimeMinutes = nowDate.getMinutes();

    if(nowDateTimeHours < 10) {
      nowDateTimeHours = `0${nowDateTimeHours}`;
    }
    
    if(nowDateTimeMinutes < 10) {
      nowDateTimeMinutes = `0${nowDateTimeMinutes}`;
    }

    for(let i = 0; i < searchCarsDate.length; i++) {
      searchCarsDate[i].min = `${nowDateYear}-${nowDateMonth}-${nowDateNum}`;
      searchCarsDate[i].value = `${nowDateYear}-${nowDateMonth}-${nowDateNum}`;

      searchCarsTime[i].value = `${nowDateTimeHours}:${nowDateTimeMinutes}`;
    }
  }

  // end

  // добавленние в избранное
  let inFavoritesButton = document.querySelectorAll('.top_info__favorites');
  if(inFavoritesButton) {
    for(let i = 0; i < inFavoritesButton.length; i++) {
      inFavoritesButton[i].addEventListener('click', function() {
        this.classList.toggle('in_favorites');
      })
    }
  }
  //end
})