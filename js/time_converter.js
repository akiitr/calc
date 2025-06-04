document.addEventListener('DOMContentLoaded', function() {
    const timeInput = document.getElementById('timeInput');
    const fromZoneSelect = document.getElementById('fromZone');
    const toZoneSelect = document.getElementById('toZone');
    const convertButton = document.getElementById('convertTime');
    const timeResultDiv = document.getElementById('timeResult');

    // Populate time zone dropdowns from utils.js
    for (const zone in timeZones) {
        const option = document.createElement('option');
        option.value = timeZones[zone]; // Store offset as value
        option.text = zone;
        fromZoneSelect.add(option.cloneNode(true));
        toZoneSelect.add(option);
    }

    // Conversion logic
    convertButton.addEventListener('click', function() {
        const time = new Date(timeInput.value);
        const fromOffset = parseFloat(fromZoneSelect.value);
        const toOffset = parseFloat(toZoneSelect.value);

        if (isNaN(time.getTime())) {
            timeResultDiv.textContent = "Please enter a valid date and time.";
            return;
        }

        // Perform time zone conversion
        const utcTime = new Date(time.getTime() + (fromOffset * 3600000));
        const convertedTime = new Date(utcTime.getTime() - (toOffset * 3600000));

        // Format the converted time for display (YYYY-MM-DD HH:mm:ss)
        const formattedTime = convertedTime.toISOString().slice(0, 19).replace('T', ' ');

        timeResultDiv.textContent = "Converted Time: " + formattedTime;
    });
});
