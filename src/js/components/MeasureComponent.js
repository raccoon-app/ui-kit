import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Marker from './MeasureMarker';
import Spacing from './MeasureSpacing';

const getRound = (value = 100, scale = 1) => {

    return 2 * Math.round(value * scale / 2);
};

export default class MeasureComponent extends Component {
    render() {
        const { scale, markerColor: { currentColor, hoverColor },
            width, height, currentLayer, hoverLayer, isAnimated } = this.props;

        return (
            <div className={classnames({
                    measure: true,
                    measure_disabled: (!currentLayer.x && currentLayer.x !== 0) && (!hoverLayer.x && hoverLayer.x !== 0),
                    measure_animated: isAnimated,
                })}
                style={{
                    width: getRound(width, scale) + 'px',
                    height: getRound(height, scale) + 'px',
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
    isAnimated: PropTypes.bool,
};
