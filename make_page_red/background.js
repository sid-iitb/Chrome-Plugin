// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!   cool');
  //console.log('Document printing'+ document.getElementsByClassName()ElementBy("main").style.backgroundColor)
  //   var node = document.createElement("LI");                 // Create a <li> node
  //   var textnode = document.createTextNode("Water");         // Create a text node
  //   node.appendChild(textnode);                              // Append the text to <li>
  //   document.getElementById("main").appendChild(node);
    var node = document.getElementById("hdtb-msb-vis");
    document.getElementById("hdtb-msb").insertBefore(node)

    //document.getElementById()
  chrome.tabs.executeScript({
    code: 'document.getElementById("main").style.background="red"'
  });
});
