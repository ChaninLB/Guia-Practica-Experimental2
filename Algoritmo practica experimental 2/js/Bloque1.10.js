function Dividir_oracion () {
  let oracion = "", palabra = "", i = 0;
    oracion = "Me gusta aprender programación";
    palabra = oracion.split(" ");
    for (i = 0; i < palabra.length; i++) {
      console.log(palabra[i]);
      alert(palabra[i]);
    }
}
debugger
Dividir_oracion();