import React, { PropTypes } from 'react';
import Settings from '../containers/Settings';
import { Link } from 'react-router';

const Header = ({ headerInfo, name }) => (
    <div className="header">
        <a href="#" className="header__logo">logo</a>
        {headerInfo ? <Link className="header__projects icon-project-icon" to={`projects`}></Link> : null}
        {headerInfo ? <i className="header__point icon-chevron-right"></i> : null}
        <h1 className="header__title">{name}</h1>
        <Settings />
        <div className="header-info">{headerInfo}</div>
    </div>
);

Header.propTypes = {
    name: PropTypes.string,
    headerInfo: PropTypes.element,
};

export default Header;
