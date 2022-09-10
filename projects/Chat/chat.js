/*
var container =document.getElementById('container');

function apply(){
    container.classList.add('active');
    if(container.classList.contains('active')){
        setTimeout(function(){
           container.classList.add('design');
            },1000);

            setTimeout(function(){
                container.classList.add('after');
                 },2000);

                 setTimeout(function(){
                    container.classList.add('final');
                     },3000);

                     setTimeout(function(){
                        container.classList.remove('active');
                         },4000);
    }else{
        container.classList.remove('design');
        container.classList.remove('after');
        container.classList.remove('final');
       
        
    };
};
*/

var myInput =document.getElementById('sweet');
window.onload =function(){
    var myBtn =document.getElementById('btn');
    
if(myInput.value===""){
    myBtn.style.backgroundColor="gray";
    
}else{
    myBtn.style.backgroundColor="blue"
}
}
    
myInput.onkeydown =function(){
    var myBtn =document.getElementById('btn');
    
    if(myInput.value<=0){
        myBtn.style.backgroundColor="gray";
    }else{
        myBtn.style.backgroundColor="blue";
        myBtn.style.cursor="pointer";

       
    }
}

  var sendimg =document.getElementById('sendimg');
  sendimg.onclick= function(event){
    let mbtn =event.target;
    btn_parent =mbtn.parentElement.children[3].files[0];
    let myUrl =URL.createObjectURL(btn_parent);
    var myMessages =document.querySelector('.myMessages');
    var image =document.createElement('img');
    image.src=myUrl;
    image.setAttribute('class', "image");
    myMessages.append(image);
    var empty =document.getElementById('empty');
        empty.style.display="none";
  }
function send(){


    if(myInput.value<=0){
        return;
        
    }else{
       
        var myChat =document.getElementById('myMessages');

        var myP =document.createElement('p');
        myP.innerHTML =myInput.value;
        myP.setAttribute('class', "myp");
        myChat.append(myP);
        var empty =document.getElementById('empty');
        empty.style.display="none";

    }
}
var open =document.getElementById('open');

open.onclick =function(){
    var box =document.getElementById('box');
    box.classList.toggle('active');
    if(box.classList.contains('active')){
        open.classList.add('active');
        open.innerHTML="X";
        setTimeout(function(){
            var mssg =document.querySelector('.mssg');
            mssg.classList.add('active');
        },1000);
        setTimeout(function(){
            var head =document.querySelector('.head');
            head.classList.add('active');
        },2000);
        setTimeout(function(){
            var myMessages =document.querySelector('.myMessages');
            myMessages.classList.add('active');
        },3000);
    }else{
        open.classList.remove('active');
        open.innerHTML="Open chat"
    }


}

var close =document.getElementById('close');
close.addEventListener("click", function(){
    var myChat =document.getElementById('myMessages');
    myChat.innerHTML= `
    <h2 style="color: white;margin: 20% 0 0 20%;" id="empty">No messages !</h2>
    ` 
   
})
