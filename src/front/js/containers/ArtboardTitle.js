import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ArtboardTitle from '../components/ArtboardTitle';

const mapStateToProps = ({ artboard }) => ({
    activeArtboard: artboard.activeArtboard,
});

export default connect(mapStateToProps, {})(ArtboardTitle);
