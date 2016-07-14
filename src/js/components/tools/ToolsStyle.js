import React, { Component, PropTypes } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

function formatStyle(styleJson) {
    const style = [];

    for (const k in styleJson) {
        style.push('<span class="tools__textarea-classname">' + k + '</span>' +
            ': ' +  '<span class="tools__textarea-value'+(k.indexOf('font-family') !== -1 ? '_font-family' : '')+'">'
            + styleJson[k] + '</span>;');
    }

    return style.join('<br>');
}

function stingStyle(styleJson) {
    const string = [];

    for (const k in styleJson) {
        string.push(k + ': ' + styleJson[k]);
    }

    return string.join('\n');
}

export default class ToolsStyle extends Component {
    render() {
        const { style, showCopyMessage } = this.props;

        const styleHtml = formatStyle(style);
        const stringStyle = stingStyle(style);

        return (
            <div className="tools-container clearfix">
                <h5 className="tools__title">Code style</h5>
                <div className="tools__textarea tools__textarea_style" dangerouslySetInnerHTML={{ __html: styleHtml }}>
                </div>
                <CopyToClipboard text={stringStyle} onCopy={() => showCopyMessage('style copied')}>
                    <button className="tools__btn">Copy</button>
                </CopyToClipboard>
            </div>
        );
    }
}

ToolsStyle.propTypes = {
    style: PropTypes.object,
    showCopyMessage: PropTypes.func,
};