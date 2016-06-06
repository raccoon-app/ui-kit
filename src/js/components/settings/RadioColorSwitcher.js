import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class RadioColorSwitcher extends Component {

    render() {
        
        const optionList  = this.props.optionList;
        const title = this.props.title;
        
        var list = optionList.map((option)=>{
            return (
                <li className="radio-color-switcher__item">
                    <button
                        style={{borderLeftColor: option[0], borderRightColor: option[1]}}
                        className={classnames({
                            'radio-color-switcher__button': true,
                            'radio-color-switcher__button_active': false//currentMarkerColor === item[0] && targetMarkerColor === item[1]
                        })}
                    ></button>
                </li>
            );
        });

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


export default RadioColorSwitcher;