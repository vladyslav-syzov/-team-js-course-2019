/*
	Jack is treadted as 11
	Queen is treated as 12
	King is treated as 13
	Ace is treated as 1
*/

const GAME_SETTINGS = {
	numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
	signs: ['', 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
	amounts: {
		total: 52,
		dealDeck: 24,
		decks: [1, 2, 3, 4, 5, 6, 7], // amount of cards in every playing deck
		deal: 1
	},
	suits: [0, 1, 2, 3], //hearts, diamonds, clovers, spades
	suitsNames: ['hearts', 'diamonds', 'clovers', 'spades'],
	colors: [0, 1] //red, black
}

window.addEventListener('load', function() {
	new Game();
});

function Game() {
	this.dealDeck = null;
	this.finishDecks = [];
	this.playDecks = [];

	this.$stashContainer = document.getElementById('stashDecks');
	this.$playContainer = document.getElementById('playDecks');
	this.$el = document.getElementById('game');

	this.cardKits = this.generateCardKits();

	this.createDecks();
	this.registerEvents();
}

function DealDeck() {
	Deck.apply(this, arguments);

	//deal deck must create extra deck node nearby to place opened cards there
	this.$el.classList.add('flat');
}

function FinishDeck() {
	Deck.apply(this, arguments);

	this.$el.classList.add('flat');

	this.cards = [];
	this.suit = null;
}

function PlayingDeck(cardsKit) {
	Deck.apply(this, arguments);

	if (this.cards.length > 1) {
		this.cards.slice(-1).open();
	}
}

function Deck(cardsKit) { // cards kit is array of objects like this [{number: 1, suit: 0, color: 0}, {number: 6, suit: 1, color: 1}]
	this.cards = [];

	this.$el = document.createElement('div');
	this.$wrapper = document.createElement('div');

	if (cardsKit.length) {
		this.createCards(cardsKit);
	}

	//decks must be wrapped in .col div
	this.$wrapper.appendChild(this.$el);
	this.$wrapper.classList.add('col');
	this.$el.classList.add('deck');

	this.registerEvents();
}

function Card(color, suit, number) {
	this.color = color;
	this.suit = suit;
	this.number = number;
	this.isOpen = false;

	this.$el = document.createElement('div');
	this.$el.classList.add('card', GAME_SETTINGS.suitsNames[suit]);
	this.$el.innerText = GAME_SETTINGS.signs[number];

	this.registerEvents();
}

Game.prototype = {
	createDecks: function() {
		let kits = this.getShuffledDecks();

		this.$stashContainer.innerHTML = '';
		this.$playContainer.innerHTML = '';

		//create decks here
		this.dealDeck = new DealDeck(kits.splice(0, GAME_SETTINGS.amounts.dealDeck));
		this.$stashContainer.appendChild(this.dealDeck.$wrapper);

		for(let i = 0; i < GAME_SETTINGS.suits.length; i++) {
			let finishDeck = new FinishDeck([]);

			this.$stashContainer.appendChild(finishDeck.$wrapper);
		}

		let deckSettings = GAME_SETTINGS.amounts.decks;

		for(let i = 0; i < deckSettings.length; i++) {
			let deck = new PlayingDeck(kits.splice(0, deckSettings[i]));

			this.$playContainer.appendChild(deck.$wrapper);
		}
	},

	getProperFinishDeck: function(suit) {
		return this.finishDecks.filter((deck) => deck.suit === suit)[0]
				|| this.finishDecks.filter((deck) => deck.isEmpty())[0];
	},

	registerEvents: function() {

	},

	generateCardKits: function() {
	//generate card data using settings
		return [
			{color: 0, suit: 0, number: 1},
			{color: 0, suit: 0, number: 2},
			{color: 0, suit: 0, number: 3},
			{color: 0, suit: 0, number: 4},
			{color: 0, suit: 0, number: 5},
			{color: 0, suit: 0, number: 6},
			{color: 0, suit: 0, number: 7},
			{color: 0, suit: 0, number: 8},
			{color: 0, suit: 0, number: 9},
			{color: 0, suit: 0, number: 10},
			{color: 0, suit: 0, number: 11},
			{color: 0, suit: 0, number: 12},
			{color: 0, suit: 0, number: 13},

			{color: 0, suit: 1, number: 1},
			{color: 0, suit: 1, number: 2},
			{color: 0, suit: 1, number: 3},
			{color: 0, suit: 1, number: 4},
			{color: 0, suit: 1, number: 5},
			{color: 0, suit: 1, number: 6},
			{color: 0, suit: 1, number: 7},
			{color: 0, suit: 1, number: 8},
			{color: 0, suit: 1, number: 9},
			{color: 0, suit: 1, number: 10},
			{color: 0, suit: 1, number: 11},
			{color: 0, suit: 1, number: 12},
			{color: 0, suit: 1, number: 13},

			{color: 1, suit: 2, number: 1},
			{color: 1, suit: 2, number: 2},
			{color: 1, suit: 2, number: 3},
			{color: 1, suit: 2, number: 4},
			{color: 1, suit: 2, number: 5},
			{color: 1, suit: 2, number: 6},
			{color: 1, suit: 2, number: 7},
			{color: 1, suit: 2, number: 8},
			{color: 1, suit: 2, number: 9},
			{color: 1, suit: 2, number: 10},
			{color: 1, suit: 2, number: 11},
			{color: 1, suit: 2, number: 12},
			{color: 1, suit: 2, number: 13},

			{color: 1, suit: 3, number: 1},
			{color: 1, suit: 3, number: 2},
			{color: 1, suit: 3, number: 3},
			{color: 1, suit: 3, number: 4},
			{color: 1, suit: 3, number: 5},
			{color: 1, suit: 3, number: 6},
			{color: 1, suit: 3, number: 7},
			{color: 1, suit: 3, number: 8},
			{color: 1, suit: 3, number: 9},
			{color: 1, suit: 3, number: 10},
			{color: 1, suit: 3, number: 11},
			{color: 1, suit: 3, number: 12},
			{color: 1, suit: 3, number: 13}			
		];
	},

	getShuffledDecks: function() {
		let kits = this.cardKits.slice();
		let shuffledKits = [];

		while (kits.length) {
			let randomIndex = Math.round(Math.random() * (kits.length - 1));

			shuffledKits.push(kits.splice(randomIndex, 1)[0]);
		}

		return shuffledKits;
	}
}

Deck.prototype = {
	createCards: function(cardsAmount) {
		for(var i = 0; i < cardsAmount; i++){
			var card = new Card(i % 2, i % 4, i % 13);
			this.cards.push(card);
		}
	},

	registerEvents: function() {

	}
}

Card.prototype = {
	select: function() {
		this.$el.classList.add('selected');
	},

	unselect: function() {
		this.$el.classList.remove('selected');
	},

	open: function() {
		this.$el.classList.add('open');
		this.isOpen = true;
	},

	onClick: function() {

	},

	onDoubleClick: function() {

	},

	registerEvents: function() {
		this.$el.addEventListener('click', this.onClick.bind(this));
		this.$el.addEventListener('dblclick', this.onDoubleClick.bind(this));
	}
}

DealDeck.prototype = Object.assign(Object.create(Deck.prototype), {
	onClick: function() {

	}
});

FinishDeck.prototype = Object.assign(Object.create(Deck.prototype), {
	isEmpty: function() {
		return !(this.suit || this.cards.length);
	},

	setEmpty: function() {
		this.suit = null;
	}
});

PlayingDeck.prototype = Object.assign(Object.create(Deck.prototype), {
	
});