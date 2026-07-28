# Code Breaker — Number Guessing Game

A minimal, dark-themed number guessing game with a subtle cyberpunk feel.
The player has to guess a secret number within a limited number of attempts,
tracked across difficulty levels with live stats (score, streak, accuracy, etc).

> **Status:** UI/UX complete. Game logic (JavaScript) is in progress and will
> be added soon. This README will be updated once that's in place.

---

## Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, Flexbox, Grid, no frameworks
- **JavaScript** — *(coming soon)* — will handle all game logic

No Bootstrap, Tailwind, or external UI libraries were used.

---

## Project Structure

```
├── index.html      # Semantic markup for the game UI
├── style.css       # All styling (organized by section, see comments)
└── script.js       # Game logic — to be added
```

---

## Features (UI)

- Difficulty selector (Easy / Medium / Hard)
- Live statistics panel (attempts, remaining attempts, score, best score,
  win streak, games played, games won, accuracy)
- Guess input with a submit button
- Feedback area for guess results
- Previous guesses history list
- Play Again control
- Fully responsive, no horizontal scroll, accessible focus states

---

## AI Usage Disclosure

I used AI (Claude) to help generate the **UI/UX** — the HTML structure and
CSS styling — based on a detailed design spec I gave it (color palette,
layout constraints, accessibility requirements, etc).

**All game logic (JavaScript) is being written by me.** This includes:
- Random number generation
- Guess validation and comparison logic
- Attempts/remaining attempts tracking
- Score, streak, and accuracy calculations
- Difficulty handling
- DOM updates for stats, feedback, and guess history
- Play Again / reset behavior

I'm disclosing this here for transparency and will keep this section updated
as the project develops.

---

## Roadmap

- [ ] Add `script.js` with full game logic
- [ ] Wire up difficulty selection to number ranges
- [ ] Implement guess validation + feedback messages
- [ ] Implement stats tracking (score, streak, accuracy, etc.)
- [ ] Implement guess history rendering
- [ ] Implement Play Again / reset flow
- [ ] Final testing across devices
- [ ] Update this README with final details, screenshots, and instructions

---

## Author

Ali Saad Attique
GitHub: [noirdotdeb](https://github.com/noirdotdeb)

---

*This README will be updated as the project progresses.*