/**
 * Created by Viktoriia_Goncharuk on 7/25/2016.
 */
jest.unmock('../SettingsPanel');
jest.unmock('../../actions/SettingPanelActions');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { toggleSettingPanel } from '../../actions/SettingPanelActions';
import { TOGGLE_SETTING_PANEL } from '../../constants/ActionTypes';

describe('Setting Panel Actions', () => {
    it('toggleSettingPanel should create a TOGGLE_SETTING_PANEL action', () => {
        expect(toggleSettingPanel()).toEqual({
            type: TOGGLE_SETTING_PANEL,
        });
    });

});
