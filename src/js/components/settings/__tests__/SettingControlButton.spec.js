/**
 * Created by Viktoriia_Goncharuk on 7/28/2016.
 */
jest.unmock('../SettingControlButton');
jest.unmock('../../../actions/SettingPanelActions');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import SettingControlButton from '../SettingControlButton';
import { toggleSettingPanel } from '../../../actions/SettingPanelActions';
import { TOGGLE_SETTING_PANEL } from '../../../constants/ActionTypes';

describe('Setting Control Button appearance', () => {
    let props;
    let output;
    let renderer;

    beforeEach(() => {
        props = {
            onClick: toggleSettingPanel,
            ref: 'settingControlBtn',
            class: 'setting-control-btn',
        };
        renderer = TestUtils.createRenderer();
        renderer.render(<SettingControlButton {...props} />);
        output = renderer.getRenderOutput();
    });

    it('Should display Control Button', () => {
        expect(output.ref).toBe(props.ref);
        expect(output.props.className).toContain(props.class);
    });

    it('Should be triggered toggleSettingPanel action on buttonn click', () => {
        TestUtils.Simulate.click(output.ref);
        expect(props.onClick()).toEqual({
            type: TOGGLE_SETTING_PANEL,
        });
    });
});
