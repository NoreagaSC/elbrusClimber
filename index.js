//Создание альпиниста
function moveClimber() {
  document.querySelector("#climber").remove();
  const climber = document.createElement("img");
  climber.id = "climber";
  climber.style.width = "40px";
  climber.style.height = "70px";
  climber.src = "./img/climber.png";

  const getCheckPoints = document.getElementsByClassName("checkpoint");
  getCheckPoints[Number(climberPosition + 1)].append(climber);
  climberPosition++;
}

let climberPosition = 0;

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyX") {
    console.log("x key is pressed");
    moveClimber();
  } else if (event.code == "KeyZ") {
    console.log("z key is pressed");
  }
});
