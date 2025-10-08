function mayores_de_edad(){
    let edad=0, c=0;
    edad=[15,22,18,30,12];
    for (let i=0; i<edad.length; i++){
        if (edad[i]>=18){
            c++;
        }
    }
    console.log(`hay ${c} personas mayores de edad`);
    alert(`hay ${c} personas mayores de edad`);
}   
debugger
mayores_de_edad()