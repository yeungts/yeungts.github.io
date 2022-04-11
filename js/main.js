// initialize
// hide other elements
$(window).ready(() => {
    $(".header-links").css("width", $(window).width() - 60);
});

// prevent other-links doesnt hide when less than 1220 px,
// and doesnt show when more than 1220px after using the hamburger menu
$(window).resize(() => {
    $(window).width() > 1220 ? $("#other-links").css("display", "flex") : $("#other-links").css("display", "none");
    $(".header-links").css("width", $(window).width() - 60);
    resizeResumeIFrame();
});



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