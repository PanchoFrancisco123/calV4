// Variables para la calculadora
let display = document.getElementById('display');
let calculator = document.getElementById('calculator');
let primesView = document.getElementById('primesView');
let primeDisplay = document.getElementById('primeDisplay');
let currentPrime = 2;
let primeIndex = 0;

// Función para agregar valores al display
function appendValue(value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

// Función para limpiar el display
function clearDisplay() {
    display.textContent = '0';
}

// Función para calcular la expresión
function calculate() {
    try {
        display.textContent = eval(display.textContent) || '0';
    } catch {
        display.textContent = 'Error';
    }
}

// Función para mostrar/ocultar la vista de números primos
document.getElementById('primesButton').addEventListener('click', function () {
    calculator.style.display = 'none';
    primesView.style.display = 'block';
});

// Función para navegar por los números primos
function navigatePrimes(event) {
    if (event.button === 0) { // Click izquierdo
        primeIndex++;
    } else if (event.button === 2) { // Click derecho
        primeIndex = Math.max(primeIndex - 1, 0);
    }

    // Calcular el siguiente número primo
    currentPrime = getNextPrime(currentPrime, primeIndex);
    primeDisplay.textContent = currentPrime;
}

// Generar el siguiente número primo
function getNextPrime(lastPrime, index) {
    let count = 0;
    let num = lastPrime;
    while (count <= index) {
        num++;
        if (isPrime(num)) {
            count++;
        }
    }
    return num;
}

// Verificar si un número es primo
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Evitar el menú contextual en la vista de primos
primesView.addEventListener('contextmenu', event => event.preventDefault());
