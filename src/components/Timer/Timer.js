import React from "react";
import "./Timer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStop, faPlay, faPause} from '@fortawesome/free-solid-svg-icons'

class Timer extends React.Component {
    interval = null;
    bellRing = new Audio('../../assets/bell-ring.mp3')

    state = {
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        play: false
    }

    startTimer = () => {
        this.interval && clearInterval(this.interval);

        this.interval = setInterval(function(){
            const {milliseconds, seconds, minutes} = this.state;
            const overMil = milliseconds + 1 >= 100;
            const overSec = overMil && ( seconds + 1 >= 60 );
            const overMin = overSec && ( minutes + 1 >= 60 );

            this.setState(({milliseconds, seconds, hours, minutes})=>({
                milliseconds: overMil ? 0 : ++milliseconds,
                seconds: overSec ? 0 : overMil ? ++seconds : seconds,
                minutes: overMin ? 0 : overSec ? ++minutes : minutes,
                hours: overMin ? ++hours : hours
            }));
        }.bind(this), 10);
    }

    pauseTimer = () => {
        this.interval && clearInterval(this.interval);
    }

    stopTimer = () => {
        this.interval && clearInterval(this.interval);

        this.setState({
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0
        });
    }

    componentDidMount() {
        this.bellRing.removeEventListener('ended', () => this.setState({ play: false }));
    }

    componentWillUnmount() {
        this.interval && clearInterval(this.interval);
        this.bellRing.removeEventListener('ended', () => this.setState({ play: false }));
    }

    formatTimerNum = (num) => {
        return num <= 9 ? "0" + num : String(num);
    }

    togglePlay = () => {
        this.state.play ? this.bellRing.play() : this.bellRing.pause();
        this.setState(({play})=>({
            play: !play
        }));
    }

    render() {
        const {milliseconds, hours, minutes, seconds} = this.state;
        return(
            <div className="timer col-12">
                <div className="timer-clocks">
                    <span className="hours">
                        {this.formatTimerNum(hours)}
                    </span>
                    <span>:</span>
                    <span className="minutes">
                        {this.formatTimerNum(minutes)}
                    </span>
                    <span>:</span>
                    <span className="seconds">
                        {this.formatTimerNum(seconds)}
                    </span>
                    <span>:</span>
                    <span className="milliseconds">
                        {this.formatTimerNum(milliseconds)}
                    </span>
                </div>

                 <div className="timer-btn-panel">
                     <button type="button" onClick={this.startTimer} className="btn btn-success btn-play"><FontAwesomeIcon icon={faPlay} /></button>
                     <button type="button" onClick={this.pauseTimer} className="btn btn-info btn-pause"><FontAwesomeIcon icon={faPause} /></button>
                     <button type="button" onClick={this.stopTimer} className="btn btn-danger btn-stop"><FontAwesomeIcon icon={faStop} /></button>
                     <button type="button" onClick={this.togglePlay} className="btn btn-danger btn-warning"><FontAwesomeIcon icon={faPlay} /></button>
                 </div>
            </div>
        )
    }
}

export  default Timer;