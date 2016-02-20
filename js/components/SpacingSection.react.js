var React = require('react');
var MeasureStore = require('../stores/MeasureStore');
var classNames = require('classnames');

var ReactPropTypes = React.PropTypes;

var Spacing = React.createClass({

    propTypes: {
        scale: ReactPropTypes.number,
        spacing: ReactPropTypes.object
    },

    render: function() {
        var scale = this.props.scale;

        var spacing = this.props.spacing.map(function(rulerItem) {
            var rulerStyle = {
                left: rulerItem.left*scale+'px',
                top: rulerItem.top*scale+'px',
                height: rulerItem.height ? rulerItem.height*scale+'px' : 0,
                width: rulerItem.width ? rulerItem.width*scale+'px' : 0
            };

            return (
                <div className={classNames({
                    'measure-ruler': true,
                    'measure-ruler_top': rulerItem.type == 'top',
                    'measure-ruler_bottom': rulerItem.type == 'bottom',
                    'measure-ruler_left': rulerItem.type == 'left',
                    'measure-ruler_right': rulerItem.type == 'right'
                })} style={rulerStyle}>
                    <span className="measure-ruler__value">{rulerItem.value}</span>
                </div>
            );
        });

        return (
            <div classNmae="measure-ruler">
                {spacing}
            </div>
        );
    }
});

module.exports = Spacing;
