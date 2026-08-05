function randomNumberGen(diffInt) 
{
    return Math.floor(Math.random() * diffInt + 1);
}


let attempt;
let randomNumber;
let guess;
let remaining;
let score = 0;


function startGame()
{
    attempt = 0;
    remaining = 10;
    
    
    document.getElementById('statRemaining').innerHTML = remaining;
    document.getElementById('statScore').innerHTML = score;
    document.getElementById('guessInput').innerHTML = '';
    document.getElementById ('guessInput').disabled = false;
    document.getElementById ('submitGuessBtn').disabled = false;
    document.getElementById('guessInput').value = '';


    let difficultyEasy = document.getElementById('difficultyEasy').checked;
    let difficultyMedium = document.getElementById('difficultyMedium').checked;
    let difficultyHard = document.getElementById('difficultyHard').checked;
    

    if (difficultyEasy)
    {
        randomNumber = randomNumberGen(50);
    }

    else if (difficultyMedium)
    {
        randomNumber = randomNumberGen(100);
    }

    else if (difficultyHard)
    {
        randomNumber = randomNumberGen(200);
    }

    document.getElementById('statAttempts').innerHTML = '0';

    console.log(randomNumber);
}


function checkGuess()
{
    

    guess = document.getElementById('guessInput').value;
    guess = Number(guess);
    
    document.getElementById('statAttempts').innerHTML = attempt +=1;

    document.getElementById('statRemaining').innerHTML = remaining -=1; 
    
    
    if (guess === randomNumber )
    {
        document.getElementById('feedbackArea').innerHTML = `W! You guessed the correct Number. ${randomNumber} was the Random Number`;

        document.getElementById ('guessInput').disabled = true;

        document.getElementById ('submitGuessBtn').disabled = true;

        score = score+remaining+1;

        document.getElementById('statScore').innerHTML = score;


    }
    
    else if (remaining === 0)
    {
        document.getElementById('feedbackArea').innerHTML = `GAME OVER. ${randomNumber} was the Random Number. Play Again?`;

        document.getElementById ('guessInput').disabled = true;

        document.getElementById ('submitGuessBtn').disabled = true;
    
    }

    else if (guess > randomNumber )
    {
        document.getElementById('feedbackArea').innerHTML = `Too Bigggggg. You are of by alot`;
    }

    else if (guess < randomNumber)
    {
        document.getElementById('feedbackArea').innerHTML = `Too Small. Guess a lil higher`;
    }

 

}

document.addEventListener ('DOMContentLoaded', startGame);

const playAgainBtn = document.getElementById('playAgainBtn');
playAgainBtn.addEventListener('click' , startGame);

const myForm = document.getElementById('guessForm');

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    checkGuess ();
});

