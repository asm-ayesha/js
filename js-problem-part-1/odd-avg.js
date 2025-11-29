/**
 * function takes an array as parameter
 * .give me the average of the odd numbers in the array
 */

function oddAverage(numbers){
    let oddCount = 0;
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
     if(numbers[i] % 2 !== 0){
        let num = numbers[i];
        sum += num;
        
        oddCount++;
        
     }
    }
    let avg = sum / oddCount;
    return avg;
}

let numbers = [21, 23, 12, 35, 53, 56, 76, 45, 34, 29, 90, 76];
let avg = oddAverage(numbers);
console.log('The average of the odd numbers is:', avg)