import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import MessageList from './MessageList';

describe('App', () => {
    it('loads MessageList component', () => {
        const wrapper = shallow(<App />);

        expect(wrapper.find('h3').text()).toEqual('Messages');
        expect(wrapper.find('h3').hasClass('display-3'));

        expect(wrapper.find(MessageList)).toHaveLength(1);
    });
});
