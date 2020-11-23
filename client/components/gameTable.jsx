import React from 'react';
import './gameTable.css';
import deckClass from './../helpers/deckManagers.jsx';

const Deck = new deckClass;

class GameTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actionState: 'none',
      cardsDeck: Deck.stack,
      playerDeck: [],
      aIDeck: [],
      playerBank: [],
      aIBank: [],
      moveCount: 0,
    };

  }

  startGame = () => {
    Deck.refresh();

  }

}

export default GameTable;
