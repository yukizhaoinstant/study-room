const scene = document.getElementById("scene");
const audioDay = document.getElementById("audio-day");
const audioNight = document.getElementById("audio-night");

// iOS 必須先解鎖 audio
let unlocked = false;

function unlockAudio() {
  if (unlocked) return;

  [audioDay, audioNight].forEach(audio => {
    audio.muted = true;
    audio.play().then(() => {
      audio.pause();
      audio.currentTime = 0;
      audio.muted = false;
    }).catch(() => {});
  });

  unlocked = true;
}

function stopAll() {
  audioDay.pause();
  audioDay.currentTime = 0;
  audioNight.pause();
  audioNight.currentTime = 0;
}

function switchScene(type) {
  unlockAudio();
  stopAll();

  if (type === "day") {
    scene.style.backgroundImage = 'url("day.jpg")';
    audioDay.play();
  }

  if (type === "night") {
    scene.style.backgroundImage = 'url("night.jpg")';
    audioNight.play();
  }
}
// ===== 計時器（確保 DOM 載入後才開始） =====

let seconds = 0;

document.addEventListener("DOMContentLoaded", () => {
  const timerEl = document.getElementById("timer");

  function updateTimer() {
    seconds++;

    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");

    timerEl.textContent = `${h}:${m}:${s}`;
  }

  // ⭐ 一進網站就開始
  setInterval(updateTimer, 1000);
});
