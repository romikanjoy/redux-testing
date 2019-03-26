import React from 'react';
import { shallow } from 'enzyme';
import MessageListItem from './MessageListItem';

describe('MessageListItem', () => {
  const props = {
    message: {
      title: 'Test Title',
      importance: 'Low',
      body: 'Test Message Body'
    }
  };
  
  it('should render correctly', () => {
    const wrapper = shallow(<MessageListItem {...props} />);
    
    expect(wrapper.find('li')).toHaveLength(1);
    expect(wrapper.find('li').hasClass('list-group-item'));
    expect(wrapper.find('li').hasClass('list-group-item-action'));
    expect(wrapper.find('li').hasClass('flex-column'));
    expect(wrapper.find('li').hasClass('align-items-start'));
    
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').hasClass('d-flex'));
    expect(wrapper.find('div').hasClass('w-100'));
    expect(wrapper.find('div').hasClass('justify-content-between'));

    expect(wrapper.find('h5')).toHaveLength(1);
    expect(wrapper.find('h5').hasClass('mb-1'));
    expect(wrapper.find('h5').text()).toEqual('Test Title');

    expect(wrapper.find('small')).toHaveLength(1);
    expect(wrapper.find('small').text()).toEqual('Low');

    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p').hasClass('mb-1'));
    expect(wrapper.find('p').text()).toEqual('Test Message Body');
  });
});
