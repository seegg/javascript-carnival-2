  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")


function inflate(elem){

  let unicorn = [
    './images/unicorn-0.png',
    './images/unicorn-1.png',
    './images/unicorn-2.png',
    './images/unicorn-3.png'
  ];
  
  for(let i = 0; i < unicorn.length; i++){
    if(elem.getAttribute('src') === unicorn[i]){
      if(i >= unicorn.length -1){
        alert(elem.id.replace('-', ' ') + ' says thank you!');
        elem.setAttribute('src', unicorn[0]);
        console.log('deflate');
        break;
      }else{
        console.log('inflate');
        elem.setAttribute('src', unicorn[i+1]);
        break;
      }
    }
  }
}