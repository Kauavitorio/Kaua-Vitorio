function loading(){
    const progress = document.querySelector('.progress-done');

setTimeout(() => {
    progress.style.opacity =1;
    progress.style.width = progress.getAttribute('data-done') + '%';
    progress.innerHTML = progress.getAttribute('data-done') + '%';
}, 500);
}

function btnalert(){
    alert(`⚙️A pagina de contato ainda está em desenvolvimento!!🔧\nÉ possivel acompanhar o progresso do desenvolvimento do site pela barra abaixo,\ncom o indicativo do porcentual de progresso que esta em 38% no momento.\nNo momento estamos fazendo o corpo do site para a melhor visualização do publico\nCaso haja mais alguma duvida pode estar entrando em contato com este email: kauavitorioof@gmail.com`)
}