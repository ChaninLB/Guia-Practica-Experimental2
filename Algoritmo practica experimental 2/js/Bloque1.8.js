function Mayor_Cantidad_caracteres() {
    let texto, frase, mayor, contador=0, i;
    frase=prompt("Introduce la cantidad de frases que desea ingresar");
    contador=[i];
    for (i=0;i<frase;i++) {
        texto=prompt(`Introduce la frase ${i+1}`);
        if (texto.length !== " ") {
        contador++;
        }
    }
    alert(`La frase con mayor cantidad de caracteres es: ${texto}`);
    console.log(`La frase con mayor cantidad de caracteres es: ${mayor}`);
}
debugger
Mayor_Cantidad_caracteres();