/*
GAME Rules:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his round score.
- BUT, If the player rolls a 1, all his ROUND score gets lost. After that, It's the next player's turn.
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn.
-The first player to reach 100 points on GLOBAL score wins the game.

Learning points:

-How to create our fundamental games variables.
-How to generate random number
-How to manipulate the DOM
-How to read from the DOM
-How to change css styles.
*/

var roundScore,activePlayer,scores;

document.querySelector('.btn-new').addEventListener('click',newGame);
document.querySelector('.btn-roll').addEventListener('click',rollDice);
document.querySelector('.btn-hold').addEventListener('click',holdScore);




/*
* New Game
* Initilization for the all variables and element
*/
function newGame()
{
    console.log("newGame...");

    //reset variables
    roundScore=0;
    activePlayer=0;

    /*
    var temp=[12,32] //array(12,32);
    var v1=temp[0]; //12
    var v2=temp[1]; //32
    */
    scores=[0,0]; //scores[0] == player 1= activePlayer=0  and scores[1] == player 2= activePlayer=1 

    //remove dice image
    //document.querySelector('.dice').style.display='none';

    //reset global
    document.querySelector('#score-0').textContent=0;
    document.querySelector('#score-1').textContent=0;

    //reset current score
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0;

    //reset some class
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

}

/*
*   Roll dice and get random dice number
*/
function rollDice()
{
    console.log("rollDice...");

    var dice1=Math.floor(Math.random()*6) +1;
    //console.log(dice1);

     var img=document.getElementById('dice-1');
     //console.log(img);
     //dice-1.png or dice-2.png
    img.src='dice-'+dice1+'.png';

    roundScore +=dice1;

    console.log("activePlayer: "+ activePlayer);

    if(dice1!=1)
    {
        //do something
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
    }
    else{
        //next player turn
        nextPlayer();
    }

}

/*
*   Hold score and add to global score and do some other process.
*/
function holdScore()
{
    console.log("holdScore...");

    //store current score of the current player into global score
    scores[activePlayer] +=roundScore;

    //Update the User Interface or Display
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];

    if(scores[activePlayer] >=100)
    {
        document.querySelector('#name-'+activePlayer).textContent="WINNER!";

        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
    }
    else{
        nextPlayer();
    }
}


/*
* Next Player Turn
*/
function nextPlayer()
{
    /*
   if(activePlayer==0)
        activePlayer=1;
    else
        activePlayer=0;
        */
    activePlayer === 0 ? activePlayer=1 : activePlayer=0;

    //clear the roundscore/current score
    roundScore=0;

    //we have to assign active class to current player turn
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //reset current score
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0;

}


