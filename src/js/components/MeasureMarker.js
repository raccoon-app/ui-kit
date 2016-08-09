import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { isColorLight } from '../utils/UIColors';

const MeasureMarker = ({ scale, measure, type, color }) => (
    <div className={classnames({
        measure_disabled: (!measure.x && measure.x !== 0),
    })}
    >
        <div className={classnames('measure-marker', 'measure-marker_' + type)} style={{
            left: `${measure.x * scale}px`,
            top: `${measure.y * scale}px`,
            width: `${measure.width * scale}px`,
            height: `${measure.height * scale}px`,
            boxShadow: `0 0 0 1px ${color}`,
        }}
        >
            <span className={classnames({
                'measure-marker__value': true,
                'measure-marker__value_text_dark': isColorLight(color),
            })} style={{ backgroundColor: color }}
            >
                {measure.width} * {measure.height}
            </span>
        </div>
        <div className="measure-lighthouse measure-lighthouse_top"
            style={{ top: `${measure.y * scale}px`, borderColor: color }}
        >
        </div>
        <div className="measure-lighthouse measure-lighthouse_right"
            style={{ left: `${(measure.x + measure.width) * scale}px`, borderColor: color }}
        >
        </div>
        <div className="measure-lighthouse measure-lighthouse_bottom"
            style={{ top: `${(measure.y + measure.height) * scale}px`, borderColor: color }}
        >
        </div>
        <div className="measure-lighthouse measure-lighthouse_left"
            style={{ left: `${(measure.x * scale) * scale}px`, borderColor: color }}
        >
        </div>
    </div>
);

MeasureMarker.propTypes = {
    scale: PropTypes.number,
    measure: PropTypes.object,
    type: PropTypes.string,
    color: PropTypes.string,
};

export default MeasureMarker;
