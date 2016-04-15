var React = require('react');
var ProjectStore = require('../stores/ProjectStore');
var LoadDataUtils = require('../utils/LoadDataUtils');

var ENTER_KEY_CODE = 13;

var InputSection = React.createClass({

    getInitialState: function() {
        return {url: 'http://design.oweather.net/'};
    },

    render: function() {
        return (
            <div className="header__form">
                <input type="text"
                       className="header__input"
                       value={this.state.url}
                       onChange={this._onChange}
                       onKeyDown={this._onKeyDown} />
                <button className="header__btn"
                        onClick={this._onClick}>
                    load
                </button>
            </div>
        );
    },

    /**
    * Event handler for 'change' events coming from the stores
    */
    _onChange: function() {
        this.setState({url: event.target.value});
    },

    _onKeyDown: function(event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            event.preventDefault();
            var url = this.state.url.trim();
            if (url) {
                LoadDataUtils.getProject(url);
            }
            //this.setState({text: ''});
        }
    },

    _onClick: function() {
        var url = this.state.url.trim();
        if (url) {
            LoadDataUtils.getProject(url);
        }
    }
});

module.exports = InputSection;
