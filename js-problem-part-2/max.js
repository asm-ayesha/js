function maxOfThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if( num2 > num3 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}



let jim = 89;
let tim = 67;
let kim = 90;
let maxNumber, name = maxOfThree(jim, tim, kim);
console.log('max number: ', maxNumber)
console.log(name)