window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


$(document).ready(function(){
$('.hamburguer').click(function(){
    $(this).toggleClass("active");
    $(".menu").toggleClass("active");
    });
});