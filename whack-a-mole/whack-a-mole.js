  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")

const MOLE = "<img src='./mole.PNG' style='display: display:block; width: 100%; height: 100%'>";

let moleTable;
let cellNumbers = [];
let count;
let timer;
let activeCell;

document.addEventListener('DOMContentLoaded', init);

function init(){
  moleTable = document.getElementById('mole-table');
  moleTable.addEventListener('click', whack);
  moleTable.addEventListener('click', start);

  for(let i = 0; i < moleTable.rows.length; i++){
    cellNumbers.push(moleTable.rows[i].cells.length);
  }
}

function start(){
  timer = 9;
  count = 0;
  moleTable.removeEventListener('click', start);
  spawnMole();
  updateTimerDiv();
  setTimeout(alertScore, 10000);
}

function updateTimerDiv(){
  document.getElementById('instruction-text').children[0].textContent = timer;
  timer--;
  if(timer >= 0){
    setTimeout(updateTimerDiv, 1000);
  }
}

function spawnMole(){
  let row = Math.floor(Math.random() * cellNumbers.length);
  let cell = Math.floor(Math.random() * cellNumbers[row]);
  activeCell = moleTable.rows[row].cells[cell];
  activeCell.classList.add('mole-active');
  console.log(activeCell);
}

function whack(evt){
  if(evt.target.classList.contains('mole-active')){
    let whackAudio = new Audio('./whack-audio.wav');
    whackAudio.volume = 0.5;
    whackAudio.play();
    evt.target.classList.remove('mole-active');
    count++;
    spawnMole();
  }

}

function alertScore(){
  activeCell.classList.remove('mole-active');
  alert(`Your score is ${count}!`);
  moleTable.addEventListener('click', start);
  document.getElementById('instruction-text').children[0].textContent = 'Click anywhere on the grid to start';
}
