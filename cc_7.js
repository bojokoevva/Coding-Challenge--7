// Task 1 - Customer Invoice Calculation

function calculateInvoice(subtotal, taxRate, discount) {
    let taxAmount = subtotal * taxRate; // Calculate the tax amount
    let total = (subtotal + taxAmount) - discount; // Apply tax and subtract discount
    console.log(`Total Invoice: $${total.toFixed(2)}`); 
};

// Test Cases
calculateInvoice(100, 0.08, 5); // Expected: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected: "Total Invoice: $530.00"
