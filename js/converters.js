document.addEventListener('DOMContentLoaded', function() {
    const fromUnitSelect = document.getElementById('fromUnit');
    const toUnitSelect = document.getElementById('toUnit');
    const fromValueInput = document.getElementById('fromValue');
    const toValueInput = document.getElementById('toValue');
    const convertButton = document.getElementById('convertButton');

    // Basic unit options for Length and Weight
    const unitOptions = {
        "Length": {
            "Meters": 1,
            "Kilometers": 1000,
            "Centimeters": 0.01,
            "Feet": 0.3048,
            "Inches": 0.0254
        },
        "Weight": {
            "Kilograms": 1,
            "Grams": 0.001,
            "Pounds": 0.453592,
            "Ounces": 0.0283495
        }
    };

    // Populate the dropdown menus
    for (const category in unitOptions) {
        for (const unit in unitOptions[category]) {
            const option = document.createElement('option');
            option.value = unitOptions[category][unit]; // Store conversion factor
            option.text = `${category} - ${unit}`;
            fromUnitSelect.add(option.cloneNode(true));
            toUnitSelect.add(option);
        }
    }

    // Conversion logic
    convertButton.addEventListener('click', function() {
        const fromValue = parseFloat(fromValueInput.value);
        const fromUnit = parseFloat(fromUnitSelect.value);
        const toUnit = parseFloat(toUnitSelect.value);

        if (isNaN(fromValue)) {
            toValueInput.value = "Invalid input";
            return;
        }

        const result = (fromValue * fromUnit) / toUnit;
        toValueInput.value = result.toFixed(4);
    });
});
