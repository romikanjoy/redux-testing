import * as actions from './index';
import * as types from './types';
import messages from '../../messages.json';

describe('actions', () => {
  it('should create an action to load list of messages', () => {
    
    const expectedAction = {
      type: types.LOAD_MESSAGES,
      messages
    };

    expect(actions.loadMessages(messages)).toEqual(expectedAction);
  });
});
