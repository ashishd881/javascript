// first we are going to generate numbers between 1 to 100
let randomNumber=parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt')
const userInput =document.querySelector('#guessField')
const guessSlot =document.querySelector('.guesses')
const remaining =document.querySelector('.lastResult')
const lowOrHi =document.querySelector('.lowOrHi')
const startOver =document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    //submit pe event listner click laga diya
    submit.addEventListener('click',function(e){
        e.preventDefault()                                 //values ko server me jane se roka
        const guess= parseInt(userInput.value)
        // console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
// value ko validate karega
    if(isNaN(guess)){
        alert('paleas enter a valid number')
    }else if(guess < 1){
        alert('please enter a valid number more than 1')
    }else if(guess>100){
        alert('please enter a valid number less than 100')
    }else {
        prevGuess.push(guess)
        if(numGuess==11){
            displayGuess(guess)
            displayMessage(`Game Over.Ramdom number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
    
        

}

function checkGuess(guess){
// value random no ke barabar toh nahi hai wo check hoga agar hai toh you won
    if(guess===randomNumber){
        displayMessage('you guessed it right')
        endGame()
    } else if(guess <randomNumber){
        displayMessage('Number is too low')
    } else if(guess >randomNumber){
        displayMessage('Number is too high')
    }

}

function displayGuess(guess){
// ye values ko arrays ko update karega
    userInput.value=''
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}



function endGame(){
    userInput.value =''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML =`<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame =false;
    newGame();
}

function newGame(){
     const newGamebutton= document.querySelector('#newGame')
        newGamebutton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100+1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML =''
        remaining.innerHTML =`${11 - numGuess}`;
        userInput.removeAttribute('disabled','')
        startOver.removeChild(p)
        playGame = true;
    });

}