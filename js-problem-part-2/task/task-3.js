/**
*
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */


function calculateElectronicsBudget(laptopQnty, tabletQnty, mobileQunty){
    const perLaptopPrice = 35000;
    const perTabletPrice = 15000;
    const perMobilePrice = 20000;

    const laptopTotalPrice = perLaptopPrice * laptopQnty ;
    const tabletTotalPrice = perTabletPrice * tabletQnty ;
    const mobileTotalPrice = perMobilePrice * mobileQunty ;

    const totalMoney = laptopTotalPrice + tabletTotalPrice + mobileTotalPrice ;

    return totalMoney;

}

const totalMoney = calculateElectronicsBudget(1,1,1);
 console.log(totalMoney);