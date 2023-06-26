// ==UserScript==
// @name         Pastebin link activator
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make links clickable on pastebin.com
// @author       Ryu
// @match        https://pastebin.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    let contentElement = document.querySelector('ol.html4strict');

    if(contentElement) {
        let contentHtml = contentElement.innerHTML;
        let newContentHtml = contentHtml.replace(urlRegex, function(url) {
            return '<a href="' + url + '" target="_blank">' + url + '</a>';
        });
        contentElement.innerHTML = newContentHtml;
    }
})();
