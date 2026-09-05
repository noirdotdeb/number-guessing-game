# 🎯 Code Breaker

A minimal, dark-themed number guessing game with a subtle cyberpunk edge. Pick a difficulty, crack the code within your allotted attempts, and watch your stats — score, streak, accuracy — build up as you play.

---

## Overview

Code Breaker is a vanilla HTML/CSS/JS take on the classic number guessing game, built with a focus on clean game logic, live feedback, and a polished, distraction-free interface.

---

## Tech Stack

| Layer      | Tech                                  |
|------------|----------------------------------------|
| Structure  | HTML5 (semantic markup)                |
| Styling    | CSS3 — custom properties, Flexbox, Grid |
| Logic      | Vanilla JavaScript (no libraries)      |

No Bootstrap, Tailwind, or external UI frameworks were used.

---

## Project Structure

```
├── index.html      # Semantic markup for the game UI
├── style.css       # All styling, organized by section
└── script.js       # Game logic
```

---

## Features

- 🎚️ **Difficulty selector** — Easy / Medium / Hard, each with its own number range
- 📊 **Live stats panel** — attempts, remaining attempts, score, best score, win streak, games played, games won, accuracy
- ✅ **Guess input** with validation and inline feedback
- 📜 **Guess history** — a running list of previous guesses with high/low/correct indicators
- 🏁 **Win/loss result modal** — blocks page interaction, shows the outcome and final score, and includes its own Play Again button
- 🔁 **Play Again** — available both in the modal and on the main screen
- 📱 **Fully responsive** — no horizontal scroll, with accessible focus states throughout

---

## How to Play

1. Choose a difficulty level.
2. Guess a number within the given range.
3. Use the high/low feedback to narrow down your next guess.
4. Crack the code before you run out of attempts to win.

---

## Getting Started

No build step or dependencies required.

```bash
git clone https://github.com/noirdotdeb/number-guessing-game.git
cd number-guessing-game
```

Then just open `index.html` in your browser.

---

## AI Usage Disclosure

AI was used to help generate the **UI/UX** — the HTML structure and CSS styling — based on a design specification I provided covering visual style, layout, color palette, responsiveness, and accessibility requirements. This included the markup and styling for the win/loss result modal.

**The game logic was written by me**, including:

- Random number generation
- Difficulty and number-range handling
- Input validation
- Guess comparison
- Attempt and remaining-attempt tracking
- Score calculation
- Best score tracking
- Win streak tracking
- Games played and games won tracking
- Accuracy calculation
- Guess history rendering
- DOM updates
- Game state handling
- Play Again / reset functionality
- Win/loss modal behavior

The JavaScript was later refactored with AI assistance, while the underlying game logic and behavior remained based on my original implementation.

---

## Roadmap

- [x] Add `script.js` with full game logic
- [x] Wire up difficulty selection to number ranges
- [x] Implement guess validation + feedback messages
- [x] Implement stats tracking (score, streak, accuracy, etc.)
- [x] Implement guess history rendering
- [x] Implement Play Again / reset flow
- [x] Add win/loss result modal
- [x] Final testing across devices

---

## Author

**Ali Saad Attique**
GitHub: [noirdotdeb](https://github.com/noirdotdeb)