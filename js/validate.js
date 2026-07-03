document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("presupuesto-form");
    const boton = document.querySelector('button[type="submit"]');

    // El botón empieza deshabilitado
    boton.disabled = true;

    formulario.addEventListener("input", function () {

        const nombre = document.getElementById("nombre").value;
        const apellidos = document.getElementById("apellidos").value;
        const telefono = document.getElementById("telefono").value;
        const email = document.getElementById("email").value;

        let total = 0;

        // Precio del producto
        const producto = document.getElementById("producto");
        total += parseFloat(producto.options[producto.selectedIndex].dataset.precio);

        // Extras
        const extras = document.querySelectorAll('input[name="extras"]:checked');
        extras.forEach(extra => {
            total += parseFloat(extra.value);
        });

        // Descuento por plazo
        const plazo = parseInt(document.getElementById("plazo").value);

        if (plazo > 30) {
            total *= 0.90;
        } else if (plazo > 15) {
            total *= 0.95;
        }

        // Mostrar total
        document.getElementById("total").textContent = total.toFixed(2) + " €";

        // Validaciones
        const nombreValido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{1,15}$/.test(nombre);
        const apellidosValido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{1,40}$/.test(apellidos);
        const telefonoValido = /^\d{9}$/.test(telefono);
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        // Activar o desactivar botón
        boton.disabled = !(nombreValido && apellidosValido && telefonoValido && emailValido);

        //Comprobar casilla marcada
            boton.disabled = !(
            nombreValido &&
            apellidosValido &&
            telefonoValido &&
            emailValido &&
            condiciones
);

    });

});