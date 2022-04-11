// initialize
var background_audio = document.getElementById("background-audio");
var vol_display = document.getElementById("vol-display");


// hide other elements
$(window).ready(() => {
    $(".header-links").css("width", $(window).width() - 60);
    background_audio.play();
});

// prevent other-links doesnt hide when less than 1220 px,
// and doesnt show when more than 1220px after using the hamburger menu
$(window).resize(() => {
    $(window).width() > 1220 ? $("#other-links").css("display", "flex") : $("#other-links").css("display", "none");
    $(".header-links").css("width", $(window).width() - 60);
    resizeResumeIFrame();
});


if (background_audio != null) {
    background_audio.volume = 0;
    vol_display.innerHTML = "Vol(MUTED)";
}

function increaseVolume() {
    background_audio.volume + 0.05 > 1 ? background_audio.volume = 1 : background_audio.volume += 0.05;
    vol_display.innerHTML = "Vol(" + (background_audio.volume * 100).toFixed(0) + "%)";
}

function reduceVolume() {
    if (0 > background_audio.volume - 0.05) {
        background_audio.volume = 0;
    } else {
        background_audio.volume -= 0.05;
    }

    background_audio.volume == 0 ? vol_display.innerHTML = "Vol(MUTED)" : vol_display.innerHTML = "Vol(" + (background_audio.volume * 100).toFixed(0) + "%)";
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

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});