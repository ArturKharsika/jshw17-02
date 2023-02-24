let products = [
    ['Хлеб', 2, 20],
    ['Молоко', 1, 30],
    ['Масло', 2, 60],
    ['Сало', 1, 150],
];

for (let i = 0; i < products.length; i++) {
    let nameProducts = products[i][0];
    let amountOfProducts = products[i][1];
    let priceProducts = products[i][2];
    let productsCost = amountOfProducts * priceProducts;
    console.log(nameProducts, ':', amountOfProducts, '*', priceProducts, '=', productsCost);
}



console.log('***************************');



let totalProducts = 0;
for (let i = 0; i < products.length; i++) {
    totalProducts += products[i][1];
}

console.log('всего товаров:', totalProducts);

let quantityProducts;
let CostProducts;
let productsValue = 0;
for (let i = 0; i < products.length; i++) {
    quantityProducts = products[i][1];
    CostProducts = products[i][2];
    productsValue += quantityProducts * CostProducts;
}

console.log('сумма товаров в корзине:', productsValue);



console.log('***************************');



let averageProductsPrice = 0;
let totalPrice = 0;
for (let i = 0; i < products.length; i++) {
    totalPrice += products[i][2];
    averageProductsPrice = totalPrice / products.length;
}

console.log('средняя цена товара:', averageProductsPrice);

let expensivestProducts = 0;
for (let i = 0; i < products.length; i++) {
    let priceProducts = products[i][2];
    if (priceProducts > 100) {
        expensivestProducts++;
    }
}

console.log('товаров дороже 100:', expensivestProducts);

let cheapestProducts = 0;
for (let i = 0; i < products.length; i++) {
    let priceProducts = products[i][2];
    if (priceProducts < 50) {
        cheapestProducts++;
    }
}

console.log('товаров дешевле 50:', cheapestProducts);



console.log('***************************');

let minPrice = products[0][2];
let maxPrice = products[0][2];
let minNameProducts;
let maxNameProducts;
let amountOfMinProducts;
let amountOfMaxProducts;

for (let i = 0; i < products.length; i++) {
    let priceProducts = products[i][2];
    if (priceProducts <= minPrice) {
        minPrice = priceProducts;
        minNameProducts = products[i][0];
        amountOfMinProducts = products[i][1];
    }
    if (priceProducts >= maxPrice) {
        maxPrice = priceProducts;
        maxNameProducts = products[i][0];
        amountOfMaxProducts = products[i][1];
    }
}

console.log('Самый дорогой товар -', maxNameProducts, maxPrice, 'купили', amountOfMaxProducts);
console.log('Самый дешевый товар -', minNameProducts, minPrice, 'купили', amountOfMinProducts);


/*
1. Хлеб 2x20 = 40 -
2. Молоко 1x30 = 30
3. Масло 2x60 = 120
4. Сало 1x150 = 150 +
***************************
всего товаров 6
сумма товаров в корзине 340
***************************
средняя цена товара 65
Товаров дороже 100 - 1
Товаров дешевле 50 - 2
***************************
Самый дорогой товар - сало 150 купили 1
Самый дешевый товар - хлеб 20 купили 2
*/



