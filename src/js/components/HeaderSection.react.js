var React = require('react');
var ProjectStore = require('../stores/ProjectStore');
var InputProject = require('./InputProject.react');
var SettingSection = require('./SettingSection.react');

function getStateFromStores() {
    return {
        name: ProjectStore.getName()
    };
}

var HeaderSection = React.createClass({

    getInitialState: function() {
        return getStateFromStores();
    },

    componentDidMount: function() {
        ProjectStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        ProjectStore.removeChangeListener(this._onChange);
    },

    render: function() {
        return (
            <div className="header">
                <a href="#" className="header__logo">logo</a>
                <h1 className="header__title">{this.state.name}</h1>
                <InputProject />
                <SettingSection />
            </div>
        );
    },

    /**
    * Event handler for 'change' events coming from the stores
    */
    _onChange: function() {
        this.setState(getStateFromStores());
    }

});

module.exports = HeaderSection;
