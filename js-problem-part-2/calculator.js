function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}

function calculator(a, b, oparetion){
    if(oparetion === 'add'){
        const result = add(a, b) ;
        return result;    
    }
    else if(oparetion === 'subtract'){
        const result = subtract(a, b) ;
        return result;    
    }
    else if(oparetion === 'multiply'){
        const result = multiply(a, b) ;
        return result;    
    }
    else if(oparetion === 'divide'){
        const result = divide(a, b) ;
        return result;    
    }
}

let result = calculator(2,3, 'multiply')
console.log(result)