import React from "react";
import { shallow } from "enzyme";
import LoginScreen from "../Auth";


describe('Auth', () => {
    let wrapper;
    const props = {
        formLogin: jest.fn(),
        epamLogin: jest.fn()
    };

    beforeEach(() => {
        wrapper = shallow(<LoginScreen {...props} />)
    });

    it('should have header', () => {
        expect(wrapper.find('header').length).toEqual(1);
    });

    describe('form', () => {
        it('should have form', () => {
            expect(wrapper.find('form').length).toEqual(1);
        });

        it('should submit form on submit button click', () => {
            wrapper.find('form').simulate('submit');
            expect(props.formLogin).toHaveBeenCalled();
        });

        it('should login throught epam on epam sso login click', () => {
            wrapper.find('form button [type="button"]').simulate('click');
            expect(props.epamLogin).toHaveBeenCalled();
        });
    });

});
