import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import router from './router';

//https://css-tricks.com/learning-react-redux/
render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('app')
);
