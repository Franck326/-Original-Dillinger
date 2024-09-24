
window.addEventListener(`load`,()=>{
    fetch(`http://localhost:8080/inicio`)
    .then(response => response.text())
    .then(textBienvenida => {
        const elmentBienvenida = document.getElementById("bienvenida");
        elmentBienvenida.textContent = textBienvenida;
    })
    .catch(error => console.log(error));
})