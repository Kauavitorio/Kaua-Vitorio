
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
    document.getElementById('title_softwaredev').innerHTML = "Software Developer"
    document.getElementById('title_dec').innerHTML = "Hi! My name is Kauã Vitório da Silva Lima, I am 16 years old, I was born in Lins interior of SP where I lived until I was 12 years old. Soon after I moved to São Paulo capital, always interested in gender, but not exactly in the area of programming. I currently live in Osasco and I am studying Systems Development at ETEC Basilides de Godoy."
    document.getElementById('BtnReadMore').innerHTML = "Read More"
    document.getElementById('txtRecentProjects').innerHTML = "Recent Projects"
    document.getElementById('txtMobileDeveloper').innerHTML = "Mobile Developer"
    document.getElementById('txtDescRecentProjects').innerHTML = "I started my projects on May 3, 2020, with the intention of learning and being able to disseminate my work and my learning, I am currently focusing on mobile development but I have knowledge in Windows Forms, ASP .NET MVC, HTML, CSS, JS and PHP."
    document.getElementById('txt_desc_twitch').innerHTML = "I stream almost every day on the twitch about programming and developing projects, I started a short time ago but I am striving to bring the best quality and fun possible."
    document.getElementById('txt_click_twitch').innerHTML = "* Click on “Twitch” to be redirected to my channel."
    document.getElementById('txt_desc_instagram').innerHTML = "Instagram is the social network that I spend the most time and interact with the most, but I don't do publications very often."
    document.getElementById('txt_click_instagram').innerHTML = "* Click on ”Instagram” to be redirected to my channel."
    document.getElementById('txt_desc_youtube').innerHTML = "On Youtube I will be posting some moments from my streams where I teach some tips or some of my knowledge about programming."
    document.getElementById('txt_click_youtube').innerHTML = "*Clique em ”Youtube” para ser redirecionado ao meu canal."
    document.getElementById('desc_cookie').innerHTML = "We use cookies in this website to give you the best experience on our site. To find out more, read our privacy policy and cookie policy"
    document.getElementById('Btniaceept').innerHTML = "I accept"
    document.getElementById('btn_whyineedtoaccept').innerHTML = "Why i need to accept?"
}

function change_to_ptbr(){
    document.getElementById('title_softwaredev').innerHTML = "Desenvolvedor de Software"
    document.getElementById('title_dec').innerHTML = "Oi! Meu nome é Kauã Vitório da Silva Lima, tenho 16 anos, nasci em Lins interior de SP onde morei até os 12 anos. Logo depois me mudei para a capital paulista, sempre interessado em gênero, mas não exatamente na área de programação. Atualmente moro em Osasco e estudo Desenvolvimento de Sistemas na ETEC Basilides de Godoy."
    document.getElementById('BtnReadMore').innerHTML = "Ler mais"
    document.getElementById('txtRecentProjects').innerHTML = "Projetos Recentes"
    document.getElementById('txtMobileDeveloper').innerHTML = "Desenvolviemntos"
    document.getElementById('txtDescRecentProjects').innerHTML = "Iniciei meus projetos no dia 3 de maio de 2020, com o intuito de aprender e poder divulgar meu trabalho e meu aprendizado, atualmente estou focando em desenvolvimento mobile mas tenho conhecimentos em Windows Forms, ASP .NET MVC, HTML, CSS, JS e PHP."
    document.getElementById('txt_desc_twitch').innerHTML = "Eu transmito quase todos os dias no twitch sobre programação e desenvolvimento de projetos, comecei há pouco tempo, mas estou me esforçando para trazer a melhor qualidade e diversão possível."
    document.getElementById('txt_click_twitch').innerHTML = "* Clique em “Twitch” para ser redirecionado ao meu canal."
    document.getElementById('txt_desc_instagram').innerHTML = "Instagram é a rede social com a qual passo mais tempo e interajo, mas não faço publicações com muita frequência."
    document.getElementById('txt_click_instagram').innerHTML = "* Clique em ”Instagram” para ser redirecionado ao meu canal."
    document.getElementById('txt_desc_youtub').innerHTML = "No Youtube estarei postando alguns momentos dos meus streams onde ensino algumas dicas ou alguns dos meus conhecimentos sobre programação."
    document.getElementById('txt_click_youtube').innerHTML = "* Clique em ” Youtube” para ser redirecionado ao meu canal."
    document.querySelector(".desc_cookie").innerHTML = "Usamos cookies neste site para lhe dar a melhor experiência em nosso site. Para saber mais, leia nossa política de privacidade e política de cookies."
    document.querySelector(".cookie-btn").innerHTML = "Eu concordo"
    document.getElementById('btn_whyineedtoaccept').innerHTML = "Por que eu preciso aceitar?"
}
