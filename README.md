# sharehold-manager

This app will allow you to add and remove shareholders, adjust their shares, and dynamically update their percentages.

HTML: The HTML structure contains a container with a div for shareholders and a button to add new shareholders.
CSS: The CSS styles the elements to look clean and organized.
JavaScript:
When the DOM content is loaded, the JavaScript initializes.
calculatePercentages function calculates and updates the percentages of shares for each shareholder.
createShareholder function creates a new shareholder input box with a delete button.
Event listeners are added to the input fields and buttons to handle dynamic changes.

Explanation of Each Section
DOM Content Loaded Event Listener:

Ensures that the code runs only after the DOM is fully loaded.
Get References to DOM Elements:

initialPercentageSpan: To display the initial percentage of total shares.
totalSharesInput: Input field to enter the total shares.
shareholdersDiv: Container for dynamically added shareholder elements.
addShareholderBtn: Button to add new shareholders.
updateInitialPercentage Function:

Gets the total shares value from the input field.
Updates the text content to display "100% of [totalShares] shares".
Calls calculatePercentages to update the percentages of all shareholders.
calculatePercentages Function:

Gets the total shares value.
Collects all shareholder input elements.
Calculates the total assigned shares by summing up the values of all input fields.
Calculates and updates the percentage for each shareholder based on their assigned shares and the total assigned shares.
createShareholder Function:

Creates a new div element for the shareholder.
Adds an input field for the number of shares.
Adds a div to display the percentage.
Adds a delete button to remove the shareholder.
Appends these elements to the shareholder div.
Appends the shareholder div to the shareholders container.
Event Listeners:

Updates the initial percentage when the total shares input changes.
Creates a new shareholder when the "Add Shareholder" button is clicked.
Initial Call to updateInitialPercentage:

Sets up the percentage display based on the default total shares value when the page first loads.
