var React = require('react');
var MeasureStore = require('../stores/MeasureStore');
var RulerSection = require('../components/RulerSection.react');
var classNames = require('classnames');

function getStateFromStores() {
    return {
        currentLayer: MeasureStore.getCurrentLayer()
    };
}

var ToolsSection = React.createClass({

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

        var markerStyle = {
            left: layer.x+'px',
            top: layer.y+'px',
            width: layer.width+'px',
            height: layer.height+'px'
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
                <div className="measure-lighthouse measure-lighthouse_top" style={{top: layer.y+'px'}}>
                </div>
                <div className="measure-lighthouse measure-lighthouse_right" style={{left: layer.x+layer.width+'px'}}>
                </div>
                <div className="measure-lighthouse measure-lighthouse_bottom" style={{top: layer.y+layer.height+'px'}}>
                </div>
                <div className="measure-lighthouse measure-lighthouse_left" style={{left: layer.x+'px'}}>
                </div>

                <RulerSection />
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
