function contar_palabras () {
    let palabra=prompt("Introduce la palabra");
    let cantidad=palabra.length
    alert(`La palabra ${palabra} tiene ${cantidad} letras`);
    console.log(`La palabra ${palabra} tiene ${cantidad} letras`);
}
debugger
contar_palabras();