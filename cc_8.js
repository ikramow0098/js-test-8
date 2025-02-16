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

//Task 3: Service Fee Calculation

/*
An arrow function calculateServiceFee:
Accepts amount and serviceType.
Charges 15% for Premium, 10% for Standard, 5% for Basic.
*/

// Task 3: Service Fee Calculation
const calculateServiceFee = (amount, serviceType) => {
  let feeRate = serviceType === "Premium" ? 0.15 :
                serviceType === "Standard" ? 0.10 : 0.05;
  let fee = amount * feeRate;
  console.log(`Service Fee: $${fee.toFixed(2)}`);
};

// Test cases
calculateServiceFee(200, "Premium"); // Expected: Service Fee: $30.00
calculateServiceFee(500, "Standard"); // Expected: Service Fee: $50.00

//Task 4: Car Rental Cost Calculation

/*
The function calculates car rental cost.
Charges:
$40/day (Economy)
$60/day (Standard)
$100/day (Luxury)
Insurance adds $20/day.
*/

function calculateRentalCost(days, carType, insurance = false) {
  let rates = { "Economy": 40, "Standard": 60, "Luxury": 100 };
  let cost = days * rates[carType] + (insurance ? days * 20 : 0);
  console.log(`Total Rental Cost: $${cost}`);
}

// Test cases
calculateRentalCost(3, "Economy", true);  // Expected: Total Rental Cost: $180
calculateRentalCost(5, "Luxury", false);  // Expected: Total Rental Cost: $500
