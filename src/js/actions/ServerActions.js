var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {

    receiveProject: function(data, url) {
        AppDispatcher.dispatch({
            type: ActionTypes.RECEIVE_PROJECT,
            project: data,
            url: url
        });
    }

};
