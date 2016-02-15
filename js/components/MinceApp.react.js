var React = require('react');
var NavSection = require('./NavSection.react');
var ArtboardSection = require('./ArtboardSection.react');
var ToolsSection = require('./ToolsSection.react');

var MinceApp = React.createClass({

    render: function() {
        return (
            <div>
                <div className="header">
                    <a href="#" className="header__logo">logo</a>
                    <h1 className="header__title"></h1>
                </div>
                <HeaderSection />
                <NavSection />
                <ArtboardSection />
                <ToolsSection />
            </div>
        );
    }

});

module.exports = MinceApp;
