var React = require('react');
var NavSection = require('./NavSection.react');
var ArtboardSection = require('./ArtboardSection.react');
var ToolsSection = require('./ToolsSection.react');
var HeaderSection = require('./HeaderSection.react');

var MinceApp = React.createClass({

    render: function() {
        return (
            <div>
                <HeaderSection />
                <NavSection />
                <ArtboardSection />
                <ToolsSection />
            </div>
        );
    }

});

module.exports = MinceApp;
