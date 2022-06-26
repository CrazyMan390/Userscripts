// ==UserScript==
// @name         Pirated games on store pages
// @namespace    CrazyMan390PirateStore
// @author       0verchargedBattery#9946
// @version      1.0.0
// @description  Adds links to pirated games on multiple stores
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @match        https://www.gog.com/game/*
// @match        https://www.gog.com/en/game/*
// @match        https://store.steampowered.com/app/*
// @run-at       document-end
// @icon         data:image/png;base64,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
// @grant        none
// @license      MIT
// ==/UserScript==

var pirateLinks = [{
        url: "https://gload.to/?s=",
        title: "Gload"
    },
    {
        url: "https://gog-games.com/search/",
        title: "GOG Games"
    },
    {
        url: "https://www.ovagames.com/?s=",
        title: "OVA Games"
    },
    {
        url: "https://steamrip.com/?s=",
        title: "SteamRIP"
    },
    {
        url: "https://steamunlocked.net/?s=",
        title: "Steam Unlocked"
    },
    {
        url: "https://gogunlocked.com/?s=",
        title: "GOG Unlocked"
    },
    {
        url: "https://fitgirl-repacks.site/?s=",
        title: "Fitgirl"
    },
];

var storePages = [{
        url: "https://store.steampowered.com/app/*",
        title: "STEAM"
    },
    {
        url: "https://www.gog.com/game/*",
        title: "GOG"
    },
    {
        url: "https://www.gog.com/en/game/*",
        title: "GOG"
    },
];

var storePageResult = "";

storePages.forEach((e) => {
    if (!!document.URL.match(e.url)) storePageResult = e.title;
})

console.log("Domain Match: ", storePageResult);
var appName = "";

switch (storePageResult) {
    case "GOG":
        appName = document.getElementsByClassName("productcard-basics__title")[0].textContent;
        pirateLinks.forEach((e) => {
            $("button.cart-button")[0].parentElement.parentElement.append(rigGOG(e.url + appName, e.title))
        })
        break;
    case "STEAM":
        appName = document.getElementsByClassName("apphub_AppName")[0].textContent;
        $(".game_area_purchase:first").prepend('<div class="game_area_purchase_game demo_above_purchase"><h1>Download ' + appName + ' Cracked</h1><p class="game_purchase_discount_countdown">NOT DIRECT LINKS! These links lead to the search feature on specified websites</p><div class="game_purchase_action"><div class="game_purchase_action_bg"></div></div></div></div>')
        pirateLinks.forEach((e) => {
            $(".game_purchase_action_bg:first").append(rigSteam(e.url + appName, e.title))
        })
        Array.prototype.forEach.call(document.getElementsByClassName("game_purchase_action"), function(e){e.style.overflow ="auto"})
        break;
}

function rigGOG(href, innerHTML) {
    let element = document.createElement("a");
    element.target = "_blank";
    element.style = "margin: 5px 0 5px 0 !important; padding: 5px 10px 5px 10px;";
    element.classList.add("button");
    element.classList.add("button--big");
    element.classList.add("cart-button");
    element.classList.add("ng-scope");
    element.href = href;
    element.innerHTML = innerHTML;
    return element;
}

function rigSteam(href, innerHTML) {
    let div = document.createElement("div");
    let element = document.createElement("a");
    let span = document.createElement("span");
    div.id = "demoGameBtn"
    div.append(element)
    div.className = "btn_addtocart";
    element.classList.add("btn_green_steamui")
    element.classList.add("btn_medium")
    element.href = href;
    element.append(span)
    span.innerHTML = innerHTML;
    return div;
}
