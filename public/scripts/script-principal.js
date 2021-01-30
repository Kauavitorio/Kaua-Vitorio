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



 // ------------  Start Cookie create --------------------
function createCookie(lang, value, expira){
    var dtExpira = "expires="+ expira;
    document.cookie = lang + "=" + value + "; " + dtExpira;     
}

function ReadCookie(lang){
    var linguagem = lang + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++){
        var c = ca[i];
        while (c.charAt(0)==' '){
            c = c.substring(1);
        }
        if(c.indexOf(linguagem) == 0)
        return c.substring(linguagem.length,c.length);
    }
    return "";
}

function initCookie(){
    var linguagemDef = ReadCookie("linguagem")
    if(linguagemDef == "English" || linguagemDef == "EN-US"){
        change_to_en();
            btn_mudar_idioma_ingles.style.display = "none";
    }else if(linguagemDef == "Portugues" || linguagemDef == "Português" || linguagemDef == "PT-BR"){
        change_to_ptbr();
    }
    else{
        // linguagemDef = prompt('Escolha um idioma\nChoose a language\nPT-BR = "Português",\nEN-US = "English"', "" );
        linguagemDef = prompt('Escolha um idioma || Choose a language\nPT-BR = "Português" || EN-US = "English"', "" );
        if (linguagemDef == "" && linguagemDef == null){
            window.location.reload();
        }else if (linguagemDef == "English" || linguagemDef == "EN-US"){
            createCookie("linguagem", linguagemDef, " Tue, 01 Jan 2060 12:00:00 UTC");
            window.location.reload();
        }else if (linguagemDef == "Portugues" || linguagemDef == "Português" || linguagemDef == "PT-BR"){
            createCookie("linguagem", linguagemDef, " Tue, 01 Jan 2060 12:00:00 UTC");
            window.location.reload();
        }else {
            window.location.reload();
        }
    }
}// -------------------- End Cookie Create   --------------------

//  Ids of menu
var pt1 = window.document.querySelector('.pt1')
var pt2 = window.document.querySelector('.pt2')
var pt3 = window.document.querySelector('.pt3')
var pt4 = window.document.querySelector('.pt4')
var pt5 = window.document.querySelector('.pt5')

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

function change_to_en(){
    btn_mudar_idioma_ptbr.style.display = "block",
    btn_mudar_idioma_ingles.style.display = "none",
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
    txt_click_youtube.innerHTML = "*Clique em ”Youtube” para ser redirecionado ao meu canal.",
    btn_projetos2_mysocialmedias.value = "MY SOCIAL MEDIAS"
    btn_projetos2_mysocialmedias.style.fontSize = "20px"
}

function change_to_ptbr(){
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