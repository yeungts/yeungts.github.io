// initialize
var background_audio = document.getElementById("background_audio");
var vol_changer = document.getElementById("vol_changer");


if (background_audio != null) {
    if (getCookie("volume") == "") {
        background_audio.volume = 0.05;
        vol_changer.innerHTML = "Vol(5%)";
        document.cookie = "volume=0.05";
    } else {
        var volume = parseFloat(getCookie("volume"));
        background_audio.volume = volume;
        vol_changer.innerHTML = "Vol(" + (volume*100) + "%)";
    }
}



// other functions
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


function changeVolume() {
    if (background_audio.volume + 0.05 > 1) {
        background_audio.volume = 0;
        vol_changer.innerHTML = "Vol(Muted)";
    } else {
        background_audio.volume += 0.05;
        vol_changer.innerHTML = "Vol(" + (background_audio.volume*100).toFixed(0) + "%)";
    }
    document.cookie = "volume=" + background_audio.volume;
}

