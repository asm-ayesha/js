/**
 * Ternary --> three parts
 * 
 * condition ? do something when true : do something when false
 */

// simple ternary
// const age = 10;
// age >= 18 ? console.log("vote dio") : console.log("ghumai thako")


let price = 300 ;
const isLeader = true;

if(isLeader == true){
    price =0;

}
else{
    price += 100;
}
console.log(price)


// price = isLeader === true ? 0 : price + 100;