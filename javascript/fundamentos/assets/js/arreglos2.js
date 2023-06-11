let juegos = ['Zelda', 'Mobile leyends', 'WOW', 'Age of empires II' ];

console.log( 'Largo:', juegos.length);

//Saber cual es el primer elemento
let primerElemento = juegos[0];
console.log( primerElemento );

//Cual es el ultimo elemento con el -1 empezamos a contar desde el final del arr
let ultimoElemento = juegos[ juegos.length - 1];
console.log( ultimoElemento );
console.log( juegos );

//Recorrer array mas especificamente con este ForEach
juegos.forEach( ( elemento, indice, arr ) => {
  console.log( {elemento, indice , arr} );
});

//Agregar elemento de ultimas en el array push Guarda un numero la nueva longitud
let nuevaLongitud = juegos.push( 'Left 4 Dead II' );
console.log( juegos );

//Agregar elemento de primeras en el arr unshift devuelve numero de la nueva longitud
nuevaLongitud = juegos.unshift( 'Megaman X' );
console.log( juegos );

//Elimina ultimo elemento del arr y devuelve el elemento eliminado
let juegoBorrado = juegos.pop();
console.log( 'Juego borrado fue: ', juegoBorrado );
console.log( juegos );

//Borrar varios elementos del array por indices dados
let posicionInicial = 1;
let juegosBorrados = juegos.splice( posicionInicial, 2 );
console.log( 'Juegos borrados fueron: ', juegosBorrados );
console.log( 'Juegos restantes: ', juegos );

//Saber indice de cualquier juego dentro del array 
let posicionJuego = juegos.indexOf( 'WOW' );
let posicionJuego2 = juegos.indexOf( 'wow' ); // TENER CUIDADO CON MAYUSCULAS
console.log( posicionJuego );
console.log( posicionJuego2 ); // retorna -1 cuando no se encuentra


