import React, { PropTypes } from 'react';

const LoginScreen = ({ formLogin, epamLogin }) => (
    <section className="app auth">
        <header className="auth__header">
            <img className="auth__raccoon-logo"
                 src="../src/img/raccoon-logo.svg"
                 onerror="this.src='../src/img/raccoon-logo.png';this.onerror=null;"
            />
            <br />
            <img className="auth__epam-logo"
                 src="../src/img/e-p-a-m-logo-white.svg"
                 onerror="this.src='../src/img/e-p-a-m-logo-white.png';this.onerror=null;"
            />
            <h1 className="auth__title">RACCOON APP</h1>
            <p>Sign in with your organizational account</p>
        </header>
        <form className="auth-form">
            <label className="auth-form__label">LOGIN</label>
            <input className="auth-form__input" type="text" name="login" />
            <label className="auth-form__label">PASSWORD</label>
            <input className="auth-form__input" type="password" name="password" />
            <button onClick={formLogin} className="auth-form__btn btn btn_green">SignIn</button>
            <button onClick={epamLogin} className="auth-form__btn auth-form__btn_right btn">EPAM SignIn</button>
        </form>
    </section>
);


LoginScreen.propTypes = {
    formLogin: PropTypes.func.isRequired,
    epamLogin: PropTypes.func.isRequired,
};

export default LoginScreen;
