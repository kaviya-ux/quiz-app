# 🧠 Quiz App

A multiple-choice quiz built with HTML, Tailwind CSS, and vanilla JavaScript, split into three separate files (structure/style/logic) — the standard, professional way to organize a small web project. Answer 5 questions, get instant right/wrong feedback, and see your final score with a personalized result message.

## Live Demo

Download/clone the three files into the same folder and open `index.html` in any browser. No setup required.

## Features

- 5 multiple-choice questions with 4 options each
- One question shown at a time, with a progress bar tracking how far along you are
- Instant visual feedback on selection — correct answer highlights green, wrong pick highlights red
- Options lock after answering so you can't change your pick
- Running score counter updated live
- Final results screen with score out of total and a message that changes based on performance
- Restart button to reset the quiz and try again

## Tech Stack

- HTML5
- [Tailwind CSS](https://tailwindcss.com/) (via CDN, for layout and utility styling)
- Plain CSS (`style.css`, for the few small extras Tailwind doesn't cover)
- Vanilla JavaScript (`script.js`, no frameworks, no libraries)

## Project Structure

```
quiz-app/
├── index.html   # markup only — structure and Tailwind utility classes
├── style.css    # small custom styles (font stack, transitions)
├── script.js    # all quiz logic (questions, scoring, screens)
└── README.md
```

`index.html` links to `style.css` and `script.js` with normal `<link>` and `<script src="...">` tags — nothing is inlined. This mirrors how real-world front-end projects are organized: structure, styling, and behavior are kept in separate files so each one is easy to find and edit on its own.

## How It Works

- Questions are stored in `script.js` as an array of objects, each with a `question`, an `options` array, and the index of the correct `answer`.
- The current question index and running `score` are tracked in plain JavaScript variables (no state library needed).
- When an option is clicked, all option buttons are disabled, the correct one is highlighted green, and the selected wrong one (if any) is highlighted red.
- The progress bar width and question counter update based on `currentQuestionIndex / questions.length`.
- After the last question, the quiz screen is hidden and a results screen is shown with the final score and a message tier (e.g. "Perfect score!" vs "Keep practicing!").

## Running Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/kaviya-ux/quiz-app.git
   ```
2. Make sure `index.html`, `style.css`, and `script.js` stay in the same folder.
3. Open `index.html` in your browser.

No installation, no npm, no build step required — just keep all three files together.

## Possible Improvements

- Add a timer per question
- Add multiple quiz categories/topics to choose from
- Shuffle question and option order on each attempt
- Save high scores using localStorage

## License

Free to use for learning or personal projects.
