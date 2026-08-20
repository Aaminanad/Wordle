let WORDS=[];

fetch('words.txt')
.then(response =>{
  if ( !response.ok) throw new Error('failed to load words.txt');
  return response.text();
})
.then(text =>{
  WORDS = text.split('\n').map( w => w.trim().toUpperCase()).filter((w) => w.length === 5)
  initGame();
})
.catch( error=> console.error('Word loading error:', error))






//.filter((w) => w.length === 5);

let solution = '';
let guesses = [];
let currentGuess = '';
let gameOver = false;

const BOARD = document.getElementById('board');
const MESSAGE = document.getElementById('message');
const KEYBOARD = document.getElementById('keyboard');
const NEW_GAME_BTN = document.getElementById('newGameBtn');
const GIVE_UP_BTN = document.getElementById('giveUpBtn');

function buildBoard() {
  BOARD.innerHTML = '';
  for (let r = 0; r < 6; r++) {
    const row = document.createElement('div');
    row.className = 'row';
    row.dataset.row = r;
    for (let c = 0; c < 5; c++) {
      const tile = document.createElement('div');
      tile.className = 'tile';
      tile.dataset.col = c;
      row.appendChild(tile);
    }
    BOARD.appendChild(row);
  }
}

function buildKeyboard() {
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace'],
  ];

  KEYBOARD.innerHTML = '';
  rows.forEach((rowKeys) => {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'kb-row';
    rowKeys.forEach((key) => {
      const btn = document.createElement('button');
      btn.className = 'key';
      if (key === 'Enter' || key === 'Backspace') {
        btn.classList.add('wide');
        btn.textContent = key === 'Backspace' ? '⌫' : key;
      } else {
        btn.textContent = key;
      }
      btn.dataset.key = key;
      btn.addEventListener('click', () => handleKeyClick(key));
      rowDiv.appendChild(btn);
    });
    KEYBOARD.appendChild(rowDiv);
  });
}

function getColors(guess) {
  const colors = Array(5).fill('absent');
  const solutionChars = solution.split('');
  const guessChars = guess.split('');
  const matched = Array(5).fill(false);

  // First pass: exact position matches
  for (let i = 0; i < 5; i++) {
    if (guessChars[i] === solutionChars[i]) {
      colors[i] = 'correct';
      matched[i] = true;
    }
  }

  // Second pass: right letter, wrong position
  for (let i = 0; i < 5; i++) {
    if (colors[i] === 'correct') continue;
    for (let j = 0; j < 5; j++) {
      if (!matched[j] && guessChars[i] === solutionChars[j]) {
        colors[i] = 'present';
        matched[j] = true;
        break;
      }
    }
  }

  return colors;
}

function showMessage(text, type = '') {
  MESSAGE.textContent = text;
  MESSAGE.className = type;
}

function updateBoard() {
  
  guesses.forEach((word, r) => {
    const colors = getColors(word);
    const rowEl = BOARD.querySelector(`.row[data-row="${r}"]`);
    word.split('').forEach((ch, c) => {
      const tile = rowEl.querySelector(`.tile[data-col="${c}"]`);
      tile.textContent = ch;
      tile.classList.add('flip', colors[c]);
    });
  });

  
  if (!gameOver && guesses.length < 6) {
    const rowEl = BOARD.querySelector(`.row[data-row="${guesses.length}"]`);
    for (let c = 0; c < 5; c++) {
      const tile = rowEl.querySelector(`.tile[data-col="${c}"]`);
      tile.textContent = currentGuess[c] || '';
    }
  }
}

function updateKeyboard() {
  const rank = { absent: 0, present: 1, correct: 2 };
  guesses.forEach((word) => {
    const colors = getColors(word);
    word.split('').forEach((ch, i) => {
      const keyBtn = KEYBOARD.querySelector(`.key[data-key="${ch}"]`);
      if (!keyBtn) return;
      const current = keyBtn.dataset.state || 'absent';
      if (rank[colors[i]] > rank[current]) {
        keyBtn.dataset.state = colors[i];
        keyBtn.classList.remove('correct', 'present', 'absent');
        keyBtn.classList.add(colors[i]);
      }
    });
  });
}

function submitGuess() {
  if (gameOver) return;

  if (currentGuess.length < 5) {
    showMessage('Not enough letters', 'error');
    return;
  }
  if (!WORDS.includes(currentGuess)) {
    showMessage('Not in word list', 'error');
    return;
  }

  guesses.push(currentGuess);
  const won = currentGuess === solution;
  currentGuess = '';
  updateBoard();
  updateKeyboard();

  if (won) {
    gameOver = true;
    showMessage('You got it! ', 'win');
  } else if (guesses.length >= 6) {
    gameOver = true;
    showMessage(`Out of guesses! The word was ${solution}`, 'error');
  } else {
    showMessage('');
  }
}

function handleKeyClick(key) {
  if (gameOver) return;

  if (key === 'Enter') {
    submitGuess();
  } else if (key === 'Backspace') {
    currentGuess = currentGuess.slice(0, -1);
    updateBoard();
  } else if (/^[A-Z]$/.test(key) && currentGuess.length < 5) {
    currentGuess += key;
    updateBoard();
  }
}

document.addEventListener('keydown', (e) => {
  if (gameOver) return;
  const key = e.key.toUpperCase();
  if (key === 'ENTER') {
    handleKeyClick('Enter');
  } else if (key === 'BACKSPACE') {
    handleKeyClick('Backspace');
  } else if (/^[A-Z]$/.test(key)) {
    handleKeyClick(key);
  }
});

function startNewGame() {
  solution = WORDS[Math.floor(Math.random() * WORDS.length)];
  guesses = [];
  currentGuess = '';
  gameOver = false;
  showMessage('');
  buildBoard();
  buildKeyboard();
}

NEW_GAME_BTN.addEventListener('click', startNewGame);
GIVE_UP_BTN.addEventListener('click', () => {
  if (gameOver) return;
  gameOver = true;
  showMessage(`The word was ${solution}`, 'error');
});

startNewGame();
