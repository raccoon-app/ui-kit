import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getMarkerColorList, getBackgroundColorList, getSettingPanelVisibilityState } from '../reducers/setting'
import RadioColorSwitcher from '../components/settings/RadioColorSwitcher'
import SettingControlButton from '../components/settings/SettingControlButton'
import { toggleSettingPanel } from '../actions'
import classnames from 'classnames'

class SettingsPanel extends Component {
    render() {
        const { markerColorList, backgroundColorList, settingPanelVisibility,  onControlBtnClick } = this.props;
        console.log(settingPanelVisibility + ' getSettingPanelVisibilityState');

        return (
            <div className={ classnames({
                'setting-panel': true,
                'setting-panel_opened': settingPanelVisibility
            })}>
                <SettingControlButton onClick={onControlBtnClick}/>
                <div className="setting-panel__options">
                    <RadioColorSwitcher optionList={backgroundColorList} title="Background" />
                    <RadioColorSwitcher optionList={markerColorList} title="Guides" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        markerColorList: getMarkerColorList(state.setting),
        backgroundColorList: getBackgroundColorList(state.setting),
        settingPanelVisibility: getSettingPanelVisibilityState(state.setting)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onControlBtnClick: () => {
            dispatch(toggleSettingPanel());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPanel);