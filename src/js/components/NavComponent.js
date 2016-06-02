import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class NavPageList extends Component {
    render() {
        return (
            <div className="nav">
                <h3 style={{ display: 'none' }}>{this.props.name}</h3>
                <ul className="nav-folder" ref="messageList">
                    {this.props.children}
                </ul>
                <div className="left-nav-footer">
                    <button
                        className={classnames({
                            'icon-list-view': true,
                            'left-nav-footer__btn': true,
                            'left-nav-footer__btn_list': true,
                            'active': this.props.viewMode === 'list',
                        })}
                        onClick={() => this.props.changeViewMode('list')}
                    >
                    </button>
                    <button
                        className={classnames({
                            'icon-title-view': true,
                            'left-nav-footer__btn': true,
                            'left-nav-footer__btn_tile': true,
                            'active': this.props.viewMode === 'tile',
                        })}
                        onClick={() => this.props.changeViewMode('tile')}
                    >
                    </button>

                    <div className="left-nav-footer__wrap">

                        <input
                            placeholder="search"
                            className="left-nav-footer__search"
                            type="search"
                            value={this.props.filter}
                            onChange={(event) => this.props.setFilter(event.target.value)}
                        />
                        <button
                            className={classnames({
                                'icon-search': true,
                                'btn-search': true,
                                'btn-search_reset': this.props.filter,
                            })}
                            onClick={() => this.props.setFilter()}
                        >
                        </button>
                    </div>
                </div>
                <div className="left-nav-toggle">
                    <button className="left-nav-toggle__btn icon-chevron-left turned"></button>
                </div>
            </div>
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