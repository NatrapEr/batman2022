h = document.querySelector('.header');
m = document.querySelector('.main');
f = document.querySelector('.footer');
l = document.querySelector('.loading-spinner');
b = document.querySelector('.bc');
const screenWidth = window.screen.width
function load() {
    h.style.visibility = 'visible';
    m.style.visibility = 'visible';
    f.style.visibility = 'visible';
    l.style.visibility = 'hidden';
    b.style.visibility = 'hidden';
    b.remove();
}
setInterval(load, 2000);

const swiper = new Swiper('.swiper', {
    // slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.main-slider__arrow',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        }
    }
});

let burger = document.querySelector('.menu-burger');
let close = document.querySelector('.header__menu-close');
let menuMobile = document.querySelector('.header');

burger.addEventListener('click', () => {
    menuMobile.style.display = 'block';
})

close.addEventListener('click', () => {
    menuMobile.style.display = 'none';
})

const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelector('.main__button-play');

buttonModal.addEventListener('click', (e) => {
    modalWindow.classList.add('active');
});

modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');
    if (!isModal) {
        modalWindow.classList.remove('active');
    }
});