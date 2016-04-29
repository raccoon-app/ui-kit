import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class NavPageList extends Component {
    render() {
        return (
            <div className="nav">
                <h3 style={{display: 'none'}}>{this.props.name}</h3>
                <ul className="nav-folder" ref="messageList">
                    {this.props.children}
                </ul>
                <div className="left-nav-footer">
                    <i
                        className={classnames({
                            'icon-list-view': true,
                            'left-nav-footer__btn': true,
                            'left-nav-footer__btn_list': true,
                            'active': this.props.viewMode === 'list'
                        })}
                        onClick={this.props.changeViewMode.bind(this, 'list')}></i>
                    <i
                        className={classnames({
                            'icon-title-view': true,
                            'left-nav-footer__btn': true,
                            'left-nav-footer__btn_tile': true,
                            'active': this.props.viewMode === 'tile'
                        })}
                        onClick={this.props.changeViewMode.bind(this, 'tile')}></i>
                    
                    <div className="left-nav-footer__wrap">
                        <input placeholder="search" className="left-nav-footer__search" type="search" />
                        <i className="icon-search"></i>
                    </div>
                </div>
            </div>
        )
    }
}


NavPageList.propTypes = {
    children: PropTypes.node,
    name: PropTypes.string,
    changeViewMode: PropTypes.func.isRequired,
    viewMode: PropTypes.string
}