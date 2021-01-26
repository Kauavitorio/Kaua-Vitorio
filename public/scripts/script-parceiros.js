var btn_traduzir = document.getElementById("translate_text");

function traduzir(){
    if(btn_traduzir.innerHTML == "Ingles"){
        btn_traduzir.innerHTML = "Português"
        document.getElementById("txt_email_to_contact").style.display = "block"
        document.getElementById("txt_btn_principal").innerHTML = "Main"
        document.getElementById("txt_btn_contato").innerHTML = "Contact"
        document.getElementById("txt_parceiros_kaua").innerHTML = "Kaua's Partners"
        document.getElementById("txt_oque_parceiros").innerHTML = "What are the partners?"
        document.getElementById("txt_desc_oqsao_parceiros").innerHTML = "Partners are people in whom I have confidence and I like the content and that is why I closed a partnership with these people so that we can grow together, even though not all of them having content as a programming, I make partnerships in the same way. Being a partner does not mean that it is necessary to invest in my channel with money, no and that is what I am looking for ... I am looking for dissemination opportunities so that we can grow together"
        document.getElementById("txt_desc_be_partner").innerHTML = "Are you interested in becoming a partner of my channel? Cool I'm looking forward to having you by my side on this immense journey, contact this email: contato.kauavitorio@gmail.com stating your name, age, product (your channel, brand or product) and why you are interested in doing this partnership and wait for a response. Ps. The answer is not immediate."
        document.getElementById("txt_seja_parceiro").innerHTML = "Be Partner"


    }else {
        window.location.reload();
    }
}

function FirstStep(){
    document.getElementById("txt_email_to_contact").style.display = "none";

}