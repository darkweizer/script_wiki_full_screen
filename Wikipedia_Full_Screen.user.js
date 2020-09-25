// ==UserScript==
// @name         Wikipedia
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       darkweizer
// @match        https://fr.wikipedia.org/*
// @grant        none
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    $(".mw-page-container").css("max-width", "none");
    $(".mw-workspace-container").css("max-width", "none");
    $(".mw-content-container").css({"max-width": "none", "margin-left" : "11em"});
})();