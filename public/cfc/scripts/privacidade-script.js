var BtnVisitiMobile = document.getElementById("BtnVisiteMobile");
var ImageBR = "https://cdn.countryflags.com/thumbs/brazil/flag-3d-round-250.png"
var ImageUsa = "https://cdn1.iconfinder.com/data/icons/rounded-flat-country-flag-collection-1/2000/us-01.png"

function Translate(){
    if(BtnVisitiMobile.innerHTML == "Read Documentation"){
    change_to_ptbr();
    document.getElementById('BtnTranslateCFCPriv').style.backgroundImage = "url(" + ImageUsa +")"
        console.log('WebSite is translated in Portuguese')
    }else if(BtnVisitiMobile.innerHTML == "Ler Documentação"){
        change_to_en();
        document.getElementById('BtnTranslateCFCPriv').style.backgroundImage = "url(" + ImageBR +")"
        console.log('WebSite is translated in English')
    }
}


function change_to_en(){
    document.getElementById('title_dec_mobile').innerHTML = "• When the user creates an account / profile on the Coffee For Code platform: these data are the basic identification data, such as name, CPF, E-mail, address. From them, we can identify the user and the visitor, in addition to ensuring greater security and well-being to their needs. • When a user and visitor accesses the OR pages of the Coffee For Code application: how information about interaction and access is collected by the company to ensure a better experience for the user and visitor. This data can deal with the keywords used in a search, the sharing of a specific document, comments, page views, profiles, a URL from which the user and visitor come from, the browser they use and their access IPs, among others that remain stored and retained.\nA platform undertakes to apply technical and organizational measures to protect personal data from unauthorized access and from the location of destruction, loss, alteration, communication or dissemination of such data."
    document.getElementById('txtDescRecentProjects').innerHTML = "The Coffee for code website is still under development, it will be a place for you to carry out more actions and for Coffee for code employees to insert new products"
    document.getElementById('BtnTranslateCFCPriv').style.backgroundImage = "url(" + ImageBR +")"
    document.getElementById("BtnVisiteMobile").innerHTML = "Read Documentation"
}

function change_to_ptbr(){
    document.getElementById('title_dec_mobile').innerHTML = "• Quando o usuário cria uma conta/perfil na plataforma Coffee For Code: esses dados são os dados de identificação básicos, como nome, CPF, E-mail, endereço. A partir deles, podemos identificar o usuário e o visitante, além de garantir uma maior segurança e bem-estar às suas necessidades. • Quando um usuário e visitante acessa OU páginas do aplicativo Coffee For Code: as informações sobre interação e acesso são coletadas pela empresa para garantir uma melhor experiência ao usuário e visitante. Estes dados podem tratar sobre as palavras-chaves utilizadas em uma busca, o compartilhamento de um documento específico, comentários, visualizações de páginas, perfis, a URL de onde o usuário e visitante provêm, o navegador que utilizam e seus IPs de acesso, dentre outras que poderão ser armazenadas e retidas.\nA plataforma se compromete a aplicar as medidas técnicas e organizativas aptas a proteger os dados pessoais de acessos não autorizados e de situações de destruição, perda, alteração, comunicação ou difusão de tais dados."
    document.getElementById('txtDescRecentProjects').innerHTML = "O site Coffee for code ainda está em desenvolvimento, será um lugar para você realizarem mais ações e para Coffee for code inserir novos produtos"
    document.getElementById('BtnTranslateCFCPriv').style.backgroundImage = "url(" + ImageUsa +")"
    document.getElementById("BtnVisiteMobile").innerHTML = "Ler Documentação"
}