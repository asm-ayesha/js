function noDuplicate(array){
    let unique = [];
    for(let item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique ;
}

let biriyanikhor = ['abul', 'babul', 'abul', 'kabul', 'cabul', 'babul', 'dabul', 'kabul']
let uniqueArray = noDuplicate(biriyanikhor);
console.log(uniqueArray)