
const generateButton = document.getElementById('generate-button');
const numbersDisplay = document.getElementById('numbers-display');

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
