import React from 'react';
import EventList from './eventlist.jsx';

class Mainpage extends React.Component {
  render () {
    return (
      <div>
        <h1>Helsinki tapahtumat</h1>
        <EventList url={this.props.route.url}/>
      </div>
    );
  }
}

export default Mainpage;
