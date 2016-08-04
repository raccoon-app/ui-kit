import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Measurement from './../containers/Measurement';
import { getDottedTexture } from '../utils/backgroundTexture';

let coords = {
    x: 0,
    y: 0,
};


export default class ArtboardComponent extends Component {
    constructor() {
        super();

        this.state = {
            scale: 1,
            isDragging: false,
            dragging: {
                x: 0,
                y: 0,
            },
            isAnimated: true
        };
    }

    componentDidMount() {
        this.$artboard = this.refs.artboard;

        this.setCentering(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.setCentering(nextProps)
    }

    setCentering(props) {
        const { width, height } = props;
        const windowWidth = this.$artboard.offsetWidth;
        const windowHeight = this.$artboard.offsetHeight;

        const scale = Math.min(windowWidth/width, windowHeight/height );

        this.setState({
            scale: scale,
            dragging: {
                x: 0,
                y: 0,
            }
        })
    }

    setScale(value) {
        const ZOOM_STEP = 0.1;
        let newScale = this.state.scale;

        switch (value) {
            case 'plus': {
                newScale += ZOOM_STEP;
                break;
            }
            case 'minus': {
                newScale -= ZOOM_STEP;
                break;
            }
            default: {
                newScale = value;
            }
        }

        newScale = newScale < 2 * ZOOM_STEP ? 2 * ZOOM_STEP : newScale;

        this.setState({
            scale: newScale
        });
    }

    getStyles({ backgroundColor, radialGradient }) {
        return getDottedTexture(backgroundColor, radialGradient, '10%', '16px 16px');
    }

    onScaleArtboard(event) {

    }

    onTakeArtboard(event) {
        coords = {
            x: event.pageX,
            y: event.pageY,
        };

        this.setState({
            isDragging: true
        });
    }

    onDropArtboard(event) {
        this.setState({
            isDragging: false
        });
    }

    onDragArtboard(event) {
        if (!this.state.isDragging) {
            return false;
        }

        const newPosition = Object.assign({}, this.state.dragging);
        const xDiff = coords.x - event.pageX;
        const yDiff = coords.y - event.pageY;

        coords.x = event.pageX;
        coords.y = event.pageY;

        newPosition.x -= xDiff;
        newPosition.y -= yDiff;

        this.setState({
            dragging: newPosition,
        });
    }

    render() {
        const { image, width, height, left, top, zIndex, background } = this.props;
        const { isDragging, scale, dragging } = this.state;

        return (
            <div
                className={classnames({
                    artboard: true,
                    artboard_dragging: isDragging,
                })}
                style={this.getStyles(background)}
                onWheel={this.onScaleArtboard}
                onMouseDown={this.onTakeArtboard.bind(this)}
                onMouseUp={this.onDropArtboard.bind(this)}
                onMouseMove={this.onDragArtboard.bind(this)}
            >
                <div
                    className="artboard__draggable" style={{
                        left: dragging.x + 'px',
                        top: dragging.y + 'px',
                    }}
                    ref="artboard"
                >
                    <div
                        className="artboard__scale" style={{
                            transform: 'scale(' + scale + ')'
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
                            }}
                            onMouseEnter={(event) => {
                                this.setState({
                                    isAnimated: false,
                                });
                            }}
                            onMouseLeave={(event) => {
                                this.setState({
                                    isAnimated: true,
                                });
                            }}
                        >
                            {this.props.children}
                        </div>
                    </div>
                    <Measurement scale={scale} width={width} height={height} isAnimated={this.state.isAnimated}/>
                </div>

                <div className="tools-zoom">
                    <button className="tools-zoom__btn tools-zoom__btn_full-screen icon-fit-to-screen-icon"
                        onClick={(event) => this.setCentering(this.props)}
                    >
                    </button>
                    <button className="tools-zoom__btn tools-zoom__btn_minus icon-minus-circle"
                        onClick={(event) => this.setScale('minus')}
                    >
                    </button>
                    <button className="tools-zoom__btn tools-zoom__btn_value"
                        onClick={(event) => this.setScale(1)}
                    >
                        {Math.round(scale * 100)}%
                    </button>
                    <button className="tools-zoom__btn tools-zoom__btn_plus icon-plus-circle"
                        onClick={(event) => this.setScale('plus')}
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
    zIndex: PropTypes.number,
    background: PropTypes.object,
};
