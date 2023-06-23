const personaje = {
  nombre: 'Fanny',
  rol: 'Asesino',
  tipoDanio: 'Fisico',
  edad: 25,
  fechaLanzamiento: 2016,
  vivo: true,
  lightbornMembers: [
    'Tigreal',
    'Granger',
    'Alucard',
    'Harith'
  ],
  skinsPrecios: {
    campusYoung: 112,
    punkPrinces: 213,
    skylark: 993,
    royalCalavary: 312,
    lifeGuard: 612,
    lightbornRanger: 1194,
    christmasCarnival: 1194,
    imperialWarrior: 345,
    bladeOfKibou: 2516
}}


console.log( 'Tiene un total de ', personaje.cantidadSkins ,' skins.' );
console.log( 'Se llama ', personaje.nombre );
console.log( 'Es del rol ', personaje['rol']);
console.log( 'Sus compañeros son: ', personaje.lightbornMembers );
console.log( 'Su hermano es: ', personaje.lightbornMembers[0] );
console.log( 'Tiene un total de ', personaje.lightbornMembers.length, ' amigos.' );
console.log( 'Tiene un total de ', Object.keys(personaje.skinsPrecios).length, ' skins' );
console.log( 'Cuenta con estas skins ', personaje.skinsPrecios );
console.log('Ultimo amigo que conocio es ',
personaje.lightbornMembers[ personaje.lightbornMembers.length - 1 ]);

const x = 'vivo';
console.log( '¿El personaje esta vivo?', personaje[x]);//Reutilizo x como argumento en la busqueda



//Más detalles
 
console.log( personaje );
//Eliminar propiedad y valor de un objeto
delete personaje.edad;
console.log( personaje );

//Trabajar el objeto como si fuera un arr
let convertidoArrJuegos = Object.entries(personaje)
console.log( convertidoArrJuegos);

//Crear nuevas propiedades del objeto
personaje.dificultad = 'HARDCORE!';
console.log( personaje );

//Dejar un objeto inmutable osea que no se pueda modificar
//se le cambia a const al objeto personaje pero aun asi se puede modificar su contenido
//Pero cambiar todo en si no deja ya que es constante
// personaje = 5;
// console.log(personaje);

//Congelar un objeto para que no se pueda modificar las propiedades ni crear nuevas
Object.freeze( personaje );
personaje.nombre = 'Lucy'; // no lo modifica porque esta con freeze
console.log( personaje );

personaje.comidaFavorita = 'Mondongo'; // No la crea porque esta con freeze
console.log( personaje );

personaje.skinsPrecios.bladeOfKibou = 70000; //Modifica el valor de esa skin
console.log( personaje );


//Traer todas las propiedades del objeto y convierte en un arr
let propiedades = Object.getOwnPropertyNames( personaje );
console.log( propiedades );

//Traer todos los valores del objeto y convierte en arr
let valores  = Object.values( personaje );
console.log( valores );
console.log( {propiedades, valores} );
