
var noter =document.getElementById('note');
var pen =document.getElementById('pen');

noter.onclick =function(){
    var myNote =document.createElement('div');
myNote.setAttribute('class', "black");
document.body.append(myNote);

var textArea =document.createElement('div');
textArea.setAttribute('class', "note");
textArea.classList.add('active');
textArea.innerHTML= `
<div class="colors">
<span class="red onglets"></span>
<span class="green onglets"></span>
<span class="blue onglets"></span>
<span class="purple onglets"></span>
</div>
<textarea name="area" id="area" class="area" cols="50" rows="11">Creez votre note ...!</textarea>
<div class="buttons">
<button type="button" id="enreg" >Enregistrer</button>
<button type="button" id="annul" >Annuler</button>
</div>
`
document.body.append(textArea);
var onglets =document.querySelectorAll('.onglets');
onglets.forEach(onglet =>{
    onglet.addEventListener('click', function(){
        var area =document.getElementById('area');
        area.style.backgroundColor=onglet.classList[0];
        area.style.color="white"
    })
})
var anulbtns =document.querySelectorAll('#annul');

anulbtns.forEach(anulbtn =>{
    anulbtn.addEventListener('click', function(event){
        let btn= event.target;

        let grand_parent = btn.parentElement.parentElement.remove();
        let fond = document.querySelector('.black').remove();

    })
})

pen.onclick =function(){
    var area =document.getElementById('area').focus();
}

var enregs = document.querySelectorAll('#enreg');
enregs.forEach(enreg =>{
    enreg.addEventListener('click', function(){
        var myRst =document.createElement('div');
/*
x = 0, 
y = 0, 
mousedown = false; 

// div event mousedown 
myRst.addEventListener('mousedown', function (e) { 
// mouse state set to true 
mousedown = true; 
// subtract offset 
x = myRst.offsetLeft - e.clientX; 
y = myRst.offsetTop - e.clientY; 
}, true); 

// div event mouseup 
myRst.addEventListener('mouseup', function (e) { 
// mouse state set to false 
mousedown = false; 
}, true);
// element mousemove to stop 
myRst.addEventListener('mousemove', function (e) { 
    // Is mouse pressed 
    if (mousedown) { 
    // Now we calculate the difference upwards 
    myRst.style.left = e.clientX + x + 'px'; 
    myRst.style.top = e.clientY + y + 'px'; 
    } 
    }, true); 

*/

        myRst.setAttribute('class', "rst");
        var container =document.getElementById('container');
        var area =document.getElementById('area');
        myRst.style.backgroundColor= area.style.backgroundColor;
        myRst.style.color= area.style.color;
        var span =document.createElement('span');
        span.innerHTML="X";
        myRst.append(span);
        span.setAttribute('id', 'delete');
        myRst.append(area.value)
        container.append(myRst);
        var delets =document.querySelectorAll('#delete');

        delets.forEach(delet =>{
            delet.addEventListener('click' , supprimer);
        })
    })
})

var delAll =document.getElementById('delAll').onclick =function(){
  const container =document.getElementById('container').innerHTML="";
}
}

function supprimer(event){
    let supp =event.target;
    supp_parent =supp.parentElement.remove();
    
}





