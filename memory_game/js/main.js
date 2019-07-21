var cards = [
{
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
},
{
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
},
{
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
},
{
  rank: "queen",
  suit: "hearts",
  cardImage: "images/-queen-of-hearts.png"
}
];

var cardsInPlay = [];

 function checkForMatch () {
  //if (cardsInPlay.length == 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
      } else {
      alert("Sorry, try again.");
      }
  }

var flipCard = function () {  
    var cardId =this.getAttribute('data-id');
    console.log("User flipped" + " " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank); 
    this.setAttribute('src', 'cards[cardId].cardImage');
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    if (cardsInPlay.length == 2) {
      checkForMatch();
      cardsInPlay = [] ;
    }
}

  
  
console.log(cardsInPlay);


//var createBoard = function() {
  //for (var i=0; i < cards.length; i++);
//};      


function createBoard (); {
  var board = document.getElementById("game-board");
  for (var i = 0; i < cards.length; i++) {
  var cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    board.appendChild(cardElement);
  }
};

//defines reset button
var button = document.getElementById('button');
button.addEventListener('click', reset);
createBoard();