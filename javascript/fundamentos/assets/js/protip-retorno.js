//Funcion Normal***********************************
/*
function crearAlbum ( banda, cancion ) {
    return {
        nombreBanda: banda,
        nombreCancion: cancion,
    }}
const album = crearAlbum( 'Cigarettes after sex', 'Touch' );
console.log( album );
*/

//Con FuncionFlecha normal****************************
/*
const crearAlbum = ( banda, cancion ) => {
    return {    
        nombreBanda: banda,
        nombreCancion:cancion
    }
}
const album = crearAlbum( 'Jaden', 'George Jeff' );//Guardo lo que me retorna la funcion 
console.log( album );
*/

//Con FuncionFlecha mas corto se pone lo que queremos retornar dentro de  { ( ) }****************
/*
const crearAlbum2 = ( banda, cancion ) => { ( nombreBanda, nombreCancion ) }
const album2 = crearAlbum( 'Smokepurpp', 'Fingers blue' );
console.log( album2 );
*/

//recibir varios argumentos sin  mencionarlos con spread operator
function variosArgumentos(numero, ...argumentos) { //Si pongo un argumento despues de ...argumentos dara error
    console.log({ numero, argumentos }); //El argumento que pasemos a numero se guardara separado de argumentos
}
variosArgumentos(10, 5, 'Hola', true, false);//..argumentos acoje a todos menos a el argumento numero


const auto = {
    color: 'azul',
    marca: 'Porsche',
    //placa: 'ABC-789', //sI NO EXISTIERA LE ASIGNAMOS VALOR N/A POR DEFECTO
    tieneDuenio: true,
}

//Si un elemento del objeto no tuviera dato lo podemos asignar desde aca por defecto
const imprimirPropiedadesAuto = ({ color, marca, placa = 'N/A', tieneDuenio }) => {
    console.log({ color });
    console.log({ marca });
    console.log({ placa });
    console.log({ tieneDuenio});
}
imprimirPropiedadesAuto(auto)

