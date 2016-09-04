import React from 'react';
import $ from "jquery";

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
    //debugger;
    return (
      <div style={{border: 1+'px solid green'}}>
        <p>{eventName}</p>
        <img src={image} style={{width: 50 + 'px', height: 50 + 'px'}}/>
      </div>
    );
  }
}


class EventsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }
  componentDidMount() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        const resultJson = JSON.parse(data)
        this.setState({
          events: resultJson
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(URL, status, err.toString());
      }.bind(this)
    });
  }
  render() {
    var eventNodes = this.state.events.map(function(event) {
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
