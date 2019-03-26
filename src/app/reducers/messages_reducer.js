import { LOAD_MESSAGES } from '../actions/types';
import initialState from './initialState';

export default function messagesReducer(state = initialState.messages, action) {
  switch(action.type) {
    case LOAD_MESSAGES:
      return Object.assign([], action.messages);
    default:
      return state;
  }
}
