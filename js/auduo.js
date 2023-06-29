sound = "on"
let muted = false;

soundBtn.onclick = function () {
   if (sound == "on") {
      soundBtn.src = "./images/mute_sound.png"
      sound = "off";
      audioPlayer.pause();
      muted = true;
   } else {
      soundBtn.src = "./images/sound_on.png";
      sound = "on";
      audioPlayer.play();
      muted = false;
   }
}