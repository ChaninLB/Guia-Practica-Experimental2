function Invertir_Numeros () {
    let numeros=[], invertido=0, digito=0, número=0, num=0, i=0;
    numeros=[123,456,789];
    número=0
    digito=0
    for (i=0;i<numeros.length;i++){
        numero=numero[i];
        num=número
        invertido=0
        while(numero>0){
            digito=numero%10;
            invertido=(invertido*10)+digito;
            numero=(numero-digito)/10
        }
        console.log(`el numero ${num} invertido es ${invertido}`);
        alert(`el numero ${num} invertido es ${invertido}`);
     }
}
debugger
Invertir_Numeros();