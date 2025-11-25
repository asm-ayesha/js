let names = ['abul', 'kabul', 'habul', 'dabul', 'bulbul']
let sortName = names.sort();
console.log(sortName)


//sort
// let numbers = [5,7,3,4,9,2,8,]

//Ascending ----> smaller to larger
// let numberAsc = numbers.sort()     //not working properly
let numbers = [25,7,43,4,9,2,28,]

let numberAsc = numbers.sort(function(a,b){return a-b}) 
console.log(numberAsc)


//Descending --> larger to smaller
let numberDsc = numbers.sort(function(a,b){return b-a}) 
console.log(numberDsc)


