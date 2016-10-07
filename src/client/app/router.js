import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Mainpage from './mainpage.jsx';
import About from './about.jsx';
import App from './app.jsx';

export default(
  <Router history={browserHistory}>
    <Route path="/" url="http://localhost:5000/events" component={App}>
      <Route path="events" events={[]} component={Mainpage}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>
);
