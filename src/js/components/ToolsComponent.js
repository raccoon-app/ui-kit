import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { showCopyMessage, ToolsCopyInfo } from './tools/ToolsCopyInfo';
import ToolsMainInfo from './tools/ToolsMainInfo';
import ToolsGradient from './tools/ToolsGradient';
import ToolsBackground from './tools/ToolsBackground';
import ToolsStyle from './tools/ToolsStyle';
import ToolsContent from './tools/ToolsContent';
import ToolsExport from './tools/ToolsExport';

import parseGradient from '../utils/parseGradient';


const getGradient = (styleJson = {}) => {
    let string = '';

    for (const k in styleJson) {
        if (k.indexOf('background') !== -1 && styleJson[k].indexOf('linear-gradient') !== -1) {
            string = styleJson[k];
        }
    }

    return string ? parseGradient(string) : false;
};


class ToolsComponent extends Component {
    render() {
        const { layer, url, isExportEveryLayer } = this.props;
        const gradient = getGradient(layer.style);

        let tools = [];

        if (gradient) {
            tools.push(
                <ToolsGradient gradientList={gradient.colorStopList}
                               showCopyMessage={showCopyMessage}
                               copyMessage='Color copied'/>
            );
        }

        if (layer.background) {
            tools.push(
                <ToolsBackground background={layer.background}
                                 showCopyMessage={showCopyMessage}
                                 copyMessage='Color copied'/>
            );
        }

        if (layer.style) {
            tools.push(
                <ToolsStyle style={layer.style}
                            showCopyMessage={showCopyMessage}
                            copyMessage='Code style copied'/>
            );
        }

        if (layer.html) {
            tools.push(
                <ToolsContent content={decodeURIComponent(layer.html)}
                              showCopyMessage={showCopyMessage}
                              copyMessage='Content copied'/>
            );
        }

        if (!layer.html && isExportEveryLayer && layer.id) {
            tools.push(
                <ToolsExport name={decodeURIComponent(layer.name)} url={url + layer.id} />
            );
        }

        return (
            <aside
                className={classnames({
                    'tools': true,
                    'tools_disabled': !layer.id,
                })}
                >
                <ToolsCopyInfo />

                <div className="tools__body">
                    <ToolsMainInfo layer={layer} />

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

export default ToolsComponent;