var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {

    setBackgroundColor: function(data) {
        AppDispatcher.dispatch({
            type: ActionTypes.SET_BACKGROUND_COLOR,
            color: data
        });
    },

    setMarkerColor: function(data) {
        AppDispatcher.dispatch({
            type: ActionTypes.SET_MARKER_COLOR,
            color: data
        });
    }
};
