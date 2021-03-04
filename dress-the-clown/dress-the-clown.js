  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

document.addEventListener('DOMContentLoaded', init);

let clown = {
  'head': 0,
  'body': 0,
  'shoes': 0
};

let clownIndex = [
  'head',
  'body',
  'shoes',
];

let currentBodyIndex = 0;

function init(){
  let max = 6;
  clown.head = randomIntMax(max);
  document.getElementById('head').src = `./images/head${clown.head}.png`;
  clown.body = randomIntMax(max);
  document.getElementById('body').src = `./images/body${clown.body}.png`;
  clown.shoes = randomIntMax(max);
  document.getElementById('shoes').src = `./images/shoes${clown.shoes}.png`;
  document.addEventListener('keydown', keyDownFn);

}

//generate random integer from 1 to max-1.
function randomIntMax(max){
  return Math.floor(Math.random() * (max-1)+1);
}

function changeBodyPart(bodypart, index){
  document.getElementById(bodypart).src = `./images/${bodypart}${index}.png`;
  let boxElm = document.getElementById(clownIndex[currentBodyIndex] + '-box');
  let newBox = boxElm.cloneNode(false);
  boxElm.parentNode.replaceChild(newBox, boxElm);
}

function incrementBodyIndex(){
  document.getElementById(clownIndex[currentBodyIndex]+'-box').classList.remove('selected');
  currentBodyIndex = currentBodyIndex >= 2 ? 0 : currentBodyIndex + 1;
  document.getElementById(clownIndex[currentBodyIndex]+'-box').classList.add('selected');
}

function decrementBodyIndex(){
  document.getElementById(clownIndex[currentBodyIndex]+'-box').classList.remove('selected');
  currentBodyIndex = currentBodyIndex <= 0 ? 2 : currentBodyIndex - 1;
  document.getElementById(clownIndex[currentBodyIndex]+'-box').classList.add('selected');
}

function keyDownFn(evt){
  let bodypart = '';

  switch(evt.keyCode){
    case 38:
      console.log('up');
      decrementBodyIndex();
      console.log(currentBodyIndex);
      break;
    case 40:
      console.log('down');
      incrementBodyIndex();
      break;
    case 37:
      console.log('left');
      bodypart = clownIndex[currentBodyIndex];
      clown[bodypart] = clown[bodypart] <= 0 ? 5 : clown[bodypart] - 1;
      changeBodyPart(bodypart, clown[bodypart]); 
      break;
    case 39:
      console.log('right');
      bodypart = clownIndex[currentBodyIndex];
      clown[bodypart] = clown[bodypart] >= 5 ? 0 : clown[bodypart] + 1; 
      changeBodyPart(bodypart, clown[bodypart]);
      break;
    default:
      return;
  }

}