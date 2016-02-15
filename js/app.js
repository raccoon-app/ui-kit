
var MinceApp = require('./components/MinceApp.react');
//var MinceExampleData = require('./MinceExampleData');

var React = require('react');
window.React = React;

//MinceExampleData.init(); // load example data into localstorage

//MinceWebAPIUtils.getProject();

React.render(
    <MinceApp />,
    document.getElementById('react')
);
