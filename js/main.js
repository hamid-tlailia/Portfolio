// toggle navigation section's active
var tabs_btns = document.querySelectorAll('#tabs');
var onglets = document.querySelectorAll('#onglets');
var home = document.querySelector('.home')
tabs_btns.forEach(tab => {
    tab.addEventListener ('click' , function (){
        if(tab.classList.contains('active')){
            // keep current class
        }else{
            tab.classList.add('active')
        }
        // get tab index :
        tab_index = tab.getAttribute('data-index');
        for(var i=0;i<tabs_btns.length;i++){
if(tabs_btns[i].getAttribute('data-index')===tab_index){
    tabs_btns[i].classList.add('active')
}else{
    tabs_btns[i].classList.remove('active')
}
        }
        // Get associative onglets :
     onglets.forEach(onglet => {
        if(onglet.getAttribute('data-index') === tab_index){
            onglet.classList.add('active')
        }else{
           onglet.classList.remove('active')
        }
     })
    })
})

// toggle navbar :
var btn_toggle_nav = document.getElementById('toggle-nav');
var nav = document.getElementById('nav');
btn_toggle_nav.onclick = function (){
  nav.classList="sidenav"
    nav.classList.add('active')
}
// hide navbar
var hide_nav = document.getElementById('hide-nav');
hide_nav.onclick = function (){
    nav.classList.remove('active')
    nav.classList="sidenav d-none d-lg-block d-md-block"
}

// intro animation :
var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class=" text-secondary  ms-2">' + this.txt + "</span>";
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) {
      delta /= 2;
    }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function () {
      that.tick();
    }, delta);
  };
  
  window.onload = function () {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

  // Phone browse projects denied :
  var card_a = document.querySelectorAll('.card .p-3');
  card_a.forEach(card => {
      var link = card.children[1].children[0];
link.addEventListener('click' , function (e){
  if(window.innerWidth<805){
    alert("You maybe use a mobile version , please open this site with computer to browse projects !")
    e.preventDefault()
  }
})
  })

  // Function send mail :
  var from_name = document.getElementById('name');
  var from_email = document.getElementById('email');
  var message = document.getElementById('message');
var btn_send = document.getElementById('sendMail');
var form = document.getElementById('form');
var area_result = document.getElementById('mail');
btn_send.addEventListener('click', function (e){
 if(from_email.value!="" && from_name.value!="" && message.value!=""){
  e.preventDefault()
var params = {
dest_name : from_name.value,
user_email : from_email.value,
Message : message.value
}
btn_send.disabled=true
emailjs.send("service_wkwt0sq","template_lzlq58w",params)
.then(function (){
area_result.innerHTML = `<div class="note note-success text-start p-2">Thank you , we have successfully received your message</div>`,
  form.reset()
  btn_send.disabled=false
})
.catch(
 error => console.log(error)
  )
 }
})
