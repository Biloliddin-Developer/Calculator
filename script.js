let ekran = document.querySelector('.input');
let C  = document.querySelector('.C');
let bracketOn = document.querySelector('.bracketOn');
let bracketOff = document.querySelector('.bracketOff');
let backspace = document.querySelector('.Backspace');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let zero = document.querySelector('.zero');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let equal = document.querySelector('.equal');
let factorial = document.querySelector('.factorial');
let kvadrat = document.querySelector('.kvadrat');
let stepen = document.querySelector('.stepen');
let tochka = document.querySelector('.tochka');
let plusMinus = document.querySelector('.plusMinus');
let history = document.querySelector('.history');
let clearHistory = document.querySelector('.clearHistory');

C.addEventListener('click', () => {
    ekran.value = '';
});
one.addEventListener('click', () => {
    ekran.value += '1';
});
two.addEventListener('click', () => {
    ekran.value += '2';
});
three.addEventListener('click', () => {
    ekran.value += '3';
});
four.addEventListener('click', () => {
    ekran.value += '4';
});
five.addEventListener('click', () => {
    ekran.value += '5';
});
six.addEventListener('click', () => {
    ekran.value += '6';
});
seven.addEventListener('click', () => {
    ekran.value += '7';
});
eight.addEventListener('click', () => {
    ekran.value += '8';
});
nine.addEventListener('click', () => {
    ekran.value += '9';
});
zero.addEventListener('click', () => {
    ekran.value += '0';
});
plus.addEventListener('click', () => {
    ekran.value += '+';
});
minus.addEventListener('click', () => {
    ekran.value += '-';
});
multiply.addEventListener('click', () => {
    ekran.value += '*';
});
divide.addEventListener('click', () => {
    ekran.value += '/';
});
bracketOn.addEventListener('click', () => {
    ekran.value += '(';
});
bracketOff.addEventListener('click', () => {
    ekran.value += ')';
});
backspace.addEventListener('click', () => {
    ekran.value = ekran.value.slice(0, -1);
});
equal.addEventListener('click', () => {
    try {
        let result = eval(ekran.value);
        history.innerHTML += `<div>${ekran.value} = ${result}</div>`;
        ekran.value = result;
    } catch (error) {
        ekran.value = 'Error';
    }
});
factorial.addEventListener('click', () => {
    let num = parseInt(ekran.value);
    if (isNaN(num) || num < 0) {
        ekran.value = 'Error';
        return;
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    ekran.value = result;
    history.innerHTML += `<div>${num}! = ${result}</div>`;
});
kvadrat.addEventListener('click', () => {
    let num = parseFloat(ekran.value);
    if (isNaN(num)) {
        ekran.value = 'Error';
        return;
    }
    let result = num * num;
    ekran.value = result;
    history.innerHTML += `<div>${num}^2 = ${result}</div>`;
});
stepen.addEventListener('click', () => {
    let base = parseFloat(ekran.value);
    let exponent = prompt('Enter exponent:');
    exponent = parseFloat(exponent);
    if (isNaN(base) || isNaN(exponent)) {
        ekran.value = 'Error';
        return;
    }
    let result = Math.pow(base, exponent);
    ekran.value = result;
    history.innerHTML += `<div>${base}^${exponent} = ${result}</div>`;
});
tochka.addEventListener('click', () => {
    if (!ekran.value.includes('.')) {
        ekran.value += '.';
    }
});
plusMinus.addEventListener('click', () => {
    if (ekran.value.startsWith('-')) {
        ekran.value = ekran.value.substring(1);
    } else {
        ekran.value = '-' + ekran.value;
    }
});
clearHistory.addEventListener('click', () => {
    history.innerHTML = '';
});