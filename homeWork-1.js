/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burger = 300;
// burger > 500 ? console.log("Free coke") : console.log("coke 30tk");
if (burger > 500) {
    console.log("Free coke")
}
else {
    console.log("coke 30tk")
}



/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

let weight = 66;
let height = 1.76;
let bmi = weight / (height * height)
if (bmi < 18.5) {
    console.log("you are underweight")
}
else {
    if (bmi >= 18.5 && bmi <= 24.9) {
        console.log("you are normal")
    }
    else {
        if (bmi >= 25 && bmi <= 29.9) {
            console.log("you are overweight")
        }
        else {
            console.log("you are obese")
        }
    }
}


/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let mark = 10;
if (mark >= 90) {
    console.log("A")
}

else if (mark >= 80) {
    console.log("B")
}

else if (mark >= 70) {
    console.log("c")
}

else if (mark >= 60) {
    console.log("D")
}

else{
    console.log("F")
}


/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let score = 20;
let friend = 30;


if (score > 80) {
    if (friend > 80) {
        console.log("go for a lunch")
    }
    else if(friend < 80 && friend >= 60){
        console.log("good luck next time")
    }
    else if(friend < 60 && friend >= 40){
        console.log("keep your friend's message unseen")
    }
    else if(friend < 40){
        console.log("block your friend")
    }

}

else{
    console.log("go to home and sleep and act sad")
}

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

let num1 = 8 ;
let num2 = 20 ;
let result;
// if(num1 > num2){
//      result = num1 *2
//      console.log(result)
    
// }
// else{
//     result = num1 + num2
//     console.log(result)
// }

// ternary operator
num1 > num2 ? result = num1 *2  : result = num1 + num2 ;

console.log(result)


/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 20;
if(age < 10){
    console.log("Children for free")
}
else if(age >= 10 && age < 25 ){
    console.log("Student get a 50% discount")
}
else if(age >= 60){
    console.log("Senior citizens gets a 15% Discount")
}
else{
    console.log("Otherwise Regular ticket fare 800 tk")
}



