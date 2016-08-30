import { connect } from 'react-redux';
import SettingPanel from '../components/settings/SettingPanel';
import { toggleSettingPanel, setSwitcherColor } from '../actions/setting';

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

export default connect(mapStateToProps, mapDispatchToProps)(SettingPanel);
