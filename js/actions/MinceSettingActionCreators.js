var MinceAppDispatcher = require('../dispatcher/MinceAppDispatcher');
var MinceConstants = require('../constants/MinceConstants');

var ActionTypes = MinceConstants.ActionTypes;

module.exports = {

    setBackgroundColor: function(data) {
        MinceAppDispatcher.dispatch({
            type: ActionTypes.SET_BACKGROUND_COLOR,
            color: data
        });
    },

    setMarkerColor: function(data) {
        MinceAppDispatcher.dispatch({
            type: ActionTypes.SET_MARKER_COLOR,
            color: data
        });
    }
};
