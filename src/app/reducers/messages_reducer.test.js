import reducer from './messages_reducer';
import initialState from './initialState';
import * as types from '../actions/types';
import messages from '../../messages.json';

describe('messages reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState.messages);
  });

  it('should handle LOAD_MESSAGES', () => {
    expect(reducer([], {
      type: types.LOAD_MESSAGES,
      messages
    })).toEqual(messages);
  });
});
