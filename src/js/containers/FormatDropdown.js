import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeDropdownValue, toggleDropdown } from '../actions'
import { getFormatDropdownValue, getFormatDropdownVisibleState } from '../reducers/setting'
import Dropdown from '../components/dropdown'
const data = [{value: 'png', text: 'PNG'}, {value: 'jpg', text: 'JPG'}, {value: 'gif', text: 'GIF'}];
const name = 'format';
class FormatDropdown extends Component {
    render() {
        const {activeValue, changeDropdownValue, visibility, toggleDropdown} = this.props;
        return (
            <Dropdown
                activeValue = {activeValue}
                data = {data}
                name = {name}
                changeDropdownValue = {changeDropdownValue}
                visibility = {visibility}
                toggleDropdown = {toggleDropdown.bind(this, name, visibility)}
                />
        )
    }
}

FormatDropdown.propTypes = {
    activeValue: PropTypes.string,
    changeDropdownValue: PropTypes.func.isRequired,
    visibility: PropTypes.string,
    toggleDropdown: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        activeValue: getFormatDropdownValue(state.setting),
        visibility: getFormatDropdownVisibleState(state.setting)
    }
}

export default connect(
    mapStateToProps,
    { changeDropdownValue, toggleDropdown }
)(FormatDropdown)