const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    jump();
  }
});

function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");
    setTimeout(() => {
      dino.classList.remove("jump");
    }, 400);
  }
}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if (cactusLeft < 90 && cactusLeft > 50 && dinoTop >= 140) {
    alert("Game Over!");
  }
}, 10);
