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
        if (document.getElementById("txt_btn_principal").innerHTML == "Main"){
            document.getElementById("translate_text_en").style.display = "none";
            document.getElementById("txt_email_to_contact").style.display = "none";
        }else {
            change_to_en();
            document.getElementById("translate_text_en").style.display = "none";
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
    document.getElementById("translate_text_ptbr").style.display = "block"
    document.getElementById("translate_text_en").style.display = "none"
    document.getElementById("txt_email_to_contact").style.display = "block"
    document.getElementById("txt_btn_principal").innerHTML = "Main"
    document.getElementById("txt_btn_contato").innerHTML = "Contact"
    document.getElementById("txt_parceiros_kaua").innerHTML = "Kaua's Partners"
    document.getElementById("txt_oque_parceiros").innerHTML = "What are the partners?"
    document.getElementById("txt_desc_oqsao_parceiros").innerHTML = "Partners are people in whom I have confidence and I like the content and that is why I closed a partnership with these people so that we can grow together, even though not all of them having content as a programming, I make partnerships in the same way. Being a partner does not mean that it is necessary to invest in my channel with money, no and that is what I am looking for ... I am looking for dissemination opportunities so that we can grow together"
    document.getElementById("txt_desc_be_partner").innerHTML = "Are you interested in becoming a partner of my channel? Cool I'm looking forward to having you by my side on this immense journey, contact this email: contato.kauavitorio@gmail.com stating your name, age, product (your channel, brand or product) and why you are interested in doing this partnership and wait for a response. Ps. The answer is not immediate."
    document.getElementById("txt_seja_parceiro").innerHTML = "Be Partner"
    document.getElementById("txt_about_ydangg").innerHTML = "Hello, my name is Yuri ”YDanGG” Dantas, I am 17 years old and I live in Goiânia / GO. I have always been passionate about games, movies, series and everything that involves entertainment, even with limited financial conditions, I have always given my way of doing what I love, which is to play. Like most current gamers, I entered this world of internet, playing minecraft, so I switched to cs: go, and currently I am not stuck in just one game, but in several that amuse me. In 2016 I had a minecraft channel that didn't go far. In 2020 I started stream Valorant, I loved this world of streaming, and even if I didn't focus on Valorant, I continued with the streams, I went through some moments where I took some temporary breaks with the streams, but I came back with everything recently. My main focus with streams is to have as many people as possible, as well as having fun, if you liked the text and want to know my channel on twitch, click on my name above. Thank you for understanding."
}

function change_to_ptbr(){
    document.getElementById("translate_text_ptbr").style.display = "none"
    document.getElementById("translate_text_en").style.display = "block"
    document.getElementById("txt_email_to_contact").style.display = "block"
    document.getElementById("txt_btn_principal").innerHTML = "Principal"
    document.getElementById("txt_btn_contato").innerHTML = "Contaro"
    document.getElementById("txt_parceiros_kaua").innerHTML = "Parceiros de Kaua"
    document.getElementById("txt_oque_parceiros").innerHTML = "Oque são os parceiros?"
    document.getElementById("txt_desc_oqsao_parceiros").innerHTML = "Parceiros são pessoas em que eu tenho confiança e gosto do conteúdo e por isso fechei uma parceria com essas pessoas para que possamos crescer juntas, mesmo nem todas tendo como conteúdo programação realizo parcerias da mesma maneira. Ser um parceiros não significa que e necessário fazer investimento em meu canal com dinheiro, não e isso que estou buscando..estou buscando oportunidades de divulgação para que possamos crescer juntos."
    document.getElementById("txt_desc_be_partner").innerHTML = "Está interessado em virar parceiro de meu canal? Legal estou ansioso em ter você ao meu lado nessa imensa jornada, entre em contato com esse email: contato.kauavitorio@gmail.com informando seu nome, idade, produto(seu canal, marca ou produto) e o porque está interessado em fazer essa parceria e aguarde uma resposta. Ps. A resposta não é imediata."
    document.getElementById("txt_seja_parceiro").innerHTML = "Seja Parceiro"
    document.getElementById("txt_about_ydangg").innerHTML = "Olá, me chamo Yuri ”YDanGG” Dantas, tenho 17 anos e moro em Goiânia/GO. Sempre fui apaixonado em jogos, filmes, series e tudo que envolva entreterimento, mesmo com poucas condições financeiras, sempre dei meu jeito de fazer o que amo, que é jogar. Assim como a maioria dos gamers atuais, entrei nesse mundo de internet, jogando minecraft, assim passei para o cs:go, e atualmente não me prendo em apenas um jogo, e sim em varios que me divertem. Em 2016 eu tive um canal de minecraft que não foi muito pra frente. Em 2020 comecei à stremar Valorant, adorei esse mundo de stream, e mesmo não me focando ao Valorant, continuei com as streams, passei por alguns momentos onde dei algumas pausas temporarias com as streams, porém voltei com tudo recentemente. Meu principal foco com as streams é, divertir o máximo de pessoas, assim como me diverte, caso gostou do texto e queira conhecer meu canal na twitch, clique no meu nome à cima. Obrigado pela compreensão."
}

function FirstStep(){
    document.getElementById("translate_text_en").style.display = "none"
    document.getElementById("txt_email_to_contact").style.display = "none";

}