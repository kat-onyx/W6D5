import React from 'react';
// import JobIndex from './JobIndex';

class Clock extends React.Component {
  constructor() {
    super();
    
    this.state = {
      time: new Date(),
      
    };
    
    this.tick = this.tick.bind(this);
  }
  
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  tick() {
    this.setState({time: new Date()});
  }
  
  render() {
    return (
      <div className="clock">
        <h1 className="clock-title">JK Time</h1>
        <span className="hours">{     this.state.time.getHours() }:</span>
        <span className="minutes">{     this.state.time.getMinutes() }:</span>
        <span className="seconds">{     this.state.time.getSeconds() }</span>
      </div>  
    );
  }
}

export default Clock;