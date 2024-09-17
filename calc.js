function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = 'Error (div by 0)';
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = 'Invalid Operation';
    }

    displayResult(result);
}

function power() {
    const base = parseFloat(document.getElementById('num1').value);
    const exponent = parseInt(document.getElementById('num2').value);
    let result = 1;

    for (let i = 0; i < exponent; i++) {
        result *= base;
    }

    displayResult(result);
}

function clearResult() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').innerHTML = '';
}

function displayResult(result) {
    const resultBox = document.getElementById('result');
    resultBox.innerHTML = result;

    if (result < 0) {
        resultBox.style.color = 'red';
    } else {
        resultBox.style.color = 'black';
    }
}
