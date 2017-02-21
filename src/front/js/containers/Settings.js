import { connect } from 'react-redux';
import SettingPanel from '../components/settings/SettingPanel';
import { setSwitcherColor } from '../actions/setting';

const mapStateToProps = ({ setting }) => ({
    markerColorList: setting.markerColorList,
    backgroundColorList: setting.backgroundColorList,
    markerColor: setting.markerColor,
    backgroundColor: setting.backgroundColor,
});

const mapDispatchToProps = (dispatch) => ({
    onSwitcherChange: (type, color) => {
        dispatch(setSwitcherColor(type, color));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingPanel);
