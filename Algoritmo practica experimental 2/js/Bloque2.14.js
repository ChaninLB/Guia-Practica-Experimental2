function Numeros_primos() {
    let numero=0, c, r=0;
    numero=[7,8,13]
    primos="";
    for (let i=0; i<numero.length; i++){
        num=numero[i];
        divisores=0;
        for (c=1;c<=num;c++){
        r=num%c;
        if (r===0){
            divisores++;
        }
    }
    if (divisores===2){
        if (primos===""){
            primos+=num;
        } else {
            primos+=", "+ num;
        }
    }
        console.log(`numeros primos ${primos}`);
        alert(`nimeros primos ${primos}`);
    }

}
debugger
Numeros_primos()