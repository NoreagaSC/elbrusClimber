const getClimber = document.querySelector("#climber");
const getFlag = document.querySelectorAll(".flag");
let climberPosition = 0;
//Создание альпиниста
function forward() {
  if (climberPosition < 9) {
    document.querySelector("#climber").remove();

    const climber = document.createElement("img");
    climber.id = "climber";
    climber.style.width = "40px";
    climber.style.height = "70px";
    climber.src = "./img/climber.png";
    const getCheckPoints = document.getElementsByClassName("checkpoint");

    if (climberPosition == 4 || climberPosition == 5) {
      //   const getClimber = document.querySelector("#climber");
      climber.style.transform = "rotate3d(0, 1, 1, -75deg)";
    }
    getCheckPoints[Number(climberPosition + 1)].append(climber);
    climberPosition++;
  }
}

function backward() {
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
  if (climberPosition === 4) {
    getFlag[0].style.visibility = "visible";
  }
  if (climberPosition === 9) {
    getFlag[1].style.visibility = "visible";
  }
}

function getMessage1() {
  const getText1 = document.querySelector(".text1");
  getText1.style.visibility = "visible";
}

function getMessage2() {
  const getText2 = document.querySelector(".text2");
  getText2.style.visibility = "visible";
}

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyX") {
    forward();
    if (climberPosition == 4 || climberPosition == 9) {
      setTimeout(getFlagFunc, 1000);
      if (climberPosition == 4) {
        getMessage1();
        setTimeout(readyForSlalom, 500);
      }
    }
    if (climberPosition == 9) {
      getMessage2();
    }
  } else if (event.code == "KeyZ") {
    backward();
  }
});
