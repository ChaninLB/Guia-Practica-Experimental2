function Promedio_de_un_Arreglo () {
    let numero=0, suma=0, promedio, c;
    numero=[5,7,9,3];
    for (let i=0; i<numero.length; i++){
        num=numero[i];
        suma+=num; 
        promedio=suma/numero.length;
    }
    console.log(`el promedio del arreglo es ${promedio}`);
    alert(`el promedio del arreglo es ${promedio}`);
}
debugger
Promedio_de_un_Arreglo()