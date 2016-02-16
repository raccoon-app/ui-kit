var MinceServerActionCreators = require('../actions/MinceServerActionCreators');
var MinceNavActionCreators = require('../actions/MinceNavActionCreators');

module.exports = {

    getProject: function(url) {
        // simulate retrieving data from a database
        //var data = JSON.parse(localStorage.getItem('project'));
        // @TODO: FIX GET DATA

        var oldXdata = document.getElementById('project');

        if (oldXdata && oldXdata.length) {
            oldXdata.parentNode.removeChild(oldXdata);
        }

        var xdata = document.createElement('script');
        xdata.setAttribute('id', 'project');

        xdata.onload = function(){
            // @TODO: FIX DEFAULT ARTBOARD
            var defaultArtboard;
            MinceServerActionCreators.receiveProject(pageData, url);

            for (var key in pageData.artboard) {
                defaultArtboard = pageData.artboard[key].id;
                break;
            }

            MinceNavActionCreators.clickNavArtboard(defaultArtboard);

        };
        xdata.src = url+'data.js';
        document.body.appendChild(xdata);

        // simulate success callback
        //MinceServerActionCreators.receiveProject(data);
    }

};
