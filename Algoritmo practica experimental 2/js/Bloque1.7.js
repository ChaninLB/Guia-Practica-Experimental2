function palabra_palidroma() {
    let palabra, invertir, i ;
    palabra = prompt("Ingrese una palabra:");
    invertir="";
    for (i=palabra.length-1;i>=0;i--){
        invertir+=palabra[i];
    }
        if (palabra === invertir){
            alert(`La palabra ${palabra} Es palidroma`);
        } else {
            alert(`La palabra ${palabra} No es palidroma`);
        }
}
debugger
palabra_palidroma();