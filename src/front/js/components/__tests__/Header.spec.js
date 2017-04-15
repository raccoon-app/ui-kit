import React from "react";
import Header from "../Header";
import { shallow } from "enzyme";

describe('Header', () => {
    let wrapper;

    it('should have only title', () => {
        const props = {
            name: 'name'
        };
        wrapper = shallow(<Header {...props} />);
        expect(wrapper.find('.breadcrumbs__item').length).toEqual(1);
    });

    it('should have only header info', () => {
        const props = {
            headerInfo: <br/>
        };
        wrapper = shallow(<Header {...props} />);
        expect(wrapper.find('.breadcrumbs__item').length).toEqual(1);
    });

    it('should have both name and header info', () => {
        const props = {
            name: 'name',
            headerInfo: <br/>
        };
        wrapper = shallow(<Header {...props} />);
        expect(wrapper.find('.breadcrumbs__item').length).toEqual(2);
    });

});
