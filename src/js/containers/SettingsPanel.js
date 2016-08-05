import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import RadioColorSwitcher from '../components/settings/RadioColorSwitcher';
import SettingControlButton from '../components/settings/SettingControlButton';
import { toggleSettingPanel, setSwitcherColor } from '../actions/setting';
import classnames from 'classnames';

const SettingsPanel = (props) => {
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

SettingsPanel.propTypes = {
    settingPanelVisibility: PropTypes.bool.isRequired,
    markerColorList: PropTypes.array.isRequired,
    backgroundColorList: PropTypes.array.isRequired,
    onControlBtnClick: PropTypes.func.isRequired,
    onSwitcherChange: PropTypes.func.isRequired,
    markerColor: PropTypes.object.isRequired,
    backgroundColor: PropTypes.object.isRequired,
};

const mapStateToProps = ({ setting }) => ({
    markerColorList: setting.markerColorList,
    backgroundColorList: setting.backgroundColorList,
    settingPanelVisibility: setting.settingPanelVisibility,
    markerColor: setting.markerColor,
    backgroundColor: setting.backgroundColor,
});

const mapDispatchToProps = (dispatch) => ({
    onControlBtnClick: () => {
        dispatch(toggleSettingPanel());
    },
    onSwitcherChange: (type, color) => {
        dispatch(setSwitcherColor(type, color));
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(SettingsPanel);
