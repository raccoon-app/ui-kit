import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Measure from './../containers/Measure';

export default class ArtboardComponent extends Component {
    render() {
        const { name, image, width, height, left, top, zIndex, scale, dragging, isDragging } = this.props;

        return (
            <div
                className={classnames({
                    'artboard': true,
                    'artboard_dragging': false,
                })}
                onWheel={this.props.scaleArtboard}
                onMouseDown={this.props.takeArtboard}
                onMouseUp={this.props.dropArtboard}
                onMouseMove={this.props.dragArtboard}
            >
                <h3
                    className={classnames({
                        'artboard__title': true,
                        'artboard__title_disabled': isDragging
                    })}
                >
                    {name}
                </h3>
                <div
                    className="artboard__draggable" style={{
                        left: dragging.x + 'px',
                        top: dragging.y + 'px',
                    }}
                >
                    <div
                        className="artboard__scale" style={{
                            transform: 'scale(' + scale + ')',
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
                        >
                            {this.props.children}
                        </div>
                    </div>
                    <Measure scale={this.props.scale} />
                </div>

                <div className="tools-zoom">
                    <button className="tools-zoom__btn tools-zoom__btn_full-screen icon-fit-to-screen-icon"></button>
                    <button className="tools-zoom__btn tools-zoom__btn_minus icon-minus-circle"></button>
                    <span className="tools-zoom__btn tools-zoom__btn_value">{Math.round(scale * 100)}%</span>
                    <button className="tools-zoom__btn tools-zoom__btn_plus icon-plus-circle"></button>
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
    isDragging: PropTypes.bool,

    scaleArtboard: PropTypes.func,
    takeArtboard: PropTypes.func,
    dropArtboard: PropTypes.func,
    dragArtboard: PropTypes.func,
};