//смена темы
let imageClick = document.querySelector('.box__image');
let box = document.querySelector('.box');

imageClick.addEventListener('click', function() {
    box.classList.toggle('dark');
});

//анимация нажатия на кнопку
let ripple = document.querySelector('.ripple');

ripple.addEventListener('click', function(e) {
    let rippleEffect = document.createElement('span');
    let ripplePosition = ripple.getBoundingClientRect();

    rippleEffect.className = "ripple_effect";
    rippleEffect.style.left = e.clientX - ripplePosition.left + 'px';
    rippleEffect.style.top = e.clientY - ripplePosition.top + 'px';

    this.append(rippleEffect);

    setTimeout(() => {
        rippleEffect.remove();
    }, 900);
})
