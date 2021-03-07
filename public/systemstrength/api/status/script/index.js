// let spinnerWrapper = document.querySelector('.spinner-wrapper');

function DoRequest(){


    var url = 'https://apisystemstrength.herokuapp.com/products';

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);

    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

  //  document.getElementById("resposta").innerHTML = xhttp.responseText;
    if ( xhttp.status == 304 || xhttp.status == 200) {//Verifica se o retorno do servidor deu certo
    console.log('Services is OK' + "\n" + "Server Status: " + xhttp.status);
    //spinnerWrapper.parentElement.removeChild(spinnerWrapper);
    document.querySelector('.status-title-text').innerHTML = "Services are operational."
    document.querySelector('.status-ball1').style.cssText = "background-color: rgb(9, 255, 0);"
    document.querySelector('.status-ball2').style.cssText = "background-color: rgb(9, 255, 0);"
    document.querySelector('.status-ball3').style.cssText = "background-color: rgb(9, 255, 0);"
    document.querySelector('.status-ball4').style.cssText = "background-color: rgb(9, 255, 0);"
    document.querySelector('.status-ball5').style.cssText = "background-color: rgb(9, 255, 0);"
    }else if(xhttp.status == 404){
      console.log('Server is NOT FOUND' + "\n" + "Server Status: " + xhttp.status);
      //spinnerWrapper.parentElement.removeChild(spinnerWrapper);
      document.getElementById('status-img-geral').src = "https://cdn.discordapp.com/attachments/756546249901211749/817162843555495936/error.png"
      document.querySelector('.status-ball1').style.cssText = "background-color: rgb(255, 0, 0);"
      document.querySelector('.status-ball2').style.cssText = "background-color: rgb(255, 0, 0);"
      document.querySelector('.status-ball3').style.cssText = "background-color: rgb(255, 0, 0);"
      document.querySelector('.status-ball4').style.cssText = "background-color: rgb(255, 0, 0);"
      document.querySelector('.status-ball5').style.cssText = "background-color: rgb(255, 0, 0);"
      document.querySelector('.status-title-text').innerHTML = "Server is NOT FOUND"
    }else{
      console.log('Services is NOTOK' + "\n" + "Server Status: " + xhttp.status);
      //spinnerWrapper.parentElement.removeChild(spinnerWrapper);
      document.getElementById('status-img-geral').src = "https://cdn.discordapp.com/attachments/756546249901211749/817162843555495936/error.png"
      document.querySelector('.status-ball1').style.cssText = "background-color: rgb(255, 0, 0);"
      document.querySelector('.status-ball2').style.cssText = "background-color: rgb(255, 0, 0);"
      document.querySelector('.status-ball3').style.cssText = "background-color: rgb(9, 255, 0);"
      document.querySelector('.status-ball4').style.cssText = "background-color: rgb(255, 0, 0);"
      document.querySelector('.status-ball5').style.cssText = "background-color: rgb(9, 255, 0);"
      document.querySelector('.status-title-text').innerHTML = "We have a problem with our services"
    }
    const obj = JSON.parse(xhttp.responseText)
    console.log(obj.response)
}

function semetimer(){
  setTimeout(() => {
    console.log("Tempo: " + second + " " + millisecond + " ") 
    pause();
  },1500);
}

"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;


function start() {
  pause();
  cron = setInterval(() => { timer(); }, 1);
}

function pause() {
  clearInterval(cron);
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  returnData(second)
  returnData(millisecond)
}

function returnData(input) {
  return input > 10 ? input : `0${input}`
}

function ApperStatus(){
  var node = document.getElementById("BaseStatus");
  node.parentNode.removeChild(node)
  document.getElementById('BaseStatusTitle').style.visibility = "none"
}

function DessapirStatus(){
  var node = document.getElementById("BaseStatus");
  node.parentNode.appendChild(node)
  document.getElementById('BaseStatusTitle').style.visibility = "none"
}

function AlertUnderDevelopment(){
  alert('Under Development!!');
}