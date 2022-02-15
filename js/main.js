// YOUTUBE API

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        display: 'flex',
        height: '100%',
        width: '100%',
        videoId: 'Sdp6VL_NBnY',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {
    //     if (event.data == YT.PlayerState.PLAYING && !done) {
    //     setTimeout(stopVideo, 1000);
    //     done = true;
    // }
}

function stopVideo() {
    player.stopVideo();
}

/* MAIN.JS */

/* LOAD */

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

}

setInterval(load, 2000);

function remoove() {
    b.remove();
}
setInterval(remoove, 5000);

/* SLIDER */

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

/* BURGER MENU */

let burger = document.querySelector('.menu-burger');
let close = document.querySelector('.header__menu-close');
let menuMobile = document.querySelector('.header');
let bao = document.querySelector('.header__logo');

burger.addEventListener('click', () => {
    menuMobile.style.display = 'block';
})

close.addEventListener('click', () => {
    menuMobile.style.display = 'none';
})

/* PLAYER CONTROL */

const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelector('.main__button-play');
const fr = document.querySelector('.yt');
const ff = document.body.querySelector('.yt');

buttonModal.addEventListener('click', (e) => {
    modalWindow.classList.add('active');
    // player.playVideo();
});

modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');
    if (!isModal) {
        stopVideo();
        modalWindow.classList.remove('active');
    }
});
