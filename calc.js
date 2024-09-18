// Function to perform basic arithmetic operations
function calculate(operation) {
    // Get the values from the input fields and convert them to floating-point numbers
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    // Use a switch statement to perform the operation based on the user's input
    switch (operation) {
        case '+':
            // Addition
            result = num1 + num2;
            break;
        case '-':
            // Subtraction
            result = num1 - num2;
            break;
        case '*':
            // Multiplication
            result = num1 * num2;
            break;
        case '/':
            // Division, with a check to prevent division by zero
            if (num2 === 0) {
                result = 'Error (div by 0)'; // Show error message if dividing by 0
            } else {
                result = num1 / num2; // Perform division
            }
            break;
        default:
            // Handle invalid operation inputs
            result = 'Invalid Operation';
    }

    // Call displayResult to show the calculated result
    displayResult(result);
}

// Function to calculate the power (base raised to exponent)
function power() {
    // Get base and exponent values from input fields
    const base = parseFloat(document.getElementById('num1').value);
    const exponent = parseInt(document.getElementById('num2').value);
    let result = 1;

    // Loop to calculate base^exponent (power)
    for (let i = 0; i < exponent; i++) {
        result *= base; // Multiply result by base for each loop iteration
    }

    // Display the result in the UI
    displayResult(result);
}

// Function to clear the input fields and reset the result display
function clearResult() {
    // Clear the values of the input fields
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';

    // Clear the displayed result
    document.getElementById('result').innerHTML = '';
}

// Function to display the result and change the text color based on result value
function displayResult(result) {
    // Get the result display element
    const resultBox = document.getElementById('result');

    // Set the result as the inner HTML of the result box
    resultBox.innerHTML = result;

    // Change the color of the result text to red if the result is negative, otherwise black
    if (result < 0) {
        resultBox.style.color = 'red';
    } else {
        resultBox.style.color = 'black';
    }
}
