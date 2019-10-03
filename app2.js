import getRandomThrow from './get-random-throw.js/';
import checkResult from './test-resultsArea.js/';

//DOM Elemets
const rock = document.getElementById('rockRock');
const paper = document.getElementById('paperPaper');
const scissors = document.getElementById('scissorsScissors');
const yourItemArea = document.getElementById('your-item');
const compupterItemArea = document.getElementById('computer-item');
const resultsArea = document.getElementById('results');
const submitButton = document.getElementById('submit-button');
let wins = 0;
let losses = 0;

//utilities: Display to DOM

//State
