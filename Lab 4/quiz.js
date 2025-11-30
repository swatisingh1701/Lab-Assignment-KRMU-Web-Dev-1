const quizQuestions = [
    { question: "What is the capital of India?", answer: "new delhi" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "What is 5 + 7?", answer: "12" },
    { question: "How many days are in a week?", answer: "7" },
    { question: "What is the boiling point of water in Celsius?", answer: "100" }
];

function runQuiz() {
    let score=0; 

    for (let i=0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);

        if (userAnswer) {
            userAnswer = userAnswer.toLowerCase().trim();
        } else {
            userAnswer=""; 
        }

        if (userAnswer === quizQuestions[i].answer) {
            alert("Correct!");
            score++;
        } else {
            alert("Wrong! The correct answer is: " + quizQuestions[i].answer);
        }
    }

    alert("Quiz Completed! \nYour Score: " + score + "/" + quizQuestions.length);
}

runQuiz();