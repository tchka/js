document.head.insertAdjacentHTML("afterbegin", '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">');

const slideTime = 500;

let sliderWrapper = document.querySelector('.slider-wrapper');
let slider = document.querySelector('.slider');
let sliderItems = slider.querySelectorAll('.slider-item');
let slidesNumber = sliderItems.length;
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

sliderItems.forEach(function (item) {
    item.classList.add('hidden');
});
// Создаем иконку загрузки
let loadIcon = document.createElement('i');
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
sliderWrapper.insertAdjacentElement("afterbegin", loadIcon);

// Создаем левую стрелку
let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow', 'inactive', 'hidden');
sliderWrapper.insertAdjacentElement("beforeend", leftArrow);

// Создаем правую стрелку
let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow', 'hidden');
sliderWrapper.insertAdjacentElement("beforeend", rightArrow);



// Ждем когда весь контент целиком загрузится
window.addEventListener('load', function () {

    leftArrow.addEventListener('click', function () {
        moveSlider ('left');
    });

    rightArrow.addEventListener('click', function () {
        moveSlider ('right');
    });
    leftArrow.classList.remove('hidden');
    rightArrow.classList.remove('hidden');
    sliderItems.forEach(function (item) {
        item.classList.remove('hidden');
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
                rightArrow.classList.remove('inactive');
                if (parseInt(slider.style.marginLeft) >= 0) {
                    leftArrow.classList.add('inactive');
                } else {
                    leftArrow.classList.remove('inactive');
                }
            }

        }, 20);

    } else if (direction == 'right' && marginLeftAtStart > marginLeftMin) {
        let timer = setInterval(function() {
            marginLeft = marginLeftAtStart - width *  (Date.now() - start) / slideTime;
            slider.style.marginLeft = marginLeftAtStart - width *  (Date.now() - start) / slideTime + 'px';

            if (marginLeft < marginLeftAtStart - width) {
                slider.style.marginLeft = (marginLeftAtStart - width) + 'px';
                clearInterval(timer);
                leftArrow.classList.remove('inactive');
                if (parseInt(slider.style.marginLeft) <= marginLeftMin) {
                    rightArrow.classList.add('inactive');
                } else {
                    rightArrow.classList.remove('inactive');
                }
            }

        }, 20);

    }


}






