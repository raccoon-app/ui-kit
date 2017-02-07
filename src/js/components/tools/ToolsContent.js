import React, { Component, PropTypes } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

export default class ToolsContent extends Component {
    render() {
        const { content, showCopyMessage, copyMessage } = this.props;

        return (
            <div className="tools-container clearfix">
                <h5 className="tools__title">Content</h5>

                <div className="tools__textarea tools__textarea-content">
                    {content}
                </div>
                <CopyToClipboard text={content} onCopy={() => showCopyMessage(copyMessage)}>
                    <button className="tools__btn tools__btn_up icon-icon-copied"></button>
                </CopyToClipboard>
            </div>
        );
    }
}

ToolsContent.propTypes = {
    content: PropTypes.string,
    showCopyMessage: PropTypes.func,
};