var MinceArtboardActionCreators = require('../actions/MinceArtboardActionCreators');
var React = require('react');
var ArtboardListLayer = require('../components/ArtboardListLayer.react');
var ArtboardStore = require('../stores/ArtboardStore');

function getStateFromStores() {
    return {
        artboard: ArtboardStore.getCurrent()
    };
}

var ArtboardSection = React.createClass({

    getInitialState: function() {
        return getStateFromStores();
    },

    componentDidMount: function() {
        ArtboardStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        ArtboardStore.removeChangeListener(this._onChange);
    },

    render: function() {
        var layers = this.state.artboard.layer.map(function(layerItem) {
            return (
                <ArtboardListLayer
                    key={layerItem.id}
                    layer={layerItem}
                />
            );
         });

        var wrapperStyle = {
            backgroundImage: artboard.src,
            left: artboard.x+'px',
            top: artboard.y+'px',
            width: artboard.width+'px',
            height: artboard.height+'px',
            zIndex: artboard.zIndex
        };

        return (
            <div className="artboard">
                <h3 className="artboard__title">{artboard.name}</h3>
                <div className="artboard__wrapper" style={wrapperStyle}>
                    {layers}
                </div>
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

module.exports = ArtboardSection;
