var MinceArtboardActionCreators = require('../actions/MinceArtboardActionCreators');
var React = require('react');
var ArtboardStore = require('../stores/ArtboardStore');

var ArtboardListLayer = React.createClass({

    propTypes: {
        layer: ReactPropTypes.object
    },

    render: function() {
        var layer = this.props.layer;

        var layerStyle = {
            left: layer.x+'px',
            top: layer.y+'px',
            width: layer.width+'px',
            height: layer.height+'px',
            zIndex: layer.zIndex
        };

        return (
            <div className="artboard__layer" style={layerStyle} onClick={this._onClick}></div>
        );
    },

    _onClick: function() {
        MinceArtboardActionCreators.clickArtboardLayer(this.props.layer);
    }

});

module.exports = ArtboardListLayer;
