function calculatePercentage() {
    const part = parseFloat(document.getElementById('part').value);
    const total = parseFloat(document.getElementById('total').value);
    const resultDiv = document.getElementById('percentageResult');

    if (isNaN(part) || isNaN(total) || total === 0) {
        resultDiv.textContent = "Invalid input";
        return;
    }

    const percentage = (part / total) * 100;
    resultDiv.textContent = "Percentage: " + percentage.toFixed(2) + "%";
}

function calculateValue() {
    const percentage = parseFloat(document.getElementById('percentage').value);
    const ofValue = parseFloat(document.getElementById('ofValue').value);
    const resultDiv = document.getElementById('valueResult');

    if (isNaN(percentage) || isNaN(ofValue)) {
        resultDiv.textContent = "Invalid input";
        return;
    }

    const value = (percentage / 100) * ofValue;
    resultDiv.textContent = "Value: " + value.toFixed(2);
}

function calculateChange() {
    const initialValue = parseFloat(document.getElementById('initialValue').value);
    const finalValue = parseFloat(document.getElementById('finalValue').value);
    const resultDiv = document.getElementById('changeResult');

    if (isNaN(initialValue) || isNaN(finalValue)) {
        resultDiv.textContent = "Invalid input";
        return;
    }

    const change = ((finalValue - initialValue) / initialValue) * 100;
    resultDiv.textContent = "Percentage Change: " + change.toFixed(2) + "%";
}
