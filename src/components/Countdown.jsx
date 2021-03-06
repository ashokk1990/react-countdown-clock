import React, { Component } from "react";
import PropTypes from "prop-types";

class Countdown extends Component {
  state = {
    days: 0,
    hours: 0,
    min: 0,
    sec: 0
  };
  // to update every second changes.
  componentDidMount() {
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown = endDate => {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };

    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  };

  stop = () => {
    clearInterval(this.interval);
  };

  addLeadingZeros = value => {
    value = String(value);
    while (value.length < 2) {
      value = "0" + value;
    }
    return value;
  };

  render() {
    const countDown = this.state;
    return (
      <div className="Countdown">
        <div id="clockdiv">
          <div>
            <span className="days">{this.addLeadingZeros(countDown.days)}</span>
            <div className="smalltext">{countDown.days === 1 ? "Day" : "Days"}</div>
          </div>
          <div>
            <span className="hours">{this.addLeadingZeros(countDown.hours)}</span>
            <div className="smalltext">Hours</div>
          </div>
          <div>
            <span className="minutes">{this.addLeadingZeros(countDown.min)}</span>
            <div className="smalltext">Minutes</div>
          </div>
          <div>
            <span className="seconds">{this.addLeadingZeros(countDown.sec)}</span>
            <div className="smalltext">Seconds</div>
          </div>
        </div>
      </div>
    );
  }
}

Countdown.propTypes = {
  date: PropTypes.string.isRequired
};

Countdown.defaultProps = {
  date: new Date()
};

export default Countdown;
