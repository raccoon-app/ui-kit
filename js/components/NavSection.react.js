var React = require('react');
var MinceNavActionCreators = require('../actions/MinceNavActionCreators');
var NavArtboardList = require('../components/NavArtboardList.react');
var ProjectStore = require('../stores/ProjectStore');
var classNames = require('classnames');

function getStateFromStores() {
    return {
        folders: ProjectStore.getAllFolders(),
        name: ProjectStore.getName(),
        currentFolderID: ProjectStore.getCurrentFolderID(),
        currentArtboardID: ProjectStore.getCurrentArtboardID(),
        openFolderID: ProjectStore.getOpenFolderID(),
        viewMode: ProjectStore.getViewMode()
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
        var viewMode = this.state.viewMode;

        var navFolderList = this.state.folders.map(function(folder) {

            var navPagesList = folder.artboard.map(function(artboard) {
                var artboardData = {
                    id: artboard.id,
                    name: artboard.name,
                    src: artboard.src
                };

                return (
                    <NavArtboardList
                        key={artboard.id}
                        artboard={artboardData}
                        folderID={folder.pageId}
                        currentArtboardID={currentArtboardID}
                        viewMode = {viewMode}
                        />
                );
            });

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
                        {navPagesList}
                    </ul>
                </li>
            );
        });

        return (
            <div className="nav">
                <ul className="nav-folder" ref="messageList">
                    {navFolderList}
                </ul>
                <div>
                    <button onClick={this._viewModeHandler.bind(this, 'list')}>list view</button>
                    <button onClick={this._viewModeHandler.bind(this, 'tile')}>tile view</button>
                    <input onChange={this._searchHandler} type="search" />
                </div>
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
    },

    _viewModeHandler: function(mode) {
        MinceNavActionCreators.changeViewMode(mode);
    },

    _searchHandler: function() {

    }
});

module.exports = NavSection;
