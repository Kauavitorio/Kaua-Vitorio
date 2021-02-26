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
  window.document.querySelector('.txtvoltar').innerHTML = "Go Back"
  window.document.querySelector('.title').innerHTML = "Contact me"
  window.document.querySelector('.text').innerHTML = "Here you can contact me through my social networks or even sending me a message next door."
  document.getElementById("txt_social_medias").innerHTML = "Social Medias"
  document.getElementById("txt_contactme").innerHTML = "Contact me"
  document.getElementById("txt_input_name").innerHTML = "Name"
  document.getElementById("txt_input_phone") = "Phone"
  document.getElementById("txt_input_mensage").innerHTML = "Mensage*"
  document.getElementById("txt_btn_send").value = "Send"
}

function change_to_ptbr(){
  window.document.querySelector('.txtvoltar').innerHTML = "Voltar"
  window.document.querySelector('.title').innerHTML = "Contate-me"
  window.document.querySelector('.text').innerHTML = "Aqui você pode entrar em contato comigo através das minhas redes sociais ou até mesmo mandar uma mensagem na porta ao lado."
  document.getElementById("txt_social_medias").innerHTML = "Redes Sociais"
  document.getElementById("txt_contactme").innerHTML = "Contate-me"
  document.getElementById("txt_input_name").innerHTML = "Nome*"
  document.getElementById("txt_input_phone").innerHTML = "Telefone"
  document.getElementById("txt_input_mensage").innerHTML = "Mensagem*"
  document.getElementById("txt_btn_send").value = "Enviar"
  document.querySelector(".desc_cookie").innerHTML = "Usamos cookies neste site para lhe dar a melhor experiência em nosso site. Para saber mais, leia nossa política de privacidade e política de cookies."
  document.querySelector(".cookie-btn").innerHTML = "Eu concordo"
}


/*Copyright (c) 2020 Kauã Vitorio*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

$("#telefone, #celular").mask("(00) 00000-0000");

function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    document.getElementById("msgemail").innerHTML="E-mail válido";
    alert("E-mail valido");
    }
    else{
    document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
    alert("E-mail invalido");
    }
    }