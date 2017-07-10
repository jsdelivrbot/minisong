import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Background from './love-svg.jpg';



const sectionStyle = {
  width: '100%',
  height: '100%',
  backgroundImage: `url(${Background})`,
};


ReactDOM.render(
<div className="bg" style={sectionStyle}>
  <App />
</div>
, document.getElementById('root'));
registerServiceWorker();
