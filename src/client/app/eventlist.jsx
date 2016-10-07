import React from 'react';
import $ from "jquery";

const eventStyle = {
  border: 2+'px solid green'
};

const eventImage = {
  width: 50 + 'px',
  height: 50 + 'px',
  border: 2 + 'px solid white'
};

class Event extends React.Component {
  constructor(props) {
    super(props);
  }
  //<div onClick={this.handleClick.bind(this)}></div>
  render() {
    var names = this.props.data.name;
    var eventName;
    if (names === null) {
      eventName = "Tuntematon";
    } else {
      eventName = names.fi;
    }
    var image = this.props.data.image;
    return (
      <div style={eventStyle}>
        <h1 style={{fontStyle: 'italic'}} >{eventName}</h1>
        <img src={image} style={eventImage}/>
      </div>
    );
  }
}


class EventsList extends React.Component {
  render() {
    var eventNodes = [].map(function(event) {
      return (
        <Event data={event} key={event._id.$oid}>
        </Event>
      );
    });
    return (
      <div>
        {eventNodes}
      </div>
    );
  }
}

export default EventsList;
