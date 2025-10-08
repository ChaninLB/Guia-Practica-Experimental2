function Cubo_de_elementos() {
    let numero=0, cubo, cubos, c;
    numero=[2,3,4];
    cubos=[];
    for (let i=0; i<numero.length; i++){
        num=numero[i];
        cubo=num*num*num;
        cubos.push(cubo);
    }
    console.log(`el cubo de los elementos del arreglo es ${cubos}`);
    alert(`el cubo de los elementos del arreglo es ${cubos}`);
}   
debugger
Cubo_de_elementos();
