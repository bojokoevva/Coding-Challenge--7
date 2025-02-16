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
