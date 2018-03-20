import React from "react";
import PropTypes from "prop-types";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
class Clock extends React.Component {
    state = {
        currentTimestamp: new Date(),
        formatFlag: true,
        hours: new Date().getHours()
    };



    componentDidMount() {
        setInterval(() => {
            this.setState({ currentTimestamp: new Date() });
        }, 1);
    }

    changeFormat = () => {
      if(this.state.formatFlag) {
        this.setState((prevState) => {
          return {hours: this.state.currentTimestamp.getHours(), formatFlag: false}
        })
      } else {
        this.setState((prevState) => {
          return {hours: (this.state.currentTimestamp.getHours() % 12) || 12, formatFlag: true}
        })
      }


    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 clock">
                        <p>
                            {days[this.state.currentTimestamp.getDay()]}
                            |
                            {this.state.currentTimestamp.getDate()}
                            |
                            {months[this.state.currentTimestamp.getMonth()]}
                            |
                            {this.state.currentTimestamp.getFullYear()}
                        </p>
                        {this.state.hours}
                        |
                        {this.state.currentTimestamp.getMinutes()}
                        |
                        {this.state.currentTimestamp.getSeconds()}
                        |
                        {this.state.currentTimestamp.getMilliseconds()}
                        <p />
                    </div>

                    <button onClick={this.changeFormat} className="btn btn-primary">Change Format</button>
                </div>
            </div>
        );
    }
}

export default Clock;
