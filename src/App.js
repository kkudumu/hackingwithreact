import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Detail from './pages/Detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Detail message="This is coming from props!"/>
      </div>
    );
  }
}

export default App;
