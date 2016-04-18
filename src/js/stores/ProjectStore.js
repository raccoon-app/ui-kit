var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;

var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _project = {};
var _url = null;
var _currentFolderID = null;
var _currentArtboardID = null;
var _openFolderID = null;
var _viewMode = 'list';

var ProjectStore = Object.assign({}, EventEmitter.prototype, {

    init: function(project, url) {
        _url = url || null;

        _project.name = decodeURIComponent(project.sketchName);
        _project.folders = [];

        for (var id in project.pageData) {
            var item = project.pageData[id];

            item.name = decodeURIComponent(item.name);
            item.artboard = item.artboardId.map(function(aId){
                return {
                    id: project.artboard[aId].id,
                    src:  _url+project.artboard[aId].src +'/artboard.png',
                    name: decodeURIComponent(project.artboard[aId].name)
                };
            });

            _project.folders.push(item);
        }


        if (_currentFolderID || _currentArtboardID) {
            _currentFolderID = _project.folders[0].pageId;
            _currentArtboardID = _project.folders[0].artboardId[0];
            _openFolderID = _currentFolderID;
        }
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
    * @param {function} callback
    */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
    * @param {function} callback
    */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    /**
    * @param {string} id
    */
    get: function(id) {
        return _project[id];
    },

    getAllFolders: function() {
        return _project.folders || [];
    },

    getName: function() {
        return _project.name;
    },

    getCurrentFolderID: function() {
        return _currentFolderID;
    },

    getCurrentArtboardID: function() {
        return _currentArtboardID;
    },

    getOpenFolderID: function() {
        return _openFolderID; // || _currentFolderID
    },

    getViewMode: function() {
        return _viewMode;
    }
});

ProjectStore.dispatchToken = AppDispatcher.register(function(action) {
    switch(action.type) {
        case ActionTypes.CLICK_NAV_ARTBOARD:
            _currentArtboardID = action.artboardID;
            _currentFolderID = action.folderID;
            _openFolderID = action.folderID;
            ProjectStore.emitChange();
            break;

        case ActionTypes.CLICK_NAV_FOLDER:
            _openFolderID = _openFolderID == action.folderID ? null : action.folderID;
            ProjectStore.emitChange();
            break;

        case ActionTypes.CHANGE_VIEW_MODE:
            _viewMode = action.mode;
            ProjectStore.emitChange();
            break;

        case ActionTypes.RECEIVE_PROJECT:
            ProjectStore.init(action.project, action.url);
            ProjectStore.emitChange();
            break;

        default:
        // do nothing
    }
});

module.exports = ProjectStore;
