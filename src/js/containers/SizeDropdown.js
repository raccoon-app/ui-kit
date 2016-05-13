import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeDropdownValue, toggleDropdown } from '../actions'
import { getSizeDropdownValue, getSizeDropdownVisibleState } from '../reducers/setting'
import Dropdown from '../components/dropdown'
const data = [{value: '1', text: '1x'}, {value: '12', text: '1-2x'}, {value: '2', text: '2x'}, {value: '23', text: '2-3x'},
    {value: '3', text: '3x'}, {value: 'all', text: 'All'}];
const name = 'size';
class SizeDropdown extends Component {
    render() {
        const {activeValue, changeDropdownValue, visibility, toggleDropdown} = this.props;
        return (
            <Dropdown
                activeValue = {activeValue}
                data = {data}
                changeDropdownValue = {changeDropdownValue}
                name = {name}
                visibility = {visibility}
                toggleDropdown = {toggleDropdown.bind(this, name, visibility)}
                />
        )
    }
}

SizeDropdown.propTypes = {
    activeValue: PropTypes.string,
    changeDropdownValue: PropTypes.func.isRequired,
    visibility: PropTypes.string,
    toggleDropdown: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        activeValue: getSizeDropdownValue(state.setting),
        visibility: getSizeDropdownVisibleState(state.setting)
    }
}

export default connect(
    mapStateToProps,
    { changeDropdownValue, toggleDropdown}
)(SizeDropdown)