function Invertir_Numeros () {
    let numeros=[], invertido=0, digito=0, número=0, i=0;
    numeros=[123,456,789];
    invertido=0
    número=0
    digito=0
    for (i=0;i<numeros.length;i++){
        numero=numero[i];
        while(numero>0){
            digito=numero%10;
            invertido=(invertido*10)+digito;
            numero=(numero-digito)/10
        }
        console.log(`el numero invertido es ${invertido}`);
        alert(`el numero invertido es ${invertido}`);
     }
}
debugger
Invertir_Numeros();