import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import Marker from './MeasureMarker'
import Spacing from './MeasureSpacing'

export default class MeasureComponent extends Component {
    render() {
        const { scale } = this.props

        return (
            <div className={classnames({
                    'measure': true,
                    'measure_disabled': !this.props.currentLayer.x && !this.props.hoverLayer.x
                })}>

                <Marker scale={scale} measure={this.props.hoverLayer} color={this.props.hoverColor} type="hover" />
                <Marker scale={scale} measure={this.props.currentLayer} color={this.props.currentColor} type="current" />
                <Spacing scale={scale} spacing={this.props.spacing} color={this.props.hoverColor} />
            </div>
        )
    }
}


MeasureComponent.propTypes = {
    currentLayer: PropTypes.object,
    hoverLayer: PropTypes.object,
    spacing: PropTypes.array,
    currentColor: PropTypes.string,
    hoverColor: PropTypes.string,
    scale: PropTypes.number
}