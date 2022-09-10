// get all neccessary elemnts 

var btn =document.getElementById('btn');
var audio = document.getElementById('audio');
var icon = document.getElementById('icon');
var image = document.getElementById('image');
var music = document.getElementById('music');
var time = document.getElementById('time');
var play = document.getElementById('play');
// global variable scope

var interval;
var check;

// set the btn function 

btn.onclick =function(){
   if(icon.classList=="fa fa-play"){
// check if counter not null
if(time.value=="00"){
   var place = document.getElementById('place');
   place.innerText="Please set a time to start !";
}else{
   icon.classList="fas fa-pause";
play.innerText="pause";
var place = document.getElementById('place');
place.innerText="";
   interval = setInterval(function(){
      time.value --;
    
    },1000);
}

} // toggle button function code
   else{
icon.classList="fa fa-play";
clearInterval(check);
clearInterval(interval);
audio.pause();
image.classList.remove('active');
music.classList.remove('active'); 
time.value="00";
play.innerText="Play";

   }
   control();
}

// set the contoler function 

function control(){
   check = setInterval (function(){
        if(time.value==="0"){
            clearInterval(interval);
            audio.play();
            image.classList.add('active');
            music.classList.add('active');
    
        }
    },1000);
}