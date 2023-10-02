console.log('************** DELIVERABLE 01 *********************');
console.log('HEAD -----------------');
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga
// y devuelva su primer elemento. Utiliza destructuring.

const seasons: string[] = ['spring', 'summer', 'autumn', 'winter'];
const diceFaces: number[] = [1, 2, 3, 4, 5, 6];

const head = <T>(arr: T[]): T => {
    const [first] = arr;
    return first;
};
console.log(head(seasons));
console.log(head(diceFaces));

console.log('TAIL -----------------');
// Implementa una función tail (inmutable), tal que, dado un array como entrada
// devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = <T>([a, ...arr]: T[]): T[] => arr;
console.log(tail(seasons));
console.log(tail(diceFaces));

console.log('INIT -----------------');
// Implementa una función init (inmutable), tal que, dado un array como entrada
// devuelva todos los elementos menos el último. Utiliza los métodos que ofrece
// Array.prototype.

const init = <T>(arr: T[]): T[] => {
    const newArray = arr.slice();
    newArray.pop();
    return newArray;
};
console.log(init(seasons));
console.log(init(diceFaces));

console.log('LAST -----------------');
// Implementa una función last (inmutable), tal que, dado un array como entrada
// devuelva el último elemento.

const last = <T>(arr: T[]): T[] => {
    const lastElement = arr.slice(-1);
    return lastElement;
};
console.log(last(seasons));
console.log(last(diceFaces));
