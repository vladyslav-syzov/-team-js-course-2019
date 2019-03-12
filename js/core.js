class Card{
    constructor(cardSuit){
        this.cardSuit = cardSuit;
    }
}

class Solitaire{
    constructor() {
        this.deck = [
            new Card('card_ah'),
        ];
      }
    
      shuffle() {
        alert("shuffling");
      }
}

let game = new Solitaire();