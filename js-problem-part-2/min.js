let prices = [20000, 16000, 50000, 100000, 25000, 12000, 5000, 30000]

function getMin(numbers){
    let min = numbers[0] ;
    for(let num of numbers){
        if(num < min ){
            min = num ;
        }
    }
    return min ;
}

let min = getMin(prices);
console.log('min number is: ', min)
