import React, { PropTypes } from 'react';

const ArtboardLayerItem = (props) => {
    const { layer, onClickArtboardLayer, onEnterArtboardLayer, onLeaveArtboardLayer } = props;
    const units = 'px';
    const style = {
        left: layer.x + units,
        top: layer.y + units,
        width: layer.width + units,
        height: layer.height + units,
        zIndex: layer.zIndex,
    };

    return (
        <div className="artboard__layer"
            style={style}
            onClick={onClickArtboardLayer}
            onMouseEnter={onEnterArtboardLayer}
            onMouseLeave={onLeaveArtboardLayer}
        >
        </div>
    );
};

ArtboardLayerItem.propTypes = {
    layer: PropTypes.object,
    onClickArtboardLayer: PropTypes.func,
    onEnterArtboardLayer: PropTypes.func,
    onLeaveArtboardLayer: PropTypes.func,
};

export default ArtboardLayerItem;
