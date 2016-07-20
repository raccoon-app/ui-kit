import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeDropdownValue, toggleDropdown } from '../actions';
import { getFormatDropdownValue, getFormatDropdownVisibleState, getFormatTopDropdownPositionState } from '../reducers/setting';
import Dropdown from '../components/Dropdown';
const data = [
    { value: 'png', text: 'PNG' },
    { value: 'jpg', text: 'JPG' },
    { value: 'gif', text: 'GIF' },
];
const name = 'format';

class FormatDropdown extends Component {
    render() {
        const { activeValue, changeDropdownValue, visibility, topPosition, toggleDropdown } = this.props;

        return (
            <Dropdown
                activeValue = {activeValue}
                data = {data}
                name = {name}
                changeDropdownValue = {changeDropdownValue}
                visibility = {visibility}
                topPosition = {topPosition}
                toggleDropdown = {toggleDropdown.bind(this, this, name, visibility)}
                ref = "dropdown"
            />
        );
    }
}

FormatDropdown.propTypes = {
    activeValue: PropTypes.string,
    changeDropdownValue: PropTypes.func.isRequired,
    visibility: PropTypes.string,
    toggleDropdown: PropTypes.func.isRequired,
    topPosition: PropTypes.boolean
};

const mapStateToProps = (state) => ({
    activeValue: getFormatDropdownValue(state.setting),
    visibility: getFormatDropdownVisibleState(state.setting),
    topPosition: getFormatTopDropdownPositionState(state.setting)
});

export default connect(
    mapStateToProps,
    { changeDropdownValue, toggleDropdown }
)(FormatDropdown);
