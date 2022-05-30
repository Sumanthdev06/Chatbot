var collap = document.getElementsByClassName("down");

for (let i = 0; i < collap.length; i++) {
  collap[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function getTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}

// Gets the first message
function firstBotMessage() {
  let firstMessage =
    "Welcome to BVRIT.\nPlease enter your queries!\n If you are an existing student please enter existing!";
  document.getElementById("first-message").innerHTML =
    '<p class="botText"><span>' + firstMessage + "</span></p>";

  let time = getTime();

  $("#timestamp").append(time);
  document.getElementById("userIp").scrollIntoView(false);
}

firstBotMessage();

function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
  $("#box").append(botHtml);

  document.getElementById("bar-below").scrollIntoView(true);
}

function getResponse() {
  let userText = $("#textIp").val();

  if (userText == "") {
    userText = "hey there!!!";
  }

  let userHtml = '<p class="userText"><span>' + userText + "</span></p>";

  $("#textIp").val("");
  $("#box").append(userHtml);
  document.getElementById("bar-below").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
}

function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + "</span></p>";

  $("#textIp").val("");
  $("#box").append(userHtml);
  document.getElementById("bar-below").scrollIntoView(true);
}

function sendButton() {
  getResponse();
}

function heartButton() {
  buttonSendText("Hiii!");
}

$("#textIp").keypress(function (e) {
  if (e.which == 13) {
    getResponse();
  }
});
