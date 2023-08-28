// Tipos de datos
let isTrue: boolean = true;
let total: number = 0;
let fullName: string = "TypeScript";

// Enumeraciones
enum Colors {Red, Green, Blue};
let c: Colors = Colors.Green;

// Tipo any
let anyType: any = 4;
anyType = "cambió a cadena";
anyType = false; // cambió a boolean

// Tipo unknown
let unknownType: unknown = 4;
unknownType = "cambió a cadena";

// Tipos de unión
let numberOrString: number | string;
numberOrString = 123;
numberOrString = "123";

// Tipos de intersección
type StringAndNumber = string & number;
let intersectType: StringAndNumber = <StringAndNumber> <unknown> "123";

// Tipos de colección
let lista: number[] = [1, 2, 3];
let lista2: Array<number> = [1, 2, 3];
