// if the text bracket is below 
//for the first  npr.50000 -> 1%
// for the next  npr. 50000  -> 15%
//for the next npr. 70000 -> 25%
//for the next npr. 100000 -> 30%
// for any amount above  -> 36%

// monthly salary = 115250
// yearly salary = 1383000
// salary /monthly = 301416
// yearly / salary = 3617000



const emp = {
    name: "user one",
    salary: 10000

}

let yearlyTax = 0;
if (emp.salary <= 50000) {
    yearlyTax = salary * 1 / 100;
} else {
    if (emp.salary <= 100000) {
        yearlyTax = 50000 * 1 / 100 + (emp.salary - 50000) * 15 / 100;
    } else {
        if (emp.salary <= 170000) {
            yearlyTax = 50000 * 1 / 100 + 50000 * 15 / 100 + (emp.salary - 100000) * 25 / 100;
        } else {
            if (emp.salary <= 270000) {
                yearlyTax = 50000 * 1 / 100 + 50000 * 15 / 100 + 70000 * 25 / 100 + (emp.salary - 170000) * 30 / 100;
            } else {
                yearlyTax = 50000 * 1 / 100 + 50000 * 15 / 100 + 70000 * 25 / 100 + 100000 * 30 / 100 + (emp.salary - 270000) * 36 / 100;
            }
        }
    }
}

console.log(yearlyTax / 12);