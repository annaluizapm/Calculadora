// seleciona o display da calculadora
const display = document.getElementById('display');

// adiciona um caractere ao display
function appendCharacter(char) {
    if (display.innerText === '0') {
        display.innerText = char;
    } else {
        display.innerText += char;
    }
}

// limpa o display
function clearDisplay() {
    display.innerText = '0';
}

// calcula e exibe o resultado
function calculateResult() {
    // usa eval para avaliar a expressão no display
    display.innerText = eval(display.innerText);
}
