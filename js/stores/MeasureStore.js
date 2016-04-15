var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _currentLayer = {};
var _targetLayer = {};
var _spacing = [];

var MeasureStore = assign({}, EventEmitter.prototype, {

    init: function(layer, type) {

        if (type == 'current') {
            _currentLayer = {
                x: layer.x,
                y: layer.y,
                width: layer.width,
                height: layer.height
            };
        } else {
            _targetLayer = {
                x: layer.x,
                y: layer.y,
                width: layer.width,
                height: layer.height
            };
        }
    },

    createSpacing: function() {
        _spacing = [];

        //if (_targetLayer == _currentLayer) {
        //    return;
        //}

        var coord = {
            cx1: _currentLayer.x,
            cx2: _currentLayer.x + _currentLayer.width,
            cy1: _currentLayer.y,
            cy2: _currentLayer.y + _currentLayer.height,
            tx1: _targetLayer.x,
            tx2: _targetLayer.x + _targetLayer.width,
            ty1: _targetLayer.y,
            ty2: _targetLayer.y + _targetLayer.height
        };

        // TOP RULER
        if (coord.ty1 > coord.cy2) {
            _spacing.push({
                type: 'top',
                top: coord.cy2,
                left: (coord.tx1+coord.tx2)/2,
                height: (coord.ty1-coord.cy2),
                value: (coord.ty1-coord.cy2)
            })
        } else {
            if (coord.ty1 < coord.cy2) {
                if (coord.ty1 > coord.cy1) {
                    _spacing.push({
                        type: 'top',
                        top: coord.cy1,
                        left: (coord.tx1+coord.tx2)/2,
                        height: (coord.ty1-coord.cy1),
                        value: (coord.ty1-coord.cy1)
                    })
                }

                if (coord.ty1 < coord.cy1 && coord.ty2 > coord.cy1) {
                    _spacing.push({
                        type: 'top',
                        top: coord.ty1,
                        left: (coord.cx1+coord.cx2)/2,
                        height: (coord.cy1-coord.ty1),
                        value: (coord.cy1-coord.ty1)
                    })
                }
            }
        }

        // BOTTOM RULER
        if (coord.cy1 > coord.ty2) {
            _spacing.push({
                type: 'bottom',
                top: coord.ty2,
                left: (coord.tx1+coord.tx2)/2,
                height: (coord.cy1-coord.ty2),
                value: (coord.cy1-coord.ty2)
            })
        } else {
            if (coord.cy1 < coord.ty2) {
                if (coord.cy2 > coord.ty2) {
                    _spacing.push({
                        type: 'bottom',
                        top: coord.ty2,
                        left: (coord.tx1+coord.tx2)/2,
                        height: (coord.cy2-coord.ty2),
                        value: (coord.cy2-coord.ty2)
                    })
                }

                if (coord.cy2 < coord.ty2 && coord.ty1 < coord.cy2) {
                    _spacing.push({
                        type: 'bottom',
                        top: coord.cy2,
                        left: (coord.cx1+coord.cx2)/2,
                        height: (coord.ty2-coord.cy2),
                        value: (coord.ty2-coord.cy2)
                    })
                }
            }
        }

        // LEFT RULER
        if (coord.tx1 > coord.cx2) {
            _spacing.push({
                type: 'left',
                top: (coord.ty1+coord.ty2)/2,
                left: coord.cx2,
                width: (coord.tx1-coord.cx2),
                value: (coord.tx1-coord.cx2)
            })
        } else {
            if (coord.tx1 < coord.cx2) {
                if (coord.tx1 > coord.cx1) {
                    _spacing.push({
                        type: 'left',
                        top: (coord.ty1+coord.ty2)/2,
                        left: coord.cx1,
                        width: (coord.tx1-coord.cx1),
                        value: (coord.tx1-coord.cx1)
                    })
                }

                if (coord.tx1 < coord.cx1 && coord.tx2 > coord.cx1) {
                    _spacing.push({
                        type: 'left',
                        top: (coord.cy1+coord.cy2)/2,
                        left: coord.tx1,
                        width: (coord.cx1-coord.tx1),
                        value: (coord.cx1-coord.tx1)
                    })
                }
            }
        }

        // RIGHT RULER
        if (coord.cx1 > coord.tx2) {
            _spacing.push({
                type: 'right',
                top: (coord.ty1+coord.ty2)/2,
                left: coord.tx2,
                width: (coord.cx1-coord.tx2),
                value: (coord.cx1-coord.tx2)
            })
        } else {
            if (coord.cx1 < coord.tx2) {
                if (coord.cx2 > coord.tx2) {
                    _spacing.push({
                        type: 'right',
                        top: (coord.ty1+coord.ty2)/2,
                        left: coord.tx2,
                        width: (coord.cx2-coord.tx2),
                        value: (coord.cx2-coord.tx2)
                    })
                }

                if (coord.cx2 < coord.tx2 && coord.tx1 < coord.cx2) {
                    _spacing.push({
                        type: 'right',
                        top: (coord.cy1+coord.cy2)/2,
                        left: coord.cx2,
                        width: (coord.tx2-coord.cx2),
                        value: (coord.tx2-coord.cx2)
                    })
                }
            }
        }
    },

    destroySpacing: function() {
        _spacing = [];
    },

    destroy: function() {
        _currentLayer = {};
        _targetLayer = {};
        _spacing = [];
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    setColor: function(color) {
        _color = color;
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
        return _currentLayer[id];
    },

    getSpacing: function() {
        return _spacing;
    },

    getCurrentLayer: function() {
        return _currentLayer;
    },

    getTargetLayer: function() {
        return _targetLayer;
    }
});

MeasureStore.dispatchToken = AppDispatcher.register(function(action) {
    switch(action.type) {
        case ActionTypes.CLICK_NAV_ARTBOARD:
            MeasureStore.destroy();
            MeasureStore.emitChange();
            break;

        case ActionTypes.CLICK_ARTBOARD_LAYER:
            MeasureStore.init(action.layer, 'current');
            MeasureStore.destroySpacing();
            MeasureStore.emitChange();
            break;

        case ActionTypes.ENTER_ARTBOARD_LAYER:
            MeasureStore.init(action.layer, 'target');
            MeasureStore.createSpacing();
            MeasureStore.emitChange();
            break;

        case ActionTypes.LEAVE_ARTBOARD_LAYER:
            MeasureStore.destroySpacing();
            MeasureStore.emitChange();
            break;

        default:
        // do nothing
    }
});

module.exports = MeasureStore;
