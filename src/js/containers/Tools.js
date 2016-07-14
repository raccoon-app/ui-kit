import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getLayer, getExportLayer, getUrl } from '../reducers/tools';

import classnames from 'classnames';

import { showCopyMessage, ToolsCopyInfo } from '../components/tools/ToolsCopyInfo';
import ToolsMainInfo from '../components/tools/ToolsMainInfo';
import ToolsGradient from '../components/tools/ToolsGradient';
import ToolsBackground from '../components/tools/ToolsBackground';
import ToolsStyle from '../components/tools/ToolsStyle';
import ToolsContent from '../components/tools/ToolsContent';
import ToolsExport from '../components/tools/ToolsExport';

import parseGradient from '../utils/parseGradient';


function getGradient(styleJson) {
    let string = '';

    for (const k in styleJson) {
        if (k.indexOf('background') !== -1 && styleJson[k].indexOf('linear-gradient') !== -1) {
            string = styleJson[k];
        }
    }

    return string ? parseGradient(string) : false;
}

class ToolsComponent extends Component {
    render() {
        const { layer, url, isExportEveryLayer } = this.props;
        const gradient = getGradient(layer.style);

        let tools = [];

        if (gradient) {
            tools.push(
                <ToolsGradient gradientList={gradient.colorStopList}
                               showCopyMessage={showCopyMessage}
                               copyMessage='Gradient copied'/>
            );
        }

        if (layer.background) {
            tools.push(
                <ToolsBackground background={layer.background}
                                 showCopyMessage={showCopyMessage}
                                 copyMessage='Background copied'/>
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

const mapStateToProps = (state) => ({
    layer: getLayer(state.tools),
    isExportEveryLayer: getExportLayer(state.tools),
    url: getUrl(state.tools),
});

const Tools = connect(
    mapStateToProps,
    { }
)(ToolsComponent);

export default Tools;
