var React = require('react');
var NavListArtboard = require('../components/NavListArtboard.react');
var ProjectStore = require('../stores/ProjectStore');

function getStateFromStores() {
    return {
        folders: ProjectStore.getAllFolders(),
        name: ProjectStore.getName(),
        currentArtboardID: ProjectStore.getCurrentArtboardID(),
    };
}

var NavSection = React.createClass({

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
        var currentArtboardID = this.state.currentArtboardID;

        var navListFolder = this.state.folders.map(function(folder) {

            var navListPages = folder.artboard.map(function(artboard) {
                var artboardData = {
                    id: artboard.id,
                    name: artboard.name,
                    src: artboard.src
                }

                return (
                    <NavListArtboard
                        key={artboard.id}
                        artboard={artboardData}
                        currentArtboardID={currentArtboardID}
                    />
                );
            });

            return (
                <li className="nav-folder__item">
                    <h3 className="nav-folder__title">{folder.name}</h3>
                    <ul className="nav-page">
                        {navListPages}
                    </ul>
                </li>
            );
        });

        return (
            <div className="nav">
                <ul className="nav-folder" ref="messageList">
                    {navListFolder}
                </ul>
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

module.exports = NavSection;
