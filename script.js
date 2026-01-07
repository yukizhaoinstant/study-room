const scene = document.getElementById("scene");
const audioDay = document.getElementById("audio-day");
const audioNight = document.getElementById("audio-night");

function stopAllAudio() {
  audioDay.pause();
  audioNight.pause();
  audioDay.currentTime = 0;
  audioNight.currentTime = 0;
}

function switchScene(type) {
  stopAllAudio();

  if (type === "day") {
    scene.style.backgroundImage = "url('day.jpg')";
    audioDay.play().catch(() => {});
  }

  if (type === "night") {
    scene.style.backgroundImage = "url('night.jpg')";
    audioNight.play().catch(() => {});
  }
}

// 預設進站是白天
switchScene("day");
