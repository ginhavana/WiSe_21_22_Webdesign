let inc = document.getElementById("btnplus")
let dec = document.getElementById("btnminus")
let display = document.getElementById("display")
let i = 0;
function add(){
    i += 1;
    display.innerText = i ;
}
function sub(){
    if(i > 0){
        i -= 1;
        display.innerText = i ;
    }

}
inc.addEventListener('click',add);
dec.addEventListener('click',sub);