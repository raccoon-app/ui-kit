var MinceArtboardActionCreators = require('../actions/MinceArtboardActionCreators');
var React = require('react');
var ArtboardListLayer = require('../components/ArtboardListLayer.react');
var MeasureSection = require('../components/MeasureSection.react');
var ArtboardStore = require('../stores/ArtboardStore');

function getStateFromStores() {
    return {
        artboard: ArtboardStore.getCurrent(),
        layer: ArtboardStore.getLayer(),
        image: ArtboardStore.getImage(),
        scale: 1
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
        var artboard = this.state.artboard;

        var layers = this.state.layer.map(function(layerItem) {
            return (
                <ArtboardListLayer
                    key={layerItem.id}
                    layer={layerItem}
                />
            );
         });

        var wrapperStyle = {
            backgroundImage: 'url('+this.state.image+')',
            left: artboard.x+'px',
            top: artboard.y+'px',
            width: artboard.width+'px',
            height: artboard.height+'px',
            zIndex: artboard.zIndex
        };

        var scaleStyle = {
            scaleX: this.state.scale,
            scaleY: this.state.scale
        };

        artboard.name = decodeURIComponent(artboard.name);

        return (
            <div className="artboard" onWheel={this._onMouseWheel}>
                <h3 className="artboard__title">{artboard.name}</h3>

                <div className="artboard__wrapper" style={scaleStyle}>
                    <div className="artboard__layer-list" style={wrapperStyle}>
                        {layers}
                    </div>
                    <MeasureSection />
                </div>
            </div>
        );
    },

    /**
    * Event handler for 'change' events coming from the stores
    */
    _onChange: function() {
        this.setState(getStateFromStores());
    },

    isNegative: function (n) {
        return ((n = +n) || 1 / n) < 0;
    },

    _onMouseWheel: function(e) {
        var ZOOM_STEP = .03;
        //require the shift key to be pressed to scroll
        if (!e.shiftKey) {
            return;
        }
        e.preventDefault();
        var direction = (this.isNegative(e.deltaX) &&  this.isNegative(e.deltaY) ) ? 'down' : 'up';
        if (direction == 'up') {
            this.state.scale += ZOOM_STEP;
        } else {
            this.state.scale -= ZOOM_STEP;
        }
        this.state.scale = this.state.scale < 0 ? 0 : this.state.scale;

        console.log(this.state)
        this.setState(this.state)
    }
});

module.exports = ArtboardSection;
