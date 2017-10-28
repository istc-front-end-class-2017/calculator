import React, { Component } from 'react';
import '../stylings/App.css';

import Display from './Display';
import Button from './Button';

class App extends Component {
  render() {

    const buttons = [];
    for (let i = 0; i < 10; i++){
      buttons.push(<Button number={i}/>);
    }

    console.log(buttons);

    return (
      <div className="test">
        <Display />
        {buttons}
      </div>
    );
  }
}

export default App;
