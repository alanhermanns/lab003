// IMPORT MODULES under test here:
// import example from '../src/example.js';
import checkResults from '../test-results.js';

const test = QUnit.test;

test('should return draw if both are rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerMove = 'rock';
    const computerMove = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const outcome = checkResults(playerMove, computerMove);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(outcome, 'draw');
});
