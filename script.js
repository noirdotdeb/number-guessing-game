function randomNumberGen(diffInt) 
{
    return Math.floor(Math.random() * diffInt + 1);
}


let score;
let guess;
let attempt;
let remaining;
let gamesWon = 0;
let randomNumber;
let winStreak = 0;
let bestScore = 0;
let difficultyEasy;
let difficultyHard;
let gamesPlayed = 0;
let difficultyMedium;

function startGame()
{
    score = 0;
    attempt = 0;
    remaining = 10;

    difficultyEasy = document.getElementById('difficultyEasy').checked;
    difficultyMedium = document.getElementById('difficultyMedium').checked;
    difficultyHard = document.getElementById('difficultyHard').checked;
    
    document.getElementById('feedbackArea').innerHTML = 'Enter a number to begin cracking the code.';
    document.getElementById('statRemaining').innerHTML = remaining;
    document.getElementById('statScore').innerHTML = score;
    document.getElementById ('guessInput').disabled = false;
    document.getElementById ('submitGuessBtn').disabled = false;
    document.getElementById('guessInput').value = '';

    

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


    let winRate;
    guess = document.getElementById('guessInput').value;
    guess = Number(guess);

    let maxNumber;


    if (difficultyEasy)
    {
        maxNumber = 50;
        console.log('hi i am difficultyEasy');
    }

    else if (difficultyMedium)
    {
        maxNumber = 100;
    }

    else if (difficultyHard)
    {
        maxNumber = 200;
    }


    if (guess < 1 || guess > maxNumber)
    {
        document.getElementById('feedbackArea').innerHTML = `You guessed an out of range number please guess within the range of 1-${maxNumber}`;
        document.getElementById('guessInput').value = '';
        return;
    }

    else 
    {
        console.log('valid guess');
    }
 
    
    document.getElementById('statAttempts').innerHTML = attempt +=1;

    document.getElementById('statRemaining').innerHTML = remaining -=1; 
    
    
    if (guess === randomNumber )
    {
        
        document.getElementById('feedbackArea').innerHTML = `W! You guessed the correct Number. ${randomNumber} was the Random Number`;

        document.getElementById ('guessInput').disabled = true;

        document.getElementById ('submitGuessBtn').disabled = true;

        score = score+remaining+1;

        document.getElementById('statScore').innerHTML = score;

        if (score > bestScore)
        {
            bestScore = score;
            document.getElementById('statBestScore').innerHTML = bestScore;
            
        }      
        
        document.getElementById('statStreak').innerHTML = winStreak += 1;

        gamesPlayed = document.getElementById('statGamesPlayed').innerHTML = gamesPlayed +=1;

        gamesWon = document.getElementById('statGamesWon').innerHTML = gamesWon +=1;

        winRate = (gamesWon/gamesPlayed)*100;

        document.getElementById('statAccuracy').innerHTML = `${winRate.toFixed(2)}%`;   


    }
    
    else if (remaining === 0)
    {
        winStreak = 0;

        document.getElementById('feedbackArea').innerHTML = `GAME OVER. ${randomNumber} was the Random Number. Play Again?`;

        gamesPlayed = document.getElementById('statGamesPlayed').innerHTML = gamesPlayed +=1;

        document.getElementById ('guessInput').disabled = true;

        document.getElementById ('submitGuessBtn').disabled = true;

        document.getElementById('statStreak').innerHTML = winStreak;

        let winRate = (gamesWon/gamesPlayed)*100;

        document.getElementById('statAccuracy').innerHTML = `${winRate.toFixed(2)}%`;        

    
    }

    else if (guess > randomNumber )
    {
        document.getElementById('feedbackArea').innerHTML = `Too Bigggggg. You are of by alot`;
    }

    else if (guess < randomNumber)
    {
        document.getElementById('feedbackArea').innerHTML = `Too Small. Guess a lil higher`;
    }


    document.getElementById('guessInput').value = '';

}

document.addEventListener ('DOMContentLoaded', startGame);

const playAgainBtn = document.getElementById('playAgainBtn');
playAgainBtn.addEventListener('click' , startGame);

const myForm = document.getElementById('guessForm');

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    checkGuess ();
});

