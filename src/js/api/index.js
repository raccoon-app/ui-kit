/**
 * Mocking client-server processing
 */

export default {
  getProject(cb, url) {

    let oldXdata = document.getElementById('project');

    if (oldXdata && oldXdata.length) {
      oldXdata.parentNode.removeChild(oldXdata);
    }

    let xdata = document.createElement('script');
    xdata.setAttribute('id', 'project');

    xdata.onload = function(){
      console.log('getProject')
      console.log(pageData)
      cb(pageData)
      //ServerActions.receiveProject(pageData, url);
      //
      //for (var key in pageData.pageData) {
      //  defaultFolder = key;
      //  break;
      //}

      //defaultArtboard = pageData.pageData[defaultFolder].artboardId[0];

      //NavActions.clickNavArtboard(defaultArtboard, defaultFolder);
    };
    xdata.src = url+'data.js';
    document.body.appendChild(xdata);
  }
}

