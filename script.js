const display = document.getElementById('display')
const buttons = document.querySelectorAll('button')

// Initial Values
let currentInput = ''
let previousInput = ''
let operator = null

// Display
const updateDisplay = (value) => {
    display.textContent = value
}

// Methods
const calculate = (a, operator, b) => {
    a = parseFloat(a)
    b = parseFloat(b)

    switch (operator) {
        case '+':
            return parseFloat((a + b).toFixed(2))
        case '-':
            return parseFloat((a - b).toFixed(2))
        case '*':
            return parseFloat((a * b).toFixed(2))
        case '/':
            if (b === 0) return "Error"
            return parseFloat((a / b).toFixed(2))
        default:
            return ''
    }
}

const handleOperand = (value) => {
    currentInput += value
    updateDisplay(currentInput)
}

const handleDecimal = () => {
    if (!currentInput.includes('.')) {
        currentInput += currentInput ? '.' : '0.'
        updateDisplay(currentInput)
    }
}

const handleOperator = (value) => {
    if (!currentInput && !previousInput) return
    if (previousInput && operator && currentInput) {
        const result = calculate(previousInput, operator, currentInput)
        previousInput = result
        updateDisplay(previousInput)
        currentInput = ''
    }
    else {
        previousInput = currentInput || previousInput
        currentInput = ''
    }
    operator = value
}

const handleEquals = () => {
    if (previousInput && operator && currentInput) {
        const result = calculate(previousInput, operator, currentInput)
        updateDisplay(result)
        previousInput = result.toString()
        currentInput = ''
        operator = null
    }
}

const handleClear = () => {
    currentInput = ''
    previousInput = ''
    operator = null
    updateDisplay('0')
}

const handleBackspace = () => {
    if (currentInput) {
        currentInput = currentInput.slice(0, -1)
        updateDisplay(currentInput || '0')
    } else if (previousInput && !operator) {
        previousInput = previousInput.slice(0, -1)
        updateDisplay(previousInput || '0')
    }
}

// Button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent

        if (button.classList.contains('operand'))
            handleOperand(value)
        else if (button.classList.contains('decimal'))
            handleDecimal()
        else if (button.classList.contains('operator'))
            handleOperator(value)
        else if (button.classList.contains('equals'))
            handleEquals()
        else if (button.classList.contains('clear'))
            handleClear()
        else if (button.classList.contains('backspace'))
            handleBackspace()
    })
})

// Keyboard 
document.addEventListener('keydown', (e) => {
    const key = e.key

    if (key >= '0' && key <= '9')
        handleOperand(key)
    else if (key === '.')
        handleDecimal()
    else if (key === '+' || key === '-' || key === '*' || key === '/')
        handleOperator(key)
    else if (key === 'Enter' || key === '=')
        handleEquals()
    else if (key === 'Delete' || key === 'Escape')
        handleClear()
    else if (key === 'Backspace')
        handleBackspace()
})