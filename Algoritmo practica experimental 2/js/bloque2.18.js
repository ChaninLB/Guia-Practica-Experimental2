function contar_imapares_en_un_arreglo() {
let numero=0, c=0;
numero=[2,5,7,8,10]
for (let i=0; i<numero.length; i++){
    if (numero[i]%2!==0) {
    c++;
    }
}
console.log(`cantidad de numeros impares en el arreglo es de ${c}`);
alert(`cantidad de numeros impares en el arreglo es de ${c}`);
}
debugger
contar_imapares_en_un_arreglo();