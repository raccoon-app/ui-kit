var RaccoonApp = require('./components/RaccoonApp.react');
var SettingUtils = require('./utils/SettingUtils');
//var ExampleDataUtils = require('./utils/ExampleDataUtils');

var React = require('react');
window.React = React;

//ExampleDataUtils.init(); // load example data into localstorage

//LoadDataUtils.getProject();
SettingUtils.setDefault();

React.render(
    <RaccoonApp />,
    document.getElementById('react')
);
