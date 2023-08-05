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
  cardImage: "images/queen-of-hearts.png"
}
];

// empty array to fill with cards
var cardsInPlay = [];

// creates game board
function createBoard () {
  const board = document.getElementById("game-board");
  for (let i = 0; i < cards.length; i++) {
  const cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    board.appendChild(cardElement);
  }
};
createBoard();

// card flip functionality
function flipCard() {  
    const cardId = this.getAttribute('data-id');
    console.log("User flipped" + " " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank); 
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    this.setAttribute("src", cards[cardId].cardImage);
    if (cardsInPlay.length == 2) {
      checkForMatch();
      cardsInPlay = [];
    }
};

// checks for a match
 function checkForMatch () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
      resetGame();
      } else {
      alert("Sorry, try again.");
      resetGame();
      }
  }

  // function randomize() {
  //   const cardId = this.getAttribute('data-id');
  //   const PicCard = cards[cardId].cardImage[Math.floor(Math.random() * cardPic.length)];
  //   console.log(PicCard);
  // }

  function resetGame () {
    const board = document.getElementById("game-board");
    board.innerHTML = '';
    createBoard();
  }

// //defines reset button & check if button is null
const button = document.getElementById('button');
if (button) {
  button.addEventListener('click', reset);
}

