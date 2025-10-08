function Suma_de_Divisores() {
let numero=0, suma, c, r=0;
numero=[6,10]
for (let i=0; i<numero.length; i++){
    num=numero[i];
    suma=0;
    for (c=1;c<=num;c++){
    if (num%c===0) {
        suma+=c;    
    }
    }
    console.log(`suma de divisores de ${numero[i]}=${suma}`);
    alert(`suma de divisores de ${numero[i]}=${suma}`); 
} 
}
debugger
Suma_de_Divisores()
