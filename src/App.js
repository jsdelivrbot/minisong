import React, { Component } from 'react'
import Timer from './component/Timer.jsx'
import { Background } from './App.style.js'

// import Background from './love-svg.jpg';

class App extends Component {
  render() {
    return (
      <div>
        <Background />
        <Timer />
      </div>
    )
  }
}

export default App
