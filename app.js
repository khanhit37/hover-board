var container = document.querySelector(".container");

function randomColor() {
  var charColor = "0123456789ABCDEF";
  var color = "#";

  for (let i = 0; i < 6; i++) {
    color += charColor[Math.floor(Math.random() * charColor.length)];
  }
  return color;
}

for (let i = 0; i < 200; i++) {
  var square = document.createElement("div");

  square.classList.add("square");
  container.appendChild(square);
  square.addEventListener("mouseenter", function (e) {
    let randomColor1 = randomColor();
    let el = e.currentTarget;
    el.style.backgroundColor = randomColor();
    el.style.boxShadow = `0 0 10px ${randomColor1}, 0 0 100px ${randomColor1}`;
  });
  square.addEventListener("mouseleave", function (e) {
    let el = e.currentTarget;
    el.style.backgroundColor = "#303030";
    el.style.boxShadow = "0 0 2px #000";
  });
}
