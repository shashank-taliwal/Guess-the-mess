// Guessing the selected number using Binary Search in log2(n) steps
var chances = 20;
var low = 1;
var high = 1000000;
let game = false;
let mid = Math.floor(low + (high - low) / 2);

// Chances left will be updated over here
document.getElementById("chances").innerHTML =
  "<h2>Chances left :" + chances + "<h2>";

function decreaseChances() {
  if (game) {
    chances--;
    document.getElementById("chances").innerHTML =
      "<h2>Chances left :" + chances + "<h2>";
    if (chances == 0) {
      alert("Ohh Mann!! You Won!!");
    }
  }
}

function start() {
  if (game == false) {
    document.getElementById("number-div").style.visibility = "hidden";
    document.getElementById("game-opener").style.visibility = "visible";
    game = true;
    document.getElementById("selected-number").innerHTML = mid;
    document.getElementById("equal").innerHTML = "Noice!!";
  } else {
    window.location.href = "/feedback";
  }
}
// async function play() {
//   var noice = new Audio("Noice.mp3");
//   noice.play();
// }
function redirect() {
  if (game == true) {
    // await play();
    window.location.href = "/feedback";
  }
}
function increase() {
  if (game) {
    //Returned smaller element
    // low value is to be updated
    low = mid + 1;
    mid = Math.floor(low + (high - low) / 2);
    document.getElementById("selected-number").innerHTML = mid;
  } else {
    alert("start the game first!!");
  }
}

function decrease() {
  if (game) {
    //Returned greater element
    // high value is to be updated
    high = mid - 1;
    mid = Math.floor(low + (high - low) / 2);
    document.getElementById("selected-number").innerHTML = mid;
  } else {
    alert("start the game first!!");
  }
}

function play() {}
