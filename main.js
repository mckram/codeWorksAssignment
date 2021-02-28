//running page only once doc is ready
$(document).ready(function() {

  // waiting 3 seconds before offering initial greeting
  setTimeout(() => {appendMsg(getReply('Hey, I\'m Le Chat! What\'s your name?'));}, 3000);
  });

//running only when enter key is pressed
  $(document).keypress(function(e) {
    if (e.which == 13) {
      //stopping page reload
      event.preventDefault();
      //creating message bubble for user input
      userInput();
      //responding after 3 seconds
      setTimeout(() =>{appendMsg(getReply(autoMsg()));}, 3000);
      //clearing message box
      $("#message").val('');
      //adding scrolling bar
      $(".convo").stop().animate({ scrollTop: $(".convo")[0].scrollHeight}, 5000);
    }});

//taking user input value and creating message bubble
function userInput(){
    let value = $('#message').val()
    appendMsg(getMessage(value))
}
//creating global variable -- message count -- to track accurate response
//based on number of user inputs
let msgCount = 0
//function that generates responses
  function autoMsg(){
    msgCount ++
    if (msgCount === 1) {
      return (`I love that name! It\'s so cool! Where are you from?`);
    } else if (msgCount === 2) {
      return (`Wow! That sounds like an awesome place! How are you doing today?`);
    } else if (msgCount === 3) {
      return  (`That\'s sick! What great things happened today?`);
    } else if (msgCount === 4){
      return (`That\'s amazing! What\'s your favourite day of the week?`)
    }
    else{
      return randReact()
    }
  }

//random reactions following initial responses
function randReact(){
  randReactArr = [
    "What\'s your favourite movie? I love Soul by Pixar!",
    "What\'s your favourite book? Mine\'s Anne of Green Gables",
    "Who\'s your favourite philospher? Mine\'s Marcus Aurelius.",
    "Do you remember your dreams? I only remember mine if they're scary.",
    "Do you prefer coffee or tea? If you say tea, I will assume that you\'re very chill.",
    "What superpower best aligns with your personality?",
    "Who\'s your favourite artist? I think King Krule is mine.",
    "I love rainy days, how do you feel about them?",
    "What\'s the worst haircut you\'ve ever had?",
    "What would be the title of your autobiography?",
    "What\'s your favourite time of day? I personally love dusk, it\'s just so...dusky.",
    "What did you major in? I studied business. Not to be negative, but it was the worst. Subject. Ever.",
    "Have you ever owned any pets? If not, I highly recommend getting a guinea pig, they\'re adorable!",
    "Have musical genres do you like? I\'m a big fan of jazz!"
   ]
   return randReactArr[Math.floor(Math.random() * 14)];
}


// ing message to bottom of convo box
function appendMsg (msg) {
$(".convo").append(msg);
}

// get current time in 23:59 format
function getCurrentTime () {
  var dt = new Date();
  var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
  return time
}

// get user message HTML code, then combining with current time
function getMessage (message) {
const msg = `<div class="sent"><div class="message">${message}</div><br><span class="time">${getCurrentTime()}</span></div>`;

return msg;
}

// get computer reply HTML code, , then combining with current time
function getReply (reply) {
const userReply = `<div class="received"><div class="message">${reply}</div><br><span class="time">${getCurrentTime()}</span></div>`;

return userReply;
}
