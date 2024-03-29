import React from 'react'
import moment from 'moment'
import './Timer.css'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      now: moment(new Date())
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      now: moment(new Date())
    })
  }

  render() {
    const metTime = moment('20170307T180000')
    const diff = this.state.now - metTime
    const diffData = moment.duration(diff / 1000, 'seconds')
      ._data

    const diff2 = moment.duration(
      moment(new Date('03/07/2017 18:15:00')).diff(
        moment(new Date())
      )
    )
    const days2 = Math.abs(parseInt(diff2.asDays()))

    const manageDate = date => {
      if (date.months) {
        date.days += 30 * date.months
      }
      return date
    }

    const result = manageDate(diffData)

    return (
      <div className="container">
        <div className="counter">
          <div className="title">
            <div className="minisong">
              <div className="mini">Mini</div>
              <div className="amp">&amp;</div>
              <div className="song">Song</div>
            </div>
            {/* <div className="together">been together for</div> */}
          </div>

          <div className="inner">
            <div className="days-title fade-in one">
              Days
              <div className="days">{days2}</div>
            </div>
            <div className="hours-title fade-in two">
              Hours
              <div className="hours">{result.hours}</div>
            </div>
            <div className="minutes-title fade-in three">
              Minutes
              <div className="minutes">
                {result.minutes}
              </div>
            </div>
            <div className="seconds-title fade-in four">
              Seconds
              <div className="seconds">
                {result.seconds}
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Timer
