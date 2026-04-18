document.getElementById('calcBtn').addEventListener('click', function() {
    // 1. Get input values
    const price = parseFloat(document.getElementById('carPrice').value);
    const downPayment = parseFloat(document.getElementById('downPayment').value);
    const annualRate = parseFloat(document.getElementById('interestRate').value);
    const months = parseInt(document.getElementById('loanTerm').value);

    // 2. Logic: Calculate loan principal and monthly interest
    const principal = price - downPayment;
    const monthlyRate = (annualRate / 100) / 12;

    // 3. The Math: Amortization Formula
    // Formula: P * [ r(1 + r)^n ] / [ (1 + r)^n – 1 ]
    const x = Math.pow(1 + monthlyRate, months);
    const monthlyPayment = (principal * x * monthlyRate) / (x - 1);

    // 4. Output the result
    const resultElement = document.getElementById('monthlyResult');
    
    if (isNaN(monthlyPayment) || monthlyPayment <= 0) {
        resultElement.innerText = "Please check your numbers!";
    } else {
        // .toLocaleString formatting adds the commas for a professional look
        resultElement.innerText = "$" + monthlyPayment.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
});