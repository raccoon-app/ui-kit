import React, { Component, PropTypes } from 'react';
import RadioColorSwitcher from './RadioColorSwitcher';
import SettingControlButton from './SettingControlButton';
import classnames from 'classnames';

class SettingPanel extends Component {
    constructor() {
        super();
        this.state = {
            isOpened: false,
        };
        this.togglePanel = this.togglePanel.bind(this);
    }
    togglePanel() {
        return this.setState({ isOpened: !this.state.isOpened });
    }
    render() {
        const bgSwitcherProps = {
            optionList: this.props.backgroundColorList,
            title: 'Background',
            onChange: this.props.onSwitcherChange,
            activeColor: this.props.backgroundColor,
            type: 'BACKGROUND_COLOR',
        };
        const markerSwitcherProps = {
            optionList: this.props.markerColorList,
            title: 'Guides',
            onChange: this.props.onSwitcherChange,
            activeColor: this.props.markerColor,
            type: 'MARKER_COLOR',
        };
        return (
            <div className={ classnames({
                'setting-panel': true,
                'setting-panel_opened': this.state.isOpened,
            })}
            >
                <SettingControlButton onClick={this.togglePanel} />
                <div className="setting-panel__options">
                    <RadioColorSwitcher {...markerSwitcherProps} />
                    <RadioColorSwitcher {...bgSwitcherProps} />
                </div>
            </div>
        );
    }
}

SettingPanel.propTypes = {
    markerColorList: PropTypes.array.isRequired,
    backgroundColorList: PropTypes.array.isRequired,
    onSwitcherChange: PropTypes.func.isRequired,
    markerColor: PropTypes.object.isRequired,
    backgroundColor: PropTypes.object.isRequired,
};

export default SettingPanel;
