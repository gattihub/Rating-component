let  ratingSelection = document.querySelectorAll('button.buttons');

ratingSelection.forEach(element => {
    element.onclick = (evento) => {
    limpar();
    evento.target.classList.add("ativado");
    }
});

function limpar() {
    ratingSelection.forEach(element => {
        element.classList.remove("ativado")
    })
}