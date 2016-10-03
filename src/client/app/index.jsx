import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import Mainpage from './mainpage.jsx';
import About from './about.jsx';

class App extends React.Component {
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

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="events" url="http://localhost:5000/events" component={Mainpage}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>,
document.getElementById('app'));
