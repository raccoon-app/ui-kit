var MinceAppDispatcher = require('../dispatcher/MinceAppDispatcher');
var MinceConstants = require('../constants/MinceConstants');

var ActionTypes = MinceConstants.ActionTypes;

module.exports = {

    clickNavArtboard: function(data) {
        MinceAppDispatcher.dispatch({
            type: ActionTypes.CLICK_NAV_ARTBOARD,
            artboardID: data
        });
    }

};
