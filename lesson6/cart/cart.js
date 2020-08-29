'use strict';

let cart = {
    cartPproducts: [],
    sum: 0,
    addProductToCart(id, name, price) {

        if (this.cartPproducts.every(n => n.id !== id )) {
            var productToAdd = new Object();
            productToAdd["id"] = id;
            productToAdd["number"] = 1;
            productToAdd["name"] = name;
            productToAdd["price"] = price;
            this.cartPproducts.push(productToAdd);
        } else {
            let cartPosition = this.cartPproducts.filter(function(n) {
                return n['id'] == id ;
            });
            cartPosition[0]['number']++;
        }

        this.render();

    },

    render () {
        let cart = document.querySelector('.cart');
        cart.innerHTML = '';
        let cartTable = document.createElement('table');
        cart.insertAdjacentElement('beforeend', cartTable);

        let titleRow = '<tr><td>ID</td><td>Name</td><td>Qty</td><td>Price</td></tr>';
        cartTable.insertAdjacentHTML('beforeend',titleRow);


        this.cartPproducts.forEach(function (product) {
            let cartTr = document.createElement('tr');
            cartTable.insertAdjacentElement('beforeend', cartTr);

            let cartProductId = product['id'];
            let cartIdTd = document.createElement('td');
            cartIdTd.innerText = cartProductId;
            cartTr.insertAdjacentElement('beforeend', cartIdTd);

            let cartProductName = product['name'];
            let cartNameTd = document.createElement('td');
            cartNameTd.innerText = cartProductName;
            cartTr.insertAdjacentElement('beforeend', cartNameTd);

            let cartProductNumber = product['number'];
            let cartNumberTd = document.createElement('td');
            cartNumberTd.innerText = cartProductNumber;
            cartTr.insertAdjacentElement('beforeend', cartNumberTd);

            let cartProductPrice = product['price'];
            let cartPriceTd = document.createElement('td');
            cartPriceTd.innerText = cartProductPrice;
            cartTr.insertAdjacentElement('beforeend', cartPriceTd);

        });
    }

};

let products = document.querySelectorAll('.product');

products.forEach( function(product) {
   let productPrice = parseInt(product.querySelector('.price span').innerHTML.trim());
   let buttonToCart = product.querySelector('.toCart');
   buttonToCart.addEventListener('click', function () {
       let productId = this.getAttribute('data-id');
       let productName = this.getAttribute('data-name');
       let productPrice = this.getAttribute('data-price');
      cart.addProductToCart(productId, productName, productPrice);
   });
});