function multiply(num1,num2){
    if(typeof num2 !== 'number'){
        console.log('please provde a number')
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply(2, 'six');
console.log(result)