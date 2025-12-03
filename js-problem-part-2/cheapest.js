let phones = [
    {name: 'Samsung', price: 20000, camera:'12mp', color:'black'},
    {name: 'Xoami', price: 18000, camera:'12mp', color:'black'},
    {name: 'Oppo', price: 30000, camera:'12mp', color:'black'},
    {name: 'Iphone', price: 100000, camera:'12mp', color:'black'},
    {name: 'Walton', price: 32000, camera:'12mp', color:'black'},
    {name: 'HTC', price: 9000, camera:'12mp', color:'black'}
]

function getCheapest(phones){
    let min = phones[0];
    for(let phone of phones){
        if(phone.price < min.price){
            min = phone ;
        }
    }
    return min;
}

let min = getCheapest(phones);
console.log('Cheapest phone is: ',min)