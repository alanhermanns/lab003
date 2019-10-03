const checkResult = ('player', 'computer') => {
    if ('player' === 'computer'){
        return 'draw';
    } else if ('player' > 'computer'){
        return 'win';
    } else return 'loss';
};

export default checkResult ;
