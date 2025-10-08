function copiar_pares () {
    let array1=0, pares, i;
    array1=[3,8,11,14,25];
    pares=[];
    for (i=0; i<array1.length; i++){
        if (array1[i]%2===0) {
            pares.push(array1[i]);
        }
    }
    console.log(`los numeros pares en el arreglo son: [${pares}]`);
    alert(`los numeros pares en el arreglo son: [${pares}]`);
}
debugger
copiar_pares()