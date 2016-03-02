var React = require('react');
var MinceArtboardActionCreators = require('../actions/MinceArtboardActionCreators');
var MinceSettingUtils = require('../utils/MinceSettingUtils');
var MeasureStore = require('../stores/MeasureStore');
var classNames = require('classnames');

var MeasureColors = MinceSettingUtils.MeasureColors;

function getStateFromStores() {
    return {
        currentColor: MeasureStore.getCurrentColor(),
        targetColor: MeasureStore.getTargetColor()
    };
}

var SettingSection = React.createClass({

    getInitialState: function() {
        return getStateFromStores();
    },

    componentDidMount: function() {
        MeasureStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        MeasureStore.removeChangeListener(this._onChange);
    },

    render: function() {
        var _this = this;
        var currentColor = this.state.currentColor;
        var targetColor = this.state.targetColor;

        var button = MeasureColors.map(function(item) {
            return (
                <li className="setting-color__item">
                    <button style={{borderLeftColor: item[0], borderRightColor: item[1]}}
                            className={classNames({
                                'setting-color__button': true,
                                'setting-color__button_active': currentColor === item[0] && targetColor === item[1]
                            })}
                            onClick={_this._onClick.bind(_this, item)}
                        ></button>
                </li>
            );
        });

        return (
            <div className="setting-color">
                <h4 className="setting-color__title">Guides Color:</h4>
                <ul className="setting-color__list">
                    {button}
                </ul>
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
        MinceArtboardActionCreators.setMeasureColor(value);
    }
});

module.exports = SettingSection;
