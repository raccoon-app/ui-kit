import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Measurement from './../containers/Measurement';
import { getDottedTexture } from '../utils/backgroundTexture';

let coords = {
    x: 0,
    y: 0,
};
let deferTimer;
let wait = false;

// @TODO Refactoring of isNegative
function isNegative(n) {
    return ((n = +n) || 1 / n) < 0;
}

function getStyles({ backgroundColor, radialGradient }) {
    return getDottedTexture(backgroundColor, radialGradient, '10%', '16px 16px');
}

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
            isAnimated: true,
        };
    }

    componentDidMount() {
        this.$artboard = this.refs.artboard;
        this.$draggable = this.refs.draggable;
        this.$scale = this.refs.scale;

        this.setCentering(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.setCentering(nextProps);
    }

    onWheelArtboard(event) {
        console.log('onWheelArtboard')
        const ZOOM_STEP = 0.2;
        event.preventDefault();

        if (!event.shiftKey || event.ctrlKey) {
            return false;
        }

        const $target = this.$scale.getBoundingClientRect();
        let newScale = this.state.scale;
        const newPosition = Object.assign({}, this.state.dragging);
        const xDiff = (event.pageX - $target.left) * ZOOM_STEP / newScale;
        const yDiff = (event.pageY - $target.top) * ZOOM_STEP / newScale;

        if (isNegative(event.deltaX) && isNegative(event.deltaY)) {
            newPosition.x -= xDiff;
            newPosition.y -= yDiff;
            newScale += ZOOM_STEP;
        } else {
            newPosition.x += xDiff;
            newPosition.y += yDiff;
            newScale -= ZOOM_STEP;
        }

        newScale = newScale < 2 * ZOOM_STEP ? 2 * ZOOM_STEP : newScale;

        this.setState({
            dragging: newPosition,
            scale: newScale,
        });
    }

    onTakeArtboard(event) {
        coords = {
            x: event.pageX,
            y: event.pageY,
        };

        this.setState({
            isDragging: true,
        });
    }

    onDropArtboard() {
        this.setState({
            isDragging: false,
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

    setScale(value) {
        const ZOOM_STEP = 0.1;
        let newScale = this.state.scale;

        this.addTransition(this.$artboard, this.$scale);

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
            scale: newScale,
        });
    }

    setCentering(props) {
        const { width, height } = props;
        const windowWidth = this.$draggable.offsetWidth;
        const windowHeight = this.$draggable.offsetHeight;
        const newScale = Math.min(windowWidth / width, windowHeight / height);

        this.addTransition(this.$artboard, this.$scale);

        this.setState({
            scale: newScale,
            dragging: {
                x: 0,
                y: 0,
            },
        });
    }

    addTransition($target, $transitioned) {
        const handler = (event) => {
            event.target.removeEventListener(event.type, handler);
            $target.classList.remove('artboard_animated');
        };

        $transitioned.addEventListener('transitionend', handler);
        $target.classList.add('artboard_animated');
    }

    render() {
        const { image, width, height, left, top, zIndex, background, resetArtboardLayer } = this.props;
        const { isDragging, scale, dragging } = this.state;

        return (
            <div
                className={classnames({
                    artboard: true,
                    artboard_dragging: isDragging,
                })}
                style={getStyles(background)}
                onWheel={(event) => {
                    if (!wait) {
                        wait = true;
                        this.onWheelArtboard(event)

                        clearTimeout(deferTimer);
                        deferTimer = setTimeout(() => (wait = false), 250);
                    }
                }}
                onMouseDown={(event) => this.onTakeArtboard(event)}
                onMouseUp={(event) => this.onDropArtboard(event)}
                onMouseMove={(event) => this.onDragArtboard(event)}
                ref="artboard"
            >
                <div
                    className="artboard__draggable" style={{
                        left: dragging.x + 'px',
                        top: dragging.y + 'px',
                    }}
                    onClick={(event) => {
                        event.stopPropagation();

                        if (event.currentTarget === event.target) {
                            resetArtboardLayer();
                        }
                    }}
                    ref="draggable"
                >
                    <div
                        className="artboard__scale" style={{
                            transform: 'scale(' + scale + ')'
                        }}
                        ref="scale"
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
                    <Measurement scale={scale} width={width} height={height} />
                </div>

                <div className="tools-zoom">
                    <button className="tools-zoom__btn tools-zoom__btn_full-screen icon-fit-to-screen-icon"
                        onClick={() => this.setCentering(this.props)}
                    >
                    </button>
                    <button className="tools-zoom__btn tools-zoom__btn_minus icon-minus-circle"
                        onClick={() => this.setScale('minus')}
                    >
                    </button>
                    <button className="tools-zoom__btn tools-zoom__btn_value"
                        onClick={() => this.setScale(1)}
                    >
                        {Math.round(scale * 100)}%
                    </button>
                    <button className="tools-zoom__btn tools-zoom__btn_plus icon-plus-circle"
                        onClick={() => this.setScale('plus')}
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
    resetArtboardLayer: PropTypes.func,
};
