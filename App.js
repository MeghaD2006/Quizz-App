const questions = [
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2",
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "South Korea"],
        answer: "Japan",
    },
    {
        question: "What is the freezing point of water in Celsius?",
        options: ["-100°C", "0°C", "100°C", "32°C"],
        answer: "0°C",
    },
    {
        question: "What is the primary gas found in the Earth's atmosphere?",
        options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
        answer: "Nitrogen",
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci",
    },
];
let currentQuestionIndex = 0;
let score = 0;
function loadQuestion(){
    const questionE1 = document.getElementById("question");
    const optionsE1 = document.getElementById("options");
    questionE1.textContent = questions[currentQuestionIndex].question;
    optionsE1.innerHTML = "";
    questions[currentQuestionIndex].options.forEach((option)=> {
        const li = document.createElement("li");
        li.innerHTML=`<button onclick ="checkAnswer('${option}')">${option}</button>`;
       optionsE1.appendChild(li); 
    });
}
function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const butt = document.querySelectorAll("#options button");

    butt.forEach(button => {
        if (button.textContent === correctAnswer) {
            button.style.backgroundColor = "green";
        } else {
            
            if (button.textContent === selectedOption) {
                button.style.backgroundColor = "red";
            }
        }

        
        button.disabled = true;
    });
    if(selectedOption === correctAnswer) {
        score++;
        } 
        console.log(`Button clicked: ${selectedOption}`);

        const buttons = document.querySelectorAll("#options button");
    buttons.forEach(button => button.disabled = true);
        document.getElementById("next-btn").disabled = false;
}
function nextQuestion(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        loadQuestion();
        document.getElementById("next-btn").disabled = true;
} else{
    showResult();
}
}
function showResult(){
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").textContent =`your score: ${score}/${questions.length}`;
}
function restartQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz").style.display = "block";
    document.getElementById("result").style.display="none";
    loadQuestion();
  document.getElementById("next-btn").disabled = true;

}
loadQuestion();
document.getElementById("next-btn").disabled = true;