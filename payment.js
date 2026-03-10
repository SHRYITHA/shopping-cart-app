module.exports = { validatePayment };
function validatePayment(method) {
    if (method === "Credit Card" || method === "PayPal") {
        console.log("Payment validated successfully with " + method + ".");
    } else {
        console.log("Payment method is not supported.");
    }
}

module.exports = { validatePayment };