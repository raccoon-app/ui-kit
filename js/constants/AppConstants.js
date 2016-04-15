var keyMirror = require('keymirror');

module.exports = {

    ActionTypes: keyMirror({
        RECEIVE_PROJECT: null,
        CLICK_NAV_ARTBOARD: null,
        CLICK_NAV_FOLDER: null,
        CHANGE_VIEW_MODE: null,
        CLICK_ARTBOARD_LAYER: null,
        ENTER_ARTBOARD_LAYER: null,
        LEAVE_ARTBOARD_LAYER: null,
        SET_MARKER_COLOR: null,
        SET_BACKGROUND_COLOR: null
    })

};
