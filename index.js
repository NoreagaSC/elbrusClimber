//Создание альпиниста
const climber = document.createElement("img");
climber.id = "climb";
climber.style.width = "40px";
climber.style.height = "70px";
climber.src = "./img/climber.png";

const getCheckPoints = document.getElementsByClassName("checkpoint");
getCheckPoints[1].append(climber);

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyX") {
    console.log("x key is pressed");
  } else if (event.code == "KeyZ") {
    console.log("z key is pressed");
  }
});
