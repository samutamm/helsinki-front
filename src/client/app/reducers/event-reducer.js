import * as types from '../actions/action-types';

const initialState = {
  events: []
}

const eventReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.GET_EVENTS_SUCCESS:
      return Object.assign({}, state, { events: action.events });
  }
  return state;
}

export default eventReducer;
