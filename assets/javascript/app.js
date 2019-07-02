//TRIVIA GAME
//Variable to hold all possible questions and their respective answers.
$(document).ready(function() {
var options = [
    {
        question:"What color is the sky?",
        choices: ["Red", "White", "Blue", "Green"],
        answer: 3,
        
    },
    {
        question:"What country is Rawalpindi in?",
        choices: ["Afghanistan", "Pakistan", "India", "Kansas"],
        answer: 2,
    },
    {
        question:"What is the compatable round for a standard issue M4 for the U.S. Army",
        choices: [".308", "30-30", ".762", ".556"],
        answer: 4,
    },
    {
        question: "How many inches in 1 foot?",
        choices: ["12", "14", "36", "6"],
        answer: 1,
    },
    {
        question: "What is the capital of Wisconsin?",
        choices: ["Waukesha", "Milwaukee", "Madison", "Green Bay"],
        answer: 3,
    },
    {
        question: "How many players from each team start on the court for a basketball game?",
        choices: ["5", "12", "7", "10"],
        answer: 1,
    },
    {
        question: "Complete this phrase: Red, Green, _____",
        choices: ["Yellow", "Refactor", "White", "Recliner"],
        answer: 2,
    },
    {
        question: "Select what goes first from the choices below:",
        choices: ["Git Push", "Git Pull", "Git Status", "Git Commit"],
        answer: 3,
    },
    {
        question: "Who was the lead actor in American Gangster?",
        choices: ["Al Pacino", "Robert Downey Jr.", "Johnny Depp", "Denzel Washington"],
        answer: 4,
    },
    {
        question: "Who won the NBA finals this year?",
        choices: ["Cleveland", "Raptors", "Golden State", "Lakers"],
        answer: 2,
    }];
//Created variables to hold the users score, number of right and wrong answers. Set to 0 to begin. 
var rightAnswers = 0;
var wrongAnswers = 0;
//Also adding varaible to hold unanswered questions in the case the timer runs out. 
var noAnswers = 0;
//Created varaibles required to run timer. Initial time set to 10 (for the time being)
var timer = 10;
var intervalId;
var running = false;
//Created variable to hold the number of total questions which is equal to the total length of the options array
var questionsCount = options.length
//Created variable to hold the user's selected answer
var playerGuess = "";
//Thinking we're gonna create a random question generator, so we'll have to create create a varaible for the question chosen from the index variable created from the options array. 
var questionChosen;
var index;
var newArrray = [];
var holder = [];

//Created jQuery ti hide reset button until game needs to be reset.
$("#reset").hide();
//Console log to check options array is populating.
//console.log(options)
//Created function to start with by displaying the question and start the timer as soon as the html loads. 

//Created function to start the timer
function startTimer() {
    if (!running) {
        intervalId = setInterval(countdown, 1000);
        running = true;
    }
}
//Created function for the actual countdown of the timer. It will be assigned to the id timerSpace in the html
function countdown() {
    $("#timerSpace").html("<h2>How much time you have left: " + timer + "<h2>");
    timer --;
//Created if statement to stop the timer if it reaches 0 ad there is no answer. We will add 1 to the number of noAnswers, run the stopTimer function, and show them a message saying the time is up and show them the right answer. 
    if (timer === 0) {
        noAnswers++;
        stopTimer();
        $("#answerSpace").html("<h3> YOU ARE OUT OF TIME! The right answer is: " + questionChosen.choices[questionChosen.answer] + "<h3>");
    }

}
//Created funciton to stop the timer, used if answer is chosen, user runs out of time, or if the game is complete. 
function stopTimer() {
    running = false;
    clearInterval(intervalId);
}
//Created function to generate random question. Start by defining the index variable previously created as a random generated number that will be referenced by option to assign a specific question from the array of option to the questionChosen varaible previously created. 
function showQuestion() {
    index = Math.floor(Math.random()*options.length);
    questionChosen = options[index];
    //Part of the showQuestion function will have to iterate though the answers part of the question chosen. We use a for loop to do this, which is done after we display the questionChosen in our questionSpace within the html
    $("#questionSpace").html("<h2>" + questionChosen.question + "<h2>");
    for (var i = 0; i < questionChosen.choices.length; i++) {
        //Created a new variable to hold possible choices. As long as there are choices, we will create another varaible iwth another div and popuate each one with its respective index within the iteration.
        var playerChoices = $("<div>")
        playerChoices.addClass("possibleanswers");
        playerChoices.html(questionChosen.choices[i]);
        //Assigned a position to the player choices within the array of choices so we can compare it the index of the answer within the array.
        playerChoices.attr("data-playerguess", i);
        $("#answerSpace").append(playerChoices);
    }
//Within the showQuestion function still, now have to create function to capture user selected answer and generate the different outcomes based on right or wrong answer. This will be an on click function since the function will be called only once an answer has been chosen. 
$(".possibleanswers").on("click", function() {
    //Began on click function by assigning an array position to the playerGuess varaible previously created, from the data value playerguess assigned to the player choices variable in this same showQuestion function.
    playerGuess = parseInt($(this).attr("data-playerguess"));

})
}

})