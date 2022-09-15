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

  // смена аренды
  let searchCars = document.querySelector('.search_cars');
  let searchCarsSwap = document.querySelector('.search_cars').querySelector('.swap');

  searchCarsSwap.addEventListener('click', function() {
    searchCars.querySelectorAll('.search_cars__wrapper_item')[0].classList.toggle('swap_active');
  })
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