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
  scene.style.backgroundImage = `url(${scenes[type].image})`;

  audio.pause();                // ① 先停
  audio.src = scenes[type].sound;
  audio.load();                 // ② ⭐ 關鍵：強制重新載入
  audio.play().catch(() => {
    console.log("Audio blocked until user interaction");
  });
}
