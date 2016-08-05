import React, { Component, PropTypes } from 'react';
import SettingPanel from '../containers/SettingsPanel';
import { Link } from 'react-router';

class Header extends Component {
    render() {
        const { headerInfo, name } = this.props;

        return (
            <div className="header">
                <a href="#" className="header__logo">logo</a>
                {headerInfo ? <Link className="header__projects icon-project-icon" to={`projects`}></Link> : null}
                {headerInfo ? <i className="header__point icon-chevron-right"></i> : null}
                <h1 className="header__title">{name}</h1>
                <SettingPanel />
                <div className="header-info">{headerInfo}</div>
            </div>
        );
    }
}

Header.propTypes = {
    name: PropTypes.string,
    headerInfo: PropTypes.element,
};

export default Header;