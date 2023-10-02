console.log('************** DELIVERABLE 03 *********************');
console.log('CLONE -----------------');
// Implementa una función clone que, a partir de un objeto de entrada source devuelva
// un nuevo objeto con las propiedades de source :

interface Person {
    name: string;
    surname?: string;
    country?: string;
    age?: number;
    married?: boolean;
}

const a: Person = { name: 'Maria', surname: 'Ibañez', country: 'SPA' };
const b: Person = { name: 'Luisa', age: 31, married: true };

function clone<T>(source: T): T {
    const cloneSource = { ...source };
    return cloneSource;
}
console.log(clone(a));

console.log('MERGE -----------------');
// Implementa una función merge que, dados dos objetos de entrada source y target ,
// devuelva un nuevo objeto con todas las propiedades de target y de source , y en caso
// de propiedades con el mismo nombre, source sobreescribe a target.
// TIP: Puedes usar la función “clone” del apartado A.

function merge<T>(source: T, target: T): T {
    const mergeObj = {
        ...target,
        ...clone(source),
    };
    return mergeObj;
}
const mergeAB = merge(a, b);
console.log(mergeAB); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
