import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class ArtboardLayerItem extends Component {
    render() {
        const { layer } = this.props

        return (
            <div className="artboard__layer"
                 style={{
                        left: layer.x+'px',
                        top: layer.y+'px',
                        width: layer.width+'px',
                        height: layer.height+'px',
                        zIndex: layer.zIndex
                 }}
                 onClick={this.props.onClickArtboardLayer}
                 onMouseEnter={this.props.onEnterArtboardLayer}
                 onMouseLeave={this.props.onLeaveArtboardLayer}>
            </div>
        )
    }
}

ArtboardLayerItem.propTypes = {
    layer: PropTypes.object,
    onClickArtboardLayer: PropTypes.func,
    onEnterArtboardLayer: PropTypes.func,
    onLeaveArtboardLayer: PropTypes.func
}


//import React from 'react'
//import { clickArtboardLayer, enterArtboardLayer, leaveArtboardLayer } from '../actions'
//var ArtboardStore = require('../stores/ArtboardStore');
//
//var ReactPropTypes = React.PropTypes;
//
//var ArtboardListLayer = React.createClass({
//
//    propTypes: {
//        layer: ReactPropTypes.object
//    },
//
//    render: function() {
//        var layer = this.props.layer;
//
//        var layerStyle = {
//            left: layer.x+'px',
//            top: layer.y+'px',
//            width: layer.width+'px',
//            height: layer.height+'px',
//            zIndex: layer.zIndex
//        };
//
//        return (
//            <div className="artboard__layer"
//                 style={layerStyle}
//                 onClick={this._onClick}
//                 onMouseEnter={this._onMouseEnter}
//                 onMouseLeave={this._onMouseLeave}>
//            </div>
//        );
//    },
//
//    _onClick: function() {
//        ArtboardActions.clickArtboardLayer(this.props.layer);
//    },
//
//    _onMouseEnter: function() {
//        ArtboardActions.enterArtboardLayer(this.props.layer);
//    },
//
//    _onMouseLeave: function() {
//        ArtboardActions.leaveArtboardLayer(this.props.layer);
//    }
//});
//
//module.exports = ArtboardListLayer;
