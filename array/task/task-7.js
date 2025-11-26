// Given a 2D array, update the value at second row first item to 99 and print the updated array.

let ary =[
  [1, 2],
  [3, 4],
  [5, 6]
]

let copy = ary.slice()
console.log(copy)
copy[1][0]=99;

console.log(copy)
