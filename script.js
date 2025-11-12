const display = document.getElementById('display')
const buttons = document.querySelectorAll('button')

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

const handleOperand = (value) => {
    currentInput += value
    calculateDisplay(currentInput)
}

const handleOperator = (value) => {
    previousInput = currentInput
    currentInput = ''
    operator = value
    calculateDisplay(operator)
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent

        if (button.classList.contains('operand'))
            handleOperand(value)
        else if (button.classList.contains('operator'))
            handleOperator(value)
    })
})
