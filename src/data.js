// *******Esta función filtra la data por director*******

export function filterDirector(directorName, data){ //string Nombre del director y un arreglo toda la data
  const filterData = data.filter(function(filterDirector){
    return filterDirector.director === directorName;
  });
  return filterData;
}

// *******Esta función filtra la data por productor*******
export function filterProducer(producerName, data){
  const filterData2 = data.filter(function(filterProducer){
    return filterProducer.producer === producerName;
  });
   return filterData2;   
}

/* *******Esta función ordena la data por título******* */
export function orderMovies(option, data){
  const copiaData = [...data]
  const ordenAZ = copiaData.sort(function(a,b){
    if(a.title > b.title){
      return 1;
    }
    if(a.title < b.title){
      return -1;
    }
    return 0;
  })
  if(option == 'AZ'){
    return ordenAZ;
  }else{
    return ordenAZ.reverse();
  }
}
/* *******Esta función calcula el porcentaje de películas dirigidas por un director******* */
 export function percentDirector(data, director){
  const filmsDirector = filterDirector(director, data)
  const percent = Math.round((filmsDirector.length / data.length) * 100)
  return percent + '%';
 }
