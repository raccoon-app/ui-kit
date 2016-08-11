import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Marker from './MeasureMarker';
import Spacing from './MeasureSpacing';

const getRound = (value = 100, scale = 1) => (2 * Math.round(value * scale / 2));

const MeasureComponent = ({ currentLayer, hoverLayer, scale, spacing, markerColor: { currentColor, hoverColor }, width, height }) => (
    <div className={classnames({
        measure: true,
        measure_disabled: (!currentLayer.x && currentLayer.x !== 0) && (!hoverLayer.x && hoverLayer.x !== 0),
    })}
        style={{
            width: getRound(width, scale) + 'px',
            height: getRound(height, scale) + 'px',
        }}
    >
        <Marker scale={scale} measure={hoverLayer} color={hoverColor} type="hover" />
        <Marker scale={scale} measure={currentLayer} color={currentColor} type="current" />
        <Spacing scale={scale} spacing={spacing} color={hoverColor} />
    </div>
);

MeasureComponent.propTypes = {
    currentLayer: PropTypes.object,
    hoverLayer: PropTypes.object,
    scale: PropTypes.number,
    spacing: PropTypes.array,
    markerColor: PropTypes.object,
    width: PropTypes.number,
    height: PropTypes.number,
};

export default MeasureComponent;
