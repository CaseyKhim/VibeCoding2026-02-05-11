
const generateButton = document.getElementById('generate-button');
const numbersDisplay = document.getElementById('numbers-display');
const themeToggleButton = document.getElementById('theme-toggle');

// Theme logic
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme);
}

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    let theme = 'light-mode'; // Default to light
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark-mode';
    }
    localStorage.setItem('theme', theme);
});

generateButton.addEventListener('click', () => {
    generateTotoNumbers();
});

function generateTotoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 49) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    displayNumbers(sortedNumbers);
}

function displayNumbers(numbers) {
    numbersDisplay.innerHTML = '';
    for (const number of numbers) {
        const numberElement = document.createElement('div');
        numberElement.classList.add('number');
        numberElement.textContent = number;
        numbersDisplay.appendChild(numberElement);
    }
}
