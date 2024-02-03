
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const mainPage = document.body;
const colorSpan = document.querySelector(".color");
const changeColorButton = document.querySelector('.change-color');

changeColorButton.addEventListener("click", () => {
  const randomColorChange = getRandomHexColor();

  mainPage.style.backgroundColor = randomColorChange;
  colorSpan.textContent = randomColorChange;
});

