//Создание альпиниста

function moveClimberUp() {
  if (climberPosition < 4) {
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
}

function moveClimberDown() {
  if (climberPosition > 0) {
    document.querySelector("#climber").remove();

    const climber = document.createElement("img");
    climber.id = "climber";
    climber.style.width = "40px";
    climber.style.height = "70px";
    climber.src = "./img/climber.png";
    const getCheckPoints = document.getElementsByClassName("checkpoint");

    getCheckPoints[Number(climberPosition - 1)].append(climber);
    climberPosition--;
  }
}

function readyForSlalom() {
  const getClimber = document.querySelector("#climber");
  getClimber.style.transition = "transform 3s linear";
  getClimber.style.transform = "rotate3d(0, 1, 1, -75deg)";
}

function getFlagFunc() {
  const getFlag = document.querySelector(".flag");
  getFlag.style.visibility = "visible";
}

let climberPosition = 0;

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyX") {
    moveClimberUp();
    if (climberPosition == 4) {
      //   window.getComputedStyle(document.querySelector(".five"), ":before").getPropertyValue('visibility');
      setTimeout(getFlagFunc, 3000);
      setTimeout(readyForSlalom, 5000);
    }
  } else if (event.code == "KeyZ") {
    moveClimberDown();
  }
});
