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
    }
];
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
var userGuess = "";
//Thinking we're gonna create a random question generator, so we'll have to create create a varaible for the question chosen from the index variable created from the options array. 
var pick;
var index;
var newArrray = [];
var holder = [];

//Created jQuery ti hide reset button until game needs to be reset.

$("#reset").hide();

console.log(options)


})