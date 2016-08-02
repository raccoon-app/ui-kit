import { connect } from 'react-redux';
import ToolsComponent from '../components/ToolsComponent';

const mapStateToProps = ({ tools, artboard }) => ({
    layer: tools.layer,
    isExportEveryLayer: tools.isExportEveryLayer,
    url: tools.url + artboard.activeArtboard.id + '/',
});

const Tools = connect(
    mapStateToProps,
    { }
)(ToolsComponent);

export default Tools;
