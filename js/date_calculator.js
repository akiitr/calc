document.addEventListener('DOMContentLoaded', function() {
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const calculateButton = document.getElementById('calculateDate');
    const dateResultDiv = document.getElementById('dateResult');

    // New elements for adding/subtracting days
    const dateInput = document.getElementById('dateInput');
    const daysInput = document.getElementById('daysInput');
    const addDaysButton = document.getElementById('addDays');
    const subtractDaysButton = document.getElementById('subtractDays');
    const modifyDateResultDiv = document.getElementById('modifyDateResult');

    // Calculate difference between two dates
    calculateButton.addEventListener('click', function() {
        const startDate = new Date(startDateInput.value);
        const endDate = new Date(endDateInput.value);

        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            dateResultDiv.textContent = "Please enter valid dates.";
            return;
        }

        const timeDiff = Math.abs(endDate - startDate);
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

        dateResultDiv.textContent = "Difference: " + daysDiff + " days";
    });

    // Add days to a date
    addDaysButton.addEventListener('click', function() {
        modifyDate(1); // 1 for addition
    });

    // Subtract days from a date
    subtractDaysButton.addEventListener('click', function() {
        modifyDate(-1); // -1 for subtraction
    });

    // Function to add or subtract days
    function modifyDate(multiplier) {
        const date = new Date(dateInput.value);
        const days = parseInt(daysInput.value);

        if (isNaN(date.getTime()) || isNaN(days)) {
            modifyDateResultDiv.textContent = "Please enter a valid date and number of days.";
            return;
        }

        date.setDate(date.getDate() + (days * multiplier));
        modifyDateResultDiv.textContent = "Modified Date: " + formatDate(date);
    }

    // Helper function to format date as YYYY-MM-DD
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
});
