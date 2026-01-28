/***

Generate a multiplication table for number 9

 */


// for loop
const j = 9;
for(let i = 1; i<= 10; i++ ){
    let mul = j * i;
    console.log(`${9} * ${i} = `,mul)
}


console.log('=============================')

// while loop

const a = 5 ;
let b = 1;
while(b <= 10){
    let c = a * b;
    console.log(`${a} * ${b} = `, c)
    b++;
}
