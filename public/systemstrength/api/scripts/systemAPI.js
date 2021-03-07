var menulateral = document.getElementById('menulateral');
var btnMenuLateral = document.getElementById('btnMenuLateral');

function OpenLateralMenu(){
    menulateral.style.display = "block"
    btnMenuLateral.style.display = "none"
    setTimeout(() => {
        menulateral.style.width = "70px"
        console.log('Menu Lateral is open');
    },100);
}

function CloseLateralMenu(){
    setTimeout(() => {
        menulateral.style.width = "0px"
        setTimeout(() => {
            btnMenuLateral.style.display = "block"
            menulateral.style.display = "none"
        },500);
        console.log('Menu Lateral is closed');
    },50);
}

function AlertUnderDevelopment(){
    alert('Under Development')
}

/*
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
} */

function Translate(){
    var BtnHome = document.getElementById("BtnHome");
    var ImageBR = "https://cdn.countryflags.com/thumbs/brazil/flag-3d-round-250.png"
    var ImageUsa = "https://cdn1.iconfinder.com/data/icons/rounded-flat-country-flag-collection-1/2000/us-01.png"
    if(BtnHome.innerHTML == "HOME"){
        document.getElementById('BtnHome').innerHTML = "INICIO"
        document.getElementById('BtnStatus').innerHTML = "STATUS"
        document.getElementById('BtnSupport').innerHTML = "SUPORTE"
        document.getElementById('BtnTranslate').innerHTML = "ENGLISH"
        document.getElementById('BtnTranslateMenu').style.backgroundImage = "url(" + ImageUsa +")"
        document.getElementById('TxtIntroductionAPI').innerHTML = "Bem-vindo à versão 1.2 da API System Strength. No botão abaixo você encontrará mais informações sobre a api e como usá-la, você verá métodos, parâmetros e url. Se precisar de ajuda ou suporte, por favor vá para o nosso fórum de suporte de API."
        console.log('WebSite is translated in Portuguese')
    }else if(BtnHome.innerHTML == "INICIO"){
        document.getElementById('BtnHome').innerHTML = "HOME"
        document.getElementById('BtnStatus').innerHTML = "STATUS"
        document.getElementById('BtnSupport').innerHTML = "SUPPORT"
        document.getElementById('BtnTranslate').innerHTML = "PORTUGUES"
        document.getElementById('BtnTranslateMenu').style.backgroundImage = "url(" + ImageBR +")"
        document.getElementById('TxtIntroductionAPI').innerHTML = "Welcome to version 1.2 of System Strength API. On below button you will find more information about api and how to use this api, you will see methods, paramiter and url. If you need help or support, please head over to our API support forum."
        console.log('WebSite is translated in English')
    }
}

function GoToStatus(){
    console.log('Going to status')
    window.location.href = "https://www.kauavitorio.com/systemstrength/api/status";
}

function GoToHome(){
    console.log('Going to home')
    window.location.href = "https://www.kauavitorio.com";
}
