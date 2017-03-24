import React from 'react';
import moment from 'moment';
import './Timer.css'


class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      now: moment(new Date()),
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      now: moment(new Date()),
    });
  }

  render() {

    let metTime = moment('20170307T180000')
    let diff = this.state.now - metTime

    return (
    <div className="container">
      <div className="counter">
        <div className="minisong">
        <div className="title">Mini&amp;Song<br></br>been together for</div>
        </div>
        <div className="inner">
          <div className="days-title">Days
            <div className="days">{ moment.duration(diff/1000, 'seconds')._data.days }</div>
          </div>
          <div className="hours-title">Hours
            <div className="hours">{ moment.duration(diff/1000, 'seconds')._data.hours }</div>
          </div>
          <div className="minutes-title">Minutes
            <div className="minutes">{ moment.duration(diff/1000, 'seconds')._data.minutes }</div>
          </div>
          <div className="seconds-title">Seconds
            <div className="seconds">{ moment.duration(diff/1000, 'seconds')._data.seconds }</div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Timer
