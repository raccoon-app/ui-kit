import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class NavPageList extends Component {
    render() {
        return (
            <nav className="nav">
                <h3 style={{ display: 'none' }}>{this.props.name}</h3>
                <ul className="nav-folder" ref="messageList">
                    {this.props.children}
                </ul>
                <div className="nav-footer">
                    <button
                        className={classnames({
                            'icon-list-view': true,
                            'nav-footer__btn': true,
                            'nav-footer__btn_active': this.props.viewMode === 'list',
                        })}
                        onClick={() => this.props.changeViewMode('list')}
                    >
                    </button>
                    <button
                        className={classnames({
                            'icon-title-view': true,
                            'nav-footer__btn': true,
                            'nav-footer__btn_active': this.props.viewMode === 'tile',
                        })}
                        onClick={() => this.props.changeViewMode('tile')}
                    >
                    </button>

                    <div className="nav-footer__search">

                        <input
                            placeholder="search"
                            className="nav-footer__search-input"
                            type="search"
                            value={this.props.filter}
                            onChange={(event) => this.props.setFilter(event.target.value)}
                        />
                        <button
                            className={classnames({
                                'icon-search': true,
                                'nav-footer__search-btn': true,
                                'nav-footer__search-btn_reset': this.props.filter,
                            })}
                            onClick={() => this.props.setFilter()}
                        >
                        </button>
                    </div>
                </div>
                <div className="nav-toggle">
                    <button className="nav-toggle__btn nav-toggle__btn_turned icon-chevron-left"></button>
                </div>
            </nav>
        );
    }
}


NavPageList.propTypes = {
    children: PropTypes.node,
    name: PropTypes.string,
    viewMode: PropTypes.string,
    filter: PropTypes.string,
    changeViewMode: PropTypes.func.isRequired,
    setFilter: PropTypes.func.isRequired,
}