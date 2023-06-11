//Strings
let nombre = 'Peter parker';
console.log( nombre );
console.log( typeof nombre);

//number con o sin flotantes siempre sera number
let edad = 23;
console.log( edad );
    edad = 23.05;
console.log( edad );
console.log( typeof edad );

//Booleanos
let esFamoso = true;
console.log( esFamoso );
console.log( typeof esFamoso );

//Null - Variable declarada pero se le asigna un valor nulo osea vacio
let esNull = null;
console.log( esNull );
//Dice que es un objeto pero entra dentro de los primitivos
console.log( typeof esNull );

//Undefined - Variable declarada pero sin valor
let poderes;
console.log( poderes );
console.log( typeof poderes);

//Symbol - Valor unico que no puede ser igual a ninguno otro
let symbol1 = Symbol('Dejame');
let symbol2 = Symbol('Dejame');

console.log(typeof symbol1);
console.log( symbol1 === symbol2 );

