function iniciales() {
  let nombreCompleto, iniciales, i;
    nombreCompleto=prompt("Introduce tu nombre completo");
    iniciales="";
    iniciales += nombreCompleto[0] + ".";
      for ( i=0; i<nombreCompleto.length; i++) {
        if (nombreCompleto[i] === " ") {
        iniciales += nombreCompleto[i + 1] + ".";
        }
      }
      console.log(iniciales);
      alert(iniciales);
}
debugger
iniciales();