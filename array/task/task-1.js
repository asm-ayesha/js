//  reverse the array colors without using the reverse method

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let rev_color= [];
for(let i = colors.length -1; i>= 0; i--){
   let color = colors[i];
   rev_color.push(color)
   
}
console.log(rev_color)
