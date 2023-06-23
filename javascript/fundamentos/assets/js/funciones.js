//Funcion normal
function saludar(){
    console.log("Hola que tal desde una funcion normal");
}
saludar();


//Funcion anonima
const saludandoAnonimo = function ( nombre ) {
    console.log( arguments ); //Si mandamos argumentos de mas con esto podemos ver todo lo que recibio
    console.log( "Saludos " + nombre );
}
saludandoAnonimo( "Anonimo", 41, 'Costa rica' );//Se envian mas argumentos de los que se asignaron

//Funcion flecha Si la funcion tiene mas de dos lineas de codigo hacerla dentro de { }
const saludarFlecha = ( saludar ) => {
    console.log( 'Hola funcion ' + saludar );
}
saludarFlecha( 'Flecha' );


//Las funciones SIEMPRE devuelven algo y si no lo especificamos el valor por defecto sera UNDEFINED
function ejemploReturn (){
    console.log( 'En esta funcion retornare algo ' );
    return 1;//Hasta donde esta el return se ejecutara el codigo lo que haya despues NO
    console.log( 'Esta parte del codigo nunca se vera visible' );
}
ejemploReturn()
const retornoDeFuncion = ejemploReturn( 'un ejemplo' );
console.log( retornoDeFuncion );//Aca la funcion me devuelve el valor que yo le haya puesto en el return\



//Ejemplos
function getAleatorio (){
    return Math.random();
}
getAleatorio();//Aca no me muestra nada ya que el return se hace por debajo
console.log( getAleatorio() );//Aca si me muestra lo que me retorne la funcion

const getAleatorio2 = () =>Math.random();
console.log( getAleatorio2() );

//Sumar dos numeros
const sumar = ( a, b ) => a + b;
console.log( sumar( 5, 5 ) );