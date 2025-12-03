let products = [
    {name: 'chiruni', price:100, quantity: 3},
    {name: 'shirt', price:700, quantity: 5},
    {name: 'pant', price:1200, quantity: 1},
    {name: 'shampoo', price:300, quantity: 2},
]

function shoppingCartTotal(products){
    let total = 0;
    for(let product of products){
        let thisProductCost = product.price * product.quantity;
        total += thisProductCost ;
    }
    return total ;
}

let productCost = shoppingCartTotal(products);
console.log(productCost);