import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getActiveArtboard } from '../reducers/artboard';


class ArtboardTitle extends Component {
    render() {
        return (
            <div className="header-info">
                <h2 className="header-info__title">{decodeURIComponent(this.props.activeArtboard.name)}</h2>
                <span className="header-info__subtitle">(Updated 23.04.2016)</span>
            </div>
        );
    }
}

ArtboardTitle.propTypes = {
    activeArtboard: PropTypes.object,
};

const mapStateToProps = (state) => ({
    activeArtboard: getActiveArtboard(state.artboard),
});

export default connect(
    mapStateToProps,
    {}
)(ArtboardTitle);
