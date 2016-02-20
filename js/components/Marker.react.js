var React = require('react');
var MeasureStore = require('../stores/MeasureStore');
var classNames = require('classnames');

var ReactPropTypes = React.PropTypes;

var Marker = React.createClass({
    propTypes: {
        scale: ReactPropTypes.number,
        measure: ReactPropTypes.object,
        type: ReactPropTypes.string
    },

    render: function() {
        var scale = this.props.scale;
        var measure = this.props.measure;
        var type = this.props.type;

        var markerStyle = {
            left: measure.x*scale+'px',
            top: measure.y*scale+'px',
            width: measure.width*scale+'px',
            height: measure.height*scale+'px'
        };

        return (
            <div className={classNames({
                   'measure_disabled': !measure.x
                })}>
                <div className={classNames('measure-marker','measure-marker_' + type)} style={markerStyle}>
                    <span className="measure-marker__value">{measure.width} * {measure.height}</span>
                </div>
                <div className="measure-lighthouse measure-lighthouse_top" style={{top: measure.y*scale+'px'}}>
                </div>
                <div className="measure-lighthouse measure-lighthouse_right" style={{left: (measure.x+measure.width)*scale+'px'}}>
                </div>
                <div className="measure-lighthouse measure-lighthouse_bottom" style={{top: (measure.y+measure.height)*scale+'px'}}>
                </div>
                <div className="measure-lighthouse measure-lighthouse_left" style={{left: measure.x*scale+'px'}}>
                </div>
            </div>
        );
    }
});

module.exports = Marker;
