# Análisis de Buenas prácticas

Las mejores prácticas para el uso de tipos en TypeScript se pueden resumir en los siguientes puntos:

**1. Uso de Linters**

Los linters son herramientas que pueden ayudarte a escribir mejor código aplicando un conjunto de reglas y directrices. Pueden ayudarte a detectar errores potenciales y mejorar la calidad general de tu código. Hay varios linters disponibles para TypeScript, como TSLint y ESLint, que pueden ayudarte a imponer un estilo de código consistente y a detectar errores potenciales.

**2. Uso de Alias de tipo**

TypeScript permite crear tipos personalizados utilizando una característica llamada alias de tipo. Por ejemplo, puedes utilizar un alias de tipo para crear un tipo personalizado para un punto en un espacio bidimensional:

```tsx
type Point = { x: number, y: number };
let point: Point = { x: 0, y: 0 };
```

**3. Uso de tipos de utilidad**

Los tipos de utilidad son una característica incorporada de TypeScript que proporciona un conjunto de tipos predefinidos para ayudarte a escribir código más seguro. Por ejemplo, puede utilizar el tipo de utilidad `Pick` para extraer un subconjunto de propiedades de un tipo de objeto:

```tsx
type User = { name: string, age: number, email: string };
type UserInfo = Pick<User, "name" | "email">;
```

También puede utilizar el tipo de utilidad `Exclude` para eliminar propiedades de un tipo de objeto:

```tsx
type User = { name: string, age: number, email: string };
type UserWithoutAge = Exclude<User, "age">;
```

Puede utilizar el tipo de utilidad `Partial` para hacer que todas las propiedades de un tipo sean opcionales:

```tsx
type User = { name: string, age: number, email: string };
type PartialUser = Partial<User>;
```

**4. Uso de Guardias de tipo (Type Guards)**

Los type guards son una potente herramienta que puede ayudarte a acotar el tipo de una variable basándose en ciertas condiciones. He aquí un ejemplo de cómo utilizar un type guard para comprobar si una variable es un número:

```tsx
function isNumber(x: any): x is number {
 return typeof x === "number";
}
let value = 3;
if (isNumber(value)) {
 value.toFixed(2); // TypeScript knows that "value" is a number because of the type guard
}
```

**5. Uso de interfaces en TypeScript**

Las interfaces en TypeScript permiten definir la estructura de un objeto, incluyendo los tipos de datos de sus propiedades y métodos. Esto ayuda a garantizar que los objetos tengan la estructura correcta y que se utilicen correctamente en el código.

```tsx
interface Persona {
  nombre: string;
  edad: number;
  esMayor: boolean;
}

let persona: Persona = {
  nombre: "Juan",
  edad: 30,
  esMayor: true
};
```

1. **Uso de genéricos**

Los genéricos en TypeScript permiten definir funciones, clases y tipos que pueden trabajar con diferentes tipos de datos. Esto ayuda a reutilizar el código y a hacerlo más flexible

```tsx
function imprimir<T>(valor: T): void {
  console.log(valor);
}

imprimir<string>("Hola"); // Imprime "Hola"
imprimir<number>(42); // Imprime 42
```

1. ****Uso de espacios de nombres****

Los espacios de nombres son una forma de organizar el código y evitar colisiones de nombres. Te permiten crear un contenedor para tu código, donde **puedes definir:**

**`variables`, `clases`, `funciones` e `interfaces`.**

```tsx
namespace OrderModule {
 export class Order { /* … */ }
 export function cancelOrder(order: Order) { /* … */ }
 export function processOrder(order: Order) { /* … */ }
}
let order = new OrderModule.Order();
OrderModule.cancelOrder(order);
```

1. **Uso de "Readonly" y "ReadonlyArray"**

La palabra clave `Readonly` se utiliza para hacer que **las propiedades de un objeto sean de sólo lectura**, lo que significa que no pueden ser modificadas después de ser creadas. Esto puede ser útil cuando se trabaja con valores de configuración o constantes, por ejemplo:

```tsx
interface Point {
 x: number;
 y: number;
}
let point: Readonly<Point> = {x: 0, y: 0};
point.x = 1; // TypeScript will raise an error because "point.x" is read-only
```

`ReadonlyArray` es similar a `Readonly` pero para arrays. **Hace que un array sea de sólo lectura, y no puede ser modificado después de ser creado.**

```tsx
let numbers: ReadonlyArray<number> = [1, 2, 3];
numbers.push(4); // TypeScript will raise an error because "numbers" is read-only
```

1. ****Uso de tipos condicionales****

Los tipos condicionales en TypeScript permiten crear nuevos tipos basados en las condiciones de otros tipos, lo que permite expresar relaciones de tipos más complejas. Por ejemplo, se pueden utilizar tipos condicionales para extraer el tipo de retorno de una función. Esta característica es muy útil para crear algoritmos a nivel de tipos y realizar tareas más complejas, como la coincidencia de patrones y la creación de tipos personalizados

```tsx
type ReturnType<T> = T extends (…args: any[]) => infer R ? R : any;
type R1 = ReturnType<() => string>; // string
type R2 = ReturnType<() => void>; // void

// También puedes utilizar tipos condicionales para extraer las propiedades
//  de un tipo de objeto que cumplan una determinada condición:
type PickProperties<T, U> = { [K in keyof T]: T[K] extends U ? K : never }[keyof T];
type P1 = PickProperties<{ a: number, b: string, c: boolean }, string | number>; // "a" | "b"
```

Es importante recordar que las mejores prácticas son solo pautas, no reglas absolutas. Los desarrolladores siempre deben usar su propio juicio y sentido común al escribir código. Además, a medida que TypeScript evoluciona, es posible que las mejores prácticas cambien, por lo que es importante mantenerse actualizado y abierto a aprender nuevas cosas.