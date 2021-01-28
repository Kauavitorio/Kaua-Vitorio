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


function abreMenu(){
    document.getElementById("menu").style.left = "-75%";
    document.getElementById("menu").style.textAlign = "center";
    document.querySelector(".closebtn").style.fontSize = "50px"
    txt_titulo_home.style.fontSize = "26px"
    txt_titulo_sobre.style.fontSize = "26px"
    txt_titulo_projetos.style.fontSize = "26px"
    txt_titulo_contato.style.fontSize = "26px"
    btn_mudar_idioma_ingles.style.fontSize = "26px"
    btn_mudar_idioma_ptbr.style.fontSize = "27px"
    document.getElementById("menu").style.height = "100%";
    document.getElementById("menu").style.backgroundColor = "black";
    document.getElementById("menu2").style.left = "10%";
    document.getElementById("menu2").style.height = "80%";
    document.getElementById("menu2").style.display = "inline-block";
    document.getElementById("menu2").style.visibility = "visible";
    document.getElementById("close").style.visibility = "visible";

    pt4.addEventListener('click', parte1)

    pt5.addEventListener('click', parte1)

    pt1.addEventListener('click', parte1)   

    pt2.addEventListener('click', parte2)

    pt3.addEventListener('click', parte3)
}

function parte1(){
    fechaMenu()
    document.getElementById("txt_titulo_home")
    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    })
}


function desativar_btn_in(){
    btn_mudar_idioma_ingles.style.display = "none";
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
    window.location.reload();
}

function trocar_idioma_ptbr(){
    btn_mudar_idioma_ingles.style.display = "block",
    btn_mudar_idioma_ptbr.style.display = "none"
    txt_titulo.innerHTML =  "👋 Sou estudante de desenvolvimento de software, atualmente moro em Osasco."
    txt_desc_about_me.innerHTML = "Atualmente estou cursando o ensino medio em São Paulo e o curso técnico em desenvolvimento de Software na Etec, no futuro pretendo fazer faculdade de engenharia de software me especializando em desenvolvimento para mobile e após cursar segurança da informação."
    txt_subdesc.innerHTML = "Comecei meu primeiro projeto em meu curso de desenvolvimento de software que foi o Sistema Windows Forms para Palace Petz após esse projeto comecei a programar aplicações mobile e até hoje me interesso muito pela área de desenvolvimento mobile, o ultimo projeto que desenvolvi para mobile junto com minha equipe de desenvolvimento foi o System Strength App cujo a ideia da aplicação é um agenda para os seus funcionários."
    txt_dentro_subdesc_sistema.style.visibility = "visible"
    txt_dentro_subdesc_systemmobile.style.visibility = "visible"
    txt_apos_subdesc.style.marginTop = "1%";
    txt_apos_subdesc.innerHTML = "Atualmente estamos(Eu, Matheus e Yuri) trabalhando em um projeto chamado Coffee For Code, onde o intuito é nosso aprendizado e o aperfeiçoamento na programação."
    txt_names.style.visibility ="visible"
    cfc.style.visibility ="visible";
}