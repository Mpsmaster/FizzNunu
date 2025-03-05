document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const nextButton = document.getElementById('next-button');
    const restartButton = document.getElementById('restart-button');
    const instructions = document.getElementById('instructions');
    const game = document.getElementById('game');
    const completion = document.getElementById('completion');
    const numberDisplay = document.getElementById('number-display');
    const stopwatchDisplay = document.getElementById('stopwatch');
    const timeTakenDisplay = document.getElementById('time-taken');

    let currentNumber = 1;
    let startTime;
    let stopwatchInterval;

    startButton.addEventListener('click', startGame);
    nextButton.addEventListener('click', nextNumber);
    restartButton.addEventListener('click', restartGame);

    function startGame() {
        instructions.style.display = 'none';
        game.style.display = 'block';
        currentNumber = 1;
        startTime = Date.now();
        updateStopwatch();
        stopwatchInterval = setInterval(updateStopwatch, 100);
        displayNumber();
    }

    function nextNumber() {
        if (currentNumber < 100) {
            currentNumber++;
            displayNumber();
        } else {
            endGame();
        }
    }

    function displayNumber() {
        let output;
        if (currentNumber % 2 === 0 && currentNumber % 3 === 0) {
            output = 'FizzNunu';
        } else if (currentNumber % 3 === 0) {
            output = 'Nunu';
        } else if (currentNumber % 2 === 0) {
            output = 'Fizz';
        } else {
            output = currentNumber;
        }
        numberDisplay.textContent = output;
        numberDisplay.classList.add('fade-in');
        setTimeout(() => {
            numberDisplay.classList.remove('fade-in');
        }, 500);
    }

    function updateStopwatch() {
        const elapsedTime = (Date.now() - startTime) / 1000;
        stopwatchDisplay.textContent = `Tempo decorrido: ${elapsedTime.toFixed(2)} segundos`;
    }

    function endGame() {
        clearInterval(stopwatchInterval);
        const elapsedTime = (Date.now() - startTime) / 1000;
        timeTakenDisplay.textContent = `Você completou o jogo em ${elapsedTime.toFixed(2)} segundos!`;
        game.style.display = 'none';
        completion.style.display = 'block';
    }

    function restartGame() {
        completion.style.display = 'none';
        instructions.style.display = 'block';
    }
});
