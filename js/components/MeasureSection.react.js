var React = require('react');
var MeasureStore = require('../stores/MeasureStore');
var RulerSection = require('../components/RulerSection.react');
var classNames = require('classnames');

var ReactPropTypes = React.PropTypes;

function getStateFromStores() {
    return {
        currentLayer: MeasureStore.getCurrentLayer()
    };
}

var ToolsSection = React.createClass({

    propTypes: {
        scale: ReactPropTypes.number
    },

    getInitialState: function() {
        return getStateFromStores();
    },

    componentDidMount: function() {
        MeasureStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        MeasureStore.removeChangeListener(this._onChange);
    },

    render: function() {
        var layer = this.state.currentLayer;
        var scale = this.props.scale;

        var markerStyle = {
            left: layer.x*scale+'px',
            top: layer.y*scale+'px',
            width: layer.width*scale+'px',
            height: layer.height*scale+'px'
        };

        return (
            <div className={classNames({
                    'measure': true,
                    'measure_disabled': !layer.id
                })}>
                <div className="measure-marker" style={markerStyle}>
                    <span className="measure-marker__width">{layer.width}px</span>
                    <span className="measure-marker__height">{layer.height}px</span>
                </div>
                <div className="measure-lighthouse measure-lighthouse_top" style={{top: layer.y*scale+'px'}}>
                </div>
                <div className="measure-lighthouse measure-lighthouse_right" style={{left: (layer.x+layer.width)*scale+'px'}}>
                </div>
                <div className="measure-lighthouse measure-lighthouse_bottom" style={{top: (layer.y+layer.height)*scale+'px'}}>
                </div>
                <div className="measure-lighthouse measure-lighthouse_left" style={{left: layer.x*scale+'px'}}>
                </div>

                <RulerSection scale={scale} />
            </div>
        );
    },

    /**
    * Event handler for 'change' events coming from the stores
    */
    _onChange: function() {
        this.setState(getStateFromStores());
    }

});

module.exports = ToolsSection;
