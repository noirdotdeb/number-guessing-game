function randomNumberGen(diffInt) 
{
  return Math.floor(Math.random() * diffInt + 1);
}

let randomNumber;


function startGame()
{

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

    return randomNumber;
}


document.addEventListener('DOMContentLoaded', startGame );

const playAgainBtn = document.getElementById('playAgainBtn');
playAgainBtn.addEventListener('click' , startGame);