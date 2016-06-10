import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import SizeDropdown from '../containers/SizeDropdown';
import FormatDropdown from '../containers/FormatDropdown';
import CopyToClipboard from 'react-copy-to-clipboard';
import parseGradient from '../utils/parseGradient';

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

function getGradient(styleJson) {
    let string = '';

    for (const k in styleJson) {
        if (k.indexOf('background') !== -1 && styleJson[k].indexOf('linear-gradient') !== -1) {
            string = styleJson[k];
        }
    }

    return string ? parseGradient(string) : false;
}

export default class ToolsComponent extends Component {
    render() {
        const { layer, url, isExportEveryLayer } = this.props;

        const copyLayer = (
            <div className="tools-copy-info" ref="copyInfo">Content copied!</div>
        );

        const showCopyMessage = () => {
            const copyInfo = this.refs.copyInfo;

            copyInfo.addEventListener('animationend', handler);
            copyInfo.classList.add('tools-copy-info_animated');

            function handler(e) {
                e.target.removeEventListener(e.type, handler);

                copyInfo.classList.remove('tools-copy-info_animated');
            }
        };

        layer.name = decodeURIComponent(layer.name); // @TODO FIX @ symbol
        layer.html = decodeURIComponent(layer.html);


        let tools = [];

        const gradient = getGradient(layer.style);

        if (gradient) {
            tools.push(
                <div className="tools__gradient-opts tools-container">
                    <ul className="tools__gradient-list">
                        {gradient.colorStopList.map(colorStopItem =>
                            <li className="tools__gradient-item clearfix">
                                <div className="icon-gradient-down-arrow"></div>
                                <span className="tools__gradient-color">
                                    <span className="icon-paint-color-2" style={{ color: colorStopItem.color }}></span>
                                    <span className="tools__gradient-code">{colorStopItem.color}</span> {colorStopItem.position}
                                </span>
                                <CopyToClipboard text={colorStopItem.color} onCopy={showCopyMessage}>
                                    <button className="tools__copy-info">Copy</button>
                                </CopyToClipboard>
                            </li>
                        )}
                    </ul>
                </div>
            );
        }

        if (layer.background) {
            tools.push(
                <div className="tools__gradient-opts tools-container">
                    <ul className="tools__gradient-list">
                        <li className="tools__gradient-item clearfix">
                        <span className="tools__gradient-color">
                            <span className="icon-paint-color-2" style={{ color: layer.background }}></span>
                            <span className="tools__gradient-code">{layer.background}</span>
                        </span>
                            <CopyToClipboard text={layer.background} onCopy={showCopyMessage}>
                                <button className="tools__copy-info">Copy</button>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
            );
        }

        if (layer.style) {
            const styleHtml = formatStyle(layer.style);
            const stringStyle = stingStyle(layer.style);

            tools.push(
                <div className="tools-container clearfix">
                    <h5 className="tools__title">Code style</h5>
                    <div className="tools__textarea tools__textarea_style"
                        onClick={this._onClick}
                        dangerouslySetInnerHTML={{__html: styleHtml}}
                    >
                    </div>
                    <CopyToClipboard text={stringStyle} onCopy={showCopyMessage}>
                        <button className="tools__copy-info">Copy</button>
                    </CopyToClipboard>
                </div>
            );
        }

        if (layer.html && layer.html !== 'undefined') {
            tools.push(
                <div className="tools-container clearfix">
                    <h5 className="tools__title">Content</h5>
                    <div className="tools__textarea tools__textarea-content" onClick={this._onClick}>
                        {layer.html}
                    </div>
                    <CopyToClipboard text={layer.html} onCopy={showCopyMessage}>
                        <button className="tools__copy-info">Copy</button>
                    </CopyToClipboard>
                </div>
            );
        }

        if ((!layer.html || layer.html === 'undefined') && isExportEveryLayer && layer.id) {
            const fileUrl = url + layer.id + '@2x.png';
            const fileName = layer.name + '.png';

            tools.push(
                <div className="tools-container">
                    <h5 className="tools__title">Export asset</h5>
                    <a href={fileUrl} download={fileName} className="tools__export">
                        <span style={{ backgroundImage:'url('+fileUrl+')' }} className="tools__export-image"></span>
                    </a>
                    <div className="tools__export-config clearfix">
                        <div className="tools__export-measure">
                            <div className="tools__export-param">Size:</div>
                                <SizeDropdown />
                        </div>
                        <div className="tools__export-measure">
                            <div className="tools__export-param">Format:</div>
                                <FormatDropdown />
                        </div>
                        <a href={fileUrl} download={fileName} className="tools__copy-info">Export</a>
                    </div>
                </div>
            );
        }

        return (
            <aside
                className={classnames({
                    'tools': true,
                    'tools_disabled': !layer.id,
                })}
            >
                {copyLayer}

                <div className="tools-body">
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

                    {tools}
                </div>

            </aside>
        );
    }
}


ToolsComponent.propTypes = {
    layer: PropTypes.object,
    isExportEveryLayer: PropTypes.string,
    url: PropTypes.string,
};