import React from 'react';
import {render} from 'react-dom';
import EventList from './eventlist.jsx';

class App extends React.Component {
  render () {
    return <EventList />;
  }
}

render(<App/>, document.getElementById('app'));
