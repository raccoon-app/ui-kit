var React = require('react');
var ArtboardActions= require('../actions/ArtboardActions');
var ArtboardStore = require('../stores/ArtboardStore');

var ReactPropTypes = React.PropTypes;

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
            <div className="artboard__layer"
                 style={layerStyle}
                 onClick={this._onClick}
                 onMouseEnter={this._onMouseEnter}
                 onMouseLeave={this._onMouseLeave}>
            </div>
        );
    },

    _onClick: function() {
        ArtboardActions.clickArtboardLayer(this.props.layer);
    },

    _onMouseEnter: function() {
        ArtboardActions.enterArtboardLayer(this.props.layer);
    },

    _onMouseLeave: function() {
        ArtboardActions.leaveArtboardLayer(this.props.layer);
    }
});

module.exports = ArtboardListLayer;
