const answerKey = [
    { name: "q1", answer: "Azelf" },
    { name: "q2", answer: "Decidueye" },
    { name: "q3", answer: "Altaria" },
    { name: "q4", answer: "Munkidori" },
    { name: "q5", answer: "Rabsca" }
];
const resultsElement = document.querySelector("#quiz-results");
if (resultsElement) {
    const submittedAnswers = new URLSearchParams(window.location.search);
    let score = 0;
    const resultList = document.createElement("ol");
    for (const question of answerKey) {
        const selectedAnswer = submittedAnswers.get(question.name);
        const isCorrect = selectedAnswer === question.answer;
        if (isCorrect) score++;
        const resultItem = document.createElement("li");
        resultItem.textContent = selectedAnswer
            ? `${isCorrect ? "Correct" : "Incorrect"} — Your answer: ${selectedAnswer}. Correct answer: ${question.answer}.`
            : `No answer submitted. Correct answer: ${question.answer}.`;
        resultList.appendChild(resultItem);
    }
    const scoreElement = document.createElement("p");
    scoreElement.textContent = `Your score: ${score} out of ${answerKey.length}`;
    resultsElement.append(scoreElement, resultList);
}