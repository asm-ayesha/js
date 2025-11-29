// inch convert feet (12inch 1 feet)
function inchToFeet(inch){
    let feet = inch / 12;
    return feet;
}

// let shovoHeight = inchToFeet(75);
// console.log(shovoHeight);


// 75 inch
function inchToFeet(inch){
    let feetFraction = inch / 12;
    let feetNumber = parseInt(feetFraction);
    let inchRemaining = inch % 12 ;
    let result = feetNumber + ' ft ' + inchRemaining + ' inch ';
    return result

}

let abulHeight = inchToFeet(75);
console.log(abulHeight);
