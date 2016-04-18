var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;

var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _artboard = {};
var _url = null;
var _currentID = null;

var ArtboardStore = Object.assign({}, EventEmitter.prototype, {

    init: function(project,url) {
        _url = url;
        _artboard = project.artboard ;

        if (!_currentID) {
            for(var key in _artboard) {
                _currentID = _artboard[key].id;
                break;
            }
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
        return _artboard[id];
    },

    getCurrentID: function() {
        return _currentID;
    },

    getCurrent: function() {
        return this.get(this.getCurrentID()) || {};
    },

    getLayer: function() {
        return this.getCurrent().layer || [];
    },
    getImage: function() {
        return _url+this.getCurrent().src +'/artboard.png';
    }
});

ArtboardStore.dispatchToken = AppDispatcher.register(function(action) {
    switch(action.type) {
        case ActionTypes.CLICK_NAV_ARTBOARD:
            _currentID = action.artboardID;
            ArtboardStore.emitChange();
            break;

        case ActionTypes.RECEIVE_PROJECT:
            ArtboardStore.init(action.project, action.url);
            ArtboardStore.emitChange();
            break;

        default:
        // do nothing
    }
});

module.exports = ArtboardStore;
