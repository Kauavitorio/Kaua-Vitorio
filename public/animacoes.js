window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
function abreMenu(){
    document.getElementById("menu").style.height = "100%";
    document.getElementById("menu").style.backgroundColor = "black";
    document.getElementById("menu2").style.left = "-80%";
    document.getElementById("menu2").style.height = "80%";
    document.getElementById("menu2").style.display = "inline-block";
    document.getElementById("menu2").style.visibility = "visible";
    document.getElementById("close").style.visibility = "visible";
}