$(document).ready(function () {
  $("#continue-button").toggle();
  $("#reset-button").toggle();
  $("#same-num-button").toggle();
});

var userResult;
var computerResult;
var tempUserResult;
var userScore = 0;

var compScore = 0;
const howManyToWin = 3;

//game starts button
function game() {
  let winningNumber = Math.floor(Math.random() * 6) + 1;
  computerResult = Math.floor(Math.random() * 6) + 1;
  $("#play-button").toggle();

  $(".result").append(
    "<div class='alert alert-light game-message' role='alert'>Your number is " +
      "<span class='badge badge-dark'>" +
      userResult +
      "</span> Computer number " +
      "<span class='badge badge-dark'>" +
      computerResult +
      "</span></div>"
  );

  $(".result").append(
    "<div class='alert alert-light game-message' role='alert'> Winning number is: <span class='badge badge-warning'>" +
      winningNumber +
      "</span></div>"
  );

  if (userResult === winningNumber) {
    userScore++;

    $(".result").append(
      "<div class='alert alert-success game-message' role='alert'>You guessed it!</div>"
    );
  } else {
    $(".result").append(
      "<div class='alert alert-warning game-message' role='alert'>No luck :( Roll again! </div>"
    );
  }

  if (computerResult === winningNumber) {
    compScore++;
    $(".result").append(
      "<div class='alert alert-success game-message' role='alert'>Computer guessed it!</div>"
    );
  } else {
    $(".result").append(
      "<div class='alert alert-warning game-message' role='alert'>Computer didn't guess it!</div>"
    );
  }
  $(".result").append(
    "<div class='alert alert-primary game-message' role='alert'>Score: Player " +
      "<span class='badge badge-dark'>" +
      userScore +
      "</span> Computer " +
      "<span class='badge badge-dark'>" +
      compScore +
      "</span></div>"
  );

  if (userScore === howManyToWin && compScore === howManyToWin) {
    winningReset();
    $(".result").append(
      "<div class='alert alert-warning game-message' role='alert'>DRAW! You think like a computer!  Score: Player <span class='badge badge-dark'>" +
        userScore +
        "</span> Computer " +
        "<span class='badge badge-dark'>" +
        compScore +
        "</span></div>"
    );
  } else if (userScore === howManyToWin) {
    winningReset();
    $(".result").append(
      "<div class='alert alert-success game-message' role='alert'>You won!  Score: Player <span class='badge badge-dark'>" +
        userScore +
        "</span> Computer " +
        "<span class='badge badge-dark'>" +
        compScore +
        "</span></div>"
    );
  } else if (compScore === howManyToWin) {
    winningReset();
    $(".result").append(
      "<div class='alert alert-warning game-message' role='alert'>Computer won! Score: Player <span class='badge badge-dark'>" +
        userScore +
        "</span> Computer " +
        "<span class='badge badge-dark'>" +
        compScore +
        "</span></div>"
    );
  }

  $("#continue-button").toggle();
  $("#play-button").prop("disabled", true);
}

function winningReset() {
  $("#continue-button").toggle();
  $("#reset-button").toggle();
  $(".game-message").remove();
}

function nextRoll() {
  $("#play-button").toggle();
  $(".select-number").toggle();
  $("#continue-button").toggle();
  $("#same-num-button").toggle();
  $(".game-message").remove();
  $("#num-select").remove();
  $(".pre-num").remove();
  $("#same-num-button").append(
    "<span class='badge badge-dark pre-num'>" + userResult + "</span>"
  );
  tempUserResult = userResult;
}

function playerNumber(result) {
  $("#num-select").remove();
  userResult = result;
  $("#play-button").prop("disabled", false);
  $(".select-number-box").append(
    "<span id='num-select'>Number selected: <span class='badge badge-dark'>" +
      userResult +
      "</span></span>"
  );
}

function startGame() {
  $(".select-number").toggle();
  $("#same-num-button").hide();
  game();
}

function sameNum() {
  userResult = tempUserResult;
  $("#same-num-button").toggle();
  $(".select-number").toggle();
  game();
}

function resetGame() {
  userScore = 0;
  compScore = 0;
  $("#reset-button").toggle();
  $(".select-number").toggle();
  $("#play-button").toggle();
  $(".game-message").remove();
  $("#play-button").prop("disabled", true);
}
