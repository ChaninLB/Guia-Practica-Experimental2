function Diviones_en_un_arreglo() {
let numero=0, c, r=0;
numero=[6,10]
for (let i=0; i<numero.length; i++){
    num=numero[i];
    for (c=1;c<=num;c++){
    r=num%c;
    if (r===0) {
        console.log(c);
        alert(c);
    }
    }
}
}
debugger
Diviones_en_un_arreglo();
