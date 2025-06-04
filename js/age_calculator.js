document.addEventListener('DOMContentLoaded', function() {
    const birthdateInput = document.getElementById('birthdate');
    const calculateButton = document.getElementById('calculateAge');
    const ageResultDiv = document.getElementById('ageResult');

    calculateButton.addEventListener('click', function() {
        const birthdate = new Date(birthdateInput.value);
        const today = new Date();

        if (isNaN(birthdate.getTime())) {
            ageResultDiv.textContent = "Please enter a valid birthdate.";
            return;
        }

        let age = today.getFullYear() - birthdate.getFullYear();
        const monthDiff = today.getMonth() - birthdate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }

        ageResultDiv.textContent = "Your age is: " + age;
    });
});
// Logic for the age calculator
console.log("age_calculator.js loaded");