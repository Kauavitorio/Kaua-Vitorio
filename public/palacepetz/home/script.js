//Slideshow com texto e imagem
var id_user = document.getElementById("checkUserId").innerHTML;
let time = 5000,
    currentImageWeb = 0,
    currentTexttitWeb = 0,
    currentTextsubWeb = 0,
    text_tit = document.querySelectorAll(".texts h1"),
    text_sub = document.querySelectorAll(".texts h2"),
    images = document.querySelectorAll(".sliders img")
    maximg = images.length;
    maxtexttit = text_tit.length;
    maxtextsub = text_sub.length;

    function nextImage(){
        images[currentImageWeb].classList.remove("selected")

        currentImageWeb++

        if(currentImageWeb >= maximg)
            currentImageWeb = 0

        images[currentImageWeb].classList.add("selected")
    }
    function nextText1(){
        text_tit[currentTexttitWeb].classList.remove("first1")

        currentTexttitWeb++
        
        if(currentTexttitWeb >= maxtexttit){
            currentTexttitWeb = 0
        }  

        text_tit[currentTexttitWeb].classList.add("first1")  
    }
    function nextText2(){
        text_sub[currentTextsubWeb].classList.remove("first2")

        currentTextsubWeb++

        if(currentTextsubWeb >= maxtextsub){
            currentTextsubWeb = 0
        }  

        text_sub[currentTextsubWeb].classList.add("first2")
    }

    function startImage(){
        setInterval(() => {
            //Troca Imagem
            nextImage();
        }, time)
    }

    function startText1(){
        setInterval(() => {
            //Troca text
            nextText1();
        }, time)
    }

    function startText2(){
        setInterval(() => {
            //Troca text
            nextText2();
        }, time)
    }

    function ShoppingCart(){
        var spanCountCart = document.getElementById('lblCartCount').innerHTML
        if (spanCountCart == "0" || spanCountCart == "@ViewBag.cartsize" || spanCountCart == "" || spanCountCart == " ") 
            document.getElementById('lblCartCount').style.display = "none"
    }

    function LogoutOrLoginText() {
        var txt_login_or_logout = document.getElementById('LogoutOrLogin')
        if (id_user != 0) {
            txt_login_or_logout.innerHTML = "SAIR";   
            txt_login_or_logout.href = "/logout/1";
        }
        else {
            txt_login_or_logout.innerHTML = "ENTRAR";  
            txt_login_or_logout.href = "/login";
        }         
    } 

    function SeeMyOrders(){
        var txt_orders = document.getElementById('SeeMyOrders')
        if (id_user != 0)
            txt_orders.href = "/meus-pedidos";
        else
            alert("Para acessar os pedidos é necessário estar logado.")  
    }
    function SeeMyCart(){
        var txt_cart = document.getElementById('SeeMyCart')
        if(id_user != 0)
            txt_cart.href = "/meu-carrinho"
        else
            alert("Para acessar o carrinho é necessário estar logado.")
    }
    function SeeMyProfile(){
        var txt_profile = document.getElementById('SeeMyProfile')
        if(id_user != 0){
            txt_profile.href = "/perfil"
        }else
            alert("Para acessar seu perfil é necessário estar logado.")
    }

window.addEventListener("load", startText1)
window.addEventListener("load", startText2)
window.addEventListener("load", startImage)
window.addEventListener("load", ShoppingCart)
window.addEventListener("load", LogoutOrLoginText)