import React from 'react';
import './Video.css'

class Video extends React.Component {
  render() {
    return (
      <div >
        <video className="video-background" src="http://video.webmfiles.org/big-buck-bunny_trailer.webm" autoPlay loop />
      </div>
    );
  }
}

export default Video

// ReactDOM.render(<Video sources={sources} />, root);
