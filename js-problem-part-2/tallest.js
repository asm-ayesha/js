
function getMax(numbers){
    let max = numbers[0];
    for(num of numbers){
        if(num > max){
            max = num;
        }
        
    }
    return max;
}

let heights = [65,73,70,84,83,97,60,88,89]
let max = getMax(heights);
console.log('max value is', max)

