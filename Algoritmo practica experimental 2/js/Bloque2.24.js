function factorial_de_cada_numero() {
    let numero=0, factorial, num, factoriales, i, c;
    numero=[4,6];
    factoriales=[];
    for ( i=0; i<numero.length; i++){
        num=numero[i];
        factorial=1;
        for ( c=1; c<=num; c++){ 
            factorial*=c;
        }  
    factoriales.push(factorial);
    }
        console.log(`${factoriales}`);
        alert(`[${factoriales}]`);
}
debugger
factorial_de_cada_numero();