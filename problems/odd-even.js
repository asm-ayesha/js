/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

// for loop

for (let i = 61; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log('the odd numbers is: ', i);
    }

}

console.log('===========================================')

// while loop
let num = 78;
while (num <= 100) {
    if (num % 2 === 0) {
        console.log('the even number is: ', num);
    }
    num++;

}