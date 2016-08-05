import { connect } from 'react-redux';
import ToolsComponent from '../components/ToolsComponent';

const mapStateToProps = ({ artboard }) => ({
    layer: artboard.layer,
    isExportEveryLayer: artboard.isExportEveryLayer,
    url: artboard.url + artboard.activeArtboard.id + '/',
});

const Tools = connect(
    mapStateToProps,
    { }
)(ToolsComponent);

export default Tools;
