/* ====== 畫面 ====== */
const scene = document.getElementById("scene");

/* ====== 音訊 ====== */
const audioDay = document.getElementById("audio-day");
const audioNight = document.getElementById("audio-night");

/* ====== 停止所有聲音 ====== */
function stopAllAudio() {
  audioDay.pause();
  audioNight.pause();
  audioDay.currentTime = 0;
  audioNight.currentTime = 0;
}

/* ====== 切換場景 ====== */
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

/* ====== ⏱ 計時器（進站即開始） ====== */
let seconds = 0;
const timer = document.getElementById("timer");

setInterval(() => {
  seconds++;

  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");

  timer.textContent = `${h}:${m}:${s}`;
}, 1000);

/* ====== 預設白天 ====== */
switchScene("day");
