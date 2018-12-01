import React from 'react';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    
    this.changeIndex = this.changeIndex.bind(this);
  }
  
  changeIndex(index) {
    this.setState({index: index});
  }
  
  render() {
    return (
    <div>
      <ul className="tabs"> 
        <h1 onClick={() => this.changeIndex(0)}>{this.props.tabsInfo[0].title}</h1>
        <h1 onClick={() => this.changeIndex(1)}>{this.props.tabsInfo[1].title}</h1>
        <h1 onClick={() => this.changeIndex(2)}>{this.props.tabsInfo[2].title}</h1>
        <article>{this.props.tabsInfo[this.state.index].content}</article>
      </ul>
    </div>);
  }
} 

export default Tab;