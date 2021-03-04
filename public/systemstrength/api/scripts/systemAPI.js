var menulateral = document.getElementById('menulateral');
var btnMenuLateral = document.getElementById('btnMenuLateral');

function OpenLateralMenu(){
    menulateral.style.display = "block"
    btnMenuLateral.style.display = "none"
    setTimeout(() => {
        menulateral.style.width = "70px"
        console.log('Menu Lateral is open');
    },100);
}

function CloseLateralMenu(){
    setTimeout(() => {
        menulateral.style.width = "0px"
        setTimeout(() => {
            btnMenuLateral.style.display = "block"
            menulateral.style.display = "none"
        },500);
        console.log('Menu Lateral is closed');
    },50);
}

function AlertUnderDevelopment(){
    alert('Under Development')
}