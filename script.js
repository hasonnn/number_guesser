let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


function generateTarget() {
  let randNum = Math.floor(Math.random() * 9);
  return randNum;
};

function compareGuesses(user, computer, target) {
  let userTarget = Math.abs(target - user);
  let compTarget = Math.abs(target - computer);
  if (userTarget <= compTarget) {
    return true;
  } else if (compTarget < userTarget) {
    return false;
  }
};

function updateScore(winner) {
  if (winner === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  };
};

function advanceRound() {
  return currentRoundNumber += 1;
};