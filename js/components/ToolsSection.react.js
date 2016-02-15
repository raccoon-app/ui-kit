var React = require('react');
var ArtboardStore = require('../stores/ArtboardStore');

function getStateFromStores() {
    return {
        artboard: ArtboardStore.getCurrent()
    };
}

var ToolsSection = React.createClass({

    getInitialState: function() {
        return getStateFromStores();
    },

    componentDidMount: function() {
        ArtboardStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        ArtboardStore.removeChangeListener(this._onChange);
    },

    render: function() {
        return (
            <div className="tools">
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

module.exports = ToolsSection;
