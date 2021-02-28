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

function SeeCookie(){
    var linguagemDef = ReadCookie("linguagem")
    if(linguagemDef == "English" || linguagemDef == "EN-US"){
        change_to_en();
    }
    if(linguagemDef == "Portugues" || linguagemDef == "Português" || linguagemDef == "PT-BR"){
        change_to_ptbr();
    }
}

function change_to_en(){
    document.getElementById("txt_title").innerHTML = "Why i need to accept cookie?"
    document.getElementById("text_desciption").innerHTML = "I use cookies so that you have the best experience on my site, so that you are only asked on the first visit to my site which language will be the default displayed (English, Portuguese).<br>You can see more about cookies by clicking on the ”More Cookies” button below."
}

function change_to_ptbr(){
    document.getElementById("txt_title").innerHTML = "Por que preciso aceitar o cookie?"
    document.getElementById("text_desciption").innerHTML = "Utilizo cookie para que você tenha a melhor experiência em meu site, para que seja perguntado apenas na primeira visita ao meu site qual linguagem será a padrão exibida (Inglês, Português).<br>Você pode ver mais sobre cookies clicando no botão “More Cookies” abaixo."
}