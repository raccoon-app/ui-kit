import React, { Component } from 'react';
import Nav from './../containers/Nav';
import Header from './../containers/Header';
import Artboard from './../containers/Artboard';
import Tools from './../containers/Tools';

export default class App extends Component {
    render() {
        return (
            <div className="app">
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