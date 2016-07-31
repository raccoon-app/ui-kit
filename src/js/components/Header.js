import React, { Component, PropTypes } from 'react';
import SettingPanel from '../containers/SettingsPanel';
import { Link } from 'react-router';

class Header extends Component {
    render() {
        const { headerInfo, name } = this.props;

        return (
            <div className="header">
                <a href="#" className="header__logo">logo</a>
                {headerInfo ? <Link className="header__link" to={`projects`}>Projects</Link> : null}
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
