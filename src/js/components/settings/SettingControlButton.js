/**
 * Created by Viktoriia_Goncharuk on 5/13/2016.
 */
import React, { Component, PropTypes } from 'react';

class SettingControlButton extends Component {

    render() {
        
        return (
            <div className="setting-control-btn icon-settings-icon" onClick={this.props.onClick}></div>
        );
    }
}

SettingControlButton.propTyeps = {
    onClick: PropTypes.func.isRequired
};

export default SettingControlButton;