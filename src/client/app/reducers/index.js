import { combineReducers } from 'redux';

import eventReducer from './event-reducer.js';

// Combine Reducers
var reducers = combineReducers({
    eventState: eventReducer
});

export default reducers;
