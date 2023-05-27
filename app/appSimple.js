

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

// name display
const yourTurnIndicatorP1 = document.querySelector("#yourTurnIndicatorP1");
const yourTurnIndicatorP2 = document.querySelector("#yourTurnIndicatorP2");

// math buttons
const minusFiveP1 = document.querySelector("#minusFiveP1");
const minusOneP1 = document.querySelector("#minusOneP1");
const plusFiveP1 = document.querySelector("#plusFiveP1");
const plusOneP1 = document.querySelector("#plusOneP1");
const minusFiveP2 = document.querySelector("#minusFiveP2");
const minusOneP2 = document.querySelector("#minusOneP2");
const plusFiveP2 = document.querySelector("#plusFiveP2");
const plusOneP2 = document.querySelector("#plusOneP2");

// pass buttons
const passPlayerOne = document.querySelector("#passPlayerOne");
const passPlayerTwo = document.querySelector("#passPlayerTwo");

// global buttons
const reset = document.querySelector("#resetButton");
const fullScreen = document.querySelector("#fullScreen");

// variation display
const currentVarP1 = document.querySelector("#currentVarP1");
const currentVarP2 = document.querySelector("#currentVarP2");
const possiblePlusP1 = document.querySelector("#possiblePlusP1");
const possiblePlusP2 = document.querySelector("#possiblePlusP2");


// report bar p1
const p1hpVar1stBlkUp = document.querySelector("#p1hpVar1stBlkUp");
const p1hpVar1stBlkDown = document.querySelector("#p1hpVar1stBlkDown");
const p1hpVar2stBlkUp = document.querySelector("#p1hpVar2stBlkUp");
const p1hpVar2stBlkDown = document.querySelector("#p1hpVar2stBlkDown");
const p1hpVar3stBlkUp = document.querySelector("#p1hpVar3stBlkUp"); 
const p1hpVar3stBlkDown = document.querySelector("#p1hpVar3stBlkDown"); 
const p1hpVar4stBlkUp = document.querySelector("#p1hpVar4stBlkUp"); 
const p1hpVar4stBlkDown = document.querySelector("#p1hpVar4stBlkDown"); 
const p1hpVar5stBlkUp = document.querySelector("#p1hpVar5stBlkUp"); 
const p1hpVar5stBlkDown = document.querySelector("#p1hpVar5stBlkDown"); 
// report bar p2
const p2hpVar1stBlkUp = document.querySelector("#p2hpVar1stBlkUp");
const p2hpVar1stBlkDown = document.querySelector("#p2hpVar1stBlkDown");
const p2hpVar2stBlkUp = document.querySelector("#p2hpVar2stBlkUp");
const p2hpVar2stBlkDown = document.querySelector("#p2hpVar2stBlkDown");
const p2hpVar3stBlkUp = document.querySelector("#p2hpVar3stBlkUp"); 
const p2hpVar3stBlkDown = document.querySelector("#p2hpVar3stBlkDown"); 
const p2hpVar4stBlkUp = document.querySelector("#p2hpVar4stBlkUp"); 
const p2hpVar4stBlkDown = document.querySelector("#p2hpVar4stBlkDown"); 
const p2hpVar5stBlkUp = document.querySelector("#p2hpVar5stBlkUp"); 
const p2hpVar5stBlkDown = document.querySelector("#p2hpVar5stBlkDown"); 


//body
const body = document.querySelector("body");







// Variables
let p1LifeLogic = 0
let p2LifeLogic = 0

let p1CurrentVarLogic = 0
let p2CurrentVarLogic = 0
let plusDisplay = "+"

let initialHp = NaN
let turnNumber = 0
let isFullScreenOn = false






nameOneInput

// initial select functions
hpIndex.addEventListener('change', function(){
    initialHp = parseInt(this.value);
    if (initialHp == NaN) {
        go.disabled = true
    }
})

go.addEventListener('click', function(){
    parentNodeDiv.removeChild(layer);
    p1LifeLogic = initialHp;
    p2LifeLogic = initialHp;
    p1LifeIndicator.textContent = p1LifeLogic;
    p2LifeIndicator.textContent = p2LifeLogic;

    // player names
    plainswalkerName1.innerHTML = nameOneInput.value;
    if (nameOneInput.value == '') {
        plainswalkerName1.innerHTML = "Player One"
    }


    // disable p2 button
    passPlayerTwo.disabled = true
})

classic.addEventListener('click', function () {
    parentNodeDiv.removeChild(layer);
    p1LifeLogic = 20;
    p2LifeLogic = 20;
    p1LifeIndicator.textContent = p1LifeLogic;
    p2LifeIndicator.textContent = p2LifeLogic;

    // players names
    plainswalkerName1.innerHTML = nameOneInput.value;
    if (nameOneInput.value == '') {
        plainswalkerName1.innerHTML = "Player One"
    }

    // disable p2 button
    passPlayerTwo.disabled = true
})





// "+-" button's functions
// buttons player1
minusFiveP1.addEventListener('click', function(){
    p1LifeLogic = p1LifeLogic - 5;
    p1LifeIndicator.textContent = p1LifeLogic;
    p1CurrentVarLogic = p1CurrentVarLogic - 5;
    currentVarP1.innerHTML = p1CurrentVarLogic;
})

minusOneP1.addEventListener('click', function(){
    p1LifeLogic = p1LifeLogic - 1;
    p1LifeIndicator.textContent = p1LifeLogic;
    p1CurrentVarLogic = p1CurrentVarLogic - 1;
    currentVarP1.innerHTML = p1CurrentVarLogic;
})

plusFiveP1.addEventListener('click', function(){
    p1LifeLogic = p1LifeLogic + 5;
    p1LifeIndicator.textContent = p1LifeLogic;
    p1CurrentVarLogic = p1CurrentVarLogic + 5;
    currentVarP1.innerHTML = p1CurrentVarLogic;
})

plusOneP1.addEventListener('click', function(){
    p1LifeLogic = p1LifeLogic + 1;
    p1LifeIndicator.textContent = p1LifeLogic;
    p1CurrentVarLogic = p1CurrentVarLogic + 1;
    currentVarP1.innerHTML = p1CurrentVarLogic;
})


// buttons player2
minusFiveP2.addEventListener('click', function(){
    p2LifeLogic = p2LifeLogic - 5;
    p2LifeIndicator.textContent = p2LifeLogic;
    p2CurrentVarLogic = p2CurrentVarLogic - 5;
    currentVarP2.innerHTML = p2CurrentVarLogic;
})

minusOneP2.addEventListener('click', function(){
    p2LifeLogic = p2LifeLogic - 1;
    p2LifeIndicator.textContent = p2LifeLogic;
    p2CurrentVarLogic = p2CurrentVarLogic - 1;
    currentVarP2.innerHTML = p2CurrentVarLogic;
})

plusFiveP2.addEventListener('click', function(){
    p2LifeLogic = p2LifeLogic + 5;
    p2LifeIndicator.textContent = p2LifeLogic;
    p2CurrentVarLogic = p2CurrentVarLogic + 5;
    currentVarP2.innerHTML = p2CurrentVarLogic;
})

plusOneP2.addEventListener('click', function(){
    p2LifeLogic = p2LifeLogic + 1;
    p2LifeIndicator.textContent = p2LifeLogic;
    p2CurrentVarLogic = p2CurrentVarLogic + 1;
    currentVarP2.innerHTML = p2CurrentVarLogic;
})






// PASS func
passPlayerOne.addEventListener('click', function(){
    passPlayerOne.disabled = true
    passPlayerTwo.disabled = false
    
    // block 4 player1
    p1hpVar5stBlkUp.innerHTML = p1hpVar4stBlkUp.innerHTML
    p1hpVar5stBlkDown.innerHTML = p1hpVar4stBlkDown.innerHTML
    // block 4 player 2
    p2hpVar5stBlkUp.innerHTML = p2hpVar4stBlkUp.innerHTML
    p2hpVar5stBlkDown.innerHTML = p2hpVar4stBlkDown.innerHTML

    // block 4 player1
    p1hpVar4stBlkUp.innerHTML = p1hpVar3stBlkUp.innerHTML
    p1hpVar4stBlkDown.innerHTML = p1hpVar3stBlkDown.innerHTML
    // block 4 player 2
    p2hpVar4stBlkUp.innerHTML = p2hpVar3stBlkUp.innerHTML
    p2hpVar4stBlkDown.innerHTML = p2hpVar3stBlkDown.innerHTML

    // block 3 player1
    p1hpVar3stBlkUp.innerHTML = p1hpVar2stBlkUp.innerHTML
    p1hpVar3stBlkDown.innerHTML = p1hpVar2stBlkDown.innerHTML
    // block 3 player 2
    p2hpVar3stBlkUp.innerHTML = p2hpVar2stBlkUp.innerHTML
    p2hpVar3stBlkDown.innerHTML = p2hpVar2stBlkDown.innerHTML

    // block 2 player1
    p1hpVar2stBlkUp.innerHTML = p1hpVar1stBlkUp.innerHTML
    p1hpVar2stBlkDown.innerHTML = p1hpVar1stBlkDown.innerHTML
    // block 2 player2
    p2hpVar2stBlkUp.innerHTML = p2hpVar1stBlkUp.innerHTML
    p2hpVar2stBlkDown.innerHTML = p2hpVar1stBlkDown.innerHTML

    // block 1 player1
    p1hpVar1stBlkUp.innerHTML = currentVarP1.innerHTML
    p1hpVar1stBlkDown.innerHTML = currentVarP2.innerHTML
    // block 1 player2
    p2hpVar1stBlkUp.innerHTML = currentVarP2.innerHTML
    p2hpVar1stBlkDown.innerHTML = currentVarP1.innerHTML
    
    // reseting the current variation
    p1CurrentVarLogic = 0
    p2CurrentVarLogic = 0
    currentVarP1.innerHTML = p1CurrentVarLogic
    currentVarP2.innerHTML = p2CurrentVarLogic

    // "your turn" indicator
    yourTurnIndicatorP1.innerHTML = ''
    plainswalkerName1.innerHTML = ''
    yourTurnIndicatorP2.innerHTML = 'Your turn,&nbsp;'
    plainswalkerName2.innerHTML = nameTwoInput.value
    if (nameTwoInput.value == '') {
        plainswalkerName2.innerHTML = "Player Two"
    }
})

passPlayerTwo.addEventListener('click', function(){
    passPlayerTwo.disabled = true
    passPlayerOne.disabled = false

    // block 4 player1
    p1hpVar5stBlkUp.innerHTML = p1hpVar4stBlkUp.innerHTML
    p1hpVar5stBlkDown.innerHTML = p1hpVar4stBlkDown.innerHTML
    // block 4 player 2
    p2hpVar5stBlkUp.innerHTML = p2hpVar4stBlkUp.innerHTML
    p2hpVar5stBlkDown.innerHTML = p2hpVar4stBlkDown.innerHTML

    // block 4 player1
    p1hpVar4stBlkUp.innerHTML = p1hpVar3stBlkUp.innerHTML
    p1hpVar4stBlkDown.innerHTML = p1hpVar3stBlkDown.innerHTML
    // block 4 player 2
    p2hpVar4stBlkUp.innerHTML = p2hpVar3stBlkUp.innerHTML
    p2hpVar4stBlkDown.innerHTML = p2hpVar3stBlkDown.innerHTML

    // block 3 player1
    p1hpVar3stBlkUp.innerHTML = p1hpVar2stBlkUp.innerHTML
    p1hpVar3stBlkDown.innerHTML = p1hpVar2stBlkDown.innerHTML
    // block 3 player 2
    p2hpVar3stBlkUp.innerHTML = p2hpVar2stBlkUp.innerHTML
    p2hpVar3stBlkDown.innerHTML = p2hpVar2stBlkDown.innerHTML

    // block 2 player1
    p1hpVar2stBlkUp.innerHTML = p1hpVar1stBlkUp.innerHTML
    p1hpVar2stBlkDown.innerHTML = p1hpVar1stBlkDown.innerHTML
    // block 2 player2
    p2hpVar2stBlkUp.innerHTML = p2hpVar1stBlkUp.innerHTML
    p2hpVar2stBlkDown.innerHTML = p2hpVar1stBlkDown.innerHTML

    // block 1 player1
    p1hpVar1stBlkUp.innerHTML = currentVarP1.innerHTML
    p1hpVar1stBlkDown.innerHTML = currentVarP2.innerHTML
    // block 1 player2
    p2hpVar1stBlkUp.innerHTML = currentVarP2.innerHTML
    p2hpVar1stBlkDown.innerHTML = currentVarP1.innerHTML
    
    // reseting the current variation
    p1CurrentVarLogic = 0
    p2CurrentVarLogic = 0
    currentVarP1.innerHTML = p1CurrentVarLogic
    currentVarP2.innerHTML = p2CurrentVarLogic    

    // "your turn" indicator
    yourTurnIndicatorP2.innerHTML = ''
    plainswalkerName2.innerHTML = ''
    yourTurnIndicatorP1.innerHTML = 'Your turn,&nbsp;'
    plainswalkerName1.innerHTML = nameOneInput.value
    if (nameOneInput.value == '') {
        plainswalkerName1.innerHTML = "Player One"
    }
})










// reset button
reset.addEventListener('click', function(){
    parentNodeDiv.appendChild(layer);
})

//Fullscreen button


/*

fullScreen.addEventListener('click', function() {
  if (fullScreen.requestFullscreen) {
    fulScreen.requestFullscreen();
  } else if (fullScreen.webkitRequestFullscreen) { -- Safari --
    fullScreen.webkitRequestFullscreen();
  } else if (fullScreen.msRequestFullscreen) { -- IE11 --
    fullScreen.msRequestFullscreen();
  }
} 
)

*/
