var btn_traduzir = document.getElementById("translate_text");

function traduzir(){
    if(btn_traduzir.innerHTML == "Ingles"){
        btn_traduzir.innerHTML = "Português"
        document.getElementById("txt_btn_principal").innerHTML = "Main"
        document.getElementById("txt_btn_contato").innerHTML = "Contact"
        document.getElementById("txt_parceiros_kaua").innerHTML = "Kaua's Partners"
        document.getElementById("txt_oque_parceiros").innerHTML = "What are the partners?"
        document.getElementById("txt_btn_principal").innerHTML = "Main"
        document.getElementById("txt_btn_principal").innerHTML = "Main"


    }else {
        window.location.reload();
    }
}