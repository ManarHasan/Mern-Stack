class Deck {
    initialize() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        suits.forEach(suit => {
            faces.forEach(face => {
              deck.push(this.createCard(suit, face));
            });
          });
        this.deck = deck;
        console.log(deck);
      }
    createCard(suit, face){
        const card = {};
        card["suit"] = suit;
        card["face"] = face;
        return card;
    }
  }
kamal = new Deck;
console.log(kamal.initialize());