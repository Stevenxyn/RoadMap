//array vacio que contendra todas las canciones
let arrCanciones = [];

//Variable que ira guardando cada cancion y enviandola al arr

let cancion = prompt('Escribe tu cancion favorita: ', 'Tu cancion aqui.')
arrCanciones.push(cancion);
alert( 'Tu cancion favorita es: '+ cancion );
console.log( 'Tus canciones se guardaron de esta forma: ', {arrCanciones} ); 
