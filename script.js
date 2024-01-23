const questions = [
    {
        question: "The first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire word signifies a great woman. What is the word?",
        answer: "Heroine"
    },
    {
        question: "You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy.",
        answer: "Candle"
    },
    {
        question: "This belongs to you, but everyone else uses it.",
        answer: "Name"
    },
    {
        question: "What can you hold in your right hand, but never in your left?",
        answer: "Left hand"
    },
    {
        question: "How much dirt is in a hole that measures four feet by four feet by five feet?",
        answer: "None"
    },
    {
        question: "Turn me on my side, and I am everything. Cut me in half and I am nothing. What am I?",
        answer: "8"
    }
];

function checkAnswers() {
    let score = 0;

    for (let x = 0; x < questions.length; x++) {
        let response = document.getElementById(`${questions[x].question.toLowerCase()}`);

        if (response.value=="") {
            return null;
        }

        if (response.value.toLowerCase == questions[x].answer.toLowerCase) {
            score += 1;

            
        }
    }
    document.getElementById("score").innerHTML = "Score: " + score;
}

let text = "";

for (let i = 0; i < questions.length; i++) {
    text += ` ${questions[i].question} <br> <br> 
    <input type="text" id="${questions[i].question.toLowerCase()}" required placeholder="Provide your answer">
    <span></span>
    <br><br>
    `

}

document.getElementById("question").innerHTML = text + `<button id="submit" onclick="checkAnswers()" class="submit-btn">Enter the Library...</button>`;
