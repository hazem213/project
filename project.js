let head = document.querySelector("header") ;
window.addEventListener("scroll" , function(){
    head.classList.toggle("change" , this.window.scrollY > 0 );
})



let btn = document.getElementById("btn") ;
btn.onclick = function() {
    scroll({top : 0 , behavior:"smooth"})
}