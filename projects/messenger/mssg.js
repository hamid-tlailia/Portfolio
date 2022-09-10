


var users =document.querySelectorAll('#users');

users.forEach(userr=>{
    userr.addEventListener('click', function(event){
        let user= event.target;
        let user_parent =user.parentElement;
        let user_photo =user.parentElement.children[0].src;
        let user_name =user.parentElement.parentElement.children[1].innerHTML;
        console.log(user_name)


        var index = userr.getAttribute('data-index');
     

        var myBox = document.createElement('div');

      
        myBox.setAttribute('class', 'chat');
myBox.setAttribute('data-index', index);
myBox.innerHTML=`
<div class="head">
<span><i class="fas fa-chevron-left" style="color: blueviolet;cursor: pointer;" id="retour"></i></span>
<span class="image">
<img src="${user_photo}" alt="user">
</span>
<h2>${user_name}</h2>
<span><i class="fas fa-phone" style="color: blueviolet;cursor: pointer;"></i></span>
<span><i class="fas fa-video" style="color: blueviolet;cursor: pointer;"></i></span>
</div>

<div class="center"></div>
<div class="footer">
<span><i class="fas fa-plus-circle" style="color: blue;cursor: pointer;"></i></span>
<span><i class="fas fa-camera" style="color: blue;cursor: pointer;"></i></span>
<span><i class="far fa-image" style="color: blue;cursor: pointer;"></i></span>
<span><i class="fas fa-microphone" style="color: blue;cursor: pointer;"></i></span>
<input type="text"  id="change" placeholder="Aa" style="background-color: white;width: 150px;border: none;
border-radius: 20px;outline-color: aqua;margin-top:6px;height :30px;">
<i class="fas fa-grin-hearts" id="emoji" style="position: absolute;margin: 6px 0 0 57%;color: blue;"></i>
<span><i class="fas fa-thumbs-up"  style="color: blue;cursor: pointer;" id="send"></i></span>
</div>`

var box =document.querySelector('.box_mssg');

box.append(myBox);
myBox.classList.add('active');
myBox.style.transition="0.5s"


var retours =document.querySelectorAll('#retour');
retours.forEach(retour=>{
    retour.addEventListener('click', tourner);
})

var changers =document.querySelectorAll('#change');

changers.forEach(changer=>{
    changer.addEventListener('keyup', change);
})

var sends =document.querySelectorAll('#send');

sends.forEach(send=>{
    send.addEventListener('click', envoie);
})


//top
var places =document.querySelectorAll('.formssg');
for(var d=0; d<places.length;d++){
    if(places[d].getAttribute('data-index')==index){
        
        myBox.remove();
        places[d].children[3].click();
         
      
    }
}

    })
})

function tourner(event){
let retour =event.target;
let retour_parent =retour.parentElement.parentElement.parentElement;
let parent_center =retour.parentElement.parentElement.parentElement.children[1].innerHTML;
let retour_index =retour_parent.getAttribute('data-index');

let nam =retour_parent.children[0].children[2].innerHTML;
console.log(parent_center)
if(parent_center===""){
    retour_parent.remove();
   
    
}else{
    let lecenter =retour_parent.children[1].lastElementChild.innerHTML;
    
    var back =document.createElement('div');
    let phot =retour_parent.children[0].children[1].children[0].src;
    back.setAttribute('class', "formssg");
    back.setAttribute('data-index',retour_index );
    
    var date =new Date();
    var h =date.getHours();
    var m =date.getMinutes();
    
    var time =h + ":" + m;
    
    console.log(parent_center)
    back.innerHTML= `
    <span id="remove"  title="supprimer la discussion">X</span>
    <div id="userimg">
        <img src="${phot}" alt="user" id="usermg">
    </div>
    <p id="fornm">${nam}</p>
    <p  style="margin-left: 25%;color: red;width: 75%;height: 30%;border-top: 1px solid blue;border-bottom: 1px solid
    blue;overflow: hidden;text-align:left;display:flex;flex-direction:row;">
        You: <span id="lastm" style="color: black;width:100%; font-size:15px;overflow: hidden;height:110%;padding:5px;margin-top:-5px;margin-left:20px;
        ">${lecenter}</span>
         <span style="color:black;margin-left:45%;margin-top:-10px;width:15%">....</span>
         </p>
    <p id="clock" style="color: geen;margin-left: 84%;">${time}</p>
    </div>
    
    `

    
    retour_parent.classList.remove('active');
    var place =document.querySelector('.box');
    
    place.insertBefore(back,place.firstChild);
    
}


var removes =document.querySelectorAll('#remove');
removes.forEach(remov=>{
    remov.addEventListener('click', rem)
});

// down

var messages =document.querySelectorAll('.formssg');
var chats =document.querySelectorAll('.chat');
messages.forEach(message=>{
    message.addEventListener('click', getEl)
});
}

function getEl (event){
    let mssg =event.target;
    let mssg_parent= mssg.parentElement;

   
    var ref =mssg_parent.getAttribute('data-index');
    var chats =document.querySelectorAll('.chat');

var dells = document.querySelectorAll('#dell');

   dells.forEach(dell=>{
       dell.addEventListener('click', delite)
   })
for(var i=0; i<chats.length; i++){
    if(chats[i].getAttribute('data-index')===ref){
chats[i].classList.add('active');
setTimeout(function(){
    mssg_parent.remove();
    },300);
    }else{
        chats[i].classList.remove('active');
    }
}
   
}
function rem(event){
let rembtn =event.target;
let rembtn_parent =rembtn.parentElement;
var chats =document.querySelectorAll('.chat');
let myIndex =rembtn_parent.getAttribute('data-index');
for(var n=0; n<chats.length; n++){
    if(chats[n].getAttribute('data-index')===myIndex){
chats[n].remove();
    }
}
rembtn_parent.remove();
}


function delite(event){
    let del =event.target;
    del_parent =del.parentElement.parentElement.parentElement;
    let last =del_parent.children[1].lastElementChild.innerText;
    
    del_parent.classList.remove('active');
}
function change(event){
    let input =event.target;

let input_parent =input.parentElement;

let input_emo =input_parent.children[5];
let input_emt =input_parent.children[6].children[0];
console.log(input_emt)
if(input.value===""){
    input_emo.classList="fas fa-grin-hearts";
input_emt.classList="fas fa-thumbs-up";
}
    else{
input_emo.classList="fas fa-search";
input_emt.classList="fas fa-paper-plane";
   
};

}

function envoie(event){
let send =event.target;
let send_parent =send.parentElement;
let send_btn =send_parent.children[0];
let inputt =send_parent.parentElement.children[4];
let center =send_parent.parentElement.parentElement.children[1];
let emj1 =send_parent.parentElement.children[5];
let emj2 =send_parent.parentElement.children[6].children[0];
console.log(inputt)
if(inputt.value!=""){
    var myP =document.createElement('p');
    myP.setAttribute('class', 'message');
    myP.innerHTML =inputt.value;
    center.append(myP);
    inputt.value="";
   emj1.classList="fas fa-grin-hearts";
   emj2.classList="fas fa-thumbs-up";
}else{
    var myp2 =document.createElement('p');
    myp2.setAttribute('id', 'message1');
  
    myp2.innerHTML =`
    <i class="fas fa-thumbs-up"></i>
    `;
    center.append(myp2);
}
}

var crc =document.getElementById('crc');


crc.onclick =function(){
    var box_m =document.querySelector('.box_mssg');
if(box_m.classList.contains('active')){
    box_m.classList.remove('active');
    crc.classList.remove('active');
    crc.classList.remove('inactive')
    crc.innerText="Ouvrir";
}else{
    box_m.classList.add('active');
    crc.classList.add('active');
    crc.innerText="X";
    crc.classList.add('inactive')
}
       
}

var round =document.querySelector('.rounde');

round.onclick =function(){
    
    var chooix =document.querySelector('.choix');
    chooix.classList.remove("inactive");
   
    chooix.classList.toggle("active");
    
}

var out =document.getElementById('out');



out.onclick =function(){
    var connect =document.querySelector('.connect');
    connect.classList.remove('active');
    var chooix =document.querySelector('.choix');
    chooix.classList.remove("active");
}

var quit =document.getElementById('quit');

quit.onclick =function(){
    var box_m =document.querySelector('.box_mssg');

    box_m.classList.remove('active');
    crc.classList.remove('active');
    crc.classList.remove('inactive')
    crc.innerText="Ouvrir";
    var chooix =document.querySelector('.choix');
    chooix.classList.add("inactive");

}

var enter =document.getElementById('enter');

enter.onclick =function(event){

    var x ="hamidos";
    var y= 123456;
    let btn =event.target;
    let username =btn.parentElement.children[5];
    let password =btn.parentElement.children[8];
    var wuser =document.getElementById('wuser');
    var wpass =document.getElementById('wpass');
    var wall =document.getElementById('wall');

    if(username.value=="" && password.value==""){
       wuser.innerText="Please enter a username !";
       wpass.innerText="Please enter a password !";
       wall.style.background="none";
        wall.innerText="";
        username.style.border="1px solid red";
        password.style.border="1px solid red";
    }else if(username.value==""&&password.value!=""){
        wuser.innerText="Please enter a username !";
        wpass.innerText='';
        wall.style.background="none";
        wall.innerText="";
        username.style.border="1px solid red";
        password.style.border="none";
    }else if(username.value!=""&&password.value==""){
        wpass.innerText="Please enter a password !";
        wuser.innerText='';
        wall.style.background="none";
        wall.innerText="";
        username.style.border="none";
        password.style.border="1px solid red";
    }else if(username.value!=x && password.value!=y){
        wall.style.backgroundColor="rgba(255, 0, 0, 0.247)";
        wall.innerText=" ⚠️ Username or Password incorrect !";
        wuser.innerText="";
       wpass.innerText="";
       username.style.border="none";
        password.style.border="none";
    }else if(username.value==x && password.value!=y){
        wpass.innerText="Password incorrect!";
        wuser.innerText='';
        wall.style.background="none";
        wall.innerText="";
        username.style.border="none";
        password.style.border="1px solid red";
        
    }else if(username.value!=x && password.value==y){
        wuser.innerText="Username incorrect!";
        wpass.innerText='';
        wall.style.background="none";
        wall.innerText="";
        username.style.border="1px solid red";
        password.style.border="none";
    }else if(username.value==x&&password.value==y){
        var connect =document.querySelector('.connect');
        connect.classList.add('active');
        wuser.innerText="";
        wpass.innerText='';
        wall.style.background="none";
        wall.innerText="";
        username.style.border="none";
        password.style.border="none";

    }

    
    let photo =btn.parentElement.children[1].files[0];
    let belle =document.getElementById('belle');

    var myUrl =URL.createObjectURL(photo);
    belle.src=myUrl;
    console.log(photo)
}
// fin du projet merci a tous....
