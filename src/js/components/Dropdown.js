import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class Dropdown extends Component {
    render() {

        const { data, activeValue, changeDropdownValue, visibility, topPosition, name, toggleDropdown, ref } = this.props;

        const optionList = data.map(function(option) {
            return(
                <option value={option.value}>{option.text}</option>
            );
        });
        const dropdownList = data.map(function(option) {
            return(
                <div className="dropdown__option" data-value= {option.value}>{option.text}</div>
            );
        });

        const dropdownOnchange = (e) => {
            var el = e.target;
            var options = el.parentNode.getElementsByClassName('dropdown__option');

            [].forEach.call(options, function(el) {
                el.className='dropdown__option';
            });

            el.className='dropdown__option dropdown__option--selected';

            var select = this.refs.select;
            select.value = el.getAttribute('data-value');
            changeDropdownValue( name, el.innerHTML );
        }

        return (
            <div className={visibility? "dropdown dropdown--opened" : "dropdown"}
                 onClick = {toggleDropdown}
                 ref = "dropdownContainer">
                <div className = "dropdown-title">
                    <div className="dropdown__value">{activeValue}</div>
                    <span className="icon-chevron-down"></span>
                </div>
                <div className={topPosition ? "dropdown-options top-opened" : "dropdown-options"}
                     onClick = {dropdownOnchange}
                     ref="options">
                    {dropdownList}
                </div>
                <select ref="select">
                    {optionList}
                </select>
            </div>
        );
    }
}

Dropdown.propTypes = {
    activeValue: PropTypes.string,
    data: PropTypes.array,
    name: PropTypes.string,
    changeDropdownValue: PropTypes.func.isRequired,
    toggleDropdown: PropTypes.func.isRequired,
    visibility: PropTypes.boolean,
    ref: PropTypes.string
}


