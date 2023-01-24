//Создание альпиниста
function moveClimber() {
  if (climberPosition < 4) {
    document.querySelector("#climber").remove();
  }
  const climber = document.createElement("img");
  climber.id = "climber";
  climber.style.width = "40px";
  climber.style.height = "70px";
  climber.src = "./img/climber.png";

  const getCheckPoints = document.getElementsByClassName("checkpoint");
  getCheckPoints[Number(climberPosition + 1)].append(climber);
  if (climberPosition < 6) {
    climberPosition++;
  }
}

function getFlagFunc() {
  const getFlag = document.querySelector(".flag");
  getFlag.style.visibility = "visible";
}

let climberPosition = 0;

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyX") {
    moveClimber();
    if (climberPosition >= 4) {
      //   window.getComputedStyle(document.querySelector(".five"), ":before").getPropertyValue('visibility');
      setTimeout(getFlagFunc, 3000);
    }
  } else if (event.code == "KeyZ") {
    console.log("z key is pressed");
  }
});
