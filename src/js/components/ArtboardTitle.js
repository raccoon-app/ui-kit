import React, { PropTypes } from 'react';

const ArtboardTitle = ({ activeArtboard }) => (
    <div>
        <h2 className="header-info__title">{decodeURIComponent(activeArtboard.name)}</h2>
        <span className="header-info__subtitle">(Updated 23.04.2016)</span>
    </div>
);

ArtboardTitle.propTypes = {
    activeArtboard: PropTypes.object,
};

export default ArtboardTitle;
