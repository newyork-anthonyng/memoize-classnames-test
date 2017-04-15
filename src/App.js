import React, { Component } from 'react';
/*
 * Toggle between the two implementations of classnames
 * by commenting them in/out
 */
import cx from 'classnames';
// import cx from './memoize-classnames';
import './App.css';

import Perf from 'react-addons-perf';

class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
  }

  componentDidUpdate() {
    Perf.stop();
    Perf.printInclusive();
    Perf.printWasted();
  }

  handleButtonPress = () => {
    Perf.start();

    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    const headerClassName = cx(
      'header',
      {
        'header-even': this.state.counter % 2 === 0,
        'header-odd': this.state.counter % 2 !== 0,
      },
    );
    const buttonClassName = cx(
      'button',
      {
        'button-even': this.state.counter % 2 === 0,
        'button-odd': this.state.counter % 2 !== 0,
      },
    );

    return (
      <div className="App">
        <h1 className={headerClassName}>{this.state.counter}</h1>
        <button className={buttonClassName} onClick={this.handleButtonPress}>
          Increment
        </button>
      </div>
    );
  }
}

export default App;
