function esTipoDato(valor) {
  // La función recibe un argumento "valor".
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  var tipo= typeof valor
  return tipo 
}
const valor= 8.67

console.log(esTipoDato(valor))
module.exports = esTipoDato;