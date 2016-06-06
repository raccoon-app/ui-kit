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