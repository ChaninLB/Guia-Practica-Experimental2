function Invertir_Numeros () {
    let numero=0, invertido=0, r;
    numero=[123,456,789]
    for (let i=0; i<numero.length; i++){
        num=numero[i];
        invertido=0;   
        while (num>0){
            r=num%10;
            invertido=(invertido*10)+r;

        }
        invertido.push(invertido);
    }
            console.log(`el numero invertido es ${invertido}`);
        alert(`el numero invertido es ${invertido}`);
}
debugger
Invertir_Numeros();