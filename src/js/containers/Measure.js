import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { } from '../actions'
import { getCurrentLayer, getHoverLayer, getSpacing, getCurrentMarkerColor, getHoverMarkerColor } from '../reducers/measure'
import MeasureComponent from '../components/MeasureComponent'


const mapStateToProps = (state) => {
    return {
        currentLayer: getCurrentLayer(state.measure),
        hoverLayer: getHoverLayer(state.measure),
        spacing: getSpacing(state.measure),
        currentColor: getCurrentMarkerColor(state.measure),
        hoverColor: getHoverMarkerColor(state.measure)
    }
}

export default connect(
    mapStateToProps,
    {  }
)(MeasureComponent)