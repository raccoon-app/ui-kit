import React, { Component, PropTypes } from 'react';

class MyAccount extends Component {
    render() {
        return (
            <div className="my-account">
                <span className="my-account__icon icon-username"></span>
                <span className="my-account__username">{ this.props.name }</span>
                <nav className="my-account__menu">
                    <a href="/" className="my-account__menu-link">Sign Out</a>
                </nav>
            </div>
        );
    }
}

MyAccount.propTypes = {
    name: PropTypes.string,
};

export default MyAccount;
