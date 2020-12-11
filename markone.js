var readlinesync = require("readline-sync");
var score = 0;
var userName = readlinesync.question("What's your name? ");

console.log("Welcome "+ userName + " lets see how much you know Suchita")
function game(question, answer) {
  var userAnswer = readlinesync.question(question);

  if (userAnswer === answer) {
    console.log("You are right!")
    score = score + 1;
  } else {
    console.log("You are wrong!")
    score = score - 1;
  }
  console.log("current score", score);
  console.log("-_-")

}
var questions = [{
  question: "What is suchita's favorite game?",
  answer: "chess"
}, {
  question: "What is suchita's nick name?",
  answer: "dabbu"
}, {
  question: "what is Suchita's favorite show?",
  answer: "friends",
}, {
  question: "Where does suchita live?",
  answer: "delhi"
}, {
  question: "What's her favorite food?",
  answer: "burger"
}]
for(let i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  game(currentQuestion.question, currentQuestion.answer)

}
console.log("Congrats! Your score is: ", score)
