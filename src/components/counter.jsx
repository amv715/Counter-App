import React, { Component } from 'react';
class Counter extends Component {
  state = {
    count: 1,
  };
  render() {
    let classes = this.getBadgeClasses();
    return (
      <div>
        <span className = {this.getBadgeClasses()}>{this.formatCount()}</span> 
        <button className = "btn btn-secondary btn-sm"> Increment </button>
      </div>
    );
  }
  formatCount()
  {
      const {count} = this.state;
      return count===0 ? 'Zero' : count;
  }
  getBadgeClasses()
  {
      let classes = "badge m-2 badge-";
      if(this.state.count==0)
      {
          classes += "warning";
      }
      else
      {
          classes += "primary"
      }
      return classes;
  }
}

export default Counter;
