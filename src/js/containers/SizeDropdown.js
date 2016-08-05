import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeDropdownValue, toggleDropdown } from '../actions/setting';
import { getSizeDropdownValue, getActiveDropdown } from '../reducers/setting';
import Dropdown from '../components/Dropdown';

const data = [
    { value: '1', text: '1x' },
    { value: '12', text: '1-2x' },
    { value: '2', text: '2x' },
    { value: '23', text: '2-3x' },
    { value: '3', text: '3x' },
    { value: 'all', text: 'All' },
];
const name = 'size';

class SizeDropdown extends Component {
    render() {
        const { activeValue, changeDropdownValue, toggleDropdown, activeDropdown } = this.props;
        var visibility = false;

        if (activeDropdown == name) {
            visibility = true;
        }

        return (
            <Dropdown
                activeValue = {activeValue}
                data = {data}
                changeDropdownValue = {changeDropdownValue}
                name = {name}
                visibility = {visibility}
                toggleDropdown = {toggleDropdown.bind(this, name)}
            />
        );
    }
}

SizeDropdown.propTypes = {
    activeValue: PropTypes.string,
    changeDropdownValue: PropTypes.func.isRequired,
    toggleDropdown: PropTypes.func.isRequired
};

const mapStateToProps = ({ setting }) => ({
    activeValue: setting.sizeDropdownValue,
    activeDropdown: setting.activeDropdown,
});

export default connect(
    mapStateToProps,
    { changeDropdownValue, toggleDropdown }
)(SizeDropdown);
