import getRandomThrow from './get-random-throw.js/';
import checkResult from './test-results.js/';

//DOM Elemets
const rock = document.getElementById('rockRock');
const paper = document.getElementById('paperPaper');
const scissors = document.getElementById('scissorsScissors');
const yourItemArea = document.getElementById('your-item');
const compupterItemArea = document.getElementById('computer-item');
const resultsArea = document.getElementById('results');
const submitButton = document.getElementById('submit-button');
const winSpan = document.getElementById('wins');
const drawSpan = document.getElementById('draws');
const lossSpan = document.getElementById('losses');
let wins = 0;
let losses = 0;
let draws = 0;
let computerChoice;
let playerChoice;

// Grab player's choice
const selectAButton = () => {
    const selectedRadioButton = document.querySelector('input:checked');
    playerChoice = selectedRadioButton.value; 
};

// update Score after generating player + computer choices
const updateScore = () => {
    if (checkResult(playerChoice, computerChoice) === 'win') {
        wins++;
    }
    if (checkResult(playerChoice, computerChoice) === 'draw') {
        draws++;
    }
    if (checkResult(playerChoice, computerChoice) === 'loss') {
        losses++;
    }
}

//State
const playGame = () => {
    const thisGameResult = checkResult(playerChoice, computerChoice);
    
    resultsArea.textContent = checkResult(playerChoice, computerChoice);
}

// event handler for button click