import React, { Component } from 'react';
import Timer from './component/Timer.jsx'
import { Container } from './App.style.js'

// import Background from './love-svg.jpg';

// const sectionStyle = {
//   width: '100%',
//   height: '100%',
//   backgroundImage: `url(${Background})`,
// };

class App extends Component {
  render() {
    return (
      <Container>
        <Timer></Timer>
      </Container>
    );
  }
}

export default App;
