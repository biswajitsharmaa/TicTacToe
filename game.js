//keep track of how many click are done by both the players
var num = 1;

//array that keeps clicked box status
const boxes = [false, false, false, false, false, false, false, false, false];

//moves by blue
const blues = [0, 0, 0, 0, 0, 0, 0, 0, 0];

//tracking moves by red
const reds = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//function that returns true if num is even
var even = () => {
  if (num % 2 === 0) return true;
  else return false;
};

//clicking the squares
function play(e, index) {
  --index;
  console.log(num);
  if (!isClicked(e, index)) {
    const ele = document.getElementById(e.target.id);
    if (even()) {
      ele.style.backgroundColor = "red";
      reds[index] = 1;
    } else {
      ele.style.backgroundColor = "blue";
      blues[index] = 1;
    }
    num++;
    boxes[index] = true;
    if (redWins()) {
      //notify that red wins
      document.getElementById("notice").innerHTML = "Red Wins !";

      //reload after win
      reload();
    } else if (blueWins()) {
      //notify that red wins
      document.getElementById("notice").innerHTML = "Blue Wins !";

      //reload after win
      reload();
    } else if (num === 10) {
      //if its a draw
      document.getElementById("notice").innerHTML = "It's a Draw !";
      //reload after draw
      reload();
    }
  }
}

//check if the box is already clicked
function isClicked(e, index) {
  if (boxes[index] === false) {
    return false;
  } else {
    document.getElementById("notice").innerHTML = "Already Clicked !";
    return true;
  }
}
//checking did the red win
function redWins() {
  if (reds[0] === 1 && reds[1] === 1 && reds[2] === 1) return true;
  else if (reds[3] === 1 && reds[4] === 1 && reds[5] === 1) return true;
  else if (reds[6] === 1 && reds[7] === 1 && reds[8] === 1) return true;
  else if (reds[0] === 1 && reds[3] === 1 && reds[6] === 1) return true;
  else if (reds[1] === 1 && reds[4] === 1 && reds[7] === 1) return true;
  else if (reds[2] === 1 && reds[5] === 1 && reds[8] === 1) return true;
  else if (reds[0] === 1 && reds[4] === 1 && reds[8] === 1) return true;
  else if (reds[2] === 1 && reds[4] === 1 && reds[6] === 1) return true;
  else return false;
}
//checking did the blue win
function blueWins() {
  if (blues[0] === 1 && blues[1] === 1 && blues[2] === 1) return true;
  else if (blues[3] === 1 && blues[4] === 1 && blues[5] === 1) return true;
  else if (blues[6] === 1 && blues[7] === 1 && blues[8] === 1) return true;
  else if (blues[0] === 1 && blues[3] === 1 && blues[6] === 1) return true;
  else if (blues[1] === 1 && blues[4] === 1 && blues[7] === 1) return true;
  else if (blues[2] === 1 && blues[5] === 1 && blues[8] === 1) return true;
  else if (blues[0] === 1 && blues[4] === 1 && blues[8] === 1) return true;
  else if (blues[2] === 1 && blues[4] === 1 && blues[6] === 1) return true;
  else return false;
}

//to reload the page after 2 seconds
function reload() {
  setTimeout(() => {
    window.location.reload(true);
  }, 2000);
}
