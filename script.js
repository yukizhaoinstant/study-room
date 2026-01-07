function changeScene(type) {
  const scene = document.getElementById("scene");

  const scenes = {
    day: "https://github.com/yukizhaoinstant/zixishi/commit/75f7c7c2e022a8c22dcb09c04af61728277a6529#diff-ddc231cd169c9679b4f7c9b1ffc0fa2a814d57fe1d6f22853674286172d5fea1",
    night: "assets/images/room_night.jpg",
    rain: "assets/images/rain_window.jpg"
  };

  scene.style.backgroundImage = `url(${scenes[type]})`;
}
const audio = document.getElementById("audio");

function playSound(type) {
  const sounds = {
    rain: "assets/sounds/rain.mp3",
    cafe: "assets/sounds/cafe.mp3",
    fire: "assets/sounds/fire.mp3"
  };

  audio.src = sounds[type];
  audio.play();
}

function stopSound() {
  audio.pause();
}
function changeScene(type) {
  const scene = document.getElementById("scene");

  const scenes = {
    day: "assets/images/room_day.jpg",
    night: "assets/images/room_night.jpg",
    rain: "assets/images/rain_window.jpg",
    library: "assets/images/library.jpg"
  };

  scene.style.backgroundImage = `url(${scenes[type]})`;
}
