document.addEventListener('DOMContentLoaded', function() {
    const amountInput = document.getElementById('amount');
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const convertButton = document.getElementById('convertCurrency');
    const currencyResultDiv = document.getElementById('currencyResult');

    // Placeholder for currency data (replace with API call in real app)
    const currencies = {
        "USD": 1,       // Base currency
        "EUR": 0.93,    // Example rate (as of Nov 2024)
        "GBP": 0.80,    // Example rate
        "JPY": 150.00,  // Example rate
        "INR": 83.00    // Example rate
    };

    // Populate currency dropdowns
    for (const code in currencies) {
        const option = document.createElement('option');
        option.value = code;
        option.text = code;
        fromCurrencySelect.add(option.cloneNode(true));
        toCurrencySelect.add(option);
    }

    // Conversion logic
    convertButton.addEventListener('click', function() {
        const amount = parseFloat(amountInput.value);
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;

        if (isNaN(amount) || !currencies[fromCurrency] || !currencies[toCurrency]) {
            currencyResultDiv.textContent = "Please enter a valid amount and select valid currencies.";
            return;
        }

        // Convert to base currency (USD) first, then to the target currency
        const amountInUSD = amount / currencies[fromCurrency];
        const convertedAmount = amountInUSD * currencies[toCurrency];

        currencyResultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    });
});
