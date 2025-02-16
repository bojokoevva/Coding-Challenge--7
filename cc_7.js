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
