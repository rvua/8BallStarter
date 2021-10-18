var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function answer(){
    // We need the input value
    var inputAnswer = document.querySelector("#question").value;
    // We need to check if the value is worth anything
    if(inputAnswer == "") {
        document.querySelector("#response").innerText("Ask a question")
    } else {
        // Ball changes happens here 
        document.querySelector("#ballImg").src = "./ball.gif"; 
        setTimeout(swap,1200);
    }
}

function swap(){
    document.querySelector("#ballImg").src = "./ballStill.jpg";
    var myAnswer = Math.floor(Math.random() * lifesAnswers.length);
    console.log(lifesAnswers[answer]);
    document.querySelector("#response").innerText = lifesAnswers[myAnswer];
}

// Series of events to make ball gif shake
// 1. button is clicked 
// 2. ballStill is replaced with ball.gif
// 3. setTimeout for x amount of time
// 4. time runs out, ball.gif goes back to ballStill and we see the answer 