function suma_de_dos_arreglos() {
    let numero1=0, numero2=0, suma, c;
    numero1=[2,4,6];
    numero2=[1,3,5];
    suma=[];
    for (let i=0; i<numero1.length; i++){
        num1=numero1[i];
        num2=numero2[i];
        suma.push(num1+num2);
    }
    console.log(`${suma}`);
    alert(`[${suma}]`);
}
debugger
suma_de_dos_arreglos()