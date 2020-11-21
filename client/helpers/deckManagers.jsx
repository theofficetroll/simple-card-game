class Deck {
  constructor() {
    this.stack = [];
    this.count = 0;
    this.refresh();
    this.shuffle();
  }
  draw() {
    if (this.count === 0) {
      return -1;
    }
    this.count--;
    return this.stack.pop()
  }
  getCount() {
    return this.count;
  }
  refresh() {
    this.stack = [];
    let suits = ['♠', '♥', '♦', '♣'];
    let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let currentCard;
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        currentCard = ranks[j] + suits[i];
        this.stack.push(currentCard);
      }
    }
    this.count = 52;
  }
  shuffle() {
    let remaining = this.count;
    while (remaining) {
      let index, card1, card2;
      remaining--;
      index = Math.floor(Math.random() * remaining);
      card1 = this.stack[remaining];
      card2 = this.stack[index];
      this.stack[index] = card1;
      this.stack[remaining] = card2;
    }
  }

}

modules.export = {
  Deck,
}
