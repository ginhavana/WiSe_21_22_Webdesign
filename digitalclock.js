const d = new Date();
let year = d.getFullYear();
let month = d.getMonth() + 1;
let date = d.getDate();
let hour = d.getHours();

const eclock = document.getElementById("eclock");
eclock.innerHTML = d;

// create function reload whole window page each second
setTimeout(function(){
   window.location.reload(1);
}, 1000);