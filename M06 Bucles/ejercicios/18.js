function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  var resultado = 1
  
  for (let i = a; i <= b; i++) {
    resultado = i*resultado
  }
  var resultadoN = Math.abs(resultado)
  return(resultadoN)

}

module.exports = productoEntreNúmeros;