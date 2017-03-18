import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer.jsx'
// import Video from './components/Video.jsx'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer />
      </div>
    );
  }
}


// setInterval(App, 1000);

export default App;

