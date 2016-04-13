var MinceAppDispatcher = require('../dispatcher/MinceAppDispatcher');
var MinceConstants = require('../constants/MinceConstants');

var ActionTypes = MinceConstants.ActionTypes;

module.exports = {

    clickNavArtboard: function(artboardID, folderID) {
        MinceAppDispatcher.dispatch({
            type: ActionTypes.CLICK_NAV_ARTBOARD,
            artboardID: artboardID,
            folderID: folderID
        });
    },

    clickNavFolder: function(folderID) {
        MinceAppDispatcher.dispatch({
            type: ActionTypes.CLICK_NAV_FOLDER,
            folderID: folderID
        });
    },

    changeViewMode: function(mode) {
        MinceAppDispatcher.dispatch({
            type: ActionTypes.CHANGE_VIEW_MODE,
            mode: mode
        });
    }
};
