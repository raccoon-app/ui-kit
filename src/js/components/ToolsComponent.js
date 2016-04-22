import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

function formatStyle(styleJson){
    var style = [];
    for(var k in styleJson){
        style.push('<span class="tools__textarea-classname">'+k+'</span>'+
            ': '+ '<span class="tools__textarea-value'+(k.indexOf('font-family') !== -1 ? '_font-family' : '')+'">'
            + styleJson[k] + '</span>;');
    }
    return style.join('<br>');
}

export default class ToolsComponent extends Component {
    render() {
        const { layer, src, isExportEveryLayer } = this.props

        layer.name = decodeURIComponent(layer.name); // @TODO FIX @ symbol
        layer.html = decodeURIComponent(layer.html);

        var tools = [];

        //temporary solution for gradient properties

        tools.push(
            <div className="tools__gradient-opts tools-container">
                <ul className="tools__gradient-list">
                    <li className="tools__gradient-item clearfix">
                        <span className="tools__gradient-color">
                            <span className="icon-paint-color-2" style={{color: '#2cc4d5'}}></span>
                            #<span className="tools__gradient-code">2CC4D5</span> (30%)
                        </span>
                        <span className="tools__copy-info">Copy</span>
                    </li>
                    <li className="tools__gradient-item clearfix ">
                        <div className="icon-gradient-down-arrow"></div>
                        <span className="tools__gradient-color">
                            <span className="icon-paint-color-2" style={{color: '#f45602'}}></span>
                            #<span className="tools__gradient-code">F45602</span> (30%)
                        </span>
                        <span className="tools__copy-info">Copy</span>
                    </li>
                    <li className="tools__gradient-item clearfix">
                        <div className="icon-gradient-down-arrow"></div>
                        <span className="tools__gradient-color">
                            <span className="icon-paint-color-2" style={{color: '#eee300'}}></span>
                            #<span className="tools__gradient-code">EEE300</span> (30%)
                        </span>
                        <span className="tools__copy-info">Copy</span>
                    </li>
                </ul>
            </div>
        );

        if (layer.style) {

            var styleHtml = formatStyle(layer.style);
            tools.push(
                <div className="tools-container clearfix">
                    <h5 className="tools__title">Code style</h5>
                    <div className="tools__textarea tools__textarea_style" onClick={this._onClick}
                         dangerouslySetInnerHTML={{__html: styleHtml}}>
                    </div>
                    <span className="tools__copy-info">Copy</span>
                </div>
            )
        }


        if (layer.html && layer.html !== 'undefined') {
            tools.push(
                <div className="tools-container clearfix">
                    <h5 className="tools__title">Content</h5>
                    <div className="tools__textarea tools__textarea-content" onClick={this._onClick}>
                        {layer.html}
                    </div>
                    <span className="tools__copy-info">Copy</span>
                </div>
            )
        }

        if ((!layer.html || layer.html == 'undefined') && isExportEveryLayer && layer.id) {
            var fileUrl = src + layer.id + '@2x.png';
            var fileName = layer.name + '.png';

            tools.push(
                <div className="tools-container">
                    <h5 className="tools__title">Export asset</h5>
                    <a href='img/logo.png' download='test.png' className="tools__export">
                        <span style={{backgroundImage:'url('+fileUrl+')'}} className="tools__export-image"></span>
                    </a>
                    <div className="tools__export-config clearfix">
                        <div className="tools__export-measure">
                            <div className="tools__export-param">Size:</div>
                            <div className="dropdown icon-chevron-down">
                                <div className="dropdown__value">All</div>
                                <select name="size" className="tools__export-size">
                                    <option value="1">1x</option>
                                    <option value="12">1-2x</option>
                                    <option value="2">2x</option>
                                    <option value="23">2-3x</option>
                                    <option value="3">3x</option>
                                    <option value="all">All</option>
                                </select>
                            </div>
                        </div>
                        <div className="tools__export-measure">
                            <div className="tools__export-param">Format:</div>
                            <div className="dropdown icon-chevron-down">
                                <div className="dropdown__value">PNG</div>
                                <select name="size" className="tools__export-size">
                                    <option value="png">PNG</option>
                                    <option value="jpg">JPG</option>
                                    <option value="gif">GIF</option>
                                </select>
                            </div>
                        </div>
                        <span className="tools__copy-info">Export</span>
                    </div>
                </div>
            )
        }


        return (
            <div className={classnames({
                    'tools': true,
                    'tools_disabled': !layer.id
                 })}>
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
        )
    }
}


ToolsComponent.propTypes = {
    layer: PropTypes.object,
    isExportEveryLayer: PropTypes.string,
    url: PropTypes.string
}