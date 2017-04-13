jest.unmock('../Auth');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { Auth } from '../Auth';

xdescribe('Auth', () => {

    it('should have form', () => {
        const container = <Header name="test title" />;
        const DOM = TestUtils.renderIntoDocument(container);
        const form = TestUtils.findRenderedDOMComponentWithTag(
            DOM, 'form');

        expect(form.length).toEqual(1);
    });

});
