const display = document.getElementById('display')
const buttons = document.querySelectorAll('button')

let currentInput = ''
let previousInput = ''
let operator = null

const calculateDisplay = (value) => {
    display.textContent = value
}
const calculate = (a, operator, b) => {
    a = parseFloat(a)
    b = parseFloat(b)

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

const handleDecimal = () => {
    if (!currentInput.includes('.')) {
        currentInput += '.'
        calculateDisplay(currentInput)
    }
}
const handleOperator = (value) => {
    if (!currentInput && !previousInput) return
    previousInput = currentInput || previousInput
    currentInput = ''
    operator = value
    calculateDisplay(operator)
}

const handleEquals = () => {
    if (previousInput && operator && currentInput) {
        const result = calculate(previousInput, operator, currentInput)
        calculateDisplay(result)
        previousInput = result
        currentInput = ''
        operator = null
    }
}

const handleClear = () => {
    currentInput = ''
    previousInput = ''
    operator = null
    calculateDisplay('0')
}

const handleBackspace = () => {
    currentInput = currentInput.slice(0, -1)
    calculateDisplay(currentInput)
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent

        if (button.classList.contains('operand'))
            handleOperand(value)
        else if (button.classList.contains('decimal'))
            handleDecimal()
        else if (button.classList.contains('operator') && !button.classList.contains('equals'))
            handleOperator(value)
        else if (button.classList.contains('equals'))
            handleEquals()
        else if (button.classList.contains('clear'))
            handleClear()
        else if (button.classList.contains('backspace'))
            handleBackspace()
    })
})
