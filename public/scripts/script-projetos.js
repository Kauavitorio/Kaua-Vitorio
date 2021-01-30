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
}

function change_to_ptbr(){
    document.getElementById("txt_recent_projcts").innerHTML = "PROJETOS RECENTES"
    document.getElementById("txt_about_palacepetz").innerHTML = "Esse projeto foi desenvolvido para meu trabalho de conclusão de modulo, desenvolvido no visual studio, com a linguagem csharp, com o intuito de criar um sistema de gerenciamento para uma empresa de pet shop"
    document.getElementById("txt_view_project_palace").innerHTML = "Visualizar Projeto ->"
    document.getElementById("txt_desc_system_mobile").innerHTML = "Esse projeto foi desenvolvido para meu trabalho de conclusão do 2° modulo, desenvolvido no Android Studio, com a linguagem java, com o intuito de criar uma aplicação de uso interno dos sócios da System Strength servindo como agenda aos sócios."
    document.getElementById("txt_view_project_system_mobile").innerHTML = "Visualizar Projeto ->"
    document.getElementById("txt_desc_coffee_project").innerHTML = "Esse projeto está em desenvolvimento, ele está sendo desenvolvido no Android Studio com a linguagem Java. Seu intuito é minha aprendizagem e de meus companheiros de estudo."
    document.getElementById("txt_knowmore_project_coffee").innerHTML = "Saiba Mais..."
}