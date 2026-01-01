function multiplyYearlySalary(employees){
    let totalEmployeeSalary = 0;
    for(let employee of employees){
        const totalIncrement = employee.increment * employee.experience;
        const currentSalary = employee.starting + totalIncrement;
   
        totalEmployeeSalary += currentSalary;
    }

    return totalEmployeeSalary

}

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
const provideTotalSalary = multiplyYearlySalary(employees);
console.log(provideTotalSalary)




