var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {

    clickNavArtboard: function(artboardID, folderID) {
        AppDispatcher.dispatch({
            type: ActionTypes.CLICK_NAV_ARTBOARD,
            artboardID: artboardID,
            folderID: folderID
        });
    },

    clickNavFolder: function(folderID) {
        AppDispatcher.dispatch({
            type: ActionTypes.CLICK_NAV_FOLDER,
            folderID: folderID
        });
    },

    changeViewMode: function(mode) {
        AppDispatcher.dispatch({
            type: ActionTypes.CHANGE_VIEW_MODE,
            mode: mode
        });
    }
};
