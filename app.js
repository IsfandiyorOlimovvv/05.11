const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const holdBtn = document.getElementById('hold');
const statusEl = document.getElementById('status');
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;
let gameActive = true;

const choices = ['Tosh', 'Qog\'oz', 'Qaychi'];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return 'Draw';
  if (
    (playerChoice === 'Tosh' && computerChoice === 'Qaychi') ||
    (playerChoice === 'Qog\'oz' && computerChoice === 'Tosh') ||
    (playerChoice === 'Qaychi' && computerChoice === 'Qog\'oz')
  ) {
    playerScore++;
    return 'Player';
  } else {
    computerScore++;
    return 'Computer';
  }
}

function playGame(playerChoice) {
  if (!gameActive) {
    statusEl.textContent = 'O\yin hold holatda';
    return;
  }

  const computerChoice = getComputerChoice();
  const winner = determineWinner(playerChoice, computerChoice);

  if (winner === 'Draw') {
    statusEl.textContent = `Durrang! Ikkalasi ham ${playerChoice} tanladi`;
  } else if (winner === 'Player') {
    statusEl.textContent = `Siz yutdingiz ${playerChoice} ${computerChoice}ni yutdi`;
  } else {
    statusEl.textContent = `Kompyuter yutdi ${computerChoice} ${playerChoice}ni yutdi`;
  }

  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}

holdBtn.addEventListener('click', () => {
  gameActive = !gameActive;
  holdBtn.classList.toggle('active');
  holdBtn.textContent = gameActive ? 'HOLD' : 'CONTINUE';
  statusEl.textContent = gameActive ? 'O\'yinni davom ettiring' : 'O\'yin hold holatda';
});

rockBtn.addEventListener('click', () => playGame('Tosh'));
paperBtn.addEventListener('click', () => playGame('Qog\'oz'));
scissorsBtn.addEventListener('click', () => playGame('Qaychi'));