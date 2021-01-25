//  All ids
var btn_mudar_idioma_ingles = document.getElementById("btn_mudar_idioma_ingles");
var btn_mudar_idioma_ptbr = document.getElementById("btn_mudar_idioma_ptbr");
var txt_titulo_home = document.getElementById("txt_titulo_home");
var txt_titulo_sobre = document.getElementById("txt_titulo_sobre");
var txt_titulo_projetos = document.getElementById("txt_titulo_projetos");
var txt_titulo_contato = document.getElementById("txt_titulo_contato");
var txt_mini_sobre_principal = document.getElementById("txt_mini_sobre_principal");
var btn_github = document.getElementById("btn_github");
var btn_projetos = document.getElementById("btn_projetos");
var btn_mais_sobre_mim = document.getElementById("btn_mais_sobre_mim");
var txt_titulo_projetos_recentes = document.getElementById("txt_titulo_projetos_recentes");
var txt_txt_projetos_recentes = document.getElementById("txt_txt_projetos_recentes");
var txt_trabalho_conclusao = document.getElementById("txt_trabalho_conclusao");
var txt_click_em_projetos = document.getElementById("txt_click_em_projetos");
var btn_projetos2 = document.getElementById("btn_projetos2");
var btn_irpara_maissobrekaua = document.getElementById("btn_irpara_maissobrekaua");
var txt_desc_twitch = document.getElementById("txt_desc_twitch");
var txt_click_twitch = document.getElementById("txt_click_twitch");
var txt_desc_instagram = document.getElementById("txt_desc_instagram");
var txt_click_instagram = document.getElementById("txt_click_instagram");
var txt_desc_youtube = document.getElementById("txt_desc_youtube");
var txt_click_youtube = document.getElementById("txt_click_youtube")
var btn_projetos2_mysocialmedias = document.getElementById("btn_projetos2_mysocialmedias");

//  Ids of menu
var pt1 = window.document.querySelector('.pt1')
var pt2 = window.document.querySelector('.pt2')
var pt3 = window.document.querySelector('.pt3')
var pt4 = window.document.querySelector('.pt4')
var pt5 = window.document.querySelector('.pt5')


function desativar_btn_ptbr(){
    btn_mudar_idioma_ptbr.style.display = "none";
}

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

function abreMenu(){
    document.getElementById("menu").style.left = "-56%";
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
    document.getElementById("menu2").style.left = "-80%";
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
function parte2(){
    fechaMenu()
    document.getElementById("txt_titulo_sobre")
    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    })
}

function parte3(){
    fechaMenu()
    document.getElementById("txt_titulo_projetos")
    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    })
}


//  Function to tranlate Index
function trocar_idioma_ingles(){
    btn_mudar_idioma_ingles.style.display = "none",
    btn_mudar_idioma_ptbr.style.display = "block",
    txt_titulo_home.innerHTML = "Home",
    txt_titulo_sobre.innerHTML = "About",
    txt_titulo_projetos.innerHTML = "Projects",
    txt_titulo_contato.innerHTML = "Contact",
    txt_mini_sobre_principal.innerHTML = "Hi! My name is Kauã Vitório da Silva Lima, I am 16 years old, I was born in Lins interior of SP where I lived until I was 12 years old. Soon after I moved to São Paulo capital, always interested in gender, but not exactly in the area of programming. I currently live in Osasco and I am studying Systems Development at ETEC Basilides de Godoy.",
    btn_github.value = "ACCESS MY GITHUB",
    btn_projetos.value = "MY PROJECTS",
    btn_mais_sobre_mim.value = "MORE ABOUT ME",
    txt_titulo_projetos_recentes.innerHTML = "Recent Projects",
    txt_txt_projetos_recentes.innerHTML = "I started my projects on May 3, 2020, with the intention of learning and being able to disseminate my work and my learning, I am currently focusing on mobile development but I have knowledge in Windows Forms, ASP .NET MVC, HTML, CSS, JS and PHP.",
    txt_trabalho_conclusao.innerHTML = "Conclusion of Etec Module:",
    txt_click_em_projetos.innerHTML = "Click on projec to see my projects",
    btn_projetos2.value = "MORE PROJECTS",
    txt_desc_twitch.innerHTML = "I stream almost every day on the twitch about programming and developing projects, I started a short time ago but I am striving to bring the best quality and fun possible.",
    txt_click_twitch.innerHTML = "* Click on “Twitch” to be redirected to my channel.",
    txt_desc_instagram.innerHTML = "Instagram is the social network that I spend the most time and interact with the most, but I don't do publications very often.",
    txt_click_instagram.innerHTML = "* Click on ”Instagram” to be redirected to my channel.",
    txt_desc_youtube.innerHTML = "On Youtube I will be posting some moments from my streams where I teach some tips or some of my knowledge about programming.",
    txt_click_youtube.innerHTML = "* Click on ”Youtube” to be redirected to my channel.",
    btn_projetos2_mysocialmedias.value = "MY SOCIAL MEDIAS"
    btn_projetos2_mysocialmedias.style.fontSize = "20px"

}

//  Function to reload page
function trocar_idioma_ptbr(){
    window.location.reload();
}

function fechaMenu()
{
    document.getElementById("menu").style.left = "-1%";
    document.getElementById("menu").style.paddingTop = "5%"
    document.getElementById("menu").style.paddingBottom = "50px"
    document.getElementById("menu2").style.left = "0%";
    document.getElementById("menu").style.height = "0%";
    document.getElementById("menu2").style.display = "none";
}