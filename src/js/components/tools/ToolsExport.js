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

                <div className="tools__export-measure">
                    <SizeDropdown />
                </div>
                <div className="tools__export-measure tools__export-measure_format">
                    <FormatDropdown />
                </div>

                <div className="tools__export">
                    <span style={{ backgroundImage:'url('+fileUrl+')' }} className="tools__export-image"></span>
                </div>

                <a href={fileUrl} download={name} className="tools__btn tools__btn_export icon-icon-download"></a>
            </div>
        );
    }
}

ToolsExport.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
};