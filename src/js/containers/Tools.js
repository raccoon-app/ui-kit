import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {  } from '../actions'
import { getLayer, getExportLayer, getSrc} from '../reducers/tools'
import ToolsComponent from '../components/ToolsComponent'

const mapStateToProps = (state) => {
    return {
        layer: getLayer(state.tools),
        isExportEveryLayer: getExportLayer(state.tools),
        src: getSrc(state.tools)
    }
}

const Tools = connect(
    mapStateToProps,
    {  }
)(ToolsComponent)

export default Tools
