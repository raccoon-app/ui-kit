var React = require('react');
var MeasureStore = require('../stores/MeasureStore');
var Marker = require('../components/Marker.react');
var Spacing = require('../components/Spacing.react');
var classNames = require('classnames');

var ReactPropTypes = React.PropTypes;

function getStateFromStores() {
    return {
        currentLayer: MeasureStore.getCurrentLayer(),
        targetLayer: MeasureStore.getTargetLayer(),
        spacing: MeasureStore.getSpacing()
    };
}

var MeasureSection = React.createClass({

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
        return (
            <div className={classNames({
                    'measure': true,
                    'measure_disabled': !this.state.currentLayer.x && !this.state.targetLayer.x
                })}>

                <Marker scale={this.props.scale} measure={this.state.targetLayer} type="target" />
                <Marker scale={this.props.scale} measure={this.state.currentLayer} type="current" />
                <Spacing scale={this.props.scale} spacing={this.state.spacing} />
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

module.exports = MeasureSection;
