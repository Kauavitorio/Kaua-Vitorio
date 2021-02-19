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

function change_to_en(){
    btn_mudar_idioma_ptbr.style.display = "block",
    btn_mudar_idioma_ptbr.style.marginLeft = "-80px",
    btn_mudar_idioma_ingles.style.display = "none"
    document.getElementById("txt_main").innerHTML = "Main"
    document.getElementById("txt_intro").innerHTML = "Introduction"
    document.getElementById("txt_projects").innerHTML = "Projects"
    document.getElementById("text_desciption_project").innerHTML = "This is a project that I am developing for my learning and training what I am learning my course, this project is in version 1.0, start date 02/17/21."
    document.getElementById("btn_download").value = "Download here"}

function change_to_ptbr(){
    btn_mudar_idioma_ptbr.style.display = "none",
    btn_mudar_idioma_ingles.style.display = "block"
    document.getElementById("txt_main").innerHTML = "Main"
    document.getElementById("txt_intro").innerHTML = "Introdução"
    document.getElementById("txt_projects").innerHTML = "Projetos"
    document.getElementById("text_desciption_project").innerHTML = "Esse é um projeto que estou desenvolvendo para meu aprendizado e treinar oque estou apreendendo meu meu curso, esse projeto esta na versão 1.0, data de inicio 17/02/21."
    document.getElementById("btn_download").value = "Baixar aqui"}