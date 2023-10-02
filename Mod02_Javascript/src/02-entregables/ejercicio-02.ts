console.log('************** DELIVERABLE 02 *********************');
console.log('CONCAT -----------------');
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
// devuelva la concatenación de ambos. Utiliza rest / spread operators.
const week: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const daysOfAWeek: number[] = [1, 2, 3, 4, 5, 6, 7];

const concat = <T>(a: T[], b: T[]): T[] => {
    const mergeArray = [...a, ...b];
    return mergeArray;
};
console.log(concat<string | number>(week, months));

// Opcional
// Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de
// entrada (más de 2).

function concatAll<T>(...arr: T[]): T[] {
    const newArray = [];
    const mergeArray = newArray.concat(...arr);
    return mergeArray;
}
console.log(concatAll<string[] | number[]>(week, months, daysOfAWeek));
