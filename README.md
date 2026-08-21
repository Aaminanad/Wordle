**Wordle Clone** 

A fully playable clone of the popular word-guessing game **Wordle**, built entirely from scratch using **HTML, CSS, and vanilla JavaScript**. Guess the secret 5-letter word in 6 tries, with color-coded feedback after every guess, an on-screen keyboard that tracks used letters, and full support for physical keyboard input.

---

**Overview**

This project recreates the core Wordle experience as a lightweight, self-contained web app. Every guess is validated against a curated word list, compared letter-by-letter against a randomly chosen secret word, and rendered on a 6×5 grid with Wordle's signature green/yellow/gray tile coloring. The on-screen keyboard mirrors this feedback so you can track which letters you've already tried.

There is no backend, no build step, and no external dependencies — just open `index.html` in a browser and play.
**Screenshots**

> Add your screenshots to a `screenshots/` folder in the project root and update the paths below (or send them over and they can be embedded here directly).


Initial Screen:
<img width="260" height="364" alt="wordle1" src="https://github.com/user-attachments/assets/59406e6c-d8b0-4542-85fc-6ef07e4226fd" />

Wining Screen:
<img width="242" height="351" alt="win1" src="https://github.com/user-attachments/assets/807bfadf-f93b-48bd-9751-1583943dff20" />

Failed Screen:
<img width="254" height="362" alt="pg1" src="https://github.com/user-attachments/assets/67aa5947-ef55-4134-97a0-4105aa7b6f29" />




## How to Play

1. The game picks a secret 5-letter word at random when the page loads.
2. Type a 5-letter word using your keyboard or the on-screen keys.
3. Press **Enter** to submit your guess.
4. Each letter tile will be colored to show how close your guess was:
   - **Green** — correct letter, correct position
   - **Yellow** — correct letter, wrong position
   - **Gray** — letter isn't in the word at all
5. Use the feedback to refine your next guess.
6. You have **6 attempts** to guess the word correctly.
7. Click **New Game** anytime to start over with a fresh word, or **Give Up** to reveal the answer.


## Project Structure

```
Wordle/
├── index.html      # Page structure: board container, message area, keyboard, controls
├── style.css        # All visual styling, layout, colors, and animations
├── script.js         # Game logic: word bank, board/keyboard rendering, guess validation,
│                      # scoring algorithm, win/lose handling, event listeners
└── README.md         # You are here
```

### `index.html`
Defines the static skeleton of the page: a title, subtitle, an empty `#board` div (populated dynamically by JS), a `#message` div for feedback text, an empty `#keyboard` div (also populated dynamically), and the New Game / Give Up buttons.

### `style.css`
Handles all visual presentation:
- `#board` uses **CSS Grid** to lay out 6 rows of 5 tiles each
- `.tile` styles each letter cell, including the `correct` / `present` colored states and `pop` / `flip` animations
- `#keyboard` and `.key` style the on-screen keyboard, including per-key `correct` / `present` / `absent` coloring
- `.controls` handles spacing/layout for the New Game and Give Up buttons
- A `@media` query adjusts sizing for smaller screens

### `script.js`
Contains all game logic — see [How It Works](#how-it-works-under-the-hood) below for a full breakdown.

---

## Getting Started

No installation or build process needed.

### Option 1: Open directly in a browser
1. Download or clone this repository.
2. Double-click `index.html`, or right-click → **Open with** → your browser of choice.

### Option 2: Use a local development server (recommended)
Some browsers restrict certain features when opening files directly via `file://`. Using a lightweight local server avoids this:

**Using VS Code:**
- Install the **Live Server** extension
- Right-click `index.html` → **Open with Live Server**

**Using Python (if installed):**
```bash
# Navigate to the project folder
cd path/to/Wordle

# Python 3
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

**Using Node.js (if installed):**
```bash
npx serve .
```

---

## How It Works (Under the Hood)

### 1. Word Bank
`script.js` defines a `WORDS` array of roughly 500 common 5-letter English words. As a safety net, the array is passed through:
```js
.filter((w) => w.length === 5)
```
This guarantees that even if a typo ever sneaks a word of the wrong length into the list, it can never be selected as the solution or break the 5-column board.

### 2. Starting a Game
`startNewGame()`:
- Picks a random word from `WORDS` as the `solution`
- Resets `guesses`, `currentGuess`, and `gameOver` state
- Clears any leftover message
- Rebuilds the board (`buildBoard()`) and keyboard (`buildKeyboard()`) from scratch, which also wipes any leftover tile colors or animation classes from a previous round

### 3. Building the Board
`buildBoard()` dynamically generates a 6×5 grid of empty `.tile` divs inside `#board`, each tagged with `data-row` and `data-col` attributes so they can be targeted precisely later.

### 4. Building the Keyboard
`buildKeyboard()` dynamically generates the QWERTY layout (plus **Enter** and **Backspace**) inside `#keyboard`, wiring a click listener to every key that calls `handleKeyClick()`.

### 5. Handling Input
Two input paths feed into the same `handleKeyClick(key)` function, so on-screen clicks and physical key presses behave identically:
- **Physical keyboard:** a `keydown` listener on `document` normalizes `e.key` to uppercase and routes letters, `Enter`, and `Backspace` accordingly
- **On-screen keyboard:** each rendered key button calls `handleKeyClick()` with its own label on click

`handleKeyClick()`:
- Appends a letter to `currentGuess` (max 5 characters)
- Removes the last letter on Backspace
- Calls `submitGuess()` on Enter

### 6. Submitting a Guess
`submitGuess()` validates the current guess before accepting it:
- Rejects guesses under 5 letters (*"Not enough letters"*)
- Rejects guesses not present in the `WORDS` list (*"Not in word list"*)
- On a valid guess: pushes it into the `guesses` array, clears `currentGuess`, then re-renders the board and keyboard
- Checks for a win (`currentGuess === solution`) or a loss (6 guesses used with no match), updating `gameOver` and displaying the appropriate message

### 7. Scoring a Guess — `getColors()`
This is the heart of Wordle's logic, run using a standard **two-pass algorithm** to correctly handle duplicate letters:

**Pass 1 — Exact matches:** Compare each letter in the guess to the letter in the same position in the solution. Mark matches as `correct` and flag that position in the solution as "used."

**Pass 2 — Present-but-misplaced matches:** For every letter not already marked `correct`, scan the solution for an *unused* occurrence of that letter. If found, mark it `present` and flag that solution letter as "used" too — this prevents a single repeated letter in the guess from lighting up yellow more times than it actually appears in the solution (a subtlety many naive Wordle clones get wrong).

Any letter that never matches remains `absent`.

### 8. Rendering Feedback
- `updateBoard()` re-renders every submitted guess row with its letters and computed colors (plus a `flip` animation class), and also renders the in-progress row so typed letters appear live as you type
- `updateKeyboard()` walks through all submitted guesses and updates each on-screen key's color — using a priority ranking (`correct` > `present` > `absent`) so a key's color can only ever *upgrade*, never downgrade, across multiple guesses

### 9. Ending a Round
- Winning displays a celebratory message styled with the `.win` class
- Running out of guesses reveals the solution with an `.error`-styled message
- The **Give Up** button lets you end the round early and reveals the solution the same way

---

## Word List

The word bank lives directly in `script.js` as the `WORDS` array — around 500 common English words, all normalized to uppercase. Both the **solution** and **valid guesses** are drawn from this same list, meaning:
- The secret word will always be a recognizable, common word
- Guesses must also come from this list (this is a simplification compared to real Wordle, which checks guesses against a much larger dictionary than its solution list — see [Known Limitations](#known-limitations))

---

## Customization

Here are some easy ways to make this project your own:

**Change the word list**
Edit the `WORDS` array in `script.js`. Any 5-letter uppercase words will work; the `.filter()` safeguard will silently drop anything of the wrong length.

**Change the color scheme**
Update the CSS custom values in `style.css`:
```css
.tile.correct { background: #538d4e; border-color: #538d4e; }
.tile.present { background: #3a3a3c; border-color: #3a3a3c; }
```

**Adjust number of guesses**
Change the `6` in the `for (let r = 0; r < 6; r++)` loop inside `buildBoard()`, and the `guesses.length >= 6` check inside `submitGuess()`.

**Add sound effects or haptics**
Hook into the existing `submitGuess()` win/lose branches to trigger audio or vibration feedback.

**Add a shake animation for invalid guesses**
The CSS already includes reusable keyframe patterns (see `.flip`/`.pop`) you can extend — add a `.shake` class and animation, then toggle it in `submitGuess()` when a guess is rejected.

---

## Known Limitations

- **Guess dictionary = solution dictionary.** Unlike the official Wordle (which accepts a much larger list of valid guesses than its list of possible answers), this clone only accepts guesses that exist in its own ~500-word `WORDS` array. A valid English word not in that list will be rejected.
- **No daily word / seed system.** The word is chosen randomly on every page load or "New Game" click rather than being the same for all players on a given day.
- **No persistence.** Progress, stats, and streaks are not saved between sessions (no `localStorage` or backend).
- **No hard mode** (using revealed hints in later guesses is not enforced).
- **Single language.** The word list is English-only.

---

## Roadmap / Future Improvements

- [ ] Daily word mode (seeded by date, same word for all players each day)
- [ ] Persistent stats (games played, win %, current/max streak) via `localStorage`
- [ ] Shareable results grid (like Wordle's emoji share output)
- [ ] Dark mode toggle
- [ ] Larger, separate dictionaries for valid guesses vs. possible solutions
- [ ] Hard mode toggle
- [ ] Shake animation + haptic feedback on invalid guesses
- [ ] Difficulty variants (4-letter, 6-letter, or 7-letter word modes)

---

## Contributing

This is a personal/learning project, but suggestions and improvements are welcome:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Open a pull request describing what you changed and why

---

## License

This project is free to use, modify, and distribute for personal or educational purposes. Wordle™ is a trademark of The New York Times Company; this project is an independent, unaffiliated fan-made clone built for learning purposes only.

---

## Acknowledgments

- Inspired by the original **Wordle**, created by Josh Wardle and later acquired by The New York Times
- Built as a hands-on project to practice DOM manipulation, event handling, and core JavaScript game-logic algorithms without relying on external frameworks
