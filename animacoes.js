window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 150);
})

function limpar()
{
    //var nome = document.getElementById(".txtnome")
    //var email = document.getElementById(".txtemail")

    document.getElementById("inputnome").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputtext").value = "";
    document.getElementById("inputnome").focus();
}

function enviar()
{
    var nome =  document.getElementById("inputnome");
    var email = document.getElementById("inputEmail");
    var textt =  document.getElementById("inputtext");

    if (nome.value == "") {
        alert("Nome não informado!");
        nome.focus();
        return;
    }
    if (email.value == "") {
        alert("Email não informado!");
        email.focus();
        return;
    }
    if (textt.value == "") {
        alert("Mensagem não informado!");
        textt.focus();
        return;
    }

    alert("Sua duvida foi enviada para Kauã, em breve você recebera uma resposta em seu email")
    nome.value = "";
    email.value = "";
    textt.value = "";
}

function aviso(){
    alert("❗️ O recurso de duvida esta indisponivel no momento ❗️\n🔨 Estou corigindo alguns bugs 🔨 ");
}

