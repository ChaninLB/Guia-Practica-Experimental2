function contar_letras () {
    let texto, letra, contador, i;
    texto=prompt("Introduce un texto");
    letra === "e" ||letra === "E";
    contador=0;
    for (i=0;i<texto.length;i++) {
        if (texto[i] === letra) {
        contador++;
        }
    }
    console.log(`La letra '${letra}' aparece ${contador} veces.`);
    alert(`La letra '${letra}' aparece ${contador} veces.`);
    }
debugger
contar_letras();