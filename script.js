const scene = document.getElementById("scene");
const audio = document.getElementById("audio");

const scenes = {
  day: {
    image: "assets/images/day.jpg",
    sound: "assets/sounds/day.mp3"
  },
  night: {
    image: "assets/images/night.jpg",
    sound: "assets/sounds/night.mp3"
  }
};

function switchScene(type) {
  scene.style.backgroundImage = `url(${scenes[type].image})`;
  audio.src = scenes[type].sound;
  audio.play();
}

// 預設進站是白天
switchScene("day");
