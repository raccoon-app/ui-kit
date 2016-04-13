var MinceNavActionCreators = require('../actions/MinceNavActionCreators');
var React = require('react');
var classNames = require('classnames');

var ReactPropTypes = React.PropTypes;

var NavListArtboard = React.createClass({

    propTypes: {
        artboard: ReactPropTypes.object,
        folderID: ReactPropTypes.string,
        currentArtboardID: ReactPropTypes.string,
        viewMode: ReactPropTypes.string
    },

    render: function() {
        var artboard = this.props.artboard;
        var currentArtboardID = this.props.currentArtboardID;
        var viewMode = this.props.viewMode;

        var navTileItem = (
            <h5 className="nav-page__link">
                <span className="nav-page__link-img" style={{backgroundImage: 'url('+artboard.src+')'}}></span>
                <span className="nav-page__link-text">tile {artboard.name} </span>
            </h5>
        );

        var navListItem = (
            <h5 className="nav-page__link">
                <span className="nav-page__link-text">{artboard.name}</span>
            </h5>
        );

        var navItem = (viewMode === 'tile') ? navTileItem : navListItem;

        return (
            <li
                className={classNames({
                    'nav-page__item': true,
                    'nav-page__item_active': artboard.id === currentArtboardID
                })}
                onClick={this._onClick}>
                {navItem}
            </li>
        );

        //<span className="nav-page__link-img" style={imgStyle}></span>
    },

    _onClick: function() {
        MinceNavActionCreators.clickNavArtboard(this.props.artboard.id, this.props.folderID);
    }

});

module.exports = NavListArtboard;
