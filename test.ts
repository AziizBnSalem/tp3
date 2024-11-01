function countOccurrences(array: any[], element: any): number {
    let count = 0;
    for (const item of array) {
        if (item === element) {
            count++;
        }
    }
    return count;
}

function calculateAverage(array: number[]): number {
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    return array.length > 0 ? sum / array.length : 0;
}

function findMinimum(array: number[]): number | undefined {
    return array.length > 0 ? Math.min(...array) : undefined;
}

function isSorted(array: number[]): boolean {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}

// Example usage
const array = [1, 2, 3, 4, 1, 2, 1, 1];
const element = 1;

const occurrences = countOccurrences(array, element);
const average = calculateAverage(array);
const minimum = findMinimum(array);
const sorted = isSorted(array);

console.log(`The element ${element} appears ${occurrences} times in the array.`);
console.log(`The average of the array is ${average}.`);
console.log(`The minimum element in the array is ${minimum}.`);
console.log(`Is the array sorted? ${sorted ? "Yes" : "No"}`);
