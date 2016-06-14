import React, { Component, PropTypes } from 'react';

export default class ToolsMainInfo extends Component {
    render() {
        const { layer } = this.props

        return (
            <div>
                <h5 className="tools__title">Object measure</h5>
                <ul className="tools__list">
                    <li className="tools__item">
                        <span className="tools__item-label">X</span>
                        <span className="icon-x-coord"></span>
                        <span className="tools__item-value">{layer.x} px</span>
                    </li>
                    <li className="tools__item">
                        <span className="tools__item-label">Width</span>
                        <span className="icon-width"></span>
                        <span className="tools__item-value">{layer.width} px</span>
                    </li>

                    <li className="tools__item">
                        <span className="tools__item-label">Y</span>
                        <span className="icon-y-coord"></span>
                        <span className="tools__item-value">{layer.y} px</span>
                    </li>
                    <li className="tools__item">
                        <span className="tools__item-label">Height</span>
                        <span className="icon-height"></span>
                        <span className="tools__item-value">{layer.height} px</span>
                    </li>
                </ul>
            </div>
        );
    }
}

ToolsMainInfo.propTypes = {
    layer: PropTypes.object,
};