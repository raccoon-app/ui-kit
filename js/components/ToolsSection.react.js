var React = require('react');
var ToolsStore = require('../stores/ToolsStore');

function getStateFromStores() {
    return {
        artboard: ToolsStore.getArtboard(),
        layer: ToolsStore.getLayer(),
        isExportEveryLayer: ToolsStore.getIsExportEveryLayer(),
        url: ToolsStore.getProjectUrl()
    };
}

function formatStyle(styleJson){
    var style = [];
    for(var k in styleJson){
        style.push(k +':'+ (styleJson[k].indexOf('font-family') > -1 ? '"'+styleJson[k]+'"' : styleJson[k]) +';');
    }
    return style.join('\r\n');
}

var ToolsSection = React.createClass({

    getInitialState: function() {
        return getStateFromStores();
    },

    componentDidMount: function() {
        ToolsStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        ToolsStore.removeChangeListener(this._onChange);
    },

    render: function() {
        var layer = this.state.layer;

        console.log(layer);

        layer.name = decodeURIComponent(layer.name);
        layer.html = decodeURIComponent(layer.html);

        var tools = [];

        if (layer.html && layer.html !== 'undefined') {
            tools.push(
                <textarea name="content" value={layer.html} className="tools__textarea tools__textarea_content"></textarea>
            )
        }

        if (layer.style) {
            var styleHtml = formatStyle(layer.style);

            tools.push(
                <textarea name="code" value={styleHtml} className="tools__textarea tools__textarea_style">{styleHtml}</textarea>
            )
        }

        if ((!layer.html || layer.html == 'undefined') && this.state.isExportEveryLayer) {
            var fileUrl = this.state.url + this.state.artboard + '/' + layer.id + '@2x.png';
            var fileName = layer.name + '.png'

            tools.push(
                <a href={fileUrl} download={fileName} className="tools__btn">download</a>
            )
        }

        return (
            <div className="tools">
                <h5>{layer.name}</h5>
                x: {layer.x}px<br />
                y: {layer.x}px<br />
                width: {layer.width}px<br />
                height: {layer.height}px<br />

                {tools}
            </div>
        );
    },

    /**
    * Event handler for 'change' events coming from the stores
    */
    _onChange: function() {
        this.setState(getStateFromStores());
    }

});

module.exports = ToolsSection;
