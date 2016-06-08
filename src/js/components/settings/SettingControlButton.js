/**
 * Created by Viktoriia_Goncharuk on 5/13/2016.
 */
import React, { PropTypes } from 'react';

const SettingControlButton = (props) => (
    <div className="setting-control-btn icon-settings-icon" onClick={props.onClick}></div>
);


SettingControlButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default SettingControlButton;
