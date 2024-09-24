// -----------------------------FORMULARIO MESA ------------------------------

const botonEnviar = document.getElementById("botonEnviar");

botonEnviar.addEventListener("click", async function(e) {
    e.preventDefault();

    try {
        await enviarFormularioMesa();
    } catch (error) {
        console.error("Error al enviar datos al backend:", error);
    }
});

async function enviarFormularioMesa() {
    const asientos = document.getElementById("asientos").value;
    const datosFormulario = {
        asientos: asientos,
        estado: "Libre"

    };

    try {
        const response = await fetch("http://localhost:8080/mesas/crearMesa", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datosFormulario)
        });
        const mesaCreada = await response.json();
        await mostrarTodasLasMesas();
        ventanaCrearMesa.style.display = `none`;

}catch (error) {
    console.error("Error al enviar datos al backend:", error);

        // Loguea el error para obtener más detalles
        console.error("Error detallado:", error);

        // Intenta manejar el error de manera específica
        if (error instanceof SyntaxError) {
            console.error("Error de sintaxis JSON:", error);
        }

        errorMesa();
        


        await mostrarTodasLasMesas();
    }
}


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

        tarjeta.innerHTML += `

        `;
        const dibujoMesa = document.createElement("div");
            dibujoMesa.className = "mesa"
            dibujoMesa.innerHTML += `
            <p class="numero-mesa">MESA${mesa.numeroDeMesa}</p>
            <p class:"textoAsientos">Asientos:${mesa.asientos}</p>
            <button class="botonBorrar" data-id="${mesa._id}">Borrar</button>
            <button class="botonModificar" data-id="${mesa._id}">Modificar</button>
            `;
            tarjeta.appendChild(dibujoMesa);


        // Generar divs para los asientos
        // for (let i = 1; i <= mesa.asientos; i++) {
        //     const asiento = document.createElement("div");
        //     asiento.className = "asiento";
        //     tarjeta.appendChild(asiento);
        // }

        // Botones de Borrar y Modificar

        contenedorMesas.appendChild(tarjeta);

        const botonBorrar = tarjeta.querySelector(".botonBorrar");
        const botonModificar = tarjeta.querySelector(".botonModificar");

        botonBorrar.addEventListener("click", () => borrarMesa(mesa._id));
        botonModificar.addEventListener("click", () => modificarMesa(mesa._id));
    });
}


function errorMesa() {
    const infoMesaElement = document.getElementById("mostrarMesaCreada");
    infoMesaElement.innerHTML = `
        Error Al Añadir Mesa Nueva :(
        `;
}


mostrarTodasLasMesas();


async function borrarMesa(id) {
    try {
        const response = await fetch(`http://localhost:8080/mesas/eliminarMesa/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Error al borrar la mesa');
        }

        const data = await response.json();
        console.log('Mesa eliminada con éxito:', data);

        // Actualiza la interfaz
        await mostrarTodasLasMesas();

    } catch (error) {
        console.error('Error al borrar la mesa:', error.message);
        
    }
}



async function modificarMesa(id){


}




// ------------------ agregar mesa --------------------
document.addEventListener(`DOMContentLoaded`, function () {
    const ventanaCrearMesa = document.getElementById(`ventanaCrearMesa`)
    const botonAbrirVentana = document.getElementById(`abrirVentanita`)
    const cerrarVentana = document.getElementById(`cerrarVentanita`)
    const numeroDeMesaElement = document.getElementById("numeroDeMesa")
    // const cerrarVentanaCuenta = document.getElementById("cerrarVtnCuenta")
    // const ventanaCrearCuenta = document.getElementById("ventanaCuenta")
    
    
    botonAbrirVentana.addEventListener(`click`, async function () {
        try {
            const response = await fetch("http://localhost:8080/mesas/obtenerProximoNumeroMesa");
            const data = await response.json();
    
            if (data && data.proximoNumeroDeMesa !== undefined) {
                numeroDeMesaElement.textContent = `Mesa Numero: ${data.proximoNumeroDeMesa}`;
            }
            ventanaCrearMesa.style.display = `flex`;
        } catch (error) {
            console.error("Error al obtener el próximo número de mesa:", error);
        }
    

    })
    cerrarVentana.addEventListener(`click` ,function () {
        ventanaCrearMesa.style.display = `none`

    })

    window.addEventListener(`click`,function(event){
        if(event.target === ventanaCrearMesa) {
            ventanaCrearMesa.style.display = `none`;
        }
    } )

    // cerrarVentanaCuenta.addEventListener(`click` ,function () {
    //     ventanaCrearCuenta.style.display = `none`
        
    // })

    // window.addEventListener(`click`,function(event){
    //     if(event.target === ventanaCrearCuenta) {
    //         ventanaCrearCuenta.style.display = `none`;
    //     }
    // } )


    })