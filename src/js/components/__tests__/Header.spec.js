jest.unmock('../Header');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { Header } from '../Header';

describe('Header', () => {

    it('should have title', () => {
        const container = <Header name="test title" />;
        const DOM = TestUtils.renderIntoDocument(container);
        const title = TestUtils.findRenderedDOMComponentWithTag(
            DOM, 'h1');

        expect(title.textContent).toEqual('test title');
    });

    it('should have only one h1', () => {
        const container = <Header name="title" />;
        const DOM = TestUtils.renderIntoDocument(container);
        const title = TestUtils.scryRenderedDOMComponentsWithTag(
            DOM, 'h1');

        expect(title.length).toEqual(1);
    });
});
