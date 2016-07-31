import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Measurement from './../containers/Measurement';
import { getDottedTexture } from '../utils/backgroundTexture';

export default class ArtboardComponent extends Component {
    constructor() {
        super();
        this.getStyles = this.getStyles.bind(this);
    }
    getStyles({ backgroundColor, radialGradient }) {
        return getDottedTexture(backgroundColor, radialGradient, '10%', '16px 16px');
    }
    render() {
        const { image, width, height, left, top, zIndex, scale, dragging, isDragging, isCenter, background } = this.props;

        return (
            <div
                className={classnames({
                    artboard: true,
                    artboard_dragging: isDragging,
                })}
                style={this.getStyles(background)}
                onWheel={this.props.scaleArtboard}
                onMouseDown={this.props.takeArtboard}
                onMouseUp={this.props.dropArtboard}
                onMouseMove={this.props.dragArtboard}
            >
                <div
                    className="artboard__draggable" style={{
                        left: dragging.x + 'px',
                        top: dragging.y + 'px',
                    }}
                >
                    <div
                        className="artboard__scale" style={{
                            transform: 'scale(' + scale + ')',
                            left: isCenter ? '50%' : '0',
                            top: isCenter ? '50%' : '0',
                        }}
                    >
                        <div
                            className="artboard__layer-list" style={{
                                backgroundImage: 'url(' + image + ')',
                                width: width + 'px',
                                height: height + 'px',
                                top: top + 'px',
                                left: left + 'px',
                                zIndex: zIndex,
                                transform: isCenter ? 'translate(-50%, -50%)' : 'none',
                            }}
                        >
                            {this.props.children}
                        </div>
                    </div>
                    <Measurement scale={scale} isCenter={isCenter} width={width} height={height} />
                </div>

                <div className="tools-zoom">
                    <button className="tools-zoom__btn tools-zoom__btn_full-screen icon-fit-to-screen-icon">
                    </button>
                    <button className="tools-zoom__btn tools-zoom__btn_minus icon-minus-circle"
                        onClick={(event) => this.props.zoomArtboard(event, 'minus')}
                    >
                    </button>
                    <button className="tools-zoom__btn tools-zoom__btn_value"
                        onClick={(event) => this.props.zoomArtboard(event, false)}
                    >
                        {Math.round(scale * 100)}%
                    </button>
                    <button className="tools-zoom__btn tools-zoom__btn_plus icon-plus-circle"
                        onClick={(event) => this.props.zoomArtboard(event, 'plus')}
                    >
                    </button>
                </div>
            </div>
        );
    }
}


ArtboardComponent.propTypes = {
    children: PropTypes.node,
    name: PropTypes.string,
    image: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    top: PropTypes.number,
    left: PropTypes.number,
    zIndex: PropTypes.number,
    scale: PropTypes.number,
    dragging: PropTypes.object,
    background: PropTypes.object,
    isDragging: PropTypes.bool,
    isCenter: PropTypes.bool,

    zoomArtboard: PropTypes.func,
    scaleArtboard: PropTypes.func,
    takeArtboard: PropTypes.func,
    dropArtboard: PropTypes.func,
    dragArtboard: PropTypes.func,
};
