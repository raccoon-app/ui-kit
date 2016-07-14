import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { clickArtboardLayer, enterArtboardLayer, leaveArtboardLayer, scaleArtboard, zoomArtboard,
    takeArtboard, dropArtboard, dragArtboard } from '../actions';
import { getArtboards, getActiveArtboard, getImage } from '../reducers/artboard';
import { getScale, getDragging, getIsDragging } from '../reducers/control';
import { getBackgroundColor } from '../reducers/setting';
import ArtboardComponent from '../components/ArtboardComponent';
import ArtboardLayerItem from '../components/ArtboardLayerItem';

class Artboard extends Component {
    render() {
        const { activeArtboard } = this.props;

        return (
            <ArtboardComponent
                image={this.props.image}
                left={activeArtboard.x}
                top={activeArtboard.y}
                width={activeArtboard.width}
                height={activeArtboard.height}
                zIndex={activeArtboard.zIndex}
                background={this.props.backgroundColor}
                scale={this.props.scale}
                dragging={this.props.dragging}
                isDragging={this.props.isDragging}
                zoomArtboard={this.props.zoomArtboard}
                scaleArtboard={this.props.scaleArtboard}
                takeArtboard={this.props.takeArtboard}
                dropArtboard={this.props.dropArtboard}
                dragArtboard={(event) => this.props.isDragging && this.props.dragArtboard(event)}
            >
                {activeArtboard.layer.map(layer =>
                        <ArtboardLayerItem
                            key={layer.id}
                            layer={layer}
                            onClickArtboardLayer={() => this.props.clickArtboardLayer(layer)}
                            onEnterArtboardLayer={() => this.props.enterArtboardLayer(layer)}
                            onLeaveArtboardLayer={() => this.props.leaveArtboardLayer(layer)}
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

    scale: PropTypes.number,
    dragging: PropTypes.object,
    isDragging: PropTypes.bool,

    zoomArtboard: PropTypes.func.isRequired,
    scaleArtboard: PropTypes.func.isRequired,
    takeArtboard: PropTypes.func.isRequired,
    dropArtboard: PropTypes.func.isRequired,
    dragArtboard: PropTypes.func.isRequired,

    clickArtboardLayer: PropTypes.func.isRequired,
    enterArtboardLayer: PropTypes.func.isRequired,
    leaveArtboardLayer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    artboards: getArtboards(state.artboard),
    activeArtboard: getActiveArtboard(state.artboard),
    backgroundColor: getBackgroundColor(state.setting),
    image: getImage(state.artboard),
    scale: getScale(state.control),
    dragging: getDragging(state.control),
    isDragging: getIsDragging(state.control),
});

export default connect(
    mapStateToProps,
    { clickArtboardLayer, enterArtboardLayer, leaveArtboardLayer, scaleArtboard, zoomArtboard,
        takeArtboard, dropArtboard, dragArtboard }
)(Artboard);
