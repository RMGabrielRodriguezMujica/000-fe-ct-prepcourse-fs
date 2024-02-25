function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  //


  //do {
  switch (mes) {
    case 1: // Enero
    case 3: // Marzo
    case 5: // Mayo
    case 7: // Julio
    case 8: // Agosto
    case 10: // Octubre
    case 12: // Diciembre
      return(31);
    case 4: // Abril
    case 6: // Junio
    case 9: // Septiembre
    case 11: // Noviembre
      return(30);
    case 2: // Febrero
      return (28);
    default:
      return(0)
  }
// } while (mes < 1 || mes > 13);

}
module.exports = diasEnMes;









// Esto no funciona 
// PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
// // Tu código:
