import React, { Component } from 'react';
import Nav from './../containers/Nav';
import Header from './../containers/Header';
import Artboard from './../containers/Artboard';
import Tools from './../containers/Tools';

export default class App extends Component {
    render() {
        const { id } = this.props.params;

        return (
            <div className="app">
                <h1>{ id }</h1>
                <Header />
                <div className="main">
                    <Nav />
                    <Artboard />
                    <Tools />
                </div>
            </div>
        )
    }
}

App.propTypes = {
    params: PropTypes.object,
}