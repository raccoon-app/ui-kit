import React, { PropTypes } from 'react';
import Header from './Header';

const LoginScreen = ({ formLogin, epamLogin }) => (
    <div className="app">
        <Header />
        <div className="main">
            <form>
                <h2>LOGIN</h2>
                <input type="text" name="login" />
                <input type="password" name="password" />
                <button onClick={formLogin} className="btn">SIGNIN</button>
                <button onClick={epamLogin} className="btn">EPAM SIGNIN</button>
            </form>
        </div>
    </div>
);


LoginScreen.propTypes = {
    formLogin: PropTypes.func.isRequired,
    epamLogin: PropTypes.func.isRequired,
};

export default LoginScreen;