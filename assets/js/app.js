
document.getElementById('enterButton').addEventListener('click', function() {
         const dropdown = document.getElementById('analysisDropdown');
        const selectedValue = dropdown.value;

            // Set the selected value in the input field
            document.getElementById('selectedOption').value = selectedValue;
        });
    