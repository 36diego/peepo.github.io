        
//Funcionamiento del formulario
document.getElementById("saludoForm").addEventListener("submit", function(e) {
e.preventDefault();
const nombre = document.getElementById("tagInput").value.trim();

    if (nombre !== "") {
            // Guardamos el nombre en localStorage
            localStorage.setItem("nombreUsuario", nombre);
            // Redireccionamos a la página principal
            window.location.href = "index.html";
    }
});

function mostrarSaludo(){
    //Recupero el nombre de usuario en el formulario desde localStorage
    const nombre = localStorage.getItem("nombreUsuario");
    const saludo = document.getElementById("saludo");

    if (nombre) {
        saludo.textContent = `Bienvenido a la pagina SCP: ${nombre}. `;
    } else {
        saludo.textContent = "Identifiquese en El formulario de la pepona.";
    }
}
