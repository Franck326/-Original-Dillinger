const contPadre = document.querySelector("#verMesas");

contPadre.addEventListener("click", async function(e) {
    const boton = event.target.closest(".crearCuenta");
    if (boton) {
        event.preventDefault();
        desplegarNuevaCuenta();
    }
});

async function desplegarNuevaCuenta() {
    const nuevaCuenta = document.getElementById("ventanaCuenta");
    nuevaCuenta.style.display = "flex";
}

document.addEventListener(`DOMContentLoaded`, function () {
    const cerrarVentanaCuenta = document.getElementById("cerrarVtnCuenta")
    const ventanaCrearCuenta = document.getElementById("ventanaCuenta")
    


    cerrarVentanaCuenta.addEventListener(`click` ,function () {
        ventanaCrearCuenta.style.display = `none`
        
    })

    window.addEventListener(`click`,function(event){
        if(event.target === ventanaCrearCuenta) {
            ventanaCrearCuenta.style.display = `none`;
        }
    } )


    })