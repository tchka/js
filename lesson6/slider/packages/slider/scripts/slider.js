document.head.insertAdjacentHTML("afterbegin", '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">');

const slideTime = 500;

let sliderWrapper = document.querySelector('.slider-wrapper');
let slidesNumber = document.getElementsByClassName('slider-item').length;
let slider = document.querySelector('.slider');
let images = slider.querySelectorAll('img');

    let width = parseInt( slider.getAttribute("data-width"));
let height = parseInt( slider.getAttribute("data-height"));
if (width) {
    slider.style.width = width * slidesNumber  +'px';
    slider.parentElement.style.width = width +'px';
    images.forEach(function (image) {
       image.style.width = width+'px';
    });
}
if (height) {
    slider.style.height = height +'px';
}
// Создаем иконку загрузки
let loadIcon = document.createElement('i');
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
sliderWrapper.insertAdjacentElement("afterbegin", loadIcon);

// Создаем левую стрелку
let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
sliderWrapper.insertAdjacentElement("beforeend", leftArrow);

// Создаем правую стрелку
let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
sliderWrapper.insertAdjacentElement("beforeend", rightArrow);



// Ждем когда весь контент целиком загрузится
window.addEventListener('load', function () {

    leftArrow.addEventListener('click', function () {
        moveSlider ('left');
    });

    rightArrow.addEventListener('click', function () {
        moveSlider ('right');
    });

    // Скрываем иконку загрузки
    hideLoadIcon(loadIcon);
});

/**
 * Функция скрывает иконку загрузки
 * @param {HTMLElement} loadIcon 
 */
function hideLoadIcon(loadIcon) {
    loadIcon.style.display = "none";
}

/**
 * Функция плавно передвигает 1 слайд
 * @param {str} direction 'left' | 'right'
 */
function moveSlider (direction) {
    let marginLeft = 0;
    let start = Date.now();
    let marginLeftAtStart = (slider.style.marginLeft != '') ? parseInt(slider.style.marginLeft) : 0;
    let marginLeftMin = width * (1 - slidesNumber);


    if (direction == 'left' && marginLeftAtStart < 0) {
        let timer = setInterval(function() {
            marginLeft = marginLeftAtStart + width *  (Date.now() - start) / slideTime;
            slider.style.marginLeft = marginLeft + 'px';

            if (marginLeft > marginLeftAtStart + width) {
                slider.style.marginLeft = (marginLeftAtStart + width) + 'px';
                clearInterval(timer);
            }

        }, 20);

    } else if (direction == 'right' && marginLeftAtStart > marginLeftMin) {
        let timer = setInterval(function() {
            marginLeft = marginLeftAtStart - width *  (Date.now() - start) / slideTime;
            slider.style.marginLeft = marginLeftAtStart - width *  (Date.now() - start) / slideTime + 'px';

            if (marginLeft < marginLeftAtStart - width) {
                slider.style.marginLeft = (marginLeftAtStart - width) + 'px';
                clearInterval(timer);
            }

        }, 20);

    }

    if (parseInt(slider.style.marginLeft) >= 0 - width) {
        leftArrow.classList.add('inactive');
    } else {
        leftArrow.classList.remove('inactive');
    }
    if (parseInt(slider.style.marginLeft) <= marginLeftMin + width) {
        rightArrow.classList.add('inactive');
    } else {
        rightArrow.classList.remove('inactive');
    }
}






