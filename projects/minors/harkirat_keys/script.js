
let box = document.querySelector(".box");
let container = document.querySelector(".container");
let boxPositionX = 0;
let boxPositionY = 0;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    boxPositionY += 10;
  } else if (e.key === "ArrowUp") {
    boxPositionY -= 10;
  } else if (e.key === "ArrowRight") {
    boxPositionX += 10;
  } else if (e.key === "ArrowLeft") {
    boxPositionX -= 10;
  }
  else if(e.key === " "){
    box.style.backgroundColor = "red"
  }
  box.style.left = boxPositionX + "px";
  box.style.top = boxPositionY + "px";
});

