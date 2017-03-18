import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer.jsx'


// const metTime = moment('20170307T180000')
// const now = moment(new Date())
// const ddd = now - metTime
// const a = moment.duration(ddd / 1000, 'seconds')
// const c = a._data.seconds



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

