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

//Task 5: Loan Payment Calculation

/*
Uses the formula:
Total Payment = Principal + (Principal * Rate * Time)
*/

function calculateLoanPayment(principal, rate, time) {
  let totalPayment = principal + (principal * rate * time);
  console.log(`Total Payment: $${totalPayment.toFixed(2)}`);
}

// Test cases
calculateLoanPayment(1000, 0.05, 2); // Expected: Total Payment: $1100.00
calculateLoanPayment(5000, 0.07, 3); // Expected: Total Payment: $6050.00

//Task 6: Identifying Large Transactions (Higher-Order Functions)

/*
We are filtering out transactions above $1000 using a higher-order function.
We store an array of transactions.
We use the filter() function to get transactions greater than $1000.
*/

let transactions = [200, 1500, 3200, 800, 2500];

const filterLargeTransactions = (transactions, filterFunction) => transactions.filter(filterFunction);

// Test Case
console.log(filterLargeTransactions(transactions, amount => amount > 1000)); 
// Output: [1500, 3200, 2500]

//Task 7: Shopping Cart Tracker (Closures)

/*
We are creating a function that tracks the running total of a shopping cart.

We use closures to store the total cost inside an inner function.
Each time the inner function is called, the total increases.
*/

function createCartTracker() {
  let total = 0;
  return function(amount) {
      total += amount;
      return `Total Cart Value: $${total}`;
  };
}

// Test Cases
let cart = createCartTracker();
console.log(cart(20)); // "Total Cart Value: $20"
console.log(cart(35)); // "Total Cart Value: $55"

//Task 8: Savings Growth Projection (Recursion)

/*
We are predicting the growth of savings over time using recursion.

Each year, savings increase by 5%.
We use recursion to repeat this process until year 10.
*/

function calculateSavings(years, amount) {
  if (years === 10) return `Projected Savings: $${amount.toFixed(2)}`;
  return calculateSavings(years + 1, amount * 1.05);
}

// Test Cases
console.log(calculateSavings(8, 1000)); // "Projected Savings: $1102.50"
console.log(calculateSavings(5, 5000)); // "Projected Savings: $6381.41"


