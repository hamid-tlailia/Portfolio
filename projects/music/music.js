
var audio =document.getElementById('audio');

var play =document.getElementById('play');

var setVolume =document.getElementById('setVolume');

var current =document.getElementById('current');
var total =document.getElementById('total');
var image =document.getElementById('image');
let wave = document.getElementById('wave');
var progress =document.getElementById('progress');
play.onclick =function(){
  
  
  if(play.classList=="fas fa-play-circle"){
    play.classList="fas fa-pause";
    audio.play();
    image.classList.add('rotate');
    wave.classList.add('loader');
  }else{
    play.classList="fas fa-play-circle";
    audio.pause();
    image.classList.remove('rotate');
    wave.classList.remove('loader');
  }
  random_bg_color();
}

setVolume.onchange =function(){
  audio.volume=setVolume.value/100 
}

function sekTo(){
  let seekto = audio.duration * (progress.value / 100);
  audio.currentTime = seekto;
}
updateTimer = setInterval(setUpdate, 1000);
function setUpdate(){
  let seekPosition = 0;
    if(!isNaN(audio.duration)){
        seekPosition = audio.currentTime * (100 / audio.duration);
        progress.value = seekPosition;
 
      let currentMinutes = Math.floor(audio.currentTime / 60);
      let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);
      let durationMinutes = Math.floor(audio.duration / 60);
      let durationSeconds = Math.floor(audio.duration - durationMinutes * 60);

      if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
      if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
      if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
      if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

      current.textContent = currentMinutes + ":" + currentSeconds;
      total.textContent = durationMinutes + ":" + durationMinutes;
    }
}

function random_bg_color(){
  let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
  let a;

  function populate(a){
      for(let i=0; i<6; i++){
          let x = Math.round(Math.random() * 14);
          let y = hex[x];
          a += y;
      }
      return a;
  }
  let Color1 = populate('#');
  let Color2 = populate('#');
  var angle = 'to right';

  let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
  document.body.style.background = gradient;
}