'use strict';
let products = document.body.querySelectorAll('.product');
products.forEach(function (product) {
    product.querySelector('p').textContent = product.querySelector('p').textContent.substr(0,200);
    let productImg = product.querySelector('img');
    let buttonShowDescr = product.querySelector('button.descr');
    let productDescr = product.querySelector('.description');
    let buttonCancel =  product.querySelector('button.cancel');
    buttonShowDescr.addEventListener('click', function (event) {
        productImg.classList.add('hidden');
        this.classList.add('hidden');
        productDescr.classList.remove('hidden');
        buttonCancel.classList.remove('hidden');
    });

    buttonCancel.addEventListener('click', function (event) {
        productImg.classList.remove('hidden');
        this.classList.add('hidden');
        productDescr.classList.add('hidden');
        buttonShowDescr.classList.remove('hidden');
    });

})