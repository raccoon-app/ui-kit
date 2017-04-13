import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { getDottedTexture } from '../../utils/backgroundTexture';

class RadioColorSwitcher extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.getStyle = this.getStyle.bind(this);
    }

    getStyle(item, type) {
        const keys = Object.keys(item);
        const styles = {
            BACKGROUND_COLOR: () => (getDottedTexture(item[keys[0]], item[keys[1]])),
            MARKER_COLOR: () => ({ borderLeftColor: item[keys[0]], borderRightColor: item[keys[1]] }),
        };
        return styles[type]();
    }

    isActiveColor(item, type) {
        const switcherType = {
            BACKGROUND_COLOR: () => {
                const { activeColor: { backgroundColor, radialGradient } } = this.props;
                return backgroundColor === item.backgroundColor && radialGradient === item.radialGradient;
            },
            MARKER_COLOR: () => {
                const { activeColor: { currentColor, hoverColor } } = this.props;
                return currentColor === item.currentColor && hoverColor === item.hoverColor;
            },

        };
        return switcherType[type]();
    }

    handleClick(e) {
        const data = e.target.dataset;
        this.props.onChange(data.type, JSON.parse(data.color));
    }

    render() {
        const { optionList, title, type } = this.props;
        console.log(123, this.props);
        const list = optionList.map((option, index) => (
                <li key = { index } className="radio-color-switcher__item">
                    <button
                        style={this.getStyle(option, type)}
                        className={classnames({
                            'radio-color-switcher__button': true,
                            'radio-color-switcher__button_active': this.isActiveColor(option, type),
                        })}
                        data-color={ JSON.stringify(option) }
                        data-type={ type }
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
    type: PropTypes.string.isRequired,
};

export default RadioColorSwitcher;
