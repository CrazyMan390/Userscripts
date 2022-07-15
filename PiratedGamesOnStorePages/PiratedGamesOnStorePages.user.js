// ==UserScript==
// @name         Pirated games on store pages
// @namespace    CrazyMan390PirateStore
// @author       0verchargedBattery#9946
// @version      1.4.1
// @description  Adds links to pirated games on multiple stores
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @match        https://www.gog.com/game/*
// @match        https://www.gog.com/en/game/*
// @match        https://store.steampowered.com/app/*
// @match        https://www.origin.com/usa/en-us/store/*/*
// @match        https://store.epicgames.com/en-US/p/*
// @match        https://www.xbox.com/en-us/games/store/*/*
// @match        https://www.xbox.com/en-US/games/store/*/*
// @homepage     https://github.com/CrazyMan390/Userscripts
// @run-at       document-end
// @grant        none
// @license      MIT
// ==/UserScript==

var pirateLinks = [{
        url: "https://gload.to/?s=",
        urlSpecial: "",
        title: "Gload"
    },
    {
        url: "https://gog-games.com/search/",
        urlSpecial: "",
        title: "GOG Games"
    },
    {
        url: "https://www.ovagames.com/?s=",
        urlSpecial: "",
        title: "OVA Games"
    },
    {
        url: "https://steamrip.com/?s=",
        urlSpecial: "",
        title: "SteamRIP"
    },
    {
        url: "https://steamunlocked.net/?s=",
        urlSpecial: "",
        title: "Steam Unlocked"
    },
    {
        url: "https://gogunlocked.com/?s=",
        urlSpecial: "",
        title: "GOG Unlocked"
    },
    {
        url: "https://fitgirl-repacks.site/?s=",
        urlSpecial: "",
        title: "Fitgirl"
    },
    {
        url: "https://cs.rin.ru/forum/search.php?keywords=",
        urlSpecial: "&terms=any&author=&sc=1&sf=titleonly&sk=t&sd=d&sr=topics&st=0&ch=300&t=0&submit=Search",
        title: "CS.RIN.RU"
    },
    {
        url: "https://www.downloadha.com/?s=",
        urlSpecial: "",
        title: "DownloadHa"
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
    {
        url: "https://www.origin.com/usa/en-us/store/*/*",
        title: "ORIGIN"
    },
    {
        url: "https://www.xbox.com/en-us/games/store/*/*",
        title: "XBOX"
    },
    {
        url: "https://www.xbox.com/en-US/games/store/*/*",
        title: "XBOX"
    },
    {
        url: "https://store.epicgames.com/en-US/p/*",
        title: "EPIC"
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
            $("button.cart-button")[0].parentElement.parentElement.append(rigGOG(e.url + appName + e.urlSpecial, e.title))
        })
        break;
    case "STEAM":
        appName = document.getElementsByClassName("apphub_AppName")[0].textContent;
        $(".game_area_purchase:first").prepend('<div class="game_area_purchase_game demo_above_purchase"><h1>Download ' + appName + ' Cracked</h1><p class="game_purchase_discount_countdown">NOT DIRECT LINKS! These links lead to the search feature on specified websites</p><div class="game_purchase_action"><div class="game_purchase_action_bg"></div></div></div></div>')
        pirateLinks.forEach((e) => {
            $(".game_purchase_action_bg:first").append(rigSteam(e.url + appName + e.urlSpecial, e.title))
        })
        Array.prototype.forEach.call(document.getElementsByClassName("game_purchase_action"), function(e){e.style.overflow ="auto"})
        break;
    case "ORIGIN":
        var docURLOrigin = document.URL;
        var urlNameOrigin = docURLOrigin.split("/").pop();
        var realNameOrigin = urlNameOrigin.replaceAll('-', ' ')
        appName = realNameOrigin;
        var checkExistOrigin = setInterval(function() {
            if ($('.otkex-dropdown-cta').length) {
                console.log("Exists!");
                pirateLinks.forEach((e) => {
                    $(".otkex-dropdown-cta").append('<div class="otkbtn otkbtn-dropdown otkex-dropdown-wrapper" ><button class="otkbtn otkbtn-primary otkbtn-primary-btn" onClick="window.location.href=&#39' + e.url + appName + e.urlSpecial + '&#39;"> ' + e.title + ' </button> </div >');
                })
                clearInterval(checkExistOrigin);
            }
        }, 100); // check every 100ms
        break;
    case "XBOX":
        var docURLXbox = document.URL;
        var urlNameXbox = docURLXbox.split('/').slice(-2)[0];
        var realNameXbox = urlNameXbox.replaceAll('-', ' ')
        appName = realNameXbox;
        var checkExistXbox = setInterval(function() {
            if ($('.typography-module__xdsButtonText___10s5S').length) {
                if ($('.typography-module__xdsButtonText___10s5S')[0].innerText == "BUY") {
                    console.log("Buy Exists!");
                    pirateLinks.forEach((e) => {
                        $(".ProductActionsPanel-module__desktopProductActionsPanel___1MnpC").prepend('<button class="CommonButtonStyles-module__variableLineDesktopButton___PIOVW CommonButtonStyles-module__highContrastAwareButton___jdL2o Tooltip-module__tooltip___1X1IY Button-module__basicBorderRadius___1zJi9 Button-module__defaultBase___2r-eQ Button-module__buttonBase___1vCmd Button-module__typePrimary___2kI0T Button-module__sizeMedium___2Wg1O Button-module__overlayModeSolid___Nv0Hx data-m="{&quot;aN&quot;:&quot;ProductActionsPanel&quot;,&quot;bhvr&quot;:80,&quot;cN&quot;:&quot;Buy&quot;,&quot;cT&quot;:&quot;Button&quot;,&quot;id&quot;:&quot;BuyButton&quot;,&quot;pid&quot;:&quot;C08JXNK0VG5L&quot;,&quot;sku&quot;:&quot;0001&quot;,&quot;sN&quot;:1}" onClick="window.location.href=&#39' + e.url + appName + e.urlSpecial + '&#39;"><div class="typography-module__xdsButtonText___10s5S">' + e.title + '</div><div aria-hidden="true" class="typography-module__xdsCaption___2Ut3x"><span class="Price-module__boldText___34T2w Price-module__moreText___1FNlT AcquisitionButtons-module__listedPrice___3lkBo Price-module__listedDiscountPrice___2vqMe">Free</span></div></button>');
                    })
                    clearInterval(checkExistXbox);
                }
                if ($('.typography-module__xdsButtonText___10s5S')[0].innerText == "GET EA PLAY") {
                    console.log("EA Play Exists!");
                    pirateLinks.forEach((e) => {
                        $(".ProductActionsPanel-module__desktopProductActionsPanel___1MnpC").prepend('<button class="CommonButtonStyles-module__variableLineDesktopButton___PIOVW CommonButtonStyles-module__highContrastAwareButton___jdL2o Tooltip-module__tooltip___1X1IY Button-module__basicBorderRadius___1zJi9 Button-module__defaultBase___2r-eQ Button-module__buttonBase___1vCmd Button-module__typePrimary___2kI0T Button-module__sizeMedium___2Wg1O Button-module__overlayModeSolid___Nv0Hx data-m="{&quot;aN&quot;:&quot;ProductActionsPanel&quot;,&quot;bhvr&quot;:80,&quot;cN&quot;:&quot;Buy&quot;,&quot;cT&quot;:&quot;Button&quot;,&quot;id&quot;:&quot;BuyButton&quot;,&quot;pid&quot;:&quot;C08JXNK0VG5L&quot;,&quot;sku&quot;:&quot;0001&quot;,&quot;sN&quot;:1}" onClick="window.location.href=&#39' + e.url + appName + e.urlSpecial + '&#39;"><div class="typography-module__xdsButtonText___10s5S">' + e.title + '</div><div aria-hidden="true" class="typography-module__xdsCaption___2Ut3x"><span class="Price-module__boldText___34T2w Price-module__moreText___1FNlT AcquisitionButtons-module__listedPrice___3lkBo Price-module__listedDiscountPrice___2vqMe">Free</span></div></button>');
                    })
                    clearInterval(checkExistXbox);
                }
                if ($('.typography-module__xdsButtonText___10s5S')[0].innerText == "GET GAME PASS") {
                    console.log("Gamepass Exists!");
                    pirateLinks.forEach((e) => {
                        $(".ProductActionsPanel-module__desktopProductActionsPanel___1MnpC").prepend('<button class="CommonButtonStyles-module__variableLineDesktopButton___PIOVW CommonButtonStyles-module__highContrastAwareButton___jdL2o Tooltip-module__tooltip___1X1IY Button-module__basicBorderRadius___1zJi9 Button-module__defaultBase___2r-eQ Button-module__buttonBase___1vCmd Button-module__typePrimary___2kI0T Button-module__sizeMedium___2Wg1O Button-module__overlayModeSolid___Nv0Hx data-m="{&quot;aN&quot;:&quot;ProductActionsPanel&quot;,&quot;bhvr&quot;:80,&quot;cN&quot;:&quot;Buy&quot;,&quot;cT&quot;:&quot;Button&quot;,&quot;id&quot;:&quot;BuyButton&quot;,&quot;pid&quot;:&quot;C08JXNK0VG5L&quot;,&quot;sku&quot;:&quot;0001&quot;,&quot;sN&quot;:1}" onClick="window.location.href=&#39' + e.url + appName + e.urlSpecial + '&#39;"><div class="typography-module__xdsButtonText___10s5S">' + e.title + '</div><div aria-hidden="true" class="typography-module__xdsCaption___2Ut3x"><span class="Price-module__boldText___34T2w Price-module__moreText___1FNlT AcquisitionButtons-module__listedPrice___3lkBo Price-module__listedDiscountPrice___2vqMe">Free</span></div></button>');
                    })
                    clearInterval(checkExistXbox);
                }
            }
        }, 100); // check every 100ms
        break;
    case "EPIC":
        var docURLEpic = document.URL;
        var urlNameEpic = docURLEpic.split("/").pop();
        var realNameEpic = urlNameEpic.replaceAll('-', ' ')
        var buttoncss = "css-18ikw62"
        appName = realNameEpic;
        var checkExistEpic = setInterval(function() {
            if ($('.css-8en90x').length) {
                if ($('.css-8en90x')[0].innerText == "BUY NOW") {
                    console.log("Exists!");
                    buttoncss = document.getElementsByClassName("css-8en90x")[0].parentElement.className
                    pirateLinks.forEach((e) => {
                        $(".css-8en90x")[0].parentElement.parentElement.parentElement.append(document.createElement("div"));
                        $(".css-8en90x")[0].parentElement.parentElement.parentElement.append(rigEpic(e.url + appName + e.urlSpecial, e.title, buttoncss));
                    })
                    clearInterval(checkExistEpic);
                }
            }
        }, 100); // check every 100ms
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

function rigEpic(href, innerHTML, buttoncss) {
    let div = document.createElement("div");
    let button = document.createElement("a");
    let span = document.createElement("span");
    div.className = "css-15fg505"
    div.append(button)
    button.className = buttoncss
    button.href = href
    button.append(span)
    span.className = "css-8en90x"
    span.innerHTML = innerHTML;
    return div;
}
