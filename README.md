# Wordle Clone 

A fully playable **Wordle**, built entirely from scratch using **HTML, CSS, and vanilla JavaScript**. 
You have to guess the secret 5-letter word in 6 tries, with color-coded feedback after every guess.

# Game play

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
4. Use the feedback to refine your next guess.
5. You have **6 attempts** to guess the word correctly.
6. Click **New Game** anytime to start over with a fresh word, or **Give Up** to reveal the answer.


## Project Structure

```
Wordle/
├── index.html      # Page structure: board container, message area, keyboard, controls
├── style.css        # All visual styling, layout, colors, and animations
├── script.js         # Game logic: word bank, board/keyboard rendering, guess validation,
│                      # scoring algorithm, win/lose handling, event listeners
└── README.md         # You are here
```


---

## Getting Started
Open the guthubpages site linked in description.

---

## Feature

1. Word Bank:
   I have created a 'words.txt' file to put all the words from the official Wordle list

 2. Built-in Keyboard:
    created a built in keyboard using buildBoard()

3. Your keybord:
   If typing each letter in the sites keyboard seems too tedious, you can use the keyboard of your own MAC/PC

4. Transition/Animations:
   Made subtle animations and transitions to get the feel of the OG Wordle game.
   
5.Colors:
 Gray color indicates that the letter is not present
 Yellow indicates presence but not the correct location
 Green indicates correct letter and position!

6. Give up:
   By clicking the give up button you reveal the guess word!

7.New Game:
   New game button starts the new game with a new secret word.


## Contributing

This is a personal/learning project, but suggestions and improvements are welcome:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Open a pull request describing what you changed and why

---

## License

This project is free to use, modify, and distribute for personal or educational purposes

## Acknowledgments

- Inspired by the original **Wordle**, created by Josh Wardle and later acquired by The New York Times
- Built as a hands-on project to practice DOM manipulation, event handling, and core JavaScript game-logic algorithms without relying on external frameworks
