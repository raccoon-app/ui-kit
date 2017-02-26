import React, { Component, PropTypes } from 'react';
import ReactTooltip from 'react-tooltip'
import classnames from 'classnames';

const NavArtboardList = ({ artboardId, activeArtboard, name, src, viewMode, onNavArtboardClicked }) => {
    const navTileItem = (
        <div className="nav-page__link">
            <span className="nav-page__link-img" style={{ backgroundImage: `url(${src})` }}>
                <i className="icon-selected-page-icon"></i>
            </span>
        </div>
    );

    const navListItem = (
        <div>
            <div data-tip data-for={name} className="nav-page__link">
                <span className="nav-page__link-text">{name}</span>
            </div>
            <ReactTooltip class="nav-page__tooltip" effect="solid" delayShow={500} offset={{top: 5, left: 0}} place="right" id={name} >{name}</ReactTooltip>
        </div>

    );

    return (
        <li
            className={classnames({
                'nav-page__item': true,
                'nav-page__item_active': artboardId === activeArtboard,
            })}
            onClick={onNavArtboardClicked}
        >
            {viewMode === 'tile' ? navTileItem : navListItem}
        </li>
    );
};

NavArtboardList.propTypes = {
    activeArtboard: PropTypes.string,
    artboardId: PropTypes.string,
    name: PropTypes.string,
    src: PropTypes.string,
    viewMode: PropTypes.string,
    onNavArtboardClicked: PropTypes.func,
};

export default NavArtboardList;
