var namePerson = [{question: "What's the name of Chicago Bulls Player who won championship 6 times", choices:["Bryan","Lebron", "Carter","Jordan"],
                  Answer: 3
                  },{
                      question: "Who is the oracle of Omaha?",
                      choices:"Gates","Buffet","Musk","Tesla",
                      Answer: 1
                  },{
                     question: "Who owns Microsoft?",
                     choices: "Tesla","Gates","Bezo","Einstein",
                     Answer: 1
                 },{
                     question: "Who design the modern alernating current electricity supply system?",
                     choices: "Tesla","Gates","Bezo","Einstein",
                     Answer: 0
                 },{
                     question: "Who invented the telescope",
                     choices: "Gates","Buffet","Galileo","Einstein",
                     Answer: 2
                 },{
                     question: "Who is number 24 in Lakers team?",
                     choices: "Carter","Micheal","kobe","Einstein",
                     Answer: 2
                 },{
                     question: "Who came up with the theory of relativity?",
                     choices: "Einstein","Plato","Newton","Jobs",
                     Answer: 0
                 },{
                     question: "Who is the founder of Apple?",
                     choices: "Einstein","Plato","Socrates","Jobs",
                     Answer: 0
                 },{
                     question: "Who is the founder of spaceX?",
                     choices: "Jobs","Plato","Newton","Musk",
                     Answer: 0
                 },{
                     question: "Who is the famous boxer of all time?",
                     choices: "Pacquiao","Ali","MayWeather","Jackson",
                     Answer: 0
                 }];
var rightAnswer;
var wrongAnswer;
var currentQuestion;
var time;
var selected;
var nextQuestion;
$("#start").on("click",function () {
    reset();
    newGame();
};
function newGame(){
    newQuestion();
}
function newQuestion(){
    $("#rightAnswer").empty();
    selected=true;
    
    $("#currentQuestion").html("<h2>"namePerson[currentQuestion].question+"</h2>");
    
    for(var i=0;i<4;i++){
        var pick = $("#answer");
        pick.text(namePerson[currentQuestion].Answer[i]);
        pick.attr({"data-index":i});
        pick.addClass("thisPick");
        $("#answer").append(pick);
        
    }
    countDown();
    
}

function countDown(){
    seconds = 10;
    
    $("#time-left").html("<h3> time remaining:"+ seconds +"</h3>");
    selected=true;
    time=setInterval(displayCount, 1000);
    
};

function displayCount(){
    seconds--;
    $("#time-left").html("<h3> time remaining:"+ seconds + "</h3>");
    clearInterval(time);
    answered=false;
    
}
function reset(){
    $("#time-left").empty();
    $("#currentQuestion").empty();
    $("#thisPick").empty();
    $("#rightAnswer").empty();
}
              