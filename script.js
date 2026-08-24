const guessInput = document.getElementById('guessInput');
const submitGuessBtn = document.getElementById('submitGuessBtn');
const playAgainBtn = document.getElementById('playAgainBtn');
const feedbackArea = document.getElementById('feedbackArea');
const radioEasy = document.getElementById('difficultyEasy');
const radioMedium = document.getElementById('difficultyMedium');
const radioHard = document.getElementById('difficultyHard');
const statAttempts = document.getElementById('statAttempts');
const statRemaining = document.getElementById('statRemaining');
const statScore = document.getElementById('statScore');
const statBestScore = document.getElementById('statBestScore');
const statStreak = document.getElementById('statStreak');
const statGamesPlayed = document.getElementById('statGamesPlayed');
const statGamesWon = document.getElementById('statGamesWon');
const statAccuracy = document.getElementById('statAccuracy');
const historyList = document.getElementById('historyList');
const historyEmpty = document.getElementById('historyEmpty');
const guessForm = document.getElementById('guessForm');


let gamesPlayed = 0;
let gamesWon = 0;
let winStreak = 0;
let bestScore = 0;

let score = 0;
let attempt = 0;
let remaining = 10;
let randomNumber;
let maxNumber;
let isGameOver = false;


function randomNumberGen(diffInt) {
    return Math.floor(Math.random() * diffInt + 1);
}

function startGame() {
    
    score = 0;
    attempt = 0;
    remaining = 10;
    isGameOver = false;

    
    if (radioEasy.checked) {
        maxNumber = 50;
    } else if (radioMedium.checked) {
        maxNumber = 100;
    } else if (radioHard.checked) {
        maxNumber = 200;
    }

    randomNumber = randomNumberGen(maxNumber);

    
    historyList.innerHTML = ''; 
    historyEmpty.style.display = 'block'; 
    
    
    feedbackArea.textContent = `Enter a number between 1 and ${maxNumber} to begin cracking the code.`;
    statRemaining.textContent = remaining;
    statScore.textContent = score;
    statAttempts.textContent = attempt;
    
    
    guessInput.disabled = false;
    submitGuessBtn.disabled = false;
    guessInput.value = '';
    guessInput.focus(); 
}

function checkGuess() {
    
    if (isGameOver) return;

    
    const rawInput = guessInput.value.trim();
    const guess = Number(rawInput);


    if (rawInput === '' || isNaN(guess) || guess < 1 || guess > maxNumber) {
        feedbackArea.textContent = `Invalid! Please enter a number between 1 and ${maxNumber}.`;
        guessInput.value = '';
        return;
    }

    
    historyEmpty.style.display = 'none';

    
    attempt += 1;
    remaining -= 1;
    statAttempts.textContent = attempt;
    statRemaining.textContent = remaining;

    
    let resultText = "";
    let resultClass = "";

    
    if (guess === randomNumber) {
    
        isGameOver = true;
        resultText = "Correct!";
        resultClass = "history-item--correct";
        
        feedbackArea.textContent = `W! You guessed the correct number. ${randomNumber} was the answer!`;
        
    
        score = remaining + 1;
        statScore.textContent = score;

        if (score > bestScore) {
            bestScore = score;
            statBestScore.textContent = bestScore;
        }

        winStreak += 1;
        gamesWon += 1;
        gamesPlayed += 1;

    } else if (remaining === 0) {
        
        isGameOver = true;
        resultText = guess > randomNumber ? "Too high" : "Too low";
        resultClass = guess > randomNumber ? "history-item--high" : "history-item--low";
        
        feedbackArea.textContent = `GAME OVER. ${randomNumber} was the answer. Play Again?`;
        
        winStreak = 0; 
        gamesPlayed += 1;

    } else if (guess > randomNumber) {
        
        resultText = "Too high";
        resultClass = "history-item--high";
        feedbackArea.textContent = `Too Big! Guess a little lower.`;

    } else if (guess < randomNumber) {
        
        resultText = "Too low";
        resultClass = "history-item--low";
        feedbackArea.textContent = `Too Small! Guess a little higher.`;
    }

    
    const historyItem = document.createElement('li');
    historyItem.className = `history-item ${resultClass}`;
    historyItem.textContent = `${guess} — ${resultText}`;
    historyList.prepend(historyItem);

    
    if (isGameOver) {
        guessInput.disabled = true;
        submitGuessBtn.disabled = true;

        statStreak.textContent = winStreak;
        statGamesPlayed.textContent = gamesPlayed;
        statGamesWon.textContent = gamesWon;
        
        
        const winRate = (gamesPlayed === 0) ? 0 : (gamesWon / gamesPlayed) * 100;
        statAccuracy.textContent = `${winRate.toFixed(2)}%`;
    }

    
    guessInput.value = '';
}


document.addEventListener('DOMContentLoaded', startGame);
playAgainBtn.addEventListener('click', startGame);

guessForm.addEventListener('submit', function(event) {
    event.preventDefault();
    checkGuess();
});