window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("header_abajo", window.scrollY>0);
})