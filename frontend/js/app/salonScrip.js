// -----------------------------FORMULARIO MESA ------------------------------







// --------------- funciones para las mesas -----------------





async function mostrarTodasLasMesas() {
    const response = await fetch("http://localhost:8080/mesas/verMesas");
    const mesas = await response.json();

    const contenedorMesas = document.getElementById("verMesas");

    // Limpiar el contenedor
    contenedorMesas.innerHTML = "";

    mesas.forEach((mesa) => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjetaMesa";
        tarjeta.id = "colorEstado"
        const dibujoMesa = document.createElement("div");
        dibujoMesa.className = "mesa";

        let estadoTexto = "";
        if (mesa.estado === "Libre") {
            estadoTexto = "Libre";
            tarjeta.style.borderColor = "#3498db";
        } else if (mesa.estado === "Reservada") {
            estadoTexto = "Reservada";
            tarjeta.style.borderColor = "#ffc107";
        } else if (mesa.estado === "Ocupada") {
            estadoTexto = "Ocupada";
            tarjeta.style.borderColor = "#d9534f";
        } else {
            estadoTexto = "Desconocido"; 
        }

        dibujoMesa.innerHTML += `
            <p class="numero-mesa">MESA ${mesa.numeroDeMesa}</p>
            <p class="estadoMesa">Estado: ${estadoTexto}</p>
            <button class="crearCuenta">Abrir Cuenta</button>
            <button class="reservarMesa">Reservar Mesa</button>
        `;

        tarjeta.appendChild(dibujoMesa);

        contenedorMesas.appendChild(tarjeta);

        const botonCrearCuenta = tarjeta.querySelector(".crearCuenta");
        botonCrearCuenta.addEventListener("click", async () => {
            await desplegarNuevaCuenta(); // Llamar a la fun cuenta
        });
    });
}

mostrarTodasLasMesas();










// ------------------ agregar mesa --------------------
