import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import LoginScreen from '../components/LoginScreen';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    formLogin() {
        dispatch(login('http://design.oweather.net/'));
    },
    epamLogin() {
        dispatch(login('http://design.oweather.net/'));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
