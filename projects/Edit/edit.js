
var add =document.getElementById('add');
var txt =document.getElementById('txt');
var edit =document.getElementById('edit');
var dell =document.getElementById('dell');
var objects =document.querySelector('.objects');
var ps;
let p_index;
var index=0;
var ind;
add.onclick =function(){
index++;
   
if(txt.value===""){
    txt.focus();
   return;
   
}else{
    var p =document.createElement('p');
p.innerHTML= txt.value;

p.setAttribute('class', "p");
p.setAttribute('data-index',index);
objects.append(p);

txt.value="";
 ps =document.querySelectorAll('.p');
ps.forEach(pi=>{
   
    pi.addEventListener('click', setIndex);
    edit.addEventListener('click', editer);
    dell.addEventListener('click', delite);
})
}


}
var sup_index;
function setIndex(event){
let pi= event.target;
let pi_index =pi.getAttribute('data-index');
txt.value=pi.innerHTML;
edit.setAttribute('data-index',pi_index);
dell.setAttribute('data-index',pi_index);
txt.focus();
for(var d=0;d<ps.length;d++){
    if(ps[d].getAttribute('data-index')===pi_index){
        ps[d].classList.add('active')
    }else{
        ps[d].classList.remove('active');
    }
}
}

function editer(){
    var edit_index =edit.getAttribute('data-index');
    sup_index=edit_index;
for(var i=0; i<ps.length;i++){
if(ps[i].getAttribute('data-index')==edit_index){
    ps[i].innerHTML=txt.value;
    txt.value="";
}
}
}

function delite(){
    var dell_index =edit.getAttribute('data-index');
    for(var i=0; i<ps.length;i++){
        if(ps[i].getAttribute('data-index')==dell_index){
            ps[i].remove();
            txt.value="";
        }
        }
}