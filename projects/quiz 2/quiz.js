
var yes =document.getElementById('yes');
var no =document.getElementById('no');
var start =document.getElementById('start');

start.addEventListener('click', commencer);

function commencer(){

var affiche =document.querySelector('.affiche');
var black =document.querySelector('.black');
var flou =document.querySelector('.flou');
flou.classList.add('active');
affiche.classList.add('active');
black.classList.add('active');

    
}

var myTimers;
var next =document.getElementById('next');
function nextOption(){
    var timer =document.getElementById('timer');
    var result =document.getElementById('result');
    result.classList.add('active');
    var content =document.querySelector('.content');
    if(content.children.length===3){
        setInterval(function(){
            next.style.display="none";
           
        },1000);

        setTimeout(function(){
            var result =document.getElementById('result');
            result.classList.remove('active');
        },16000);
        
    }else{
        var result =document.getElementById('result');
            result.classList.add('active');
    }
            content.style.pointerEvents="all";
next.innerHTML=`En cours<img src="iesOo.gif" alt="spinner" style="width: 100%;height: 300%;
;position: absolute;margin-left: 30px;">`
next.classList.add('spinner');
            setTimeout(function() {
                var blocks =document.querySelectorAll('.bloks');
                blocks[0].nextElementSibling.classList.add('active');
                blocks[0].remove();
                next.classList.remove('spinner');
                next.classList.add('active');
                next.innerHTML="Next";
                var timer =document.getElementById('timer');
                timer.style.color="green";
            },1000);
            var timer =document.getElementById('timer');
          
            var y= 15;
           myTimers= setInterval(function(){
                y--;
                timer.innerHTML=y;
                if(y===6){
                    timer.innerHTML="0" + y;
                    var notice =document.querySelector('.notice');
                    setTimeout(function(){
                        notice.classList.add('active');
                    },1000);
                    setTimeout(function(){
                        notice.classList.remove('active');
                    },3000);
                }else if(y===3){
                    timer.style.fontSize="16px";
                    timer.style.color="red";
                    timer.innerHTML="0" + y;
                }
                else if(y===0){
                    clearInterval(myTimers);
                    timer.innerHTML="0" + y;
                    var content =document.querySelector('.content');
            content.style.pointerEvents="none";
            next.classList.remove('active');
                }else if(y<=9){
                    timer.innerHTML="0" + y;
                }
                
               
            },1000);
           
           
}

var myTimer;
yes.onclick =function(){
    var affiche =document.querySelector('.affiche');
var black =document.querySelector('.black');
var flou =document.querySelector('.flou');
flou.classList.remove('active');
affiche.classList.remove('active');
var result =document.getElementById('result');
result.classList.add('active');

var timer =document.getElementById('timer');
var x= 15;
 myTimer= setInterval(function(){
    x--;
    timer.innerHTML=x;
    if(x===6){
        timer.innerHTML="0" + x;
        var notice =document.querySelector('.notice');
        setTimeout(function(){
            notice.classList.add('active');
        },1000);
        setTimeout(function(){
            notice.classList.remove('active');
        },3000);
    }else if(x===3){
        timer.style.fontSize="16px";
        timer.style.color="red";
        timer.innerHTML="0" + x;
    }
    else if(x<=0){
        clearInterval(myTimer);
        timer.innerHTML="0" + x;
        var content =document.querySelector('.content');
        content.style.pointerEvents="none";
        next.classList.remove('active');
    }else if(x<10){
        timer.innerHTML="0" + x;
    }
},1000);


};




var options =document.querySelectorAll('.option');
options.forEach(option=>{
    option.addEventListener('click', function(event){
        
        let op =event.target;
        let res =op.parentElement.children[4];
        if(option.classList.contains('correct')){
        
            var note =document.getElementById('note');
            var next =document.getElementById('next');
            option.classList.add('vraie');
            next.classList.remove('active');
            res.innerText =" 😍 عظيم   "  ;
            next.classList.remove('active');
            res.classList.add('inactive');
            var content =document.querySelector('.content');
            content.style.pointerEvents="none";
            note.innerHTML++;

          clearInterval(myTimer);
          clearInterval(myTimers);
       
        }
        else{
            var next =document.getElementById('next');
            option.classList.add('faux');
            res.classList.remove('inactive');
            res.classList.add('active')

            res.innerText ="😕  حظ سيئ , حاول مرة أخرى "  ;
            next.classList.remove('active');
            var content =document.querySelector('.content');
            content.style.pointerEvents="none";
            clearInterval(myTimer);
          clearInterval(myTimers);
          var result =document.getElementById('result');
            result.classList.remove('active');
        }
    })
});


no.onclick =function(){
    var affiche =document.querySelector('.affiche');
var black =document.querySelector('.black');

affiche.classList.remove('active');
black.classList.remove('active');
}




// next

function restart(){
    window.location.reload();
}



var last =document.getElementById('last');

last.onclick =function(event){
    let last =event.target;
    var last_parent =last.parentElement;
    var next_el =last_parent.nextElementSibling;
    let las_p =last_parent.children[4];
    var time =document.querySelector('.time');
    var next =document.getElementById('next');
    las_p.innerText =" 😍 عظيم   "  ;
            las_p.classList.remove('active');
            las_p.classList.add('inactive');
            last_parent.style.pointerEvents="none";
            var result =document.getElementById('result');
            result.classList.remove('active');
time.style.color='red'
time.innerHTML="❤❤❤";
next.remove();
var note =document.getElementById('note');
    
    

    var over =document.querySelector('.over');
        var flou =document.querySelector('.flou');
        flou.remove();
        over.remove();
        var notice =document.querySelector('.notice');
        notice.remove();

}
 var time =document.querySelector('.time');
var result =document.getElementById('result');
result.onclick =function(){
    result.innerHTML =`Calculer<img src="iesOo.gif" alt="spinner" style="width: 100%;height: 300%;
    ;position: absolute;margin-left: 30px;">`;
    result.classList.add('spinner');
    var note =document.getElementById('note');
    var score =document.getElementById('score');
    var op =document.getElementById('op');
    score.innerHTML=note.innerHTML;

    if(note.innerHTML>6){
        op.innerHTML="Very good ❤";
    }else if(note.innerHTML<4){
        op.innerHTML="Bed luck 😭";
    }else{
        op.innerHTML="Not bed 😍"
    };
    setTimeout(() => {
        var q5 =document.getElementById('q10');
        var final =document.getElementById('final');
        final.classList.add('active');
        q5.remove();
        result.remove();
        var content =document.querySelector('.content');
        content.style.pointerEvents="all";
    }, 2000);
    time.style.color='red'
time.innerHTML="❤❤❤";
}


function roload(){
    location.reload();
}

// fin du projet ...