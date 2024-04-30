// ==UserScript==
// @name         EdgenTweaks
// @namespace    https://github.com/CrazyMan390/Userscripts
// @version      3.1.0
// @description  Adds tweaks to edgenuity
// @updateURL  https://github.com/CrazyMan390/Userscripts/raw/master/EdgenTweaks%202024/EdgenTweaks.js
// @downloadURL  https://github.com/CrazyMan390/Userscripts/raw/master/EdgenTweaks%202024/EdgenTweaks.js
// @author       CrazyMan390
// @match        *://*.core.learn.edgenuity.com/*
// @grant        none
// ==/UserScript==

setTimeout( //10 sec delay to load before trying to run
    function main() {

//!!!!!!!!!!!!!!!!!!!!!!! BEGIN TWEAKS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function autoadvance() {
    try {
            if (["Quiz","Unit Test"].includes(document.getElementById("activity-title").innerText)) {
                if (document.getElementsByClassName("timeRemaining")[0]) {
                    var time = document.getElementsByClassName("timeRemaining")[0].innerhtml
                    var timeLeft = time.split(':')
                    if (+timeLeft[0] >= 50) {
                              try {document.getElementById("autoSubmit").mouseover()} catch (TypeError) {}
                              try {document.getElementById("autoSubmit").mousedown()} catch (TypeError) {}
                              try {document.getElementById("autoSubmit").click()} catch (TypeError) {}
                              try {document.getElementById("autoSubmit").mouseup()} catch (TypeError) {}
                              try {document.getElementsByClassName("uibtn uibtn-blue uibtn-med")[0].mouseover()} catch (TypeError) {}
                              try {document.getElementsByClassName("uibtn uibtn-blue uibtn-med")[0].mousedown()} catch (TypeError) {}
                              try {document.getElementsByClassName("uibtn uibtn-blue uibtn-med")[0].click()} catch (TypeError) {}
                              try {document.getElementsByClassName("uibtn uibtn-blue uibtn-med")[0].mouseup()} catch (TypeError) {}
                    }
                }
            } else {
               try {document.getElementsByClassName("footnav goRight")[0].mouseover()} catch (TypeError) {}
               try {document.getElementsByClassName("footnav goRight")[0].mousedown()} catch (TypeError) {}
               try {document.getElementsByClassName("footnav goRight")[0].click()} catch (TypeError) {}
               try {document.getElementsByClassName("footnav goRight")[0].mouseup()} catch (TypeError) {}
               try {window.frames[0].API.FrameChain.nextFrame()} catch (TypeError) {}
            }
        } catch (TypeError) {}
}

function skipIntro() {
    try {
        window.frames[0].document.getElementById("invis-o-div").remove()
    } catch (TypeError) {}
}

function GuessPractice() {
            try {
                if (["Instruction","Warm-Up","Summary","Lecture","Practice","Virtual Lab","Assignment: Reflect on the Lab","Part 1","Part 2","Part 3","Part 4","Unit Wrap-Up","Career Connection"].includes(document.getElementById("activity-title").innerText)) {
                    try {window.options = window.frames[0].frames[0].document.getElementsByClassName("answer-choice-button");
                    window.options[Math.floor(Math.random() * window.options.length)].click();} catch (TypeError) {}
                    try {window.frames[0].API.Frame.check()} catch (TypeError) {} // This has to be seporate from the option clicker in case it's a text only practice
                }
            }
            catch (TypeError) {}
}

function showColumn() {
            try {window.frames[0].frames[0].document.getElementsByClassName("right-column")[0].children[0].style.display = "block"} catch (TypeError) {}
            try {window.frames[0].frames[0].document.getElementsByClassName("left-column")[0].children[0].style.display = "block"} catch (TypeError) {}
}

function vocabCompleter() {
        try {
             if (document.getElementById("activity-title").innerText == "Vocabulary"){
                try {window.frames[0].document.getElementsByClassName("word-textbox")[0].value = window.frames[0].document.getElementsByClassName("word-background")[0].value} catch(TypeError) {}
                try {for (var x of window.frames[0].document.getElementsByClassName("playbutton vocab-play")) {
                    x.click()
                }} catch (TypeError) {}
                try {window.frames[0].document.getElementsByClassName("uibtn uibtn-blue uibtn-arrow-next")[0].click()} catch(TypeError) {}
            }
  }
  catch (TypeError) {}
}
//!!!!!!!!!!!!!!!!!!!!! END TWEAKS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//!!!!!! MASTERLOOP !!!!!!!!

function loop() {
    vocabCompleter()
    autoadvance()
    skipIntro()
    GuessPractice()
    showColumn()
}
window.masterloop = setInterval(loop, 6000);
}, 10000);
