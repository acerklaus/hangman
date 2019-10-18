"use strict"

const startButton = document.getElementById("startButton");
const difficultySubmitButton = document.getElementById("difficultySubmitButton");
const letterSubmitButton = document.getElementById("letterSubmitButton");
const welcomeScreen = document.getElementById("welcomeScreen");
const difficultyScreen = document.getElementById("difficultyScreen");
const gameScreen = document.getElementById("gameScreen");
const gameBoard = document.getElementById("gameBoard");
const userGuess = document.getElementById('userGuess');
let game;

function getWord(){
    return new Promise (function(resolve, reject) {
        var difficulty = document.getElementById("difficultyForm");
        var userDifficulty = difficulty.options[difficulty.selectedIndex].value;
        
        if (userDifficulty == 'easy' ){
    const request = new XMLHttpRequest();
    request.onreadystatechange = function()
    { if (request.readyState !== request.DONE){return;}
     
      console.log(request.responseText);
      
      const response = JSON.parse(request.responseText);
    
     
        const word = response.word
        console.log('the word is ' + word);
        resolve(word);
    };
    request.open('GET' , 'https://hangman-api.lively.software/?difficulty=easy');
    request.send();
    };
    
    if (userDifficulty == 'medium'){
        const request = new XMLHttpRequest();

        request.onreadystatechange = function()
        { if (request.readyState !== request.DONE){return;}
         
          console.log(request.responseText);
        
          const response = JSON.parse(request.responseText);
        
         
            const word = response.word
            console.log('the word is ' + word);
            resolve(word)
        };
        request.open('GET' , 'https://hangman-api.lively.software/?difficulty=medium');
        request.send();
        };
        
       if (userDifficulty == 'hard'){
            const request = new XMLHttpRequest();
    
            request.onreadystatechange = function()
            { if (request.readyState !== request.DONE){return;}
             
              console.log(request.responseText);
              
              const response = JSON.parse(request.responseText);
            
             
                const word = response.word;
                console.log('the word is ' + word);
                resolve(word);
                
            };
            request.open('GET' , 'https://hangman-api.lively.software/?difficulty=hard');
            request.send();
            }
        })
    } 
  
    async function establishGameboard()
{
    const gameWord = await getWord();
    var underScore = gameWord.length;
    console.log(underScore);
    var wordLength =('Game Board '+'_ ');
    while(underScore > 1)
    {
        wordLength = (wordLength + '_ ');
        underScore--;
    }
    console.log(wordLength)

    gameBoard.innerHTML=wordLength;
}



startButton.addEventListener("click", function(start){
    start.preventDefault();
    console.log("user clicked start");
    welcomeScreen.className = "hidden";
    difficultyScreen.className = "";

})



difficultySubmitButton.addEventListener("click", function(game) 
{   
    
    var difficulty = document.getElementById("difficultyForm");
    var userDifficulty = difficulty.options[difficulty.selectedIndex].value;
    console.log("users difficulty is " + userDifficulty);
    game.preventDefault();
    difficultyScreen.className = "hidden";
    gameScreen.className = "";
    gameBoard.className = "";
    
    establishGameboard();
})

letterSubmitButton.addEventListener("click",function(userInput)
{

    var Guess = document.getElementById("userGuess");
    var userGuess = Guess.options[Guess.selectedIndex].value;
    
    console.log(userGuess)
    console.log(word);
    userInput = userGuess;
    
});

var userInput = userGuess;

class hangmanGame{
constructor(){
console.log('userInput');
}


}

