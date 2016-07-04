import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class RadioColorSwitcher extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.getStyle = this.getStyle.bind(this);
    }

    getStyle(obj) {
        const objKeys = Object.keys(obj);
        const leftBrd = obj[objKeys[0]];
        const rightBrd = (objKeys.length >= 2) ? obj[objKeys[1]] : obj[objKeys[0]];
        return { borderLeftColor: leftBrd, borderRightColor: rightBrd };
    }

    isActiveColor(curObj) {
        const { activeColor } = this.props;
        const isActiveMarkerColor = activeColor.currentColor &&
                                    activeColor.currentColor === curObj.currentColor &&
                                    activeColor.hoverColor === curObj.hoverColor;
        const isActiveBgColor = activeColor.currentBgColor && activeColor.currentBgColor === curObj.bgColor;

        if (isActiveMarkerColor) {
            return true;
        }
        if (isActiveBgColor) {
            return true;
        }

        return false;
    }

    handleClick(e) {
        const data = e.target.dataset;
        this.props.onChange(JSON.parse(data.color));
    }

    render() {
        const { optionList, title } = this.props;

        const list = optionList.map((option, index) => (
                <li key = { index } className="radio-color-switcher__item">
                    <button
                        style={this.getStyle(option)}
                        className={classnames({
                            'radio-color-switcher__button': true,
                            'radio-color-switcher__button_active': this.isActiveColor(option),
                        })}
                        data-color={ JSON.stringify(option) }
                        onClick={ this.handleClick }
                    ></button>
                </li>
            )
        );

        return (
            <div className="radio-color-switcher">
                <h4 className="radio-color-switcher__title">{title}</h4>
                <ul className="radio-color-switcher__list">
                    {list}
                </ul>
            </div>
        );
    }
}

RadioColorSwitcher.propTypes = {
    onChange: PropTypes.func.isRequired,
    optionList: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    activeColor: PropTypes.object.isRequired,
};

export default RadioColorSwitcher;
