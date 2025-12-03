/**
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> 50 cft
 */

function woodQuantity(chairQnty, tableQnty, bedQnty){
    let perChairWood = 3;
    let perTableWood = 10;
    let perBedWood = 50;

    let chairTotalWood = chairQnty * perChairWood ;
    let tableTotalWood = tableQnty * perTableWood ;
    let bedTotalWood = bedQnty * perBedWood ;

    let totalWood = chairTotalWood + tableTotalWood + bedTotalWood ;

    return totalWood;
}

let wood = woodQuantity(5,2,3);
console.log('total wood:', wood);


/**
 * shirt price --> 300
 * pan price --> 300
 * shoe price --> 900
 */

function clothesQuantity(shirtQnty, pantQnty, shoeQnty){
    let perShirtPrice = 300 ;
    let perPantPrice = 300 ;
    let perShoePrice = 900 ;


    let shirtTotalPrice = perShirtPrice * shirtQnty ;
    let pantTotalPrice = perPantPrice * pantQnty ;
    let shoeTotalPrice = perShoePrice * shirtQnty ;

    let totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice ;

    return totalPrice;
}

let price = clothesQuantity(1,1,1);
console.log('price is: ',price)