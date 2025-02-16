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

//Task 2: Product Price After Discount

/*
A function expression named calculateDiscount computes the final price.
Formula:
Final Price = Price - (Price * Discount Rate)
*/

// Task 2: Product Price After Discount
const calculateDiscount = function(price, discountRate) {
  let finalPrice = price - (price * discountRate);
  console.log(`Final Price: $${finalPrice.toFixed(2)}`);
};

// Test cases
calculateDiscount(100, 0.2); // Expected: Final Price: $80.00
calculateDiscount(250, 0.15); // Expected: Final Price: $212.50
