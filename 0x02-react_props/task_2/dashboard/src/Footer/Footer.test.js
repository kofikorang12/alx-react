import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Footer from './Footer';
import { getFooterCopy, getFullYear } from '../utils/utils';

describe('Footer render and not crashing', () => {
    it('Footer not crashing', () => {
        const footerWrapper = shallow(<Footer />);
        expect(footerWrapper.exists());
    })
    it('Footer render a paragraph', () => {
        const footerWrapper = shallow(<Footer />);
        expect(footerWrapper.text()).contains(`Copyright ${getFullYear()} - ${getFooterCopy(true)}`);
    })
})