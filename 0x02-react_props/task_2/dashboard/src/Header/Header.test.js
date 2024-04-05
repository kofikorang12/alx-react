import Header from './Header';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';

describe('Test Header.js', ()=> {
    it('Header renders without crashing', () => {
        const headerWrapper = shallow(<Header />);
        expect(headerWrapper.exists());
    })
    it('Header should render an h1 and an img tag', () => {
        const headerWrapper = shallow(<Header />);
        expect(headerWrapper.exists('img')).equal(true);
        expect(headerWrapper.containsAllMatchingElements(<h1>School dashboard</h1>)).equal(true);
    })
})