// initialize
var background_audio = document.getElementById("background-audio");
var vol_changer = document.getElementById("vol-changer");


if (background_audio != null) {
    background_audio.volume = 0.05;
    vol_changer.innerHTML = "Vol(5%)";
}




function changeVolume() {
    if (background_audio.volume + 0.05 > 1) {
        background_audio.volume = 0;
        vol_changer.innerHTML = "Vol(Muted)";
    } else {
        background_audio.volume += 0.05;
        vol_changer.innerHTML = "Vol(" + (background_audio.volume*100).toFixed(0) + "%)";
    }
}

