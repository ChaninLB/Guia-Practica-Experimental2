function longitud_cadena() {
    let nombre, i, mayor, cantidad;
    cantidad = parseInt(prompt("¿Cuántos nombres quieres ingresar?"));
    mayor="";
    for (i=0; i<cantidad; i++) {
        nombre = prompt(`Ingresa el nombre ${i + 1}`);
        if (nombre.length>mayor.length) {
            mayor=nombre;
        }
    }
    console.log(`El nombre con más letras es '${mayor}' con ${mayor.length} letras.`);
    alert(`El nombre con más letras es '${mayor}' con ${mayor.length} letras.`);
}
debugger
longitud_cadena();