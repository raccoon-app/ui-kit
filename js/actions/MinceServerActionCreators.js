var MinceAppDispatcher = require('../dispatcher/MinceAppDispatcher');
var MinceConstants = require('../constants/MinceConstants');

var ActionTypes = MinceConstants.ActionTypes;

module.exports = {

    receiveProject: function(data, url) {
        MinceAppDispatcher.dispatch({
            type: ActionTypes.RECEIVE_PROJECT,
            project: data,
            url: url
        });
    }

};
