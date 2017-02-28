jest.unmock('../SettingPanel');
jest.unmock('../SettingControlButton');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SettingPanel from '../SettingPanel';

describe('Setting Panel Appearance', () => {
    let component;
    let componentDOM;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<SettingPanel />);
        componentDOM = ReactDOM.findDOMNode(component);
    });
    it('<SettingPanel /> renders ', () => {
        expect(componentDOM.className).toContain('setting-panel');
    });
    it('should toggle Setting Panel on Control Button click', () => {
        const classStr = 'setting-panel_opened';
        const btn = TestUtils.findRenderedDOMComponentWithClass(component, 'setting-control-btn');

        // Verify that it's closed by default
        expect(componentDOM.className).not.toContain(classStr);

        // Verify that it toggles after click
        TestUtils.Simulate.click(btn);
        expect(componentDOM.className).toContain(classStr);
        TestUtils.Simulate.click(btn);
        expect(componentDOM.className).not.toContain(classStr);
    });

});
