import React, { PropTypes } from 'react';
import Header from './../containers/Header';

const LoginScreen = ({ formLogin, epamLogin }) => (
    <div className="app">
        <h2>LOGIN</h2>
        <button onClick={formLogin} class="btn">SIGNIN</button>
        <button onClick={epamLogin} class="btn">EPAM SIGNIN</button>
    </div>
);


LoginScreen.propTypes = {
    formLogin: PropTypes.func.isRequired,
    epamLogin: PropTypes.func.isRequired,
};

export default LoginScreen;