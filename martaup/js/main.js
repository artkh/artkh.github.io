$(function(){
    $('.top-head__slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        vertical: true,
        dotsClass: 'top-head__slider-inner-dots',
    });
    
    // $('.nav__btn').on('click', function(){
    //     $('.header__nav').slideToggle();
    //     $(this).toggleClass('active');
    // });

    
});

nav__btn.onclick = function() {
    let menu = document.querySelector('.header__nav');
    let header = document.querySelector('.header');
    this.classList.toggle('active');
    if (this.className == 'active') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}
window.addEventListener('scroll', function(){
    let menu = document.querySelector('.header__nav');
    if (document.body.clientWidth < 690) {
        menu.style.display = 'none';
        nav__btn.className = '';
    }
});