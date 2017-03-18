import React from 'react';
import moment from 'moment';


class Timer extends React.Component {
  constructor(props) {
    super(props);

    // const metTime = moment('20170307T180000')
    // const now = moment(new Date())
    // const ddd = now - metTime
    // const a = moment.duration(ddd / 1000, 'seconds')
    // const c = a._data.hours

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
      <div>
        <h2>{ moment.duration(diff/1000, 'seconds')._data.days }</h2>
        <h2>{ moment.duration(diff/1000, 'seconds')._data.hours }</h2>
        <h2>{ moment.duration(diff/1000, 'seconds')._data.seconds }</h2>
      </div>
    );
  }
}

export default Timer
