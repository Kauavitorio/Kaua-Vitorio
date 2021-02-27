const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieAlert", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieAlert")) {
    cookieContainer.classList.add("active");
  }
}, 2000);

function Gotowhyineedtoaccept(){
  window.location.href = "https://www.kauavitorio.com/CookieAlert/whyineedtoaccept";
}