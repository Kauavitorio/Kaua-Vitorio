var qr_btn = document.querySelector("#qr-btn")
var qr_img = document.querySelector("#qr-img")
var loading = document.querySelector("#loading")

qr_btn.addEventListener("click", () => {
    // loading
    loading.style.display = "block"
    qr_img.onload = function() {
        loading.style.display = "none"
    }

    // generate image
    var input = document.querySelector("#input").value
    var url = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${input}&format=png&ecc=M&charset-target=UTF-8`
    qr_img.src = url
})


/* =======================================================
* WebSite Name: Kaua Vitorio - Protifolio v2.0.0
* WebSite URL: https://kauavitorio.com/
* Author: https://github.com/kauavitorio
* License: https://github.com/Kauavitorio/Kaua-Vitorio/blob/main/LICENSE
   ======================================================== */