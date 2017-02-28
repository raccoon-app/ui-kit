import React, { Component, PropTypes } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

export default class ToolsGradient extends Component {
    render() {

        return (
            <div className="tools__gradient-opts tools-container">
                <ul className="tools__gradient-list">
                    {this.props.gradientList.map(colorStopItem =>
                        <li className="tools__gradient-item clearfix">
                            <div className="icon-gradient-down-arrow">
                            </div>
                            <span className="tools__gradient-color">
                                <span className="icon-transparent-color"></span>
                                <span className="icon-paint-color-2" style={{ color: colorStopItem.color }}>
                                </span>
                                <span className="tools__gradient-code">
                                    {colorStopItem.color}
                                </span>
                                <span>
                                    {colorStopItem.position}
                                </span>
                            </span>
                            <CopyToClipboard text={colorStopItem.color} onCopy={() => this.props.showCopyMessage(this.props.copyMessage)}>
                                <button className="tools__btn">Copy</button>
                            </CopyToClipboard>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

ToolsGradient.propTypes = {
    gradientList: PropTypes.array,
    showCopyMessage: PropTypes.func,
};