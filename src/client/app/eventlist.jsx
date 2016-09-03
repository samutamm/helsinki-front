import React from 'react';
import $ from "jquery";

const URL = "http://localhost:5000/events";
//const URL = "https://www.npmjs.com/package/react-fetch";

class Event extends React.Component {
  constructor(props) {
    super(props);
  }
  //<div onClick={this.handleClick.bind(this)}></div>
  render() {

      return (<div><p>Tuntematon</p></div>);
    

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
      url: URL,
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
