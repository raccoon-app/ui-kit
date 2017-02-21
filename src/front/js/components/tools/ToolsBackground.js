import React, { Component, PropTypes } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

export default class ToolsBackground extends Component {
    render() {
        const { background, showCopyMessage, copyMessage } = this.props;

        return (
            <div className="tools__gradient-opts tools-container">
                <ul className="tools__gradient-list">
                    <li className="tools__gradient-item clearfix">
                        <span className="tools__gradient-color">
                            <span className="icon-paint-color-2" style={{ color: background }}></span>
                            <span className="tools__gradient-code">{background}</span>
                            <span className="tools__percent">(100%)</span>
                        </span>
                        <CopyToClipboard text={background} onCopy={() => showCopyMessage(copyMessage)}>
                            <button className="tools__btn icon-icon-copied"></button>
                        </CopyToClipboard>
                    </li>
                </ul>
            </div>
        );
    }
}

ToolsBackground.propTypes = {
    background: PropTypes.string,
    showCopyMessage: PropTypes.func,
};