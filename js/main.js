// initialize
var background_audio = document.getElementById("background-audio");
var vol_display = document.getElementById("vol-display");


if (background_audio != null) {
    background_audio.volume = 0.05;
    vol_display.innerHTML = "Vol(5%)";
}

function increaseVolume() {
    background_audio.volume + 0.05 > 1 ? background_audio.volume = 1 : background_audio.volume += 0.05;
    vol_display.innerHTML = "Vol(" + (background_audio.volume*100).toFixed(0) + "%)";
}

function reduceVolume() {
    if (0 > background_audio.volume - 0.05) {
        background_audio.volume = 0;
    } else {
        background_audio.volume -= 0.05;
    }

    background_audio.volume == 0 ? vol_display.innerHTML = "Vol(MUTED)" : vol_display.innerHTML = "Vol(" + (background_audio.volume*100).toFixed(0) + "%)";
}

function displayMainWelcome() {
    $("#main-welcome").css("display", "block");
    $("#about-me").css("display", "none");
    $("#resume").css("display", "none");
    $("#credits").css("display", "none");
}

function displayAboutMe() {
    $("#main-welcome").css("display", "none");
    $("#about-me").css("display", "block");
    $("#resume").css("display", "none");
    $("#credits").css("display", "none");
}

function displayResume() {
    $("#main-welcome").css("display", "none");
    $("#about-me").css("display", "none");
    $("#resume").css("display", "block");
    $("#credits").css("display", "none");
    resizeResumeIFrame();
}

function displayCredits() {
    $("#main-welcome").css("display", "none");
    $("#about-me").css("display", "none");
    $("#resume").css("display", "none");
    $("#credits").css("display", "block");
}

function displayMenu() {
    $("#other-links").css("display") == "none" ? $("#other-links").css("display", "flex") : $("#other-links").css("display", "none");
}

function resizeResumeIFrame() {
    if ($(window).width() < 900) {
        $("#resume-pdf").attr("width", ($(window).width() - 30) + "px");
        $("#resume-pdf").attr("height", ($(window).width() - 30) * 1.3 + "px");
    }
}

