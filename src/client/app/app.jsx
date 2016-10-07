import React from 'react';
import $ from "jquery";
import { Link } from 'react-router';

class App extends React.Component {
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
        //console.error(URL, status, err.toString());
      }.bind(this)
    });
  }
  render () {
    return(
      <div>
        <h1>Helsinki</h1>
        <ul className="header">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
