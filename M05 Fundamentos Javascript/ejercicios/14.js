function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:

  var uno = str1.lenght
  var dos = str2.lenght

  console.log(uno)

  // if (str1.lenght === str2.lenght){
  //   return(true)
  // }else if (str1.lenght != str2.lenght) {
  //   return(false)
  // }

//  if (uno === dos ){
//     return(true)
//     console.log(uno)
//   }else {
//     return(false)
//     console.log(uno)
//   }

  // return str1.leght === str2.leght
  // console.log( str1.leght === str2.leght)

  if(str1.length === str2.length){
    return(true);
    } else{
    return (false);
    }

  
}

module.exports = tienenMismaLongitud;