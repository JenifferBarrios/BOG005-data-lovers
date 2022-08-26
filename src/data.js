// *******Esta función filtra la data por director*******
export function filtrarDirector(directorName, data){ //string Nombre del director y un arreglo toda la data
  const filtrarData = data.filter(function(datoAFiltrar){
    return datoAFiltrar.director === directorName;
  });
  return filtrarData;
}

// *******Esta función filtra la data por productor*******
export function filtrarProductor(productorName, data){
  const filtrarData2 = data.filter(function(datoProductor){
    return datoProductor.producer === productorName;
  });
   return filtrarData2;   
}

/* sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. El primer parámetro,
 data, nos entrega los datos.
El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. 
El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente. */
export function sortData(){
  //const ordenarData = data.films.sort();
  return ordenarData;
}
/* computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para
 ser mostrados de acuerdo a la data proporcionada.*/
