````markdown
# Code Breaker — Number Guessing Game

A minimal, dark-themed number guessing game with a subtle cyberpunk feel.

The player has to guess a randomly generated secret number within a limited
number of attempts. The game includes multiple difficulty levels, live
statistics, score tracking, win streaks, best score tracking, and a history
of previous guesses.

> **Status:** Complete

---

## Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, Flexbox, Grid, responsive design
- **JavaScript** — game logic, validation, statistics, and DOM manipulation

No Bootstrap, Tailwind, or external UI libraries were used.

---

## Project Structure

```text
├── game.html      # Semantic markup for the game UI
├── game.css       # All styling and responsive design
└── script.js      # Game logic and DOM interactions
````

---

## Features

* Difficulty selector:

  * Easy — numbers from 1–50
  * Medium — numbers from 1–100
  * Hard — numbers from 1–200
* Random number generation
* Limited attempts per game
* Input validation
* Out-of-range guess detection
* Higher/lower guess feedback
* Live statistics:

  * Attempts
  * Remaining attempts
  * Current score
  * Best score
  * Win streak
  * Games played
  * Games won
  * Win rate
* Previous guesses history
* Visual feedback for:

  * Correct guesses
  * Too high guesses
  * Too low guesses
* Game-over handling
* Play Again / game reset functionality
* Best score tracking during the session
* Win streak tracking
* Responsive UI
* Accessible focus states
* No horizontal scrolling

---

## Scoring

The score is based on the number of attempts remaining when the player
successfully guesses the secret number.

The more attempts remaining when the number is guessed, the higher the score.

The best score is tracked throughout the current session.

---

## AI Usage Disclosure

AI (Claude) was used to help generate the **UI/UX implementation**,
including the HTML structure and CSS styling, based on a design specification
I provided covering the visual style, layout, color palette, responsiveness,
and accessibility requirements.

The **game logic was developed by me**. This includes:

* Random number generation
* Difficulty handling
* Guess validation
* Guess comparison logic
* Attempts and remaining attempts tracking
* Score calculation
* Best score tracking
* Win streak tracking
* Games played and games won tracking
* Win rate calculation
* DOM updates
* Guess history rendering
* Game-over handling
* Play Again / reset behavior

AI was later used to help refactor and organize parts of the JavaScript after
the core functionality had been developed.

I'm disclosing AI usage for transparency.

---

## What I Learned

This project was built as a JavaScript learning project and helped me
practice:

* JavaScript variables and scope
* `let` and `const`
* Functions and parameters
* Conditional logic
* Arrays
* Number conversion and validation
* DOM selection and manipulation
* Creating and appending DOM elements
* Event listeners
* Form submission handling
* Dynamic UI updates
* Game state management
* Basic application logic and statistics

---

## Roadmap

* [x] Build semantic HTML structure
* [x] Design responsive UI
* [x] Implement difficulty selection
* [x] Implement random number generation
* [x] Implement guess validation
* [x] Implement guess comparison and feedback
* [x] Implement attempts and remaining attempts
* [x] Implement scoring system
* [x] Implement best score tracking
* [x] Implement win streak tracking
* [x] Implement games played / games won statistics
* [x] Implement win rate
* [x] Implement guess history
* [x] Implement Play Again / reset flow
* [x] Add game-over handling
* [x] Test game functionality
* [ ] Add screenshots / demo GIF

---

## Author

**Ali Saad Attique**

GitHub: [noirdotdeb](https://github.com/noirdotdeb)

---

*Built as a JavaScript learning project.*

```
```
