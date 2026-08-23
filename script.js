// script.js
// Handles all quiz logic: loading questions, checking answers,
// tracking score, and showing final results.

// QUESTION BANK
const questions = [
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: 3
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Colorful Style Sheets"],
        answer: 0
    },
    {
        question: "Which HTML tag is used to link a JavaScript file?",
        options: ["<js>", "<script>", "<link>", "<javascript>"],
        answer: 1
    },
    {
        question: "Which company developed Tailwind CSS?",
        options: ["Google", "Facebook", "Tailwind Labs", "Microsoft"],
        answer: 2
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        options: ["var colors = (1:'red', 2:'green')", "var colors = 'red', 'green'", "var colors = ['red', 'green']", "var colors = 1 = ('red'), 2 = ('green')"],
        answer: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;

// ELEMENTS
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const questionCounter = document.getElementById("questionCounter");
const scoreDisplay = document.getElementById("scoreDisplay");
const progressBar = document.getElementById("progressBar");
const nextBtn = document.getElementById("nextBtn");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const finalScore = document.getElementById("finalScore");
const resultMessage = document.getElementById("resultMessage");

// LOAD A QUESTION
function loadQuestion() {
    hasAnswered = false;
    nextBtn.disabled = true;

    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    questionCounter.textContent = "Question " + (currentQuestionIndex + 1) + " of " + questions.length;
    scoreDisplay.textContent = "Score: " + score;

    const progressPercent = (currentQuestionIndex / questions.length) * 100;
    progressBar.style.width = progressPercent + "%";

    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(function (option, index) {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "w-full text-left px-4 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50";
        button.onclick = function () {
            selectAnswer(index, button);
        };
        optionsContainer.appendChild(button);
    });

    // change button label on last question
    nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? "See Results" : "Next Question";
}

// HANDLE ANSWER SELECTION
function selectAnswer(selectedIndex, selectedButton) {
    if (hasAnswered) {
        return;
    }
    hasAnswered = true;

    const currentQuestion = questions[currentQuestionIndex];
    const allButtons = optionsContainer.querySelectorAll("button");

    allButtons.forEach(function (button, index) {
        button.disabled = true;
        button.classList.remove("hover:bg-gray-50");

        if (index === currentQuestion.answer) {
            button.classList.add("bg-green-100", "border-green-500", "text-green-700");
        } else if (index === selectedIndex) {
            button.classList.add("bg-red-100", "border-red-500", "text-red-700");
        }
    });

    if (selectedIndex === currentQuestion.answer) {
        score++;
        scoreDisplay.textContent = "Score: " + score;
    }

    nextBtn.disabled = false;
}

// MOVE TO NEXT QUESTION
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// SHOW FINAL RESULTS
function showResults() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    progressBar.style.width = "100%";

    finalScore.textContent = score + " / " + questions.length;

    const percentage = (score / questions.length) * 100;
    let message = "";

    if (percentage === 100) {
        message = "Perfect score! You're a genius! 🎉";
    } else if (percentage >= 60) {
        message = "Great job! Solid performance. 👍";
    } else if (percentage >= 40) {
        message = "Not bad, but there's room to improve. 💪";
    } else {
        message = "Keep practicing, you'll get there! 📚";
    }

    resultMessage.textContent = message;
}

// RESTART QUIZ
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    loadQuestion();
}

// INITIAL LOAD
loadQuestion();
