function invertir_texto () {
    let texto, invertir, i;
    texto=prompt("Introduce tu nombre");
    invertir=""
    for (i=texto.length-1; i>=0;i--){
        invertir+=texto[i];
    }
    console.log(`el texto que ingresaste es ${texto} y al inverso es ${invertir}`);
    alert(`el texto que ingresaste es ${texto} y al inverso es ${invertir}`);
}
debugger
invertir_texto();