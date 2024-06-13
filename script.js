// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Get references to necessary DOM elements
    const initialPercentageSpan = document.getElementById('initialPercentage');
    const totalSharesInput = document.getElementById('totalShares');
    const shareholdersDiv = document.getElementById('shareholders');
    const addShareholderBtn = document.getElementById('addShareholderBtn');

    // Function to update the initial percentage display based on total shares input
    function updateInitialPercentage() {
        const totalShares = Number(totalSharesInput.value); // Get total shares value
        initialPercentageSpan.textContent = `100% of ${totalShares} shares`; // Update text content
        calculatePercentages(); // Recalculate percentages for all shareholders
    }

    // Function to calculate and update percentages for each shareholder
    function calculatePercentages() {
        const totalShares = Number(totalSharesInput.value); // Get total shares value
        const shareholderInputs = document.querySelectorAll('.shareholder input'); // Get all shareholder input elements
        const totalAssignedShares = Array.from(shareholderInputs).reduce((sum, input) => sum + Number(input.value), 0); // Calculate the total assigned shares
        
        // Update the percentage display for each shareholder
        shareholderInputs.forEach(input => {
            const percentage = totalAssignedShares > 0 ? (Number(input.value) / totalAssignedShares) * 100 : 0; // Calculate the percentage
            input.nextElementSibling.textContent = `${percentage.toFixed(2)}%`; // Update the next sibling element (percentage display)
        });
    }

    // Function to create and add a new shareholder input field
    function createShareholder() {
        const shareholderDiv = document.createElement('div'); // Create a new div element for the shareholder
        shareholderDiv.classList.add('shareholder'); // Add 'shareholder' class to the div
        
        const input = document.createElement('input'); // Create an input element for the number of shares
        input.type = 'number'; // Set the input type to 'number'
        input.value = '0'; // Set the default value to '0'
        input.addEventListener('input', calculatePercentages); // Add event listener to recalculate percentages on input change
        
        const percentageDiv = document.createElement('div'); // Create a div element to display the percentage
        percentageDiv.classList.add('percentage'); // Add 'percentage' class to the div
        percentageDiv.textContent = '0%'; // Set the default text content to '0%'
        
        const deleteBtn = document.createElement('button'); // Create a button element for deletion
        deleteBtn.classList.add('delete-btn'); // Add 'delete-btn' class to the button
        deleteBtn.textContent = 'Delete'; // Set the button text to 'Delete'
        deleteBtn.addEventListener('click', () => {
            shareholderDiv.remove(); // Remove the shareholder div on click
            calculatePercentages(); // Recalculate percentages after deletion
        });
        
        // Append the input, percentage display, and delete button to the shareholder div
        shareholderDiv.appendChild(input);
        shareholderDiv.appendChild(percentageDiv);
        shareholderDiv.appendChild(deleteBtn);
        
        // Append the shareholder div to the shareholders container
        shareholdersDiv.appendChild(shareholderDiv);
    }

    // Add event listener to update the initial percentage when the total shares input changes
    totalSharesInput.addEventListener('input', updateInitialPercentage);

    // Add event listener to create a new shareholder when the 'Add Shareholder' button is clicked
    addShareholderBtn.addEventListener('click', createShareholder);

    // Initial call to set up the percentage display based on the default total shares value
    updateInitialPercentage();
});




