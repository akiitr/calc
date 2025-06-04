document.addEventListener('DOMContentLoaded', function() {
    const loanAmountInput = document.getElementById('loanAmount');
    const interestRateInput = document.getElementById('interestRate');
    const loanTermInput = document.getElementById('loanTerm');
    const calculateButton = document.getElementById('calculateLoan');
    const loanResultDiv = document.getElementById('loanResult');

    calculateButton.addEventListener('click', function() {
        const loanAmount = parseFloat(loanAmountInput.value);
        const annualInterestRate = parseFloat(interestRateInput.value);
        const loanTermYears = parseFloat(loanTermInput.value);

        if (isNaN(loanAmount) || isNaN(annualInterestRate) || isNaN(loanTermYears) ||
            loanAmount <= 0 || annualInterestRate < 0 || loanTermYears <= 0) {
            loanResultDiv.textContent = "Please enter valid loan details.";
            return;
        }

        const monthlyInterestRate = annualInterestRate / 100 / 12;
        const loanTermMonths = loanTermYears * 12;

        // Calculate monthly payment using the standard formula
        const monthlyPayment = (loanAmount * monthlyInterestRate) /
            (1 - Math.pow(1 + monthlyInterestRate, -loanTermMonths));

        const totalPayment = monthlyPayment * loanTermMonths;
        const totalInterest = totalPayment - loanAmount;

        // Format numbers as currency (Indian Rupees)
        const formatIndianCurrency = (amount) => {
            return new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }).format(amount);
        };

        loanResultDiv.innerHTML = `
            Monthly Payment: ${formatIndianCurrency(monthlyPayment)}<br>
            Total Payment: ${formatIndianCurrency(totalPayment)}<br>
            Total Interest: ${formatIndianCurrency(totalInterest)}
        `;
    });
});
