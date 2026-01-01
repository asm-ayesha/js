// Find the friend with the smallest name.

function findSmallName(names){
    let minLengthName = names[0];
    for(let name of names){
       if(minLengthName.length > name.length){
            minLengthName = name;
       }
    }

    return minLengthName;
}
const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const smallName = findSmallName(names);
console.log('Small name is: ',smallName)