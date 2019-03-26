import React from 'react';
import { shallow } from 'enzyme';
import { MessageList } from './MessageList';
import MessageListItem from './MessageListItem';

describe('MessageList', () => {
  const mockLoadMessages = jest.fn();

  it('should render correctly before messages are loaded and loadMessages action to be dispatched', () => {
    const props = {
      messages: null,
      loadMessages: mockLoadMessages
    };
    const wrapper = shallow(<MessageList {...props} />);

    expect(wrapper.find('.lead').text()).toEqual('Loading Messages...');
    expect(mockLoadMessages.mock.calls.length).toBe(1);
  });

  it('should render correctly if an empty list of messages are loaded.', () => {
    const props = {
      messages: [],
      loadMessages: mockLoadMessages
    };
    const wrapper = shallow(<MessageList {...props} />);
    const leadText = 'You do not have any messages.';

    expect(wrapper.find('.lead').text()).toEqual(leadText);
    expect(wrapper.find(MessageListItem)).toHaveLength(0);
  });

  it('should render correctly after messages are loaded.', () => {
    const props = {
      messages: [
        {
          id: 0,
          title: 'Test Title 1',
          importance: 'Low',
          body: 'Test Message Body 1'
        },
        { 
          id: 1,
          title: 'Test Title 2',
          importance: 'Medium',
          body: 'Test Message Body 2'
        }
      ],
      loadMessages: mockLoadMessages
    };
    const wrapper = shallow(<MessageList {...props} />);
    const leadText = `You have ${props.messages.length} messages.`;

    expect(wrapper.find('.lead').text()).toEqual(leadText);
    expect(wrapper.find(MessageListItem)).toHaveLength(props.messages.length);
  });
});
