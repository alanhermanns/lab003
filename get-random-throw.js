const getRandomThrow = () => {
    const computerSelection = Math.floor(100 * Math.random());
    if (computerSelection <= 33){
        return 'rock';
    } else if (computerSelection > 33 && computerSelection <= 66) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
};
export default getRandomThrow; 