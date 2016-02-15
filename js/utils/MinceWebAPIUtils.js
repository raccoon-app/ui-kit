var MinceServerActionCreators = require('../actions/MinceServerActionCreators');

module.exports = {

    getProject: function() {
        // simulate retrieving data from a database
        var data = JSON.parse(localStorage.getItem('project'));

        // simulate success callback
        MinceServerActionCreators.receiveProject(data);
    }

};
