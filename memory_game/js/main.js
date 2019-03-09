var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  },
];

var cardsInPlay = [];
var matchCounter = 0;

var reset = function () {
  for (var i = 0; i < cards.length; i++) {
    document.getElementsByTagName('img')[i].setAttribute('src', 'images/back.png');
  }
  cardsInPlay = [];
  matchCounter = 0;
};

function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var checkForMatch = function(){
  if(cardsInPlay[0] === cardsInPlay[1]){
    matchCounter += 1;
    alert("You found a match!");
    cards = shuffle(cards); // shuffle cards only when there is a match (i.e. a win)
    //reset(); removed the reset here so that user can see for him/herself
  }
  else{
    alert("Sorry, try again.");
    //reset(); removed the reset here so that user can see for him/herself
    }
}
var flipCard = function(){
    var cardId = this.getAttribute('data-id');
    console.log("User flipped " + cards[cardId].rank);
    console.log("User flipped " + cards[cardId].suit);
    console.log("User flipped " + cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute('src', cards[cardId].cardImage)
    if(cardsInPlay.length === 2){
      checkForMatch();
      };
};

//flipCard(0);
//flipCard(2);

var createBoard = function(){
   //const cardTable = document.getElementById('game-board');
  for (var i = 0; i < cards.length; i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
    // cardTable.appendChild(cardElement);
    // Q: how does the above function know that the cards are suposed to be placed within the <main> tag of the HTML?
    // Ans: It is because of the 'game-board' Id that is nested between the <main> tags.
    // Q: Why does appendChild(), not use inverted commas for items inside the ()?
  };
};

//defines reset button
var button = document.getElementById('button');
button.addEventListener('click', reset);

createBoard();
