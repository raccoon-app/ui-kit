import React, { PropTypes } from 'react';
import Settings from '../containers/Settings';
import { Link } from 'react-router';
import MyAccount from './MyAccount';

const Header = ({ headerInfo, name }) => (
    <div className="header">
        <a href="#" className="header__logo">logo</a>
        <div className="breadcrumbs">
            <Link className="breadcrumbs__link" to={`projects`} >
                <span className="icon-project-icon"></span>All Projects
            </Link>
            { name ?
                <div className="breadcrumbs__item">
                    <span className="breadcrumbs__delimiter icon-chevron-right"></span>{name}
                </div> : null
            }
            { headerInfo ?
                <div className="breadcrumbs__item">
                    <span className="breadcrumbs__delimiter icon-chevron-right"></span>{headerInfo}
                </div> : null
            }
        </div>
        <MyAccount name="Artem Svitelskyi" />
        <Settings />
    </div>
);

Header.propTypes = {
    name: PropTypes.string,
    headerInfo: PropTypes.element,
};

export default Header;
