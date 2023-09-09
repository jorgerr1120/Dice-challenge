
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceimage = "dice" + randomNumber1 + ".png";//dice1.png - dice6.png

var randomDiceimageSource = "images/" + randomDiceimage;//images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceimageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceimageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceimageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player 1 wins!";
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins!";
}

else {
    document.querySelector("h1").innerHTML = "Draw.!";
}