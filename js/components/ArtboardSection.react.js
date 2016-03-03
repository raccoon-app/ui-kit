var MinceArtboardActionCreators = require('../actions/MinceArtboardActionCreators');
var React = require('react');
var ArtboardListLayer = require('../components/ArtboardListLayer.react');
var MeasureSection = require('../components/MeasureSection.react');
var ArtboardStore = require('../stores/ArtboardStore');
var SettingStore = require('../stores/SettingStore');
var classNames = require('classnames');

function getStateFromStores() {
    return {
        artboard: ArtboardStore.getCurrent(),
        layer: ArtboardStore.getLayer(),
        image: ArtboardStore.getImage(),
        scale: 1,
        x: 0,
        y: 0,
        dragging: false,
        backgroundColor: SettingStore.getBackgroundColor()
    };
}

var ArtboardSection = React.createClass({

    getInitialState: function() {
        return getStateFromStores();
    },

    componentDidMount: function() {
        ArtboardStore.addChangeListener(this._onChange);
        SettingStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        ArtboardStore.removeChangeListener(this._onChange);
        SettingStore.removeChangeListener(this._onChange);
    },

    render: function() {
        var artboard = this.state.artboard;
        var backgroundColor = this.state.backgroundColor;

        var layers = this.state.layer.map(function(layerItem) {
            return (
                <ArtboardListLayer
                    key={layerItem.id}
                    layer={layerItem}
                />
            );
         });

        var wrapperStyle = {
            backgroundImage: 'url('+this.state.image+')',
            left: artboard.x+'px',
            top: artboard.y+'px',
            width: artboard.width+'px',
            height: artboard.height+'px',
            zIndex: artboard.zIndex
        };

        var scaleStyle = {
            transform: 'scale(' + this.state.scale +')'
        };

        var translateStyle = {
            left: this.state.x+'px',
            top: this.state.y+'px'
        };

        artboard.name = decodeURIComponent(artboard.name);

        var scaleValue = Math.floor(this.state.scale*100)+'%';

        return (
            <div className={classNames({
                    'artboard': true,
                    'artboard_dragging': this.state.dragging
                 })}
                 onWheel={this._onMouseWheel}
                 onMouseDown={this._onMouseDown}
                 onMouseUp={this._onMouseUp}
                 onMouseMove={this._onMouseMove}
                 style={{background:backgroundColor}}>

                <h3 className={classNames({
                    'artboard__title': true,
                    'artboard__title_disabled': artboard.name
                 })}>{artboard.name}</h3>

                <div className="artboard__draggable" style={translateStyle}>
                    <div className="artboard__scale" style={scaleStyle}>
                        <div className="artboard__layer-list" style={wrapperStyle}>
                            {layers}
                        </div>
                    </div>
                    <MeasureSection scale={this.state.scale}/>
                </div>

                <div className="artboard__scale-value">{scaleValue}</div>
            </div>
        );
    },

    /**
    * Event handler for 'change' events coming from the stores
    */
    _onChange: function() {
        this.setState(getStateFromStores());
    },

    _onMouseDown: function(e) {
        this.state.dragging = true;

        this.coords = {
            x: e.pageX,
            y: e.pageY
        }
    },
    _onMouseUp: function() {
        this.state.dragging = false;
        this.coords = {};
        this.setState(this.state);
    },
    _onMouseMove: function(e) {

        if (!this.state.dragging) {
            return;
        }

        e.preventDefault();

        var xDiff = this.coords.x - e.pageX,
            yDiff = this.coords.y - e.pageY;

        this.coords.x = e.pageX;
        this.coords.y = e.pageY;

        this.state.x -= xDiff;
        this.state.y -= yDiff;

        this.setState(this.state);
    },

    isNegative: function (n) {
        return ((n = +n) || 1 / n) < 0;
    },

    _onMouseWheel: function(e) {
        var ZOOM_STEP = .1;

        //require the shift key to be pressed to scroll
        //if (!e.shiftKey) {
        //    return;
        //}
        var $target = document.getElementsByClassName('artboard__scale')[0].getBoundingClientRect();

        e.preventDefault();

        var xDiff = (e.pageX-$target.left)*ZOOM_STEP/this.state.scale;
        var yDiff = (e.pageY-$target.top)*ZOOM_STEP/this.state.scale;

        if (this.isNegative(e.deltaX) && this.isNegative(e.deltaY) ) {
            this.state.x -= xDiff;
            this.state.y -= yDiff;
        } else {
            this.state.x += xDiff;
            this.state.y += yDiff;
        }

        if (this.isNegative(e.deltaX) && this.isNegative(e.deltaY) ) {
            this.state.scale += ZOOM_STEP;
        } else {
            this.state.scale -= ZOOM_STEP;
        }
        this.state.scale = this.state.scale < 2*ZOOM_STEP ? 2*ZOOM_STEP : this.state.scale;

        this.setState(this.state);
    }
});

module.exports = ArtboardSection;
