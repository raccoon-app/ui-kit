var MinceAppDispatcher = require('../dispatcher/MinceAppDispatcher');
var MinceConstants = require('../constants/MinceConstants');

var ActionTypes = MinceConstants.ActionTypes;

module.exports = {

    clickArtboardLayer: function(data) {
        MinceAppDispatcher.dispatch({
            type: ActionTypes.CLICK_ARTBOARD_LAYER,
            layer: data
        });
    },

    enterArtboardLayer: function(data) {
        MinceAppDispatcher.dispatch({
            type: ActionTypes.ENTER_ARTBOARD_LAYER,
            layer: data
        });
    },

    leaveArtboardLayer: function(data) {
        MinceAppDispatcher.dispatch({
            type: ActionTypes.LEAVE_ARTBOARD_LAYER,
            layer: data
        });
    }
};
