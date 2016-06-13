import React, { Component } from 'react';

let showCopyMessage;

class ToolsCopyInfo extends Component {
    render() {

        showCopyMessage = () => {
            const copyInfo = this.refs.copyInfo;

            copyInfo.addEventListener('animationend', handler);
            copyInfo.classList.add('tools-copy-info_animated');

            function handler(e) {
                e.target.removeEventListener(e.type, handler);

                copyInfo.classList.remove('tools-copy-info_animated');
            }
        };

        return (
            <div className="tools-copy-info" ref="copyInfo">Content copied!</div>
        );
    }
}

export { showCopyMessage, ToolsCopyInfo };
