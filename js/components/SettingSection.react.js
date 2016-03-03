var React = require('react');
var MinceSettingActionCreators = require('../actions/MinceSettingActionCreators');
var MinceSettingUtils = require('../utils/MinceSettingUtils');
var SettingStore = require('../stores/SettingStore');
var classNames = require('classnames');

var MarkerColors = MinceSettingUtils.getMarkerColors();
var BackgroundColors = MinceSettingUtils.getBackgroundColors();

function getStateFromStores() {
    return {
        backgroundColor: SettingStore.getBackgroundColor(),
        currentMarkerColor: SettingStore.getCurrentMarkerColor(),
        targetMarkerColor: SettingStore.getTargetMarkerColor()
    };
}

var SettingSection = React.createClass({

    getInitialState: function() {
        return getStateFromStores();
    },

    componentDidMount: function() {
        SettingStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        SettingStore.removeChangeListener(this._onChange);
    },

    render: function() {
        var _this = this;
        var currentMarkerColor = this.state.currentMarkerColor;
        var targetMarkerColor = this.state.targetMarkerColor;
        var backgroundColor = this.state.backgroundColor;

        var button = MarkerColors.map(function(item) {
            return (
                <li className="setting-color__item">
                    <button style={{borderLeftColor: item[0], borderRightColor: item[1]}}
                            className={classNames({
                                'setting-color__button': true,
                                'setting-color__button_active': currentMarkerColor === item[0] && targetMarkerColor === item[1]
                            })}
                            onClick={_this._onClick.bind(_this, item)}
                        ></button>
                </li>
            );
        });

        var button2 = BackgroundColors.map(function(item) {
            console.log(backgroundColor)
            console.log(item)
            return (
                <li className="setting-color__item">
                    <button style={{borderLeftColor: item, borderRightColor: item}}
                            className={classNames({
                                'setting-color__button': true,
                                'setting-color__button_active': backgroundColor == item
                            })}
                            onClick={_this._onClick2.bind(_this, item)}
                        ></button>
                </li>
            );
        });

        return (
            <div className="setting-wrapper">
                <div className="setting-color">
                    <h4 className="setting-color__title">Background:</h4>
                    <ul className="setting-color__list">
                        {button2}
                    </ul>
                </div>

                <div className="setting-color">
                    <h4 className="setting-color__title">Guides:</h4>
                    <ul className="setting-color__list">
                        {button}
                    </ul>
                </div>
            </div>
        );
    },

    /**
    * Event handler for 'change' events coming from the stores
    */
    _onChange: function() {
        this.setState(getStateFromStores());
    },

    _onClick: function(value) {
        MinceSettingActionCreators.setMarkerColor(value);
    },

    _onClick2: function(value) {
        MinceSettingActionCreators.setBackgroundColor(value);
    }
});

module.exports = SettingSection;
