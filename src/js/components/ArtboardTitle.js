import React, { PropTypes } from 'react';

const ArtboardTitle = ({ activeArtboard }) => (
    <div className="artboard-info">
        <h1 className="artboard-info__title">{decodeURIComponent(activeArtboard.name)}</h1>
        <span className="artboard-info__subtitle">(Updated 23.04.2016)</span>
    </div>
);

ArtboardTitle.propTypes = {
    activeArtboard: PropTypes.object,
};

export default ArtboardTitle;
