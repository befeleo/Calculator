const display = document.getElementById('display')
const buttons = document.querySelectorAll('.button')

let currentInput = ''
let previousInput = ''
let operator = null

const calculateDisplay = (value) => {
    display.textContent = value
}
const calculate = (a, operator, b) => {

    switch (operator) {
        case '+':
            return a + b
            break;
        case '-':
            return a - b
            break;
        case '*':
            return a * b
            break;
        case '/':
            if (b === 0)
                return "Error"
            return a / b
            break;
        default:
            break;
    }

}

