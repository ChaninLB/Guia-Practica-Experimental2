function tabla_de_multiplicar () {
    let numero=0, num, tabla=0, i, c;
    numero=[3,5,7];
    for (i=0; i<numero.length; i++){
        num=numero[i];
        tabla="";
        for (c=1; c<=10; c++){
            tabla+=num*c;
            if (c<10) tabla+=", ";
        }
            console.log(`la tabla de multiplicar del ${num} es: ${tabla}`);
    alert(`la tabla de multiplicar del ${num} es: ${tabla}`);
    }
}
debugger
tabla_de_multiplicar();