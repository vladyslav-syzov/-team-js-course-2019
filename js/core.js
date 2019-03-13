class Card {
	constructor(cardSuit) {
		this.cardSuit = cardSuit;
	}
}

class Solitaire {
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

var fn = function() {

	var card = document.getElementsByClassName('card')[0];

	card.onmousedown = function(e) {

		var coords = getCoords(card);
		var shiftX = e.pageX - coords.left;
		var shiftY = e.pageY - coords.top;

		card.style.position = 'absolute';
		document.body.appendChild(card);
		moveAt(e);

		card.style.zIndex = 1000; // над другими элементами

		function moveAt(e) {
			card.style.left = e.pageX - shiftX + 'px';
			card.style.top = e.pageY - shiftY + 'px';
		}

		document.onmousemove = function(e) {
			moveAt(e);
		};

		card.onmouseup = function() {
			document.onmousemove = null;
			card.onmouseup = null;
		};

	};

	card.ondragstart = function() {
		return false;
	};

	function getCoords(elem) { // кроме IE8-
		var box = elem.getBoundingClientRect();
		return {
			top: box.top + pageYOffset,
			left: box.left + pageXOffset
		};
	}
};

document.addEventListener('DOMContentLoaded', fn, false);
