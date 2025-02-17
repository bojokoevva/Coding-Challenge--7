// Task 1 - Customer Invoice Calculation

function calculateInvoice(subtotal, taxRate, discount) {
    let taxAmount = subtotal * taxRate; // Calculate the tax amount
    let total = (subtotal + taxAmount) - discount; // Apply tax and subtract discount
    console.log(`Total Invoice: $${total.toFixed(2)}`); 
};

// Test Cases
calculateInvoice(100, 0.08, 5); // Expected: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected: "Total Invoice: $530.00"


// Task 2 - Employee Hourly Wage Calculation (Function Expression)

const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52); // Compute hourly rate
    console.log(`Hourly Wage: $${hourlyWage.toFixed(2)}`); // Log output instead of returning
};

// Test cases
calculateHourlyWage(52000, 40); // Expected: "Hourly Wage: $25.00"
calculateHourlyWage(75000, 35); // Expected: "Hourly Wage: $41.21"


// Task 3 - Customer Loyalty Discount (Arrow Function)

const calculateLoyaltyDiscount = (amount, years) => {
    let discount = 0;

// Determine the discount percentage based on years of loyalty
    if (years >= 5) {
        discount = 0.15;
    } else if (years >= 3) {
        discount = 0.10;
    } else {
        discount = 0.05;
    }
// Calculate the discounted price
    let discountedPrice = amount * (1 - discount);

// Print the final discounted price 
    console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
};

// Test Cases
calculateLoyaltyDiscount(100, 6); // Expected output: "Discounted Price: $85.00"
calculateLoyaltyDiscount(200, 2); // Expected output: "Discounted Price: $190.00"


// Task 4 - Product Shipping Cost Calculation

function calculateShippingCost(weight, location, expedited = false) {
    let baseCost;

// Determine base shipping cost based on the destination
    if (location === "USA") {
        baseCost = 5 + (0.5 * weight);
    } else {
        baseCost = 10 + (0.7 * weight);
    }

// Add an additional charge if expedited shipping is selected 
    if (expedited) {
        baseCost += 10;
    }

    console.log(`Shipping Cost: $${baseCost.toFixed(2)}`);
}

// Test cases
calculateShippingCost(10, "USA", true); // Expected: "Shipping Cost: $20.00"
calculateShippingCost(5, "Canada", false); // Expected: "Shipping Cost: $13.50"


// Task 5 - Business Loan Interest Calculation

function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years; // Compute total interest
    console.log(`Total Interest: $${interest.toFixed(2)}`); // Log output instead of returning
}

// Test cases
calculateLoanInterest(1000, 0.05, 3); // Expected: "Total Interest: $150.00"
calculateLoanInterest(5000, 0.07, 5); // Expected: "Total Interest: $1750.00"


// Task 6 - Filtering High-Value Transactions (Higher-Order Function)

let transactions = [500, 1200, 3000, 800, 2200]; // Example transaction amounts

function filterHighValueTransactions(transactions, filterFunction) {
    console.log(transactions.filter(filterFunction)); // Log filtered transactions
}

// Test case: Filter transactions greater than $1000
filterHighValueTransactions(transactions, amount => amount > 1000); // Expected output: [1200, 3000, 2200]


// Task 7 - Budget Tracker (Closure)

function createBudgetTracker() {
    let balance = 0; // Initialize balance to track expenses

    return function(expense) {
        balance -= expense; // Deduct expense from the balance
        console.log(`Current Balance: $${balance}`); // Log updated balance
    };
}

// Initialize budget tracker
let budget = createBudgetTracker();

// Test cases
budget(300); // Expected output: "Current Balance: -$300"
budget(200); // Expected output: "Current Balance: -$500"


// Task 8 - Business Growth Projection (Recursive Function)

function calculateGrowth(years, revenue) {
    if (years >= 10) {
        console.log(`Projected Revenue: $${revenue.toFixed(2)}`); // Log final revenue
        return;
    }

    revenue *= 1.05; // Increase revenue by 5%
    calculateGrowth(years + 1, revenue); // Recursive call with incremented year
}

// Test cases
calculateGrowth(8, 1000); // Expected output: "Projected Revenue: $1102.50"
calculateGrowth(5, 5000); // Expected output: "Projected Revenue: $6381.41"



