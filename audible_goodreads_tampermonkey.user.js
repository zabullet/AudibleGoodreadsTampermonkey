// ==UserScript==
// @name         Audible -> Goodreads enhancer
// @namespace    http://asdasdasd.net/
// @version      0.1
// @description  Changes book title to a search link on GoodReads
// @author       zabullet
// @match        https://www.audible.com/pd/*
// @run-at       document-idle
// @grant        none
// @updateURL    https://github.com/zabullet/AudibleGoodreadsTampermonkey/blob/master/audible_goodreads_tampermonkey.user.js
// ==/UserScript==

(function() {
    'use strict';

    var bookTitle = document.getElementsByClassName("bc-section    bc-spacing-medium     bc-spacing-top-base")[0].getElementsByClassName("bc-heading bc-color-base bc-text-bold")[0];
    var bookAuthorLink = document.getElementsByClassName("bc-section    bc-spacing-medium     bc-spacing-top-base")[0].getElementsByClassName("bc-list-item authorLabel")[0].getElementsByClassName("bc-link bc-color-link")[0];
    var oldParent = bookTitle.parentNode;

    var newParent = document.createElement('a');
    newParent.setAttribute('href',"https://www.goodreads.com/search?q="+encodeURIComponent(bookTitle.textContent)+" "+encodeURIComponent(bookAuthorLink.textContent));

    oldParent.replaceChild(newParent,bookTitle);
    newParent.appendChild(bookTitle);

})();