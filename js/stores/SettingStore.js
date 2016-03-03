var MinceAppDispatcher = require('../dispatcher/MinceAppDispatcher');
var MinceConstants = require('../constants/MinceConstants');
var MinceSettingUtils = require('../utils/MinceSettingUtils');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var MarkerColors = MinceSettingUtils.getMarkerColors();
var BackgroundColors = MinceSettingUtils.getBackgroundColors();
var ActionTypes = MinceConstants.ActionTypes;
var CHANGE_EVENT = 'change';


var _markerColor = MarkerColors[0] || ['#FF0000','00FF00'];
var _backgroundColor = BackgroundColors[0];

var SettingStore = assign({}, EventEmitter.prototype, {

    init: function(layer, type) {
    },

    destroy: function() {
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    setBackgroundColor: function(color) {
        _backgroundColor = color;
    },

    setMarkerColor: function(color) {
        _markerColor = color;
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
    get: function() {
        return false;
    },

    getBackgroundColor: function() {
        return _backgroundColor;
    },

    getCurrentMarkerColor: function() {
        return _markerColor[0];
    },

    getTargetMarkerColor: function() {
        return _markerColor[1];
    }
});

SettingStore.dispatchToken = MinceAppDispatcher.register(function(action) {
    switch(action.type) {

        case ActionTypes.SET_BACKGROUND_COLOR:
            SettingStore.setBackgroundColor(action.color);
            SettingStore.emitChange();
            break;

        case ActionTypes.SET_MARKER_COLOR:
            SettingStore.setMarkerColor(action.color);
            SettingStore.emitChange();
            break;

        default:
        // do nothing
    }
});

module.exports = SettingStore;
