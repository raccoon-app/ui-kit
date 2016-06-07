import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getMarkerColorList, getBackgroundColorList, getSettingPanelVisibilityState } from '../reducers/setting';
import RadioSwitcher from '../components/settings/RadioSwitcher';
import SettingControlButton from '../components/settings/SettingControlButton';
import { toggleSettingPanel, setMarkerColor } from '../actions';
import classnames from 'classnames';

const SettingsPanel = (props) => {
    const { settingPanelVisibility, onControlBtnClick } = props;
    const bgSwitcherProps = {
        optionList: props.backgroundColorList,
        title: 'Background',
        type: 'backgroundList',
        onChange: props.onSwitcherChange,
    };
    const markerSwitcherProps = {
        optionList: props.markerColorList,
        title: 'Guides',
        type: 'markerList',
        onChange: props.onSwitcherChange,
    };
    return (
        <div className={ classnames({
            'setting-panel': true,
            'setting-panel_opened': settingPanelVisibility,
        })}
        >
            <SettingControlButton onClick={onControlBtnClick} />
            <div className="setting-panel__options">
                <RadioSwitcher {...bgSwitcherProps} />
                <RadioSwitcher {...markerSwitcherProps} />
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
};

const mapStateToProps = (state) => ({
    markerColorList: getMarkerColorList(state.setting),
    backgroundColorList: getBackgroundColorList(state.setting),
    settingPanelVisibility: getSettingPanelVisibilityState(state.setting),
});

const mapDispatchToProps = (dispatch) => ({
    onControlBtnClick: () => {
        dispatch(toggleSettingPanel());
    },
    onSwitcherChange: (color) => {
        dispatch(setMarkerColor(color));
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(SettingsPanel);
