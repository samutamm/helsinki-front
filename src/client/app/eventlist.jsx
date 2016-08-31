import React from 'react';

class Event extends React.Component {
  constructor(props) {
    super(props);
  }
  //<div onClick={this.handleClick.bind(this)}></div>
  render() {
    return (
      <div>
        <p>Eventum!</p>
      </div>
    );
  }
}

class EventsList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Event />
        <Event />
      </div>
    );
  }
}

export default EventsList;
