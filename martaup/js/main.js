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

//!!!!!!!!!!!!!!!!!!!MENU BUTTON!!!!!!!!!!!!!!!!!!!
nav__btn.onclick = function() {
    let menu = document.querySelector('.header__nav');
    this.classList.toggle('active');
    if (this.className == 'active') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
};
window.addEventListener('scroll', function(){
    let menu = document.querySelector('.header__nav');
    if (document.body.clientWidth < 690) {
        menu.style.display = 'none';
        nav__btn.className = '';
    }
});

//!!!!!!!!!!!!!!!!!!!ANIMATION SVG!!!!!!!!!!!!!!!!!!!
function animationSvg() {
    if (document.body.clientWidth < 480) {
        return false;
    }
    let featuresAnim = document.querySelectorAll('.features__image > svg > rect');
    let workAnim = document.querySelectorAll('.work__image > svg > rect');
    featuresAnim[1].setAttribute('transform', 'matrix(0.875951 -0.482401 0.517808 0.855497 -400 247.243)');
    featuresAnim[2].setAttribute('transform', 'matrix(0.875951 -0.482401 0.517808 0.855497 -400 318.926)');
    featuresAnim[0].setAttribute('transform', 'matrix(0.875951 -0.482401 0.517808 0.855497 -400 398.641)');
    workAnim[0].setAttribute('transform', 'matrix(-0.878059 -0.495785 0.504134 -0.853958 600 459.813)');
    workAnim[2].setAttribute('transform', 'matrix(-0.878059 -0.495785 0.504134 -0.853958 600 528.07)');
    workAnim[1].setAttribute('transform', 'matrix(-0.878059 -0.495785 0.504134 -0.853958 600 590.478)');
}
setInterval(animationSvg, 2000);

function animationSvgReverse() {
    let featuresAnim = document.querySelectorAll('.features__image > svg > rect');
    let workAnim = document.querySelectorAll('.work__image > svg > rect');
    featuresAnim[1].setAttribute('transform', 'matrix(0.875951 -0.482401 0.517808 0.855497 -339 217.243)');
    featuresAnim[2].setAttribute('transform', 'matrix(0.875951 -0.482401 0.517808 0.855497 -267.724 245.926)');
    featuresAnim[0].setAttribute('transform', 'matrix(0.875951 -0.482401 0.517808 0.855497 -294.06 348.641)');
    workAnim[0].setAttribute('transform', 'matrix(-0.878059 -0.495785 0.504134 -0.853958 489.815 399.813)');
    workAnim[2].setAttribute('transform', 'matrix(-0.878059 -0.495785 0.504134 -0.853958 398.337 413.07)');
    workAnim[1].setAttribute('transform', 'matrix(-0.878059 -0.495785 0.504134 -0.853958 406.954 480.478)');
}
setInterval(animationSvgReverse, 4000);








// function animationSvg() {
//     let featuresAnim = document.querySelectorAll('.features__image > svg > rect');
//     let workAnim = document.querySelectorAll('.work__image > svg > rect');
//     if (featuresAnim[1].getAttribute('transform', 'matrix(0.875951 -0.482401 0.517808 0.855497 -339 217.243)') ||
//     featuresAnim[2].getAttribute('transform', 'matrix(0.875951 -0.482401 0.517808 0.855497 -267.724 245.926)') ||
//     featuresAnim[0].getAttribute('transform', 'matrix(0.875951 -0.482401 0.517808 0.855497 -294.06 348.641)') ||
//     workAnim[0].getAttribute('transform', 'matrix(-0.878059 -0.495785 0.504134 -0.853958 489.815 399.813)') ||
//     workAnim[2].getAttribute('transform', 'matrix(-0.878059 -0.495785 0.504134 -0.853958 398.337 413.07)') ||
//     workAnim[1].getAttribute('transform', 'matrix(-0.878059 -0.495785 0.504134 -0.853958 406.954 480.478)')) {
//         featuresAnim[1].setAttribute('transform', 'matrix(0.875951 -0.482401 0.517808 0.855497 -400 247.243)');
//         featuresAnim[2].setAttribute('transform', 'matrix(0.875951 -0.482401 0.517808 0.855497 -400 318.926)');
//         featuresAnim[0].setAttribute('transform', 'matrix(0.875951 -0.482401 0.517808 0.855497 -400 398.641)');
//         workAnim[0].setAttribute('transform', 'matrix(-0.878059 -0.495785 0.504134 -0.853958 600 459.813)');
//         workAnim[2].setAttribute('transform', 'matrix(-0.878059 -0.495785 0.504134 -0.853958 600 528.07)');
//         workAnim[1].setAttribute('transform', 'matrix(-0.878059 -0.495785 0.504134 -0.853958 600 590.478)');
//     }
//     console.log(featuresAnim[1].getAttribute('transform'));
// }
// setInterval(animationSvg, 2000);

// function animationSvgReverse() {
//     let featuresAnim = document.querySelectorAll('.features__image > svg > rect');
//     let workAnim = document.querySelectorAll('.work__image > svg > rect');
//     if (featuresAnim[1].getAttribute('transform', 'matrix(0.875951 -0.482401 0.517808 0.855497 -400 247.243)') ||
//         featuresAnim[2].getAttribute('transform', 'matrix(0.875951 -0.482401 0.517808 0.855497 -400 318.926)') ||
//         featuresAnim[0].getAttribute('transform', 'matrix(0.875951 -0.482401 0.517808 0.855497 -400 398.641)') ||
//         workAnim[0].getAttribute('transform', 'matrix(-0.878059 -0.495785 0.504134 -0.853958 600 459.813)') ||
//         workAnim[2].getAttribute('transform', 'matrix(-0.878059 -0.495785 0.504134 -0.853958 600 528.07)') ||
//         workAnim[1].getAttribute('transform', 'matrix(-0.878059 -0.495785 0.504134 -0.853958 600 590.478)')) {
//             featuresAnim[1].setAttribute('transform', 'matrix(0.875951 -0.482401 0.517808 0.855497 -339 217.243)');
//             featuresAnim[2].setAttribute('transform', 'matrix(0.875951 -0.482401 0.517808 0.855497 -267.724 245.926)');
//             featuresAnim[0].setAttribute('transform', 'matrix(0.875951 -0.482401 0.517808 0.855497 -294.06 348.641)');
//             workAnim[0].setAttribute('transform', 'matrix(-0.878059 -0.495785 0.504134 -0.853958 489.815 399.813)');
//             workAnim[2].setAttribute('transform', 'matrix(-0.878059 -0.495785 0.504134 -0.853958 398.337 413.07)');
//             workAnim[1].setAttribute('transform', 'matrix(-0.878059 -0.495785 0.504134 -0.853958 406.954 480.478)');
//     }
//     console.log(featuresAnim[1].getAttribute('transform'));
// }
// setInterval(animationSvgReverse, 4000);










// let animationSvg = setInterval(function animationStart() {
//     let featuresAnim = document.querySelectorAll('.features__image > svg > rect');
//     let workAnim = document.querySelectorAll('.work__image > svg > rect');
//     featuresAnim[1].setAttribute('transform', 'matrix(0.875951 -0.482401 0.517808 0.855497 -400 247.243)');
//     featuresAnim[2].setAttribute('transform', 'matrix(0.875951 -0.482401 0.517808 0.855497 -400 318.926)');
//     featuresAnim[0].setAttribute('transform', 'matrix(0.875951 -0.482401 0.517808 0.855497 -400 398.641)');
//     workAnim[0].setAttribute('transform', 'matrix(-0.878059 -0.495785 0.504134 -0.853958 600 459.813)');
//     workAnim[2].setAttribute('transform', 'matrix(-0.878059 -0.495785 0.504134 -0.853958 600 528.07)');
//     workAnim[1].setAttribute('transform', 'matrix(-0.878059 -0.495785 0.504134 -0.853958 600 590.478)');
//     animationSvg = setInterval(function animationEnd() {
//         let featuresAnim = document.querySelectorAll('.features__image > svg > rect');
//         let workAnim = document.querySelectorAll('.work__image > svg > rect');
//         featuresAnim[1].setAttribute('transform', 'matrix(0.875951 -0.482401 0.517808 0.855497 -339 217.243)');
//         featuresAnim[2].setAttribute('transform', 'matrix(0.875951 -0.482401 0.517808 0.855497 -267.724 245.926)');
//         featuresAnim[0].setAttribute('transform', 'matrix(0.875951 -0.482401 0.517808 0.855497 -294.06 348.641)');
//         workAnim[0].setAttribute('transform', 'matrix(-0.878059 -0.495785 0.504134 -0.853958 489.815 399.813)');
//         workAnim[2].setAttribute('transform', 'matrix(-0.878059 -0.495785 0.504134 -0.853958 398.337 413.07)');
//         workAnim[1].setAttribute('transform', 'matrix(-0.878059 -0.495785 0.504134 -0.853958 406.954 480.478)');
//     }, 2000);
// }, 2000);
// console.log(document.querySelector('.features__image > svg > rect').getAttribute('transform'));