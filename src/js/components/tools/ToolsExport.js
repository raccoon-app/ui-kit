import React, { Component, PropTypes } from 'react';
import SizeDropdown from '../../containers/SizeDropdown';
import FormatDropdown from '../../containers/FormatDropdown';

export default class ToolsExport extends Component {
    render() {
        const { url, name } = this.props;
        const fileUrl = url + '@2x.png';

        return (
            <div className="tools-container">
                <h5 className="tools__title">Export asset</h5>
                <a href={fileUrl} download={name} className="tools__export">
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
                    <a href={fileUrl} download={name} className="tools__btn">Export</a>
                </div>
            </div>
        );
    }
}

ToolsExport.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
};