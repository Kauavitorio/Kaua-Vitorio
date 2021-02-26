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
        if (document.getElementById("txt_home").innerHTML == "Home"){
            document.getElementById("txt_change_en").style.display = "none";
            document.getElementById("txt_change_pt").style.display = "block";
            document.getElementById("txt_change_pt").style.marginLeft = "-70%";
        }else {
            change_to_en();
            document.getElementById("txt_change_en").style.display = "none";
        }
    }else if(linguagemDef == "Portugues" || linguagemDef == "Português" || linguagemDef == "PT-BR" || linguagemDef == "português" || linguagemDef == "portugues"){
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
        }else if (linguagemDef == "Portugues" || linguagemDef == "Português" || linguagemDef == "PT-BR" || linguagemDef == "português" || linguagemDef == "portugues"){
            createCookie("linguagem", linguagemDef, " Tue, 01 Jan 2060 12:00:00 UTC");
            window.location.reload();
        }else {
            window.location.reload();
        }
    }
}// -------------------- End Cookie Create   --------------------

function change_to_en(){
    document.getElementById("txt_change_pt").style.display = "block"
    document.getElementById("txt_change_pt").style.marginLeft = "-70%";
    document.getElementById("txt_change_en").style.display = "none"
    document.getElementById("txt_home").innerHTML = "Home"
    document.getElementById("txt_about").innerHTML = "About"
    document.getElementById("txt_download").innerHTML = "Download"
    document.getElementById("txt_projects").innerHTML = "Projects"
    document.getElementById("txt_slogan_cfc").innerHTML = "Coffee to start<br>your day!"
    document.getElementById("know_more").innerHTML = "Know more"
}

function change_to_ptbr(){
    document.getElementById("txt_change_pt").style.display = "none"
    document.getElementById("txt_change_en").style.display = "block"
    document.getElementById("txt_home").innerHTML = "Inicio"
    document.getElementById("txt_about").innerHTML = "Sobre"
    document.getElementById("txt_download").innerHTML = "Baixar"
    document.getElementById("txt_projects").innerHTML = "Projetos"
    document.getElementById("txt_slogan_cfc").innerHTML = "O Café para<br>começar seu dia!"
    document.getElementById("know_more").innerHTML = "Saiba mais"
    document.querySelector(".desc_cookie").innerHTML = "Usamos cookies neste site para lhe dar a melhor experiência em nosso site. Para saber mais, leia nossa política de privacidade e política de cookies."
    document.querySelector(".cookie-btn").innerHTML = "Eu concordo"
}

function goToHome(){
    window.location.href = "https://www.kauavitorio.com";
}