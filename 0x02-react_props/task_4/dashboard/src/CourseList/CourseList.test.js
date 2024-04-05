import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import CourseList from './CourseList';

describe('Test CourseList', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists()).toBe(true);
    })

    it('renders 5 different rows', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('table thead').children().length).toEqual(2);
        expect(wrapper.find('table tbody').children().length).toEqual(3);
    })
})