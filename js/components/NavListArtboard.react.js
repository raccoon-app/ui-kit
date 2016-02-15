var MinceNavActionCreators = require('../actions/MinceNavActionCreators');
var React = require('react');
var classNames = require('classnames');

var ReactPropTypes = React.PropTypes;

var NavListArtboard = React.createClass({

    propTypes: {
        artboard: ReactPropTypes.object,
        currentArtboardID: ReactPropTypes.string
    },

    render: function() {
        var artboard = this.props.artboard;

        var imgStyle = {
            backgroundImage: 'url('+artboard.src+')'
        };

        return (
            <li
                className={classNames({
                    'nav-page__item': true,
                    'nav-page__item_active': artboard.id === this.props.currentArtboardID
                })}
                onClick={this._onClick}>
                <h5 className="nav-page__link">
                    <span className="nav-page__link-img" style={imgStyle}></span>
                    <span className="nav-page__link-text">{artboard.name}</span>
                </h5>
            </li>
        );
    },

    _onClick: function() {
        MinceNavActionCreators.clickNavArtboard(this.props.artboard.id);
    }

});

module.exports = NavListArtboard;
