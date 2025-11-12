const display = document.getElementById('display')
const buttons = document.querySelectorAll('.button')

let currentInput = ''
let previousInput = ''
let operator = null

const calculateDisplay = (value) => {
    display.textContent = value
}

