// ==UserScript==
// @name         EdgenTweaks
// @namespace    https://github.com/CrazyMan390/Userscripts
// @version      3.0.0
// @description  Adds tweaks to edgenuity
// @updateURL  https://github.com/CrazyMan390/Userscripts/raw/master/EdgenTweaks%202024/EdgenTweaks.js
// @downloadURL  https://github.com/CrazyMan390/Userscripts/raw/master/EdgenTweaks%202024/EdgenTweaks.js
// @author       CrazyMan390
// @match        *://*.core.learn.edgenuity.com/*
// @grant        none
// ==/UserScript==

setTimeout( //2 sec delay to load before trying to run
    function main() {

//!!!!!!!!!!!!!!!!!!!!!!! BEGIN TWEAKS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Auto Advance
function autoadvance() {
            if (document.getElementById("activity-title").innerText == "Quiz") {
            } else {
                try {document.getElementsByClassName("footnav goRight")[0].click()} catch (TypeError) {}
                try {window.frames[0].API.FrameChain.nextFrame()} catch (TypeError) {}
            }
}
// Skip intro
function skipIntro() {
    try {
        window.frames[0].document.getElementById("invis-o-div").remove()
    } catch (TypeError) {}
}
// Guess Practice
function GuessPractice() {
            try { // document.getElementById("activity-title") may error
                if (document.getElementById("activity-title").innerText == "Assignment") {
                    if (!document.getElementById("guessassignments").checked) {
                        return // End the method call so we dont guess
                    }
                }
                if (["Instruction","Warm-Up","Summary","Lecture","Assignment","Practice","Virtual Lab","Assignment: Reflect on the Lab","Part 1","Part 2","Part 3","Part 4","Unit Wrap-Up","Career Connection"].includes(document.getElementById("activity-title").innerText)) {
                    try {window.options = window.frames[0].frames[0].document.getElementsByClassName("answer-choice-button");
                    window.options[Math.floor(Math.random() * window.options.length)].click();} catch (TypeError) {}
                    try {window.frames[0].API.Frame.check()} catch (TypeError) {} // This has to be seporate from the option clicker in case it's a text only practice
                }
            }
            catch (TypeError) {}
}
// Unhide Right Column
function showColumn() {
            try {window.frames[0].frames[0].document.getElementsByClassName("right-column")[0].children[0].style.display = "block"} catch (TypeError) {}
            try {window.frames[0].frames[0].document.getElementsByClassName("left-column")[0].children[0].style.display = "block"} catch (TypeError) {}
}
// Auto complete vocab
function vocabCompleter() {
            if (document.getElementById("activity-title").innerText == "Vocabulary"){
                try {window.frames[0].document.getElementsByClassName("word-textbox")[0].value = window.frames[0].document.getElementsByClassName("word-background")[0].value} catch(TypeError) {}
                try {for (var x of window.frames[0].document.getElementsByClassName("playbutton vocab-play")) {
                    x.click()
                }} catch (TypeError) {}
                try {window.frames[0].document.getElementsByClassName("uibtn uibtn-blue uibtn-arrow-next")[0].click()} catch(TypeError) {}
            }
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
window.masterloop = setInterval(loop, 2000);
}, 2000);
