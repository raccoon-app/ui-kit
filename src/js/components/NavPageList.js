import React, { Component, PropTypes } from 'react';
import NavArtboardList from './NavArtboardList';
import classnames from 'classnames';

export default class NavPageList extends Component {
    render() {
        const { pageId, activeArtboard, isActivePage, isOpenPage, name, viewMode, filter } = this.props;
        const artboards = this.props.artboards.filter(artboard =>
            (!filter || artboard.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
        );

        return (
            <li className={classnames({
                'nav-folder__item': true,
                'nav-folder__item_open': isOpenPage,
                'nav-folder__item_hidden': !artboards.length,
            })}
            >
                <h3
                    className={classnames({
                        'nav-folder__title': true,
                        'nav-folder__title_active': isActivePage,
                    })}
                    onClick={this.props.onNavPageClicked}
                >
                    {name}
                </h3>
                <ul
                    className={classnames({
                        'nav-page': true,
                        'nav-page_tile': viewMode === 'tile',
                    })}
                >
                    {artboards.map(artboard =>
                        <NavArtboardList
                            key={artboard.id}
                            activeArtboard={activeArtboard}
                            artboardId={artboard.id}
                            name={artboard.name}
                            src={artboard.src}
                            viewMode={viewMode}
                            onNavArtboardClicked={() => this.props.setActiveArtboard(pageId, artboard.id)}
                        />
                    )}
                </ul>
            </li>
        );
    }
}

NavPageList.propTypes = {
    pageId: PropTypes.string,
    name: PropTypes.string,
    artboards: PropTypes.array,
    isOpenPage: PropTypes.bool,
    isActivePage: PropTypes.bool,
    activeArtboard: PropTypes.string,
    viewMode: PropTypes.string,
    filter: PropTypes.string,
    onNavPageClicked: PropTypes.func,
    setActiveArtboard: PropTypes.func,
}