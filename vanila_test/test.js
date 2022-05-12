const body = document.querySelector("body");
let text = document.createElement("h2");
const colors = ["red", "blue", "purple", "black"];
text.innerText = "Title";
body.appendChild(text);
let title = text;
function colorPick() {
  let colorPicker = colors[Math.floor(Math.random() * colors.length)];
  title.style.color = colorPicker;
}

const superEventListener = {
  hoverEvent: function () {
    title.innerText = "the mouse over is here";
    colorPick();
  },
  leaveEvent: function () {
    title.innerText = "correct";
    colorPick();
  },
  resizeEvent: function () {
    title.innerText = "bye bye";
    colorPick();
  },
  clickEvent: function () {
    title.innerText = "click here";
    colorPick();
  }
};

title.addEventListener("mouseenter", superEventListener.hoverEvent);
title.addEventListener("mouseleave", superEventListener.leaveEvent);
window.addEventListener("resize", superEventListener.resizeEvent);
window.addEventListener("contextmenu", superEventListener.clickEvent);
