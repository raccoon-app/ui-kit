var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;

var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _layer = {};
var _exportEveryLayer = null;
var _url = null;
var _artboard = null;
var _currentID = null;

var ToolsStore = Object.assign({}, EventEmitter.prototype, {

    init: function(layer) {
        _layer = layer ;
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
        return _layer[id];
    },

    getLayer: function() {
        return _layer;
    },

    getArtboard: function() {
        return _artboard;
    },

    getProjectUrl: function() {
        return _url;
    },

    getIsExportEveryLayer: function() {
        return _exportEveryLayer;
    }
});

ToolsStore.dispatchToken = AppDispatcher.register(function(action) {
    switch(action.type) {
        case ActionTypes.CLICK_NAV_ARTBOARD:
            _layer = {};
            _artboard = action.artboardID;
            ToolsStore.emitChange();
            break;

        case ActionTypes.RECEIVE_PROJECT:
            _exportEveryLayer = action.project.exportEveryLayer || null;
            _url = action.url || null;
            ToolsStore.emitChange();
            break;

        case ActionTypes.CLICK_ARTBOARD_LAYER:
            ToolsStore.init(action.layer);
            ToolsStore.emitChange();
            break;

        default:
        // do nothing
    }
});

module.exports = ToolsStore;
