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
            $("button.cart-button")[0].parentElement.parentElement.append(rigGOG(el.url + appName, e.title))
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
