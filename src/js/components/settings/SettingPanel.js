import React, { PropTypes } from 'react';
import RadioColorSwitcher from './RadioColorSwitcher';
import SettingControlButton from './SettingControlButton';
import classnames from 'classnames';

const SettingPanel = (props) => {
    const { settingPanelVisibility, onControlBtnClick } = props;
    const bgSwitcherProps = {
        optionList: props.backgroundColorList,
        title: 'Background',
        onChange: props.onSwitcherChange,
        activeColor: props.backgroundColor,
        type: 'BACKGROUND_COLOR',
    };
    const markerSwitcherProps = {
        optionList: props.markerColorList,
        title: 'Guides',
        onChange: props.onSwitcherChange,
        activeColor: props.markerColor,
        type: 'MARKER_COLOR',
    };
    return (
        <div className={ classnames({
            'setting-panel': true,
            'setting-panel_opened': settingPanelVisibility,
        })}
        >
            <SettingControlButton onClick={onControlBtnClick} />
            <div className="setting-panel__options">
                <RadioColorSwitcher {...markerSwitcherProps} />
                <RadioColorSwitcher {...bgSwitcherProps} />
            </div>
        </div>
    );
};

SettingPanel.propTypes = {
    settingPanelVisibility: PropTypes.bool.isRequired,
    markerColorList: PropTypes.array.isRequired,
    backgroundColorList: PropTypes.array.isRequired,
    onControlBtnClick: PropTypes.func.isRequired,
    onSwitcherChange: PropTypes.func.isRequired,
    markerColor: PropTypes.object.isRequired,
    backgroundColor: PropTypes.object.isRequired,
};

export default SettingPanel;
