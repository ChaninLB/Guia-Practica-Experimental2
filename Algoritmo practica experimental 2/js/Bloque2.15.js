function factorial_de_un_Numero() {
    let numero=0, factorial=1;
    numero=[3,5,7];
    for (let i=0; i<numero.length; i++){
        num=numero[i];
        factorial=1;
        for (let c=num; c>1; c--){ 
            factorial=factorial*c;
        }   
        console.log(`el factorial de ${num}! = ${factorial}`);
        alert(`el factorial de ${num}! = ${factorial}`);
    }   
}
debugger
factorial_de_un_Numero();