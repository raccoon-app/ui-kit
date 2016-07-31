import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Marker from './MeasureMarker';
import Spacing from './MeasureSpacing';

export default class MeasureComponent extends Component {
    render() {
        const { scale, markerColor: { currentColor, hoverColor }, isCenter, width, height } = this.props;

        return (
            <div className={classnames({
                    measure: true,
                    measure_disabled: !this.props.currentLayer.x && !this.props.hoverLayer.x,
                })}
                style={{
                    width: width * scale + 'px',
                    height: height * scale + 'px',
                    left: isCenter ? '50%' : '0',
                    top: isCenter ? '50%' : '0',
                    transform: isCenter ? 'translate(-50%, -50%)' : 'none',
                }}
            >

                <Marker scale={scale} measure={this.props.hoverLayer} color={hoverColor} type="hover" />
                <Marker scale={scale} measure={this.props.currentLayer} color={currentColor} type="current" />
                <Spacing scale={scale} spacing={this.props.spacing} color={hoverColor} />
            </div>
        );
    }
}


MeasureComponent.propTypes = {
    currentLayer: PropTypes.object,
    hoverLayer: PropTypes.object,
    spacing: PropTypes.array,
    markerColor: PropTypes.object,
    scale: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    isCenter: PropTypes.bool,
};
