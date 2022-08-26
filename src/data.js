// *******Esta función filtra la data por director*******
export function filtrarDirector (directorName,data) {
  const filtrarData = data.filter(function(datoAFiltrar){
    return datoAFiltrar.director === directorName;
  })
return filtrarData;
// console.log(filtrarData)
}
export function filtrarProductor (productorName,data) {
  const filtrarData2 = data.filter (function(datoAFiltrar2){
    return datoAFiltrar2.producer === productorName ;
  })
return filtrarData2

}
