function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  var resultado = 1
  
  for (let i = a; i <= b; i++) {
    resultado = i*resultado
  }
  var resultadoF = Math.abs(resultado)
  return(resultadoF)

}

module.exports = productoEntreNúmeros;