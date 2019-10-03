const rock = document.getElementById('rockRock');
const paper = document.getElementById('paperPaper');
const scissors = document.getElementById('scissorsScissors');
const yourItemArea = document.getElementById('your-item');
const compupterItemArea = document.getElementById('computer-item');
const resultsArea = document.getElementById('results');
const submitButton = document.getElementById('submit-button');
const computerSelection = Math.ceil(100 * Math.random());
let userSelectedItem = '';

const selectAButton = () => {
    const selectedRadioButton = document.querySelector('input:checked');
    userSelectedItem = selectedRadioButton.value; 
    return userSelectedItem;
};


const submitGuessAndCompare = () => {
    if (userSelectedItem === computerItem) {
        resultsArea.textContent = ('You Have Won.');
    }
    else if (userSelectedItem !== computerItem){
        resultsArea.textContent = ('You Have Lost.');
    }
};
    rock.addEventListener('click', selectAButton);
    paper.addEventListener('click', selectAButton);
    scissors.addEventListener('click', selectAButton);
    submitButton.addEventListener('click', submitGuessAndCompare);

// const selectedRadioButton = document.querySelector('input:checked');
// const userSelectedItem = selectedRadioButton.value;
// console.log(selectedRadioButton);
// const determineComputerRpOrS = (computerItem) => {
//     if (computerSelection >= 75){
//         computerItem = 'ROCK';
//     } else if (computerSelection >=50 && computerSelection < 75){
//         computerItem = 'PAPER';
//     } else if (computerSelection >= 25 && computerSelection < 50){
//         computerItem = 'SCISSORS';
//     } else {
//         computerItem = 'Unknown Object, DQ, & the computer bows out.';
//     }
// };
// //console.log(computerItem);
//submitButton.addEventListener('click', makeGuess);
