# Code Breaker — Number Guessing Game

A minimal, dark-themed number guessing game with a subtle cyberpunk feel.
The player has to guess a secret number within a limited number of attempts,
tracked across difficulty levels with live stats (score, streak, accuracy, etc).

---

## Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, Flexbox, Grid, no frameworks
- **JavaScript** — vanilla, no libraries

No Bootstrap, Tailwind, or external UI libraries were used.

---

## Project Structure

```
├── index.html      # Semantic markup for the game UI
├── style.css       # All styling (organized by section, see comments)
└── script.js       # Game logic
```

---

## Features

- Difficulty selector (Easy / Medium / Hard) with distinct number ranges
- Live statistics panel (attempts, remaining attempts, score, best score,
  win streak, games played, games won, accuracy)
- Guess input with validation and inline feedback
- Previous guesses history list with high/low/correct indicators
- Win/loss result modal — blocks page interaction, shows outcome and
  final score, with its own Play Again button
- Play Again control (both in the modal and on the main screen)
- Fully responsive, no horizontal scroll, accessible focus states

---

## AI Usage Disclosure

I used AI (Claude) to help generate the **UI/UX** — the HTML structure and
CSS styling — based on a detailed design spec I gave it (color palette,
layout constraints, accessibility requirements, etc). This included the
markup/styling for the win/loss result modal.

**All game logic (JavaScript) was written by me**, including:
- Random number generation per difficulty
- Guess validation and comparison logic
- Attempts/remaining attempts tracking
- Score, streak, and accuracy calculations
- Difficulty handling
- DOM updates for stats, feedback, and guess history
- Showing/hiding the result modal and wiring both Play Again buttons
- Play Again / reset behavior

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

Ali Saad Attique
GitHub: [noirdotdeb](https://github.com/noirdotdeb)