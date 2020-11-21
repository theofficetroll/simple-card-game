import React from 'react';
import './gameTable.css';
import Deck from './../helpers/deckManagers.jsx';

class GameTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actionState: 'none',
      cardsDeck: [],
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
