import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class NavArtboardList extends Component {
    render() {
        const { artboardId, activeArtboard, viewMode } = this.props

        var navTileItem = (
            <h5 className="nav-page__link">
                <span className="nav-page__link-img" style={{backgroundImage: 'url('+this.props.src+')'}}></span>
            </h5>
        );

        var navListItem = (
            <h5 className="nav-page__link">
                <span className="nav-page__link-text">{this.props.name}</span>
            </h5>
        );

        var navItem = (viewMode === 'tile') ? navTileItem : navListItem;

        return (
            <li
                className={classnames({
                    'nav-page__item': true,
                    'nav-page__item_active': artboardId === activeArtboard
                })}
                onClick={this.props.onNavArtboardClicked}
            >
                {navItem}
            </li>
        )
    }
}

NavArtboardList.propTypes = {
    activeArtboard: PropTypes.string,
    artboardId: PropTypes.string,
    name: PropTypes.string,
    src: PropTypes.string,
    viewMode: PropTypes.string,
    onNavArtboardClicked: PropTypes.func
}