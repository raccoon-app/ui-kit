var MinceServerActionCreators = require('../actions/MinceServerActionCreators');

module.exports = {

    getProject: function(url) {
        // simulate retrieving data from a database
        //var data = JSON.parse(localStorage.getItem('project'));


        var oldXdata = document.getElementById('project');

        if (oldXdata && oldXdata.length) {
            oldXdata.parentNode.removeChild(oldXdata);
        }

        var xdata = document.createElement('script');
        xdata.setAttribute('id', 'project');

        xdata.onload = function(){
            MinceServerActionCreators.receiveProject(pageData, url);
        };
        xdata.src = url+'data.js';
        document.body.appendChild(xdata);

        // simulate success callback
        //MinceServerActionCreators.receiveProject(data);
    }

};
