import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Login from './Login';

describe('Test Login render', () => {
    it('Login should render', () => {
        const loginWrapper = shallow(<Login />);
        expect(loginWrapper.exists());
    })
    it('Login should render 2 input and label tags', () => {
        const loginWrapper = shallow(<Login />);
        expect(loginWrapper.find('input', 'label')).to.have.lengthOf(2);
    })
})