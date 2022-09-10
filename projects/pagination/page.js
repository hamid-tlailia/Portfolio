// select all requied elements...

var pages =document.querySelectorAll('.pages');

var tds =document.querySelectorAll('.td');

var next =document.getElementById('next');

var prev =document.getElementById('prev');

//function next
let currentPage =1;
next.onclick =function(){
    ind =next.getAttribute('aria-valuetext');
currentPage++;


for(var d=0;d<tds.length;d++){

    var td_index =tds[d].getAttribute('data-index');
    if(tds[d].getAttribute('data-index')==currentPage){
        tds[d].click();
    }
}

if(currentPage===4){
    next.classList.add('active');
}
prev.classList.remove('active');

}

// function prev

prev.onclick =function(){
    
currentPage--;


for(var t=0;t<tds.length;t++){
    if(tds[t].getAttribute('data-index')==currentPage){
        tds[t].click();
    }
}


if(currentPage===1){
    prev.classList.add('active')
}
next.classList.remove('active')
    
}


// function click td + get page

tds.forEach(td=>{
    td.addEventListener('click', function(){
        if(td.classList.contains('active')){
            return;
        }else{
            td.classList.add('active');
        }

        var index =td.getAttribute('data-index');
        var number =document.getElementById('number');
        number.innerHTML=index;
        currentPage=index;
        if(index==1){
            prev.classList.add('active');
            next.classList.remove('active');
        }else if(index==4){
            prev.classList.remove('active');
            next.classList.add('active');
        }else{
            prev.classList.remove('active');
            next.classList.remove('active');

        }
        for(var i=0; i<tds.length;i++){
            if(tds[i].getAttribute('data-index')!=index){
                tds[i].classList.remove('active');
            }
        }

        for(var s=0;s<pages.length;s++){
            if(pages[s].getAttribute('data-index')==index){
                
               pages[s].classList.add('active');
               
            }else{
               
                pages[s].classList.remove('active');
            }
        }
        //write up
    })
})

// function onload

window.onload=function(){
    prev.classList.add('active')
}

// fin du projet ...