

// first div and its inputs
const hpIndex = document.querySelector("#hpIndex");
const go = document.querySelector("#go");
const layer = document.querySelector("#layer");
const classic = document.querySelector("#classic");
const parent = document.querySelector("#parentNodeDiv");
const nameOneInput = document.querySelector("#nameOneInput");
const nameTwoInput = document.querySelector("#nameTwoInput");

// name and hp display
const plainswalkerName1 = document.querySelector("#plainswalkerName1");
const plainswalkerName2 = document.querySelector("#plainswalkerName2");
const p1LifeIndicator = document.querySelector("#p1Life");
const p2LifeIndicator = document.querySelector("#p2Life");

// math buttons
const minusFiveP1 = document.querySelector("#minusFiveP1");
const minusOneP1 = document.querySelector("#minusOneP1");
const plusFiveP1 = document.querySelector("#plusFiveP1");
const plusOneP1 = document.querySelector("#plusOneP1");
const minusFiveP2 = document.querySelector("#minusFiveP2");
const minusOneP2 = document.querySelector("#minusOneP2");
const plusFiveP2 = document.querySelector("#plusFiveP2");
const plusOneP2 = document.querySelector("#plusOneP2");

// global buttons
const reset = document.querySelector("#resetButton");
const fullScreen = document.querySelector("#fullScreen");

// variation display
const currentVarP1 = document.querySelector("#currentVarP1");
const currentVarP2 = document.querySelector("#currentVarP2");
const body = document.querySelector("body");


let p1LifeLogic = 0
let p2LifeLogic = 0
let p1CurrentVarLogic = 0
let p2CurrentVarLogic = 0
let initialHp = NaN
let turnNumber = 0
let isFullScreenOn = false
let turn = false /* false is the P1 turn, and true in the P2 */

// players names



// initial select functions
hpIndex.addEventListener('change', function(){
    initialHp = parseInt(this.value);
})

go.addEventListener('click', function(){
    parentNodeDiv.removeChild(layer);
    p1LifeLogic = initialHp;
    p2LifeLogic = initialHp;
    p1LifeIndicator.textContent = p1LifeLogic;
    p2LifeIndicator.textContent = p2LifeLogic;
    plainswalkerName1.innerHTML = nameOneInput.value;
    plainswalkerName2.innerHTML = nameTwoInput.value;
})

classic.addEventListener('click', function () {
    parentNodeDiv.removeChild(layer);
    p1LifeLogic = 20;
    p2LifeLogic = 20;
    p1LifeIndicator.textContent = p1LifeLogic;
    p2LifeIndicator.textContent = p2LifeLogic;
    plainswalkerName1.innerHTML = nameOneInput.value;
    plainswalkerName2.innerHTML = nameTwoInput.value;
})





//button "+-" functions
//buttons player1
minusFiveP1.addEventListener('click', function(){
    p1LifeLogic = p1LifeLogic - 5;
    p1LifeIndicator.textContent = p1LifeLogic;
})

minusOneP1.addEventListener('click', function(){
    p1LifeLogic = p1LifeLogic - 1;
    p1LifeIndicator.textContent = p1LifeLogic;
})

plusFiveP1.addEventListener('click', function(){
    p1LifeLogic = p1LifeLogic + 5;
    p1LifeIndicator.textContent = p1LifeLogic;
})

plusOneP1.addEventListener('click', function(){
    p1LifeLogic = p1LifeLogic + 1;
    p1LifeIndicator.textContent = p1LifeLogic;
})


// buttons player2
minusFiveP2.addEventListener('click', function(){
    p2LifeLogic = p2LifeLogic - 5;
    p2LifeIndicator.textContent = p2LifeLogic;
})

minusOneP2.addEventListener('click', function(){
    p2LifeLogic = p2LifeLogic - 1;
    p2LifeIndicator.textContent = p2LifeLogic;
})

plusFiveP2.addEventListener('click', function(){
    p2LifeLogic = p2LifeLogic + 5;
    p2LifeIndicator.textContent = p2LifeLogic;
})

plusOneP2.addEventListener('click', function(){
    p2LifeLogic = p2LifeLogic + 1;
    p2LifeIndicator.textContent = p2LifeLogic;
})

// reset button
reset.addEventListener('click', function(){
    parentNodeDiv.appendChild(layer);
})

// current variation display




//Fullscreen button




/* function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { -- Safari --
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { -- IE11 --
    elem.msRequestFullscreen();
  }
} */

