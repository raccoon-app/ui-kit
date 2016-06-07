import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class RadioSwitcher extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const data = e.target.dataset;
        this.props.onChange(JSON.parse(data.color));
    }

    render() {
        const optionList = this.props.optionList;
        const title = this.props.title;
        const list = optionList.map((option, index) => (
                <li key = { index } className="radio-color-switcher__item">
                    <button
                        style={{ borderLeftColor: option.currentColor, borderRightColor: option.hoverColor }}
                        className={classnames({
                            'radio-color-switcher__button': true,
                            'radio-color-switcher__button_active': false, //currentMarkerColor === item[0] && targetMarkerColor === item[1]
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

RadioSwitcher.propTypes = {
    onChange: PropTypes.func.isRequired,
    optionList: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};

export default RadioSwitcher;
