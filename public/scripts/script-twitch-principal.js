var btn_mudar_idioma_ingles = document.getElementById("btn_mudar_idioma_ingles");
var btn_mudar_idioma_ptbr = document.getElementById("btn_mudar_idioma_ptbr");


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
    document.getElementById("txt_top").innerHTML = "Top"
    document.getElementById("txt_about").innerHTML = "About"
    document.getElementById("txt_partners").innerHTML = "Partners"
    document.getElementById("txt_channel").innerHTML = "Channel"
    document.getElementById("txt_title_about").innerHTML = "About"
    document.getElementById("text_desciption_about").innerHTML = "Hi, my name is Kaua Vitorio, I'm 16 years old. I aim to make lives to rejoice and rejoice those who assist me even though there are few or many people. Gradually the quality of the lives will improve."
    document.getElementById("txt_title_partner").innerHTML = "Partners"
    document.getElementById("txt_desc_partner").innerHTML = "Partners are people in whom I have confidence and I like the content and that is why I closed a partnership with these people so that we can grow together, even though not all of them having content as a programming, I make partnerships in the same way. Being a partner does not mean that it is necessary to invest in my channel with money, no and that is what I am looking for ... I am looking for dissemination opportunities so that we can grow together"
    document.getElementById("btn_seePartners").value = "See Partners"
    document.getElementById("txt_title_design").innerHTML = "Design"
    document.getElementById("txt_desc_design").innerHTML = "All the panels, banner and overlay of my channel were made by myself, I had the idea of doing something original, so I decided to make my own designs expired on Alanzoka's."
}

function change_to_ptbr(){
    btn_mudar_idioma_ptbr.style.display = "none",
    btn_mudar_idioma_ingles.style.display = "block"
    document.getElementById("txt_main").innerHTML = "Principal"
    document.getElementById("txt_top").innerHTML = "Topo"
    document.getElementById("txt_about").innerHTML = "Sobre"
    document.getElementById("txt_partners").innerHTML = "Partners"
    document.getElementById("txt_channel").innerHTML = "Canal"
    document.getElementById("txt_title_about").innerHTML = "Sobre"
    document.getElementById("text_desciption_about").innerHTML = "Opa, me chamo Kaua Vitorio, tenho 16 anos. Tenho como objetivo fazer lives para me alegrar e alegrar quem me assiste mesmo sendo pouca ou muitas pessoas. Aos poucos a qualidade das lives irá melhorar."
    document.getElementById("txt_title_partner").innerHTML = "Parceiros"
    document.getElementById("txt_desc_partner").innerHTML = "Parceiros são pessoas em quem tenho confiança e gosto do conteúdo e por isso fechei uma parceria com essas pessoas para que possamos crescer juntos, mesmo que nem todos tenham conteúdo como programação, faço parcerias da mesma forma . Ser parceiro não significa que seja preciso investir no meu canal com dinheiro, não e é isso que procuro ... Procuro oportunidades de divulgação para que possamos crescer juntos"
    document.getElementById("btn_seePartners").value = "Ver Parceiros"
    document.getElementById("txt_title_design").innerHTML = "Design"
    document.getElementById("txt_desc_design").innerHTML = "Todos os painéis, banner e overlay de meu canal foram feitos por mim mesmo, tive a ideia de fazer algo original, então decidi fazer meus proprios design expirados no do Alanzoka."
}

  /** =======================================================
  * WebSite Name: Kaua Vitorio - Protifolio v1.0.0
  * WebSite URL: https://www.kauavitorio.com/
  * Author: https://github.com/kauavitorio
  * License: https://github.com/Kauavitorio/Kaua-Vitorio/blob/main/LICENSE
  ======================================================== **/