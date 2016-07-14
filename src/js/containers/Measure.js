import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getCurrentLayer, getHoverLayer, getSpacing } from '../reducers/measure';
import { getMarkerColor } from '../reducers/setting';
import MeasureComponent from '../components/MeasureComponent';

const mapStateToProps = (state) => ({
    currentLayer: getCurrentLayer(state.measure),
    hoverLayer: getHoverLayer(state.measure),
    spacing: getSpacing(state.measure),
    markerColor: getMarkerColor(state.setting),
});

export default connect(
    mapStateToProps,
    {}
)(MeasureComponent);
