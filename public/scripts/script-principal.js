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


function desativar_btn_in(){
    btn_mudar_idioma_ingles.style.display = "none";
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
    window.location.reload();

}

//  Function to reload page
function trocar_idioma_ptbr(){
    btn_mudar_idioma_ingles.style.display = "block",
    btn_mudar_idioma_ptbr.style.display = "none",
    txt_titulo_home.innerHTML = "Home",
    txt_titulo_sobre.innerHTML = "Sobre",
    txt_titulo_projetos.innerHTML = "Projetos",
    txt_titulo_contato.innerHTML = "Contato",
    txt_mini_sobre_principal.innerHTML = "Olá! Me chamo Kauã Vitório da Silva Lima, tenho 16 anos, nasci em Lins interior de SP onde morei até meus 12 anos. Logo após me mudei para São Paulo capital, sempre tive interesse em computação mas não exatamente na área da programação. Moro atualmente em Osasco e estou cursando Desenvolvimento de Sistemas na ETEC Basilides de Godoy. ",
    btn_github.value = "ACESSE MEU GITHUB",
    btn_projetos.value = "MEUS PROJETOS",
    btn_mais_sobre_mim.value = "MAIS SOBRE MIM",
    txt_titulo_projetos_recentes.innerHTML = "Projetos Recentes",
    txt_txt_projetos_recentes.innerHTML = "Iniciei minha meus projetos em 03 de maio de 2020, com intensão de aprender e poder divulgar meu trabalho e meu aprendizado, estou focando atualmente em desenvolvimento mobile mas tenho conhecimento em Windows Forms, ASP .NET MVC, HTML, CSS, JS e PHP.",
    txt_trabalho_conclusao.innerHTML = "Trabalho de Conclusão de Módulo Etec:",
    txt_click_em_projetos.innerHTML = "Click em projetos para ver meus projetos",
    btn_projetos2.value = "MAIS PROJETOS",
    txt_desc_twitch.innerHTML = "Faço stream quase todos os dias na twitch sobre programação e desenvolvendo projetos, comecei a pouco tempo mas estou me esforçando para trazer a melhor qualidade e diversão possível.",
    txt_click_twitch.innerHTML = "*Clique em “Twitch” para ser redirecionado ao meu canal.",
    txt_desc_instagram.innerHTML = "Instagram é a rede social que mais passo meu tempo e onde mais interajo, porém não faço publicações com muita frequência.",
    txt_click_instagram.innerHTML = "*Clique em ”Instagram” para ser redirecionado ao meu canal.",
    txt_desc_youtube.innerHTML = "No Youtube estarei postando alguns momentos das minhas streams onde ensino algumas dicas ou algo de meu conhecimento sobre programação.",
    txt_click_youtube.innerHTML = "*Clique em ”Youtube” para ser redirecionado ao meu canal.",
    btn_projetos2_mysocialmedias.value = "MINHAS REDES SOCIAIS"
    btn_projetos2_mysocialmedias.style.fontSize = "14pt"
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