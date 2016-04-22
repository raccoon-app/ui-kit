import React, { Component, PropTypes } from 'react'

export default class NavPageList extends Component {
    render() {
        return (
            <div className="nav">
                <h3 style={{display: 'none'}}>{this.props.name}</h3>
                <ul className="nav-folder" ref="messageList">
                    {this.props.children}
                </ul>
                <div>
                    <button onClick={this.props.changeViewMode.bind(this, 'list')}>list view</button>
                    <button onClick={this.props.changeViewMode.bind(this, 'tile')}>tile view</button>
                    <input type="search" />
                </div>
            </div>
        )
    }
}


NavPageList.propTypes = {
    children: PropTypes.node,
    name: PropTypes.string,
    changeViewMode: PropTypes.func.isRequired
}