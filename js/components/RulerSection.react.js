var React = require('react');
var MeasureStore = require('../stores/MeasureStore');
var classNames = require('classnames');

function getStateFromStores() {
    return {
        ruler: MeasureStore.getRuler()
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
        var ruler = this.state.ruler.map(function(rulerItem) {
            var rulerStyle = {
                left: rulerItem.left+'px',
                top: rulerItem.top+'px',
                height: rulerItem.height ? rulerItem.height+'px' : 0,
                width: rulerItem.width ? rulerItem.width+'px' : 0
            };

            return (
                <div className={classNames({
                    'measure-ruler': true,
                    'measure-ruler_top': rulerItem.type == 'top',
                    'measure-ruler_bottom': rulerItem.type == 'bottom',
                    'measure-ruler_left': rulerItem.type == 'left',
                    'measure-ruler_right': rulerItem.type == 'right'
                })} style={rulerStyle}></div>
            );
        });

        return (
            <div classNmae="measure-ruler">
                {ruler}
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
