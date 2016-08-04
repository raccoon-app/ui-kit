import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { clickArtboardLayer, enterArtboardLayer, leaveArtboardLayer } from '../actions/artboard';
import ArtboardComponent from '../components/ArtboardComponent';
import ArtboardLayerItem from '../components/ArtboardLayerItem';

class Artboard extends Component {
    render() {
        const { activeArtboard, image, backgroundColor,
            clickArtboardLayer, enterArtboardLayer, leaveArtboardLayer } = this.props;

        return (
            <ArtboardComponent
                image={image}
                left={activeArtboard.x}
                top={activeArtboard.y}
                width={activeArtboard.width}
                height={activeArtboard.height}
                zIndex={activeArtboard.zIndex}
                background={backgroundColor}
            >
                {activeArtboard.layer.map(layer =>
                        <ArtboardLayerItem
                            key={layer.id}
                            layer={layer}
                            onClickArtboardLayer={() => clickArtboardLayer(layer)}
                            onEnterArtboardLayer={() => enterArtboardLayer(layer)}
                            onLeaveArtboardLayer={() => leaveArtboardLayer(layer)}
                        />
                )}
            </ArtboardComponent>
        );
    }
}

Artboard.propTypes = {
    artboards: PropTypes.object,
    activeArtboard: PropTypes.object,
    image: PropTypes.string,
    backgroundColor: PropTypes.object.isRequired,
};

const mapStateToProps = ({ artboard, setting }) => ({
    artboards: artboard.artboards,
    activeArtboard: artboard.activeArtboard,
    image: artboard.url + artboard.activeArtboard.src + '/artboard.png',
    backgroundColor: setting.backgroundColor,
});

export default connect(
    mapStateToProps,
    { clickArtboardLayer, enterArtboardLayer, leaveArtboardLayer }
)(Artboard);
