function concatenar_palabras(){
    let palabra="", i;
    palabra=["Me","gusta","programar"];
    frase="";
    for (i=0;i<palabra.length;i++){
        frase+=palabra[i]+" ";
    }
    console.log(frase);
    alert(frase);
}
debugger
concatenar_palabras();