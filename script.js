const scene = document.getElementById("scene");
const audio = document.getElementById("audio");

const scenes = {
  day: {
    image: "day.jpg",
    sound: "day.mp3"
  },
  night: {
    image: "night.jpg",
    sound: "night.mp3"
  }
};

function switchScene(type) {
  // 1️⃣ 切背景（所有平台都沒問題）
  scene.style.backgroundImage = `url(${scenes[type].image})`;

  // 2️⃣ 停止舊聲音
  audio.pause();

  // 3️⃣ 換音檔
  audio.src = scenes[type].sound;

  // 4️⃣ 重置播放位置（關鍵）
  audio.currentTime = 0;

  // 5️⃣ 強制載入（給電腦瀏覽器）
  audio.load();

  // 6️⃣ 播放（在「按鈕點擊」事件中 → iOS 允許）
  audio.play().catch(err => {
    console.log("Audio play blocked:", err);
  });
}
