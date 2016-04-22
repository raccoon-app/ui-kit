import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class SettingComponent extends Component {
    render() {
        const { markerColorList, backgroundColorList } = this.props

        var MarkerButtonList = markerColorList.map(function(item) {
            return (
                <li className="setting-color__item">
                    <button style={{borderLeftColor: item[0], borderRightColor: item[1]}}
                            className={classnames({
                                'setting-color__button': true,
                                'setting-color__button_active': false//currentMarkerColor === item[0] && targetMarkerColor === item[1]
                            })}
                        ></button>
                </li>
            );
        });

        var BackgroundButtonList = backgroundColorList.map(function(item) {
            return (
                <li className="setting-color__item">
                    <button style={{borderLeftColor: item, borderRightColor: item}}
                            className={classnames({
                                'setting-color__button': true,
                                'setting-color__button_active': false//backgroundColor == item
                            })}
                        ></button>
                </li>
            );
        });

        return (
            <div className="setting-wrapper">
                <div className="setting-color">
                    <h4 className="setting-color__title">Background:</h4>
                    <ul className="setting-color__list">
                        {BackgroundButtonList}
                    </ul>
                </div>

                <div className="setting-color">
                    <h4 className="setting-color__title">Guides:</h4>
                    <ul className="setting-color__list">
                        {MarkerButtonList}
                    </ul>
                </div>
            </div>
        )
    }
}

SettingComponent.propTypes = {
    markerColorList: PropTypes.array,
    backgroundColorList: PropTypes.array,
}