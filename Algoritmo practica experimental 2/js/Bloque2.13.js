function Numeros_Perfectos() {
    let numero=0, suma, c;
    numero=[6,10,28,496]
    for (let i=0; i<numero.length; i++){
        num=numero[i];
        suma=0;
        for (c=1;c<num;c++){
        if (num%c===0) {
            suma+=c; 
            if (suma===num){
                console.log(`${num} es un numero perfecto`);
                alert(`${num} es un numero perfecto`);
            } 
        }
        }
    }
}
debugger
Numeros_Perfectos()