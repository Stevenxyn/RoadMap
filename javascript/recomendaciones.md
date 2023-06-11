# Introduccion a Javascript y la consola

* Ocupar **let** en lugar de **var** ya que **var** seria una mala practica

* Siempre crear los **scripts** antes de finalizar el body, para que cargue todo el HTML y CSS mientras el JS carga en segundo plano

* Recomendado hacer debugger con la consola del navegador o directamente en VS para ver errores y como reciben valores las variables depuracion y breackpoints

* Existen varias alertas para hacer aparecer una ventana en el navegador entre estas alert, promtp, confirm

* Tener presente que para ejecutar Js en el navegador funcionara siempre y cuando aparesca en el objeto **windows** al ponerlo en la consola del navegador

# Fundamentos de JavaScript, primitivos, arreglos, objetos y funciones básicas
## Primitivos
- Boolean: true/false 
- NUll: Sin valor en lo absoluto
- Undefined: Una variable declarada pero que aun no contiene un valor
- Number: integers, floats, etc.
- Strings: Una cadena de caracteres nombres, palabras, etc.
- Symbol: Es un valor unico que no puede ser igual a ningun otro valor

## Arreglos
* nombreArray.forEach( ( elemento, indice, arr ) => {
  console.log( {elemento, indice , arr} );
}); De esta forma recorremos el array y nos muestra tambien el indice del mismo
* todos los metodos que se usen ejemplo pop(), push(), unshift(), etc. devuelven algo ya sea longitud lo que se haya eliminado o agregado.



