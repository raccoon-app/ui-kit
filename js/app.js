
var MinceApp = require('./components/MinceApp.react');
var MinceSettingUtils = require('./utils/MinceSettingUtils');
//var MinceExampleData = require('./MinceExampleData');

var React = require('react');
window.React = React;

//MinceExampleData.init(); // load example data into localstorage

//MinceWebAPIUtils.getProject();
MinceSettingUtils.setDefault();

React.render(
    <MinceApp />,
    document.getElementById('react')
);
