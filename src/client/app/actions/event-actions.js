import * as types from '../actions/action-types';

export function getEventsSuccess(events) {
  return {
    type: types.GET_EVENTS_SUCCESS,
    events
  };
}
