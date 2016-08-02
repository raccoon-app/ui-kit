import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeDropdownValue, toggleDropdown } from '../actions';
import { getFormatDropdownValue, getFormatTopDropdownPositionState,
    getActiveDropdown } from '../reducers/setting';
import Dropdown from '../components/Dropdown';
const data = [
    { value: 'png', text: 'PNG' },
    { value: 'jpg', text: 'JPG' },
    { value: 'gif', text: 'GIF' }
];
const name = 'format';

class FormatDropdown extends Component {

    render() {
        const { activeValue, changeDropdownValue,  toggleDropdown, activeDropdown } = this.props;
        var visibility = false;

        if(activeDropdown == name) {
            visibility = true;
        }

        return (
            <Dropdown
                activeValue = {activeValue}
                data = {data}
                name = {name}
                changeDropdownValue = {changeDropdownValue}
                visibility = {visibility}
                toggleDropdown = {toggleDropdown.bind(this, name)}
            />
        );
    }
}

FormatDropdown.propTypes = {
    activeValue: PropTypes.string,
    changeDropdownValue: PropTypes.func.isRequired,
    toggleDropdown: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    activeValue: getFormatDropdownValue(state.setting),
    activeDropdown: getActiveDropdown(state.setting)
});

export default connect(
    mapStateToProps,
    { changeDropdownValue, toggleDropdown }
)(FormatDropdown);
