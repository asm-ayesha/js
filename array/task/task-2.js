// the even numbers from an array using any looping technique.
let numbers = [12, 98, 5, 41, 23, 78, 46];
// console.log(numbers)
let number_ary = [];
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number % 2 === 0) {
        number_ary.push(number)
        
    }
}

console.log(number_ary)
