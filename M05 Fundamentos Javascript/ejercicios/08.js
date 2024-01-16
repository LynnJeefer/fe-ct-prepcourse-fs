function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  /*if(numero-Math.floor(numero)===0){
    return true;
  }else{
    return false;
  }*/

  if (typeof numero === 'number'&& numero-Math.floor(numero)===0){
    return true
  }else {
    return false
  }
}

const numero= 7.8


console.log(esNumeroEntero(numero))

module.exports = esNumeroEntero;