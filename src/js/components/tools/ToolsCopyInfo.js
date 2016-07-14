import React, { Component } from 'react';

let showCopyMessage;

class ToolsCopyInfo extends Component {
    render() {

        showCopyMessage = (message) => {
            const copyInfo = this.refs.copyInfo;

            copyInfo.addEventListener('animationend', handler);
            copyInfo.classList.add('tools-copy-info_animated');
            copyInfo.innerHTML = message;

            function handler(e) {
                e.target.removeEventListener(e.type, handler);

                copyInfo.classList.remove('tools-copy-info_animated');
            }
        };

        return (
            <div className="tools-copy-info" ref="copyInfo"></div>
        );
    }
}

export { showCopyMessage, ToolsCopyInfo };
