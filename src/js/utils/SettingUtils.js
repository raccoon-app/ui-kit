var SettingActions = require('../actions/SettingActions');

module.exports = {

    getMarkerColors: function() {
        return [
            ['#A3C644', '#FF0000'],
            ['#FF0000', '#A3C644'],
            ['#0000ff', '#00ff00'],
            ['#F78F21', '#1B7E8E']
        ]
    },

    getBackgroundColors: function() {
        return [
            '#E8E8E8',
            '#F0F0F0',
            '#BBBBBB',
            '#999999',
            '#333333'
        ]
    },

    setDefault: function() {
        var defaultMarkerColor = this.getMarkerColors()[0];
        var defaultBackgroundColor = this.getBackgroundColors()[0];

        SettingActions.setMarkerColor(defaultMarkerColor);
        SettingActions.setBackgroundColor(defaultBackgroundColor);
    }
};
