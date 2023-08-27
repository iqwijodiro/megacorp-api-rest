# Ciclo ID 1

Etiquetas: Entregables, Evidencias, Repositorio

TypeScript es un superconjunto de JavaScript que agrega funciones y características adicionales para mejorar la productividad y la calidad del código. A continuación, se presentan algunos de los conceptos más importantes de TypeScript, junto con una explicación de cómo se relacionan con JavaScript y cómo representan una mejora:

## **Tipado**

JavaScript es un lenguaje dinámico, lo que significa que los tipos de datos de las variables no se declaran explícitamente. Esto puede provocar errores en tiempo de ejecución, ya que el código puede intentar asignar un tipo de datos incorrecto a una variable. TypeScript, por otro lado, es un lenguaje fuertemente tipado, lo que significa que los tipos de datos de las variables se declaran explícitamente. Esto ayuda a prevenir errores en tiempo de ejecución y hace que el código sea más legible y mantenible.

```tsx
let number: number = 10;
number = 'string'; // Esto dará un error en TypeScript
```

## **Módulos**

JavaScript no tiene una forma nativa de organizar el código en módulos. Esto puede dificultar la gestión de grandes proyectos y aumentar el riesgo de conflictos de nombres. TypeScript agrega soporte para módulos, lo que facilita la organización del código y la reutilización de código entre diferentes archivos.

```tsx
// module.ts
export class MyClass { /* ... */ }

// main.ts
import { MyClass } from './module';
let instance = new MyClass();
```

## **Interfaces**

Las interfaces en TypeScript proporcionan una forma de definir las propiedades y métodos que deben tener una clase o tipo. Esto puede ayudar a garantizar que el código sea consistente y más fácil de mantener. JavaScript no tiene interfaces, por lo que los desarrolladores deben implementar manualmente las propiedades y métodos comunes. 

```tsx
interface Person {
  name: string;
  age: number;
}

function sayHello(person: Person) {
  console.log("Hello, " + person.name);
}

sayHello({ name: "John Doe", age: 30 }); // Output: Hello, John Doe
```

## **Decorators**

Los decoradores son una característica experimental de TypeScript que permite agregar anotaciones y una sintaxis declarativa metaprogramática a clases y miembros de clases. Esto puede ayudar a mejorar la documentación y la funcionalidad del código. JavaScript no tiene decoradores, por lo que los desarrolladores deben agregar información adicional al código manualmente.

```tsx
function readonly(target, key, descriptor){
descriptor.writable = false;
return descriptor;
}

class Test {
@readonly
method() { }
}
```

## **Clases**

TypeScript mejora la programación orientada a objetos en JavaScript proporcionando una sintaxis más clara y familiar para los desarrolladores provenientes de lenguajes como Java o C#. TypeScript introduce conceptos como clases, interfaces, herencia, y encapsulamiento, que son fundamentales en la programación orientada a objetos.

```tsx
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log("Hello, I'm " + this.name);
  }
}

const person = new Person("John Doe", 30);
person.sayHello(); // Output: Hello, I'm John Doe
```

## **Funciones**

En JavaScript, las funciones son objetos que se pueden asignar a variables, pasar como argumentos y devolver como valores. Las funciones se definen utilizando la palabra clave `function` seguida de la lista de parámetros, el cuerpo de la función y el tipo de retorno (opcional).

```jsx
function sumar(a, b) {
  return a + b;
}

const resultado = sumar(1, 2);
console.log(resultado); // 3
```

En TypeScript, las funciones también son objetos, pero se pueden especificar sus tipos de parámetros y retorno. Esto se hace utilizando los tipos `number`, `string`, `boolean` y otros tipos definidos por el usuario.

```tsx
function sumar(a: number, b: number): number {
  return a + b;
}

const resultado = sumar(1, 2); // OK
const resultado2 = sumar("1", "2"); // Error: los parámetros no coinciden
```

La diferencia clave entre las funciones de JavaScript y TypeScript es que TypeScript admite el **tipado de funciones**. Esto significa que TypeScript puede verificar si los parámetros y el valor de retorno de una función coinciden con los tipos especificados. Esto ayuda a prevenir errores en tiempo de ejecución y a mejorar la legibilidad y la mantenibilidad del código. 

Cuando los tipos de parámetros y retorno se especifican explícitamente, es más fácil entender lo que hace una función. Además, el tipado de funciones puede ayudar a detectar errores en el código antes de que se ejecute.

## **Tuplas**

Las tuplas son un tipo de dato que permite almacenar múltiples campos con diferentes tipos de datos. En JavaScript, esto se puede lograr con un array, pero no hay verificación de tipos para asegurarse de que cada elemento es del tipo correcto. 

```tsx
let x: [string, number];
x = ['hello', 10]; // OK
```

## **Enumeraciones**

Las enumeraciones o "enums" permiten definir un tipo que puede tener un conjunto limitado de valores predefinidos. En JavaScript, esto se puede simular con objetos o conjuntos de constantes, pero TypeScript proporciona la sintaxis `enum` para este propósito. Esto puede ayudar a hacer el código más legible y menos propenso a errores.

```tsx
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

En general, TypeScript es un lenguaje de programación más potente y versátil que JavaScript. Los conceptos adicionales que ofrece TypeScript pueden ayudar a los desarrolladores a escribir código más seguro, legible y mantenible.

Aquí hay algunos ejemplos específicos de cómo los conceptos de TypeScript pueden mejorar el código de JavaScript:

- **El tipado puede ayudar a prevenir errores en tiempo de ejecución al detectar problemas de compatibilidad de tipos.** Por ejemplo, si un desarrollador intenta asignar una cadena a una variable de tipo número, TypeScript generará un error en tiempo de compilación. Esto evitará que el código se ejecute y cause un error en tiempo de ejecución.
- **Los módulos pueden ayudar a organizar el código en unidades más pequeñas, lo que facilita la gestión de grandes proyectos y reduce el riesgo de conflictos de nombres.** Por ejemplo, un desarrollador puede crear un módulo para cada componente de una aplicación web. Esto ayudará a mantener el código organizado y fácil de encontrar.
- **Las interfaces pueden ayudar a garantizar que el código sea consistente y más fácil de mantener.** Por ejemplo, un desarrollador puede crear una interfaz para una clase de usuario. Esta interfaz puede especificar que la clase debe tener propiedades como nombre, apellido y correo electrónico. Esto ayudará a garantizar que todas las clases de usuario tengan estas propiedades.
- **Los decoradores pueden ayudar a mejorar la documentación y la funcionalidad del código.** Por ejemplo, un desarrollador puede usar un decorador para agregar información de documentación a una clase. Esto puede ayudar a otros desarrolladores a comprender cómo funciona la clase.

En conclusión, TypeScript es una herramienta poderosa que puede ayudar a los desarrolladores a escribir código de JavaScript más seguro, legible y mantenible.