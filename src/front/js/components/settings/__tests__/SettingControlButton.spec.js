import React from "react";
import SettingControlButton from "../SettingControlButton";
import { shallow } from "enzyme";

describe('Setting Control Button appearance', () => {
    let props;
    let wrapper;

    beforeEach(() => {
        props = {
            onClick: jest.fn(),
            ref: 'settingControlBtn',
            class: 'setting-control-btn',
        };

        wrapper = shallow(<SettingControlButton {...props} />)
    });

    it('should have proper ref on display Control Button', () => {
        expect(wrapper.find('div').node.ref).toBe(props.ref);
    });

    it('should have proper class name', () => {
        expect(wrapper.find('div').node.props.className).toContain(props.class);
    });

    it('Should be trigger onClick action on button click', () => {
        wrapper.find('div').simulate('click');
        expect(props.onClick).toHaveBeenCalled();
    });

});
