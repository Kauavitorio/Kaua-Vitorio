function loading(){
    const progress = document.querySelector('.progress-done');

setTimeout(() => {
    progress.style.opacity =1;
    progress.style.width = progress.getAttribute('data-done') + '%';
    progress.innerHTML = progress.getAttribute('data-done') + '%';
}, 500);
}

// Animação da tela de projetos
