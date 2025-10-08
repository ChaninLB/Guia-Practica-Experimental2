function Buscar_Valor(){
    let arreglo=0, valor=0, i=0, c=0;
    arreglo=[4,8,15,23];
    valor=15;
    for (i=0; i<arreglo.length; i++){
        if (arreglo[i]===valor) {
            c=1;
        }
    }
    if (c===1){
        console.log(`el valor ${valor} si se encuentra en el arreglo`);
        alert(`el valor ${valor} si se encuentra en el arreglo`);
    } else {
        console.log(`el valor ${valor} no se encuentra en el arreglo`);
        alert(`el valor ${valor} no se encuentra en el arreglo`);
    }
}
debugger
Buscar_Valor()