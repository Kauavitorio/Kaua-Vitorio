var btn_mudar_idioma_ingles = document.getElementById("btn_mudar_idioma_ingles");
var btn_mudar_idioma_ptbr = document.getElementById("btn_mudar_idioma_ptbr");
var txt_titulo = document.getElementById("txt_titulo");
var txt_desc_about_me = document.getElementById("txt_desc_about_me");
var txt_subdesc = document.getElementById("txt_subdesc");
var txt_dentro_subdesc_sistema = document.getElementById("txt_dentro_subdesc_sistema");
var txt_dentro_subdesc_systemmobile = document.getElementById("txt_dentro_subdesc_systemmobile");
var txt_apos_subdesc = document.getElementById("txt_apos_subdesc");
var txt_names = document.getElementById("txt_names");
var cfc = document.getElementById("cfc");


function desativar_btn_ptbr(){
    btn_mudar_idioma_ptbr.style.display = "none";
    txt_dentro_subdesc_sistema.style.visibility = "hidden";
    txt_dentro_subdesc_systemmobile.style.visibility = "hidden";
    txt_names.style.visibility ="hidden"
    cfc.style.visibility ="hidden"
    txt_apos_subdesc.style.marginTop = "-5%";
}

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

function trocar_idioma_ingles(){
    btn_mudar_idioma_ingles.style.display = "none",
    btn_mudar_idioma_ptbr.style.display = "block"
    txt_titulo.innerHTML =  "👋 I am a software development student, currently I live in Osasco."
    txt_desc_about_me.innerHTML = "I am currently attending high school in São Paulo and the technical course in Software Development at Etec, in the future i intend to go to software engineering college specializing in mobile development and after studying information security."
    txt_subdesc.innerHTML = "I started my first project in my software development course which was the after this project i started programming mobile applications and even today i am very interested in mobile development area, the last project I developed for mobile along with my development team was the idea of the application is an agenda for your employees."
    txt_dentro_subdesc_sistema.style.visibility = "visible"
    txt_dentro_subdesc_systemmobile.style.visibility = "visible"
    txt_apos_subdesc.style.marginTop = "1%";
    txt_apos_subdesc.innerHTML = "We are currently working on a project called, where the purpose is our learning and improvement in programming."
    txt_names.style.visibility ="visible"
    cfc.style.visibility ="visible"


}

function trocar_idioma_ptbr(){
    window.location.reload();
}