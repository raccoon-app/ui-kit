import React, { Component, PropTypes } from 'react';

class MyAccount extends Component {
    render() {
        return (
            <div className="my-account">
                <span className="my-account__icon"></span>
                <span className="my-account__username">{ this.props.name }</span>
                <span className="icon-triangle"></span>
                <nav className="my-account__menu">
                    <a href="/" className="my-account__menu-link"><span className="icon-logout"></span>Sign Out</a>
                </nav>
            </div>
        );
    }
}

MyAccount.propTypes = {
    name: PropTypes.string,
};

export default MyAccount;
