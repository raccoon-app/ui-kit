import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MeasureComponent from '../components/MeasureComponent';

const mapStateToProps = ({ measurement, setting }) => ({
    currentLayer: measurement.currentLayer,
    hoverLayer: measurement.hoverLayer,
    spacing: measurement.spacing,
    markerColor: setting.markerColor,
});

export default connect(
    mapStateToProps,
    {}
)(MeasureComponent);
