import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GameTable from './components/gameTable.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    }
  }

  render() {
    return(
      <div className="App">
        <div className="App-body">
          <GameTable />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'));
