function Remplazar_caracter() {
    let texto, remplazar, i;
    texto=prompt("Introduce un texto");
    remplazar="";
    for ( i=0; i<texto.length; i++) {
        if (texto[i] === "o" || texto[i] === "O") {
            remplazar += "#";
        } else {
            remplazar += texto[i];
        }
    }
        alert(remplazar);
        console.log(remplazar);
}
debugger
Remplazar_caracter();