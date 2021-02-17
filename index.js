const chalk = require("chalk");


var readlineSync = require('readline-sync');
var userName = readlineSync.question('Hi, What\'s your name? ');
console.log(chalk.yellow("Welcome " + userName + "! This short Quiz will test your knowledge on social media. \nRules:\n1) Each correct answer wins you a point. \n2) For every wrong answer, you lose a point. \nLet's Start!"));
var score = 0;

var questions = [{
  question: "Who owns Instagram? ",
  answer: "facebook"
}, {
  question: "True or False: Majority of teens today use Facebook. ",
  answer: "true" 
}, {
  question: "You are writing a message on Twitter, what is the maximum number of characters you can use? ",
  answer: "280"
}];

function play(q,a) {
  var userAns = readlineSync.question(q);
  console.log(chalk.yellow("You entered " + userAns));
  if(userAns.toLowerCase() == a) {
    console.log(chalk.green("You are right!"));
    score+=1;
    console.log(chalk.green("You just gained a point! Your score is:" + score));
  } else {
    console.log(chalk.red("Sorry, you are wrong!"));
    score-=1;
    console.log(chalk.red("You just lost a point! Your score is:" + score));
  }
  console.log("-----------------------");
return score;
}

for (i=0; i<questions.length;i++) {
  currentQuestion=questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}


console.log(chalk.yellow("Congratulations! You've now completed the quiz. Your Total score is: " + score));



