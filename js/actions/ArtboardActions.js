var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {

    clickArtboardLayer: function(data) {
        AppDispatcher.dispatch({
            type: ActionTypes.CLICK_ARTBOARD_LAYER,
            layer: data
        });
    },

    enterArtboardLayer: function(data) {
        AppDispatcher.dispatch({
            type: ActionTypes.ENTER_ARTBOARD_LAYER,
            layer: data
        });
    },

    leaveArtboardLayer: function(data) {
        AppDispatcher.dispatch({
            type: ActionTypes.LEAVE_ARTBOARD_LAYER,
            layer: data
        });
    }
};
