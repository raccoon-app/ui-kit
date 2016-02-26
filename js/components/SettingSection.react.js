var React = require('react');
var ArtboardStore = require('../stores/ArtboardStore');
var classNames = require('classnames');

function getStateFromStores() {
    return {
        name: ArtboardStore.getLayer()
    };
}

var SettingSection = React.createClass({

    getInitialState: function() {
        return getStateFromStores();
    },

    render: function() {
        return (
            <div className="setting-color">
                <h4 className="setting-color__title">Guides Color:</h4>
                <ul className="setting-color__list">
                    <li className="setting-color__item">
                        <button style={{borderLeftColor: '#FF0000', borderRightColor: '#A3C644'}} className="setting-color__button setting-color__button_active"></button>
                    </li>
                    <li className="setting-color__item">
                        <button style={{borderLeftColor: '#0000ff', borderRightColor: '#00ff00'}} className="setting-color__button"></button>
                    </li>
                    <li className="setting-color__item">
                        <button style={{borderLeftColor: 'yellow', borderRightColor: 'orange'}} className="setting-color__button"></button>
                    </li>
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

    _onClick: function() {

    }
});

module.exports = SettingSection;
