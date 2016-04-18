var React = require('react');
var NavSection = require('./NavSection.react.js');
var ArtboardSection = require('./ArtboardSection.react');
var ToolsSection = require('./ToolsSection.react');
var HeaderSection = require('./HeaderSection.react');

var RaccoonApp = React.createClass({

    render: function() {
        return (
            <div className="app">
                <HeaderSection />
                <div className="main">
                    <NavSection />
                    <ArtboardSection />
                    <ToolsSection />
                </div>
            </div>
        );
    }

});

module.exports = RaccoonApp;
