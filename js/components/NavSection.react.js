var React = require('react');
var MinceNavActionCreators = require('../actions/MinceNavActionCreators');
var NavListArtboard = require('../components/NavListArtboard.react');
var ProjectStore = require('../stores/ProjectStore');
var classNames = require('classnames');

function getStateFromStores() {
    return {
        folders: ProjectStore.getAllFolders(),
        name: ProjectStore.getName(),
        currentFolderID: ProjectStore.getCurrentFolderID(),
        currentArtboardID: ProjectStore.getCurrentArtboardID(),
        openFolderID: ProjectStore.getOpenFolderID()
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
        var _this = this;
        var currentArtboardID = this.state.currentArtboardID;
        var currentFolderID = this.state.currentFolderID;
        var openFolderID = this.state.openFolderID;


        console.log(currentFolderID)

        var navListFolder = this.state.folders.map(function(folder) {

            var navListPages = folder.artboard.map(function(artboard) {
                var artboardData = {
                    id: artboard.id,
                    name: artboard.name,
                    src: artboard.src
                };

                return (
                    <NavListArtboard
                        key={artboard.id}
                        artboard={artboardData}
                        folderID={folder.pageId}
                        currentArtboardID={currentArtboardID}
                    />
                );
            });
            console.log(folder.pageId)
            return (
                <li className={classNames({
                    'nav-folder__item': true,
                    'nav-folder__item_open': folder.pageId === openFolderID
                })}>
                    <h3
                        className={classNames({
                            'nav-folder__title': true,
                            'nav-folder__title_active': folder.pageId === currentFolderID
                        })}
                        onClick={_this._onClick.bind(_this, folder.pageId)}>
                        {folder.name}
                    </h3>
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
    },

    _onClick: function(folderID) {
        MinceNavActionCreators.clickNavFolder(folderID);
    }
});

module.exports = NavSection;
