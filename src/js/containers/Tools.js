import React from 'react';
import { connect } from 'react-redux';
import {} from '../actions';
import { getLayer, getExportLayer, getUrl } from '../reducers/tools';
import ToolsComponent from '../components/ToolsComponent';

const mapStateToProps = (state) => ({
    layer: getLayer(state.tools),
    isExportEveryLayer: getExportLayer(state.tools),
    url: getUrl(state.tools),
})

const Tools = connect(
    mapStateToProps,
    { }
)(ToolsComponent);

export default Tools;
