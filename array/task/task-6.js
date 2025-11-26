// Given an array of student objects, print each student’s name and marks.

let info = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
  {name: 'tom', marks: 60}
]

// console.log(info[0].name, 'scored ',info[0].marks)
// console.log(info[1].name, 'scored ',info[1].marks)

for(let i=0; i<info.length; i++){
    console.log(info[i].name, 'scored ',info[i].marks)
}
