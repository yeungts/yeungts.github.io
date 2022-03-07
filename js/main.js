// initialize
var background_audio = document.getElementById("background_audio");
var vol_changer = document.getElementById("vol_changer");



if (getCookie("volume") == "") {
    background_audio.volume = 0.25;
    vol_changer.innerHTML = "Vol(25%)";
    document.cookie = "volume=0.25";
} else {
    var volume = parseFloat(getCookie("volume"));
    console.log(volume);
    background_audio.volume = volume;
    vol_changer.innerHTML = "Vol(" + (volume*100) + "%)";
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
    switch (background_audio.volume) {
        case 0:
            background_audio.volume = 0.25;
            vol_changer.innerHTML = "Vol(25%)";
            break;
        case 0.25:
            background_audio.volume = 0.5;
            vol_changer.innerHTML = "Vol(50%)";
            break;
        case 0.5:
            background_audio.volume = 0.75;
            vol_changer.innerHTML = "Vol(75%)";
            break;
        case 0.75:
            background_audio.volume = 1;
            vol_changer.innerHTML = "Vol(100%)";
            break;
        case 1:
            background_audio.volume = 0;
            vol_changer.innerHTML = "Vol(Muted)";
            break;
    }
    document.cookie = "volume=" + background_audio.volume;
}

