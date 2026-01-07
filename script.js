function changeScene(type) {
  const scene = document.getElementById("scene");

  const scenes = {
    day: "assets/images/room_day.jpg",
    night: "assets/images/room_night.jpg",
    rain: "assets/images/rain_window.jpg"
  };

  scene.style.backgroundImage = `url(${scenes[type]})`;
}
