import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class Dropdown extends Component {

    constructor(props) {
        super(props);

        this.state = { isOpen: false, topPosition: false };
        this.toggleView = this.toggleView.bind(this);
    }

    toggleView() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    positionDetermine() {
        const dropdown = this.refs.dropdownContainer;
        const options = this.refs.options;

        let toolsBody = document.getElementsByClassName('tools__body')[0];
        let screenVisibilityCapacity = toolsBody.getBoundingClientRect().height + toolsBody.scrollTop;
        let dropdownSize = dropdown.getBoundingClientRect().bottom + options.getBoundingClientRect().height;

        screenVisibilityCapacity < dropdownSize ? this.state.topPosition = true : this.state.topPosition = false;
    }

    render() {
        const { data, activeValue, changeDropdownValue, visibility, name, toggleDropdown } = this.props;

        const optionList = data.map(function(option) {
            return(
                <option value={option.value}>{option.text}</option>
            );
        });
        const dropdownList = data.map(function (option) {
            return(
                <div className="dropdown__option" data-value= {option.value}>{option.text}</div>
            );
        });

        const dropdownClick = () => {
            if (!visibility) {
                this.state.isOpen = false;
            }

            this.positionDetermine();
            this.toggleView();
            toggleDropdown();
        };

        const dropdownOnchange = (e) => {
            const el = e.target;
            const options = el.parentNode.getElementsByClassName('dropdown__option');

            [].forEach.call(options, function (item) {
                item.className = 'dropdown__option';
            });

            el.className = 'dropdown__option dropdown__option--selected';

            const select = this.refs.select;
            select.value = el.getAttribute('data-value');
            changeDropdownValue(name, el.innerHTML);
        };

        return (
            <div className={visibility && this.state.isOpen ? 'dropdown dropdown--opened' : 'dropdown'}
                onClick = {dropdownClick}
                ref = "dropdownContainer"
            >
                <div className = "dropdown-title">
                    <div className="dropdown__value">{activeValue}</div>
                    <span className="icon-chevron-down"></span>
                </div>
                <div className={this.state.topPosition ? 'dropdown-options top-opened' : 'dropdown-options'}
                    onClick = {dropdownOnchange}
                    ref="options"
                >
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
    visibility: PropTypes.boolean
};
