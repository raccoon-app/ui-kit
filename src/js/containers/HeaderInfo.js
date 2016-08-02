import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class ArtboardTitle extends Component {
    render() {
        return (
            <div>
                <h2 className="header-info__title">{decodeURIComponent(this.props.activeArtboard.name)}</h2>
                <span className="header-info__subtitle">(Updated 23.04.2016)</span>
            </div>
        );
    }
}

ArtboardTitle.propTypes = {
    activeArtboard: PropTypes.object,
};

const mapStateToProps = ({ artboard }) => ({
    activeArtboard: artboard.activeArtboard,
});

export default connect(
    mapStateToProps,
    {}
)(ArtboardTitle);
