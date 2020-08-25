'use srtick';

let button = document.body.querySelector('button');
let overlay = document.body.querySelector('.overlay');
let popup = document.body.querySelector('.popup');
let close = document.body.querySelector('.close');
button.addEventListener('click', function (event) {
    overlay.classList.remove('hidden');
    popup.classList.remove('hidden');
    if (popup.classList.contains('magic')) {
        popup.classList.remove('magic');
    }
    if (!popup.classList.contains('magictime')) {
        popup.classList.add('magictime');
    }
    if (!popup.classList.contains('twisterInDown')) {
        popup.classList.add('twisterInDown');
    }
});

close.addEventListener('click', function (event) {
    if (!popup.classList.contains('magic')) {
        popup.classList.add('magic');
    }
    if (!popup.classList.contains('magictime')) {
        popup.classList.add('magictime');
    }
    if (popup.classList.contains('twisterInDown')) {
        popup.classList.remove('twisterInDown');
    }
    window.setTimeout( hidePopup, 1000);
});

function hidePopup () {
    overlay.classList.add('hidden');
    popup.classList.add('hidden');
}


