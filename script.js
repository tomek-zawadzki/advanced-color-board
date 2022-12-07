const box = document.querySelector(".box");
const speedBtns = document.querySelectorAll('[data-settings="speed"]');
const colorBtns = document.querySelectorAll('[data-settings="color"]');
const slider = document.querySelector("#slider");
const sliderInfo = document.querySelector("slider-info");

const squares = 546;
let sliderValue = 70;
let range = 360;

const createSquare = () => {
  for (let i = 0; i < squares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    box.appendChild(square);
  }
};

createSquare();
