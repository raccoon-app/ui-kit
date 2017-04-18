import React from 'react';
import SettingPanel from '../SettingPanel';
import { shallow } from 'enzyme';

describe('Setting Panel Appearance', () => {
    let wrapper;
    const props = {
        markerColorList: [],
        backgroundColorList: [],
        onSwitcherChange: jest.fn,
        markerColor: {},
        backgroundColor: {}
    };

    beforeEach(() => {
        wrapper = shallow(<SettingPanel {...props}/>);
    });

    it('<SettingPanel /> renders ', () => {
        expect(wrapper.find('.setting-panel').length).toEqual(1);
    });

    describe('toggle setting pannel on control button click', () => {
        const classStr = '.setting-panel_opened';

        it('should not be opened before toggle', () => {
            expect(wrapper.find(classStr).length).toEqual(0);
        });

        it('should toggle to opened on first click', () => {
            wrapper.find('SettingControlButton').simulate('click');
            expect(wrapper.find(classStr).length).toEqual(1);
        });

        it('should toggle to not opened on second click', () => {
            wrapper.find('SettingControlButton').simulate('click');
            wrapper.find('SettingControlButton').simulate('click');
            expect(wrapper.find(classStr).length).toEqual(0);
        });
    });

});
