//Muestra el array completamente vacio
// let arr = new Array(10);
// console.log( arr );

let arr = [ 'Audi', 'Mercedes benz', 'Porsche' ];
console.log({ arr });
//Los arreglos se cuenta iniciando desde el 0
console.log( arr[0] );
console.log( arr[1] );
console.log( arr[2] );

let cancionesFavoritas = [
  'Cry',
  'Touch',
  'Lost',
  'Fade into you',
  'Idea 10',
  142,
  //Podemos poner arrays dentro de arrays
  [ 'Benzim', 'Rhinestone eyes', 'Fiesta pagana', 
  [ 'Dos', 'Tres', 'Cuatro',
  [ 'Arroz', 'Lenjetas' ] ] ],
  //Podemos poner funciones normales y flecha dentro de arrays
  function(){},
  () =>{},
  //Podemos poner Objetos dentro de arrays
  {a : 1},
]

console.log( cancionesFavoritas[2] )
console.log( cancionesFavoritas[0] )
console.log( cancionesFavoritas[4] )
console.log( cancionesFavoritas[7] )
console.log( cancionesFavoritas[9] )

//Extraigan Rhinestone eyes del mismo array cancionesFavoritas
console.log( cancionesFavoritas[6][1] )

//Extraer lentejas de los arreglos multidimensionales
console.log( cancionesFavoritas[6][3][3][1] )

