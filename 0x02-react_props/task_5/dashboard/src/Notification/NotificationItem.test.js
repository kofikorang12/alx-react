import React from   'react';
import { shallow } from 'emzyme';
import { expect } from 'chai';
import NotificationItem from './NotificationItem';

describe('NotificationItem render', () => {
    const notificationItemWrapper = shallow(<NotificationItem />);

    it('render without crashing', () => {
        expect(notificationItemWrapper.exists());
    })

    it('render the correct html prop', () => {
        notificationItemWrapper = shallow(<NotificationItem type="default" value="test" />);
        notificationItemWrapper.setProps({ type: 'default', value: 'test' });
		expect(notificationItemWrapper.html()).equal(
			'<li data-notification-type="default">test</li>'
		);
    })

    it('renders correct html from  html="<u>test</u>" props', () => {
		const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
		expect(wrapper.html()).equal('<li><u>test</u></li>');
	});
})