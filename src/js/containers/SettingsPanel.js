import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getMarkerColorList, getBackgroundColorList, getSettingPanelVisibilityState, getBackgroundColor, getMarkerColor } from '../reducers/setting';
import RadioColorSwitcher from '../components/settings/RadioColorSwitcher';
import SettingControlButton from '../components/settings/SettingControlButton';
import { toggleSettingPanel, setSwitcherColor } from '../actions';
import classnames from 'classnames';

const SettingsPanel = (props) => {
    const { settingPanelVisibility, onControlBtnClick } = props;
    const bgSwitcherProps = {
        optionList: props.backgroundColorList,
        title: 'Background',
        onChange: props.onSwitcherChange,
        activeColor: props.backgroundColor,
    };
    const markerSwitcherProps = {
        optionList: props.markerColorList,
        title: 'Guides',
        onChange: props.onSwitcherChange,
        activeColor: props.markerColor,
    };
    return (
        <div className={ classnames({
            'setting-panel': true,
            'setting-panel_opened': settingPanelVisibility,
        })}
        >
            <SettingControlButton onClick={onControlBtnClick} />
            <div className="setting-panel__options">
                <RadioColorSwitcher {...bgSwitcherProps} />
                <RadioColorSwitcher {...markerSwitcherProps} />
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
    markerColor: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    markerColorList: getMarkerColorList(state.setting),
    backgroundColorList: getBackgroundColorList(state.setting),
    settingPanelVisibility: getSettingPanelVisibilityState(state.setting),
    markerColor: getMarkerColor(state.setting),
    backgroundColor: getBackgroundColor(state.setting),
});

const mapDispatchToProps = (dispatch) => ({
    onControlBtnClick: () => {
        dispatch(toggleSettingPanel());
    },
    onSwitcherChange: (color) => {
        dispatch(setSwitcherColor(color));
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(SettingsPanel);
