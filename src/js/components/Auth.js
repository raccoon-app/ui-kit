import React, { PropTypes } from 'react';
import Input from './Input';
import RaccoonLogoSvg from '../../img/raccoon-logo.svg';
import EpamLogoSvg from '../../img/e-p-a-m-logo.svg';

const LoginScreen = ({ formLogin, epamLogin }) => (
    <section className="app auth">

        <header className="auth__header">
            <figure className="auth__figure">
                <img className="auth__raccoon-logo"
                    src={RaccoonLogoSvg} alt="Raccoon App Logo"
                />
            </figure>
            <figure className="auth__figure">
                <img className="auth__epam-logo"
                    src={EpamLogoSvg} alt="EPAM Logo"
                />
            </figure>
        </header>

        <form className="auth-form" onSubmit={formLogin}>
            <Input type="text" name="authLogin" label="LOGIN" />
            <Input type="password" name="authPassword" label="PASSWORD" />
            <button type="button" onClick={epamLogin} className="auth-form__btn btn btn_green">
                EPAM Sign In
            </button>
            <button type="submit" className="auth-form__btn auth-form__btn_right btn">
                Sign In
            </button>
        </form>

        <div className="forgot-pwd">
            <p>
                Forgot your password? <br />
                Reset on <a className="forgot-pwd__link" href="//password.epam.com">password.epam.com</a>
            </p>
        </div>

    </section>
);


LoginScreen.propTypes = {
    formLogin: PropTypes.func.isRequired,
    epamLogin: PropTypes.func.isRequired,
};

export default LoginScreen;
