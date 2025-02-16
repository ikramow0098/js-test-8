//Task 1: Employee Salary Calculation (Function Declaration)

/*
We need to calculate an employee's net salary after applying a tax rate. This function will take three parameters:

baseSalary – The employee's base pay.
bonus – Additional payment received.
taxRate – The percentage of the base salary deducted as tax.
*/

function calculateSalary(baseSalary, bonus, taxRate) {
  let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
  return `Net Salary: $${netSalary.toFixed(2)}`;
}

// Test Cases
console.log(calculateSalary(5000, 500, 0.1)); // "Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15)); // "Net Salary: $6950.00"
