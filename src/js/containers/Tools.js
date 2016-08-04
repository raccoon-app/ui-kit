import { connect } from 'react-redux';
import ToolsComponent from '../components/ToolsComponent';

const mapStateToProps = ({ tools, artboard }) => ({
    layer: tools.layer,
    isExportEveryLayer: artboard.isExportEveryLayer,
    url: artboard.url + artboard.activeArtboard.id + '/',
});

const Tools = connect(
    mapStateToProps,
    { }
)(ToolsComponent);

export default Tools;
