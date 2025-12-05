function lowestnumber(heights){
    let minNumber = heights[0];
    for(let num of heights){
        if(minNumber > num){
            minNumber = num;
        }
    }
    return minNumber;

}

const heights = [167, 190, 120, 165, 137];
const lowestHeight = lowestnumber(heights)

console.log('Lowest height is: ',lowestHeight);