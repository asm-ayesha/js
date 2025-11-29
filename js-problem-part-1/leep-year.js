/**
 * year will be a leep year if the year is ddivisible by 4
 */

function isLeepYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

// let isLipi = isLeepYear(2022);
// console.log(isLipi)

/**
 * those year that is not divisble by 100, if the year is divisble by 4:
 * then it will be a leep year
 */

function isLeepYear(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false
    }
}

let isLipi = isLeepYear(2100);
console.log(isLipi)